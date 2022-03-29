const express = require('express');
const webServer = express();
const port = 3000; //imposto la porta

const router = require('./routes.js'); //richiamo il modulo router

webServer.use('/', router);

webServer.get('*',function(req, res){
  res.send('Hello Get world!') //output con GET
});

webServer.post('*',function(req, res){
  res.send('Hello Post world!') //output con POST
});

webServer.listen(port, function(){
  console.log(`Il programma ascolta alla porta: ${port}!`) //output della porta
});
