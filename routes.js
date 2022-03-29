var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('Hello GET world');
});
router.post('/', function(req, res){
   res.send('Hello POST world');
});



module.exports = router; //esporto il modulo router

