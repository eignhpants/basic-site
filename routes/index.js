var express = require('express');
var request = require('request');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Costa's Cleaning" });
});


/* GET home page. */
router.get('/sample', function(req, res, next) {
  res.send('pancakes!');
});





module.exports = router;
