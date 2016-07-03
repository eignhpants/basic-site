var express = require('express');
var request = require('request');
var router = express.Router();
var config = require('../CONFIG');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {config: config.layout });
});

router.get('/admin', function(req, res, next){
  res.render('admin');
});

/* GET home page. */
router.get('/sample', function(req, res, next) {
  res.send('pancakes!');
});

module.exports = router;
