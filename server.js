const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const path = require("path")
const fs = require("fs")


const app = express()
app.use(bodyParser.json())  //sem isso, não da pra mandar requisição em json para a API

const pastaVideo = path.join(__dirname, "videos")

app.get("/video", (req, res) => {
    const arquivoDoVideo = path.join(pastaVideo, "seuVideo.mp4")

    // Verificar se o arquivo existe
    fs.existsSync(arquivoDoVideo)

    // Buscar detalhes do arquivo
    const detalhesDoArquivo = fs.statSync(arquivoDoVideo)
    // Pegar somente o  tamanho do arquivo
    const tamanhoDoVideo = detalhesDoArquivo.size

    const cabecalhoDaResposta = {
        'Content-Length': tamanhoDoVideo,
        'Content-Type': 'video/mp4'
    }

    res.writeHead(200, cabecalhoDaResposta)

    // Lendo o arquivo numa stream e retornando ele como resposta
    fs.createReadStream(arquivoDoVideo)   
    .pipe(res)    

})

app.listen(port, () => {
    console.log(`Servidor express rodando na porta: ${port}`)
})