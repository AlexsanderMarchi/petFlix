import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './home.css';
import dogZao from '../assets/dogZao.png';

function Home() {
  const [showDogTitle, setShowDogTitle] = useState(false);
  const [showCatTitle, setShowCatTitle] = useState(false);



  return (
    <div className='container'>
      <div className='logo-container'>
        <img
          className="petflix-logo"
          src="./public/siteLogo.png"
          alt="Petflix Logo"
        />
      </div>
      <div className='image-container'>
        <div
          onMouseEnter={() => setShowDogTitle(true)}
          onMouseLeave={() => setShowDogTitle(false)}
          className="image-container"
        >
          {showDogTitle && <div className='dogProfileTitle left'>Filmes para Cachorros</div>}
          <Link to={`/CatalogForDogs`}>
            <img className="dogProfile" src={dogZao} alt="" />
          </Link>
        </div>
        <div
          onMouseEnter={() => setShowCatTitle(true)}
          onMouseLeave={() => setShowCatTitle(false)}
          className="image-container"
        >
          {showCatTitle && <div className='dogProfileTitle right'>Filmes para Gatos</div>}
          <img className="catProfile" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2013%2F05%2Fb31.jpg&q=60" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;


