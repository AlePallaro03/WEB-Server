var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('GET route on things.');
});
router.post('/', function(req, res){
   res.send('POST route on things.');
});

router.post('/event',function(req, res){
  res.send('evento/fancyParty.html')
});

//export this router to use in our index.js
module.exports = router;

