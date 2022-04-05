const express = require('express');
const webServer = express();
const port = 3000; //imposto la porta

const router = require('./routes.js'); //richiamo il modulo router

webServer.use('/', router);
webServer.set('view engine', 'ejs'); //view engine
webServer.use('/event', express.static('evento'));

webServer.get('/evento', function(req, res) { //Pagina dinamica
  res.render('dinamica'); //file dinamica situato in views/dinamica.ejs
});

webServer.listen(port, function(){
  console.log(`Il programma ascolta alla porta: ${port}!`) //output
});


