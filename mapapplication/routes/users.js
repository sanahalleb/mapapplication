var express = require('express');
var router = express.Router();
//var geolocation=require('geolocation');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



/*geolocation.getCurrentPosition(function (err, position) {
  if (err) throw err
  console.log(position)
})*/


module.exports = router;
