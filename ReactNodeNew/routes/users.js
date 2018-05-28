var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/old', function(req, res, next) {
  res.send('respond with a resource');
});

// fetch records from database
router.get('/', function(req, res, next) {
  req.getConnection(function(error, conn) {
    if (error) {
        res.render(error)
      } else {
        conn.query('SELECT * from mydatabase', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
        });
      }
  });
});

module.exports = router;
