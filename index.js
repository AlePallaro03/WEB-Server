const express = require('express');
const webServer = express();
const port = 3000; //imposto la porta

const router = require('./routes.js'); //richiamo il modulo router

webServer.use('/', router);

webServer.use('/event', express.static('evento'));

webServer.listen(port, function(){
  console.log(`Il programma ascolta alla porta: ${port}!`) //output
});



