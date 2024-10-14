const { Post } = require('../models');

const queryPosts = async () => {
    const posts = await Post.find({});
    console.log(posts);  // Добавь вывод результата для проверки
    return posts;
  };

module.exports = { queryPosts }