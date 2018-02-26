var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(__dirname)
  res.sendFile(path.resolve(__dirname, '../views/index.html'))
});

module.exports = router;
