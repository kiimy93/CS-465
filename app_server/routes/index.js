var express = require('express');
var router = express.Router();
var ctrlTravel = require('../controllers/traveler');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Travlr Getaways' });
});

/* GET travel page. */
router.get('/travel', ctrlTravel.travel);

module.exports = router;