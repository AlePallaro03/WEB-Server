const express = require('express'); //richiesto modulo esterno 
const webServer = express();
const port = 4000; //imposto la porta
console.log('WEB SERVER') //output in console
const router = require('./router.js'); //richiedo il modulo router

webServer.set('view engine', 'ejs'); //view engine (ejs) template

//webServer.use('/evento', express.static('evento'));

webServer.get('/event/dinamica', function(req, res) { //funzione che richiama il file dinamica.ejs situato nella cartella view
  res.render('dinamica'); //risposta del server alla funzione
});

webServer.use('/', router); 

webServer.use('/event', express.static('evento')); //middleware (file statico)

webServer.get('/',function(req, res){
  res.send('hello Get world!')
});

webServer.post('/',function(req, res){
  res.send('hello Post world!')
});

webServer.get('*',function(req, res){
  res.redirect('/');
});

webServer.listen(port, function(){
  console.log(`Il programma ascolta alla porta: ${port}!`)
});




