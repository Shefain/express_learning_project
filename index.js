const express = require('express');
const router = require('./routes');

// initializing app
const app = express();







//setup a static dir
app.use(express.static('./public'))


// telling application to use middleware
app.use(router);



// app.use((error, req , res, next)=>{
  
  // })
  
  // creating port to send reqest
  app.listen(3000, () => {
    console.log(' Running ...');
  });
  