const express = require('express')

const port = 8080;
const  host = '0.0.0.0';

const  app = express();
app.get('/', (req, res)=>{
    res.send('Hello VOva');
})

app.listen(port, host)
console.log('start is good' + `http://${host}:${port})`)
