const express = require('express');
const router = express.Router();
const path = require("path");
const fs = require("fs");
const filmes = require('../models/movies');


exports.listaMovies =  (req, res) => {

    const id = parseInt(req.params.id);
    const movie = filmes.find((item) => item.id === id);
  
    if (movie) {
      res.status(200).json(movie);
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  };


  const pastaVideo = path.join(__dirname, "videos")

  exports.videoLocal =  (req, res) => {
    const arquivoDoVideo = path.join(pastaVideo, "seuVideo.mp4")
  
    fs.existsSync(arquivoDoVideo)
  
    const detalhesDoArquivo = fs.statSync(arquivoDoVideo)
    const tamanhoDoVideo = detalhesDoArquivo.size
  
    const cabecalhoDaResposta = {
      'Content-Length': tamanhoDoVideo,
      'Content-Type': 'video/mp4'
    }
  
  
    res.writeHead(200, cabecalhoDaResposta)
  
    fs.createReadStream(arquivoDoVideo)
      .pipe(res)
  }

//   app.get("/videoLocal", (req, res) => {
//     const arquivoDoVideo = path.join(pastaVideo, "seuVideo.mp4")
  
//     fs.existsSync(arquivoDoVideo)
  
//     const detalhesDoArquivo = fs.statSync(arquivoDoVideo)
//     const tamanhoDoVideo = detalhesDoArquivo.size
  
//     const cabecalhoDaResposta = {
//       'Content-Length': tamanhoDoVideo,
//       'Content-Type': 'video/mp4'
//     }
  
  
//     res.writeHead(200, cabecalhoDaResposta)
  
//     fs.createReadStream(arquivoDoVideo)
//       .pipe(res)
//   })