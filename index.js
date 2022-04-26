const express = require('express'); //richiesto modulo esterno 
const webServer = express();
const port = 4000; //imposto la porta
const ip = "https://replit.com/~" 
console.log('\x1b[40m\x1b[34mWEB SERVER') //output in console
console.log('Realizzato Da')
console.log('Alessandro Pallaro')
const router = require('./router.js'); //richiedo il modulo router

webServer.set('view engine', 'ejs'); //view engine (ejs) template

webServer.use('/evento', express.static('evento'));

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
  console.log(`\x1b[40m\x1b[34mIl programma ascolta alla porta: ${port}`)
  console.log(`Il programma è in esecuzione su: ${ip}`)
});




