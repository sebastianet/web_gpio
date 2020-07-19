var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '(v 1.0.a) Raspberry Pi GPIO Simple-GUI' });
  console.log('(+++index.js+++) Written title.');
});

module.exports = router;
