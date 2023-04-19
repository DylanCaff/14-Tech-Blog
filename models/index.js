const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignkey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignkey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignkey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = { 
    User, 
    Post, 
    Comment 
};