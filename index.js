const express = require('express');
const webServer = express();
const port = 3000; //imposto la porta

const router = require('./routes.js'); //richiamo il modulo router

webServer.use('/', router);
webServer.set('view engine', 'ejs');
webServer.use('/event', express.static('evento'));

webServer.get('/evento/:views/dinamica', function(req, res) { //Pagina dinamica
  res.render('dinamica.ejs', {evento: req.params.views});
});

webServer.listen(port, function(){
  console.log(`Il programma ascolta alla porta: ${port}!`) //output
});


