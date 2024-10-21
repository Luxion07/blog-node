import httpStatus from 'http-status';
import User, { IUser, QueryOptions, QueryResult } from '../models/user.model';
import ApiError from '../utils/ApiError';

const createUser = async (userBody: IUser): Promise<IUser> => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  const user = await User.create(userBody) as IUser;
  return user;
};

const queryUsers = async (filter: object, options: QueryOptions): Promise<QueryResult<IUser>> => {
  const users = await User.paginate(filter, options);
  return users;
};

const getUserById = async (id: string): Promise<IUser | null> => {
  return User.findById(id);
};

const getUserByEmail = async (email: string): Promise<IUser | null> => {
  return User.findOne({ email });
};

const updateUserById = async (userId: string, updateBody: Partial<IUser>): Promise<IUser| null> => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

const deleteUserById = async (userId: string): Promise<IUser | null> => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.remove();
  return user;
};

module.exports = {
  createUser,
  queryUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
};
