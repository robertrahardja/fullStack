var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// fetch records from database
router.get('/', function(req, res, next) {
  connection.query('SELECT * from members', function (error, results, fields) {
   if (error) throw error;
   res.send(JSON.stringify(results));
 });
});

module.exports = router;
