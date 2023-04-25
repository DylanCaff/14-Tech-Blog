const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboradRoutes = require('./dashboard-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboradRoutes);
router.use('/api', apiRoutes);


module.exports = router;