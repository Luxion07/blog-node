const mongoose = require('mongoose');
// const { toJSON, paginate } = require('./plugins');
// const paginate = require('./plugins/paginate.plugin');


const postSchema = mongoose.Schema(
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
    },
    {
        timestamps: true,
    }
)

// postSchema.plugin(toJSON);
// postSchema.plugin(paginate);

/**
 * @typedef Post
 */
const Post = mongoose.model('Post',postSchema);

module.exports = Post;