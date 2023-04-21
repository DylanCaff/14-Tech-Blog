const router = require('express').Router();
const { Post, Comment, User } = require('../models'); 


router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: Comment,
                    include: { model: User, attributes:['username']},
                },
            ],
        });
        res.status(200).json(postData);
        console.log('Find All SUCCESS');

        const posts = postData.map((post) => post.get({ plain: true }));
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/id', async (req, res) => {
    try {
        const postData = await Post.findByPk( req.params.id, {
            include: [
                {
                    model: Comment,
                    include: { model: User, attributes:['username']},
                },
            ],
        });
        res.status(200).json(postData);
        console.log('Find single post SUCCESS');
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;
