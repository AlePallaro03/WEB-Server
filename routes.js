const express= require('express');
const router = express.Router();

router.get('/event',function(req, res){
  res.send('Benvenuti al sito della Festa di Diploma della 5Ai') //output della richiesta /event
});

router.get('/event/books',function(req, res){
  res.send('La lista dei libri') //output della richiesta /event/books
});

router.get('/event/contacts',function(req, res){
  res.send('La lista dei contatti') //output della richiesta /event/contacts
});

router.get('/event/location',function(req, res){
  res.send('indirizzo evento con mappa') //output della richiesta /event/location
});

module.exports=router;


