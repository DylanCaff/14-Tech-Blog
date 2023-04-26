const router = require('express').Router();
const { Post, Comment, User } = require('../models'); 
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: Comment,
                    include: { model: User, attributes:['email']},
                },
            ],
        });
        res.status(200).json(postData);
        console.log('Find All SUCCESS');
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('all-posts', { 
            posts, 
            logged_in: req.session.logged_in 
          });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/main');
      return;
    }
  
    res.render('login');
  });

router.get('/id', async (req, res) => {
    try {
        const postData = await Post.findByPk( req.params.id, {
            include: [
                {
                    model: Comment,
                    include: { model: User, attributes:['email']},
                },
            ],
        });
        res.status(200).json(postData);
        console.log('Find single post SUCCESS');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("signup");
  });


module.exports = router;
