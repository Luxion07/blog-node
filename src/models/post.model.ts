import mongoose, { Schema, Document, Model } from 'mongoose';
const AutoIncrement = require('mongoose-sequence')(mongoose);

interface IPost extends Document {
    title: string;
    content?: string;
    createdAt?: Date;
    postId: number;
}

const postSchema: Schema<IPost> = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            trim: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        postId: {
            type: Number,
        }
    },
    {
        timestamps: true,
    }
);

postSchema.plugin(AutoIncrement, { inc_field: 'postId' });

const Post: Model<IPost> = mongoose.model<IPost>('Post', postSchema);
export default Post;