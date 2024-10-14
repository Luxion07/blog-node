// const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { postService } = require('../services');

const getAllPosts = catchAsync(async (req, res) => {
  // const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await postService.queryPosts();
  res.send(result);
});
module.exports = {getAllPosts}