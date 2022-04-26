const express= require('express');
const router = express.Router(); //Creazione oggetto con metodo costruttore

router.get('/event',function(req, res){ //se viene digitato /event verrà eseguita la funzione e avremo come risposta dal server la nostra pagina HTML
  res.redirect('/event/fancyParty.html')
});

router.get('/event/books',function(req, res){ //se viene digitato /event/books verrà eseguita la funzione e avremo come risposta dal server l'output
  res.send('La lista dei libri')
});

router.get('/event/contacts',function(req, res){ //se viene digitato /event/contacts verrà eseguita la funzione e avremo come risposta dal server l'output
  res.send('La lista dei contatti')
});

router.get('/event/location',function(req, res){ //se viene digitato /event/location verrà eseguita la funzione e avremo come risposta dal server l'output
  res.send('indirizzo evento con mappa')
});


module.exports=router; //esporto il modulo router.js

