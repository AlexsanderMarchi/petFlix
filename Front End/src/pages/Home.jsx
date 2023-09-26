import React, { useState, useEffect } from 'react';
import './home.css';
import PetflixHeader from '../../components/Header';

function Home() {
    //const [video, setVideo] = useState('');

    //const video = `http://localhost:3000/video`
    const videoLocal = `http://localhost:3000/videoLocal`
    const [message, setMessage] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/video');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log(data.message);
          setMessage(data.message);
        } catch (error) {
          console.error('Error fetching video:', error);
        }
      };
  
      fetchData();
    }, []);

    return (
        <div>
            <PetflixHeader />


            <video controls width="500" height="300">
                <source src={message} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>

        </div>
    );
}

export default Home;


