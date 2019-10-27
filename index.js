const express = require('express');

const app = express()



app.get('/', (req, res)=>{
  res.send('welcome to express backend')
})



app.listen(4200);