const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 3,
        comment_text: "Me too! I love ORMs!!"
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: "Wow! I didnt know that!"
    },
    {
        user_id: 3,
        post_id: 1,
        comment_text: "Im glad you said this, very informational!!"
    },
    {
        user_id: 4,
        post_id: 2,
        comment_text: "Thats pretty cool didnt realize there was a difference!"
    },
    {
        user_id: 5,
        post_id: 1,
        comment_text: "didnt know that it was so important!"
    },
    {
        user_id: 6,
        post_id: 3,
        comment_text: "Im learning it now! Can see how it simplifies things!"
    },
]


const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
