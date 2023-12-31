import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './player.css';

function Player() {
  const videoRef = useRef(null);
  const { idFilme } = useParams();
  const videoLocal = `https://apipetflix.onrender.com/videoLocal`;
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://apipetflix.onrender.com/video/${idFilme}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setFilme(data);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchData();

    // // Entrar em tela cheia quando o vídeo estiver pronto
    // if (videoRef.current) {
    //   videoRef.current.addEventListener('loadeddata', () => {
    //     if (videoRef.current.requestFullscreen) {
    //       videoRef.current.requestFullscreen();
    //     } else if (videoRef.current.mozRequestFullScreen) {
    //       videoRef.current.mozRequestFullScreen();
    //     } else if (videoRef.current.webkitRequestFullscreen) {
    //       videoRef.current.webkitRequestFullscreen();
    //     }
    //   });
    // }

  }, [idFilme]);

  return (
    <div className="player-container">
      <Link to="/CatalogForDogs" className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      {filme && (
        <video ref={videoRef} controls className='videoPlayer'>
          <source src={filme.url} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      )}
    </div>
  );
}

export default Player;
