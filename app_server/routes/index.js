const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/traveler');

/* GET home page */
router.get('/', ctrlMain.homelist);

module.exports = router;
