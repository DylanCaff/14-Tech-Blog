const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.hasMany(Comment, {
    foreignkey: '...'
});

Comment.belongsTo(Post, {
    foreignkey: '...'
});

module.exports = { User, Post, Comment };