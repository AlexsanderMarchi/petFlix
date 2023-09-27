import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './player.css';
import PetflixHeader from '../../components/Header';

function Player() {
  //const [video, setVideo] = useState('');

  //const video = `http://localhost:3000/video`
  const videoLocal = `http://localhost:3000/videoLocal`
  const [filme, setFilme] = useState({});
  
  const { idFilme } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/video/${idFilme}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setFilme(data);

        const endereco = filme.url;
        console.log("endereço 1: "+endereco);

      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    //      <PetflixHeader />
    fetchData();
  }, []);


  const endereco2 = filme.url;
  console.log("endereço 2: "+endereco2);


  return (
    <div>
      <h1>{filme.url}</h1>
      {filme && (
        <video controls width="500" height="300">
          <source src={filme.url} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      )}


    </div>
  );
}

export default Player;

