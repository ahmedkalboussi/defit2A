const HTTP_PORTS = 3000;

const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send('<h1>My Node App</h1>')
})


app.listen(HTTP_PORTS,()=> {

    console.log(`Serveur NodJS démérré sur http://localhost:${HTTP_PORTS}`)
})