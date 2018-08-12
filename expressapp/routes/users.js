var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');
var employ = [
  {id: 1,name: 'sam'},
  {id: 2,name: 'nick'},
  {id: 3,name: 'joe'},
  {id: 4,name: 'max'},
  {id: 5,name: 'mike'}
]
  // And insert something like this instead:
  var searchkey = req.query.searchkey;
  var filteredArray = employ.filter(function(itm){
    return itm.name.includes(searchkey);
  });

  console.log(filteredArray);

  res.json(filteredArray);
});

module.exports = router;
