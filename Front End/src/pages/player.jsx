import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './player.css';

function Player() {

  const videoLocal = `http://localhost:3000/videoLocal`
  const [filme, setFilme] = useState(null);


  
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
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };
  
    fetchData();
  }, [idFilme]);

  return (
    <div className="player-container">
      <Link to="/CatalogForDogs" className="back-button">
                    <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      {filme && (
        <video controls width="950" height="500">
          <source src={filme.url} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      )}
    </div>
  );
  
}

export default Player;
