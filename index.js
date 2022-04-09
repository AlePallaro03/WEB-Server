const express = require('express');
const webServer = express();
const port = 4000;

const router = require('./router.js');

webServer.set('view engine', 'ejs');

webServer.get('/event/dinamica', function(req, res) {
  res.render('dinamica');
});

webServer.use('/', router);

webServer.use('/event', express.static('evento'));

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
  console.log(`Example SWeb Server listening on port ${port}!`)
});



