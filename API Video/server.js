const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const path = require("path");
const fs = require("fs");
const { Storage } = require("@google-cloud/storage");

const app = express();
app.use(bodyParser.json()); // sem isso, não é possível enviar requisições em JSON para a API

const storage = new Storage({
  projectId: 'petflix-839d0',
  keyFilename: 'firabase.js', // Substitua pelo caminho para o seu arquivo de chave de serviço do Firebase
});

const bucketName = 'petflix-839d0.appspot.com'; // Substitua pelo nome do seu bucket

app.get("/video", (req, res) => {
  const arquivoDoStorage = "gs://petflix-839d0.appspot.com/Hakuna Matata.mp4"; // Substitua pelo caminho correto no Firebase Storage

  const file = storage.bucket(bucketName).file(arquivoDoStorage);

  // Verifique se o arquivo existe no Firebase Storage
  file.exists().then((data) => {
    const [exists] = data;

    if (!exists) {
      return res.status(404).send("Arquivo não encontrado");
    }

    // Buscar detalhes do arquivo
    file.getMetadata().then((metadata) => {
      const tamanhoDoVideo = metadata[0].size;
      const cabecalhoDaResposta = {
        'Content-Length': tamanhoDoVideo,
        'Content-Type': 'video/mp4',
      };

      res.writeHead(200, cabecalhoDaResposta);

      // Lendo o arquivo do Firebase Storage e retornando-o como resposta
      file.createReadStream().pipe(res);
    });
  }).catch((error) => {
    console.error("Erro durante a verificação do arquivo:", error);
    res.status(500).send("Erro interno do servidor");
  });
});




const pastaVideo = path.join(__dirname, "videos")

app.get("/videoLocal", (req, res) => {
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
  console.log(`Servidor express rodando na porta: ${port}`);
});





// const express = require("express");
// const bodyParser = require("body-parser");
// const port = 3000;

// const path = require("path")
// const fs = require("fs")

// const app = express()
// app.use(bodyParser.json())  //sem isso, não da pra mandar requisição em json para a API

// const pastaVideo = path.join(__dirname, "videos")

// app.get("/video", (req, res) => {
//     const arquivoDoVideo = path.join(pastaVideo, "seuVideo.mp4")

//     // Verificar se o arquivo existe
//     fs.existsSync(arquivoDoVideo)

//     // Buscar detalhes do arquivo
//     const detalhesDoArquivo = fs.statSync(arquivoDoVideo)
//     // Pegar somente o  tamanho do arquivo
//     const tamanhoDoVideo = detalhesDoArquivo.size

//     const cabecalhoDaResposta = {
//         'Content-Length': tamanhoDoVideo,
//         'Content-Type': 'video/mp4'
//     }

//     res.writeHead(200, cabecalhoDaResposta)

//     // Lendo o arquivo numa stream e retornando ele como resposta
//     fs.createReadStream(arquivoDoVideo)   
//     .pipe(res)    

// })

// app.listen(port, () => {
//     console.log(`Servidor express rodando na porta: ${port}`)
// })


