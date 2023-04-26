const { Post } = require('../models');

const postData = [
    {
        title: "Why MVC is so important",
        body: "MVC allows developers to maintain a true separation of concers, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic",
        user_id: 1
    },
    {
        title: "Authentication vs. Authorization",
        body: "There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed to access to the system. ",
        user_id: 2
    },
    {
        title: "Object-Relational Mapping",
        body: "I have really loved learning abbout ORMs. It's really simplified the way I create queries in SQL!",
        user_id: 3
    }

]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;