const express = require('express');
const webServer = express();
const port = 3000; //imposto la porta

webServer.get('*',function(req, res){
  res.send('hello Get world!')
});

webServer.post('*',function(req, res){
  res.send('hello Post world!')
});
webServer.listen(port, function(){
  console.log(`Il programma ascolta alla porta: ${port}!`) //output della porta
});
