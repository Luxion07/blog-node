const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

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
        postId: {
            type: Number,
        }
    },
    {
        timestamps: true,
    }
)
postSchema.plugin(AutoIncrement, { inc_field: 'postId' });

// postSchema.plugin(toJSON);
// postSchema.plugin(paginate);

/**
 * @typedef Post
 */
const Post = mongoose.model('Post',postSchema);

module.exports = Post;