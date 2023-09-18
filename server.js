const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;


const app = express()
app.use(bodyParser.json())  //sem isso, não da pra mandar requisição em json para a API


app.listen(port, () => {
    console.log(`Servidor express rodando na porta: ${port}`)
})