const express= require('express');
const router = express.Router();

router.get('/event',function(req, res){
  res.redirect('/event/fancyParty.html')
});

router.get('/event/books',function(req, res){
  res.send('La lista dei libri')
});

router.get('/event/contacts',function(req, res){
  res.send('La lista dei contatti')
});

router.get('/event/location',function(req, res){
  res.send('indirizzo evento con mappa')
});


module.exports=router;

