import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './home.css';
import dogZao from '../assets/dogZao.png';
import catZao from '../assets/catZao.png';
import soundFile from "../assets/parkSound.mp3";

function Home() {

  const [playSound, setPlaySound] = useState(false);
    
    // Função para reproduzir o som
    const playAudio = () => {
        const audio = new Audio(soundFile);
        audio.play();
    };

    useEffect(() => {
        
        const intervalId = setInterval(() => {
            setPlaySound(true); 
        }, 21000); 

        
    }, []);

    
    useEffect(() => {
        if (playSound) {
            playAudio();
            setPlaySound(false); 
        }
    }, [playSound]);



  return (
    <>
      <header>
        <div className='logo-container'>
          <img
            className='petflix-logo1'
            src='./siteLogo.png'
            alt='Petflix Logo'
          />
        </div>
      </header>
      <div className='container'>
        <div className='image-container'>
          <div className='image-item'
          ><div className='styleLink'>
              <Link to='/CatalogForDogs' >
                <img className='dogProfile' src={dogZao} alt='Dog' />
                <div className='dogProfileTitle'>Cachorro</div>
              </Link>
            </div>
          </div>
          <div className='image-item'
          ><div className='styleLink'>
              <Link to='/CatalogForCats'>
                <img className='catProfile' src={catZao} alt='Cat' />
                <div className='catProfileTitle'>Gato</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
