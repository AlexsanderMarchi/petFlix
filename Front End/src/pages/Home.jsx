  import React, { useState, useEffect } from 'react';
  import { Link } from "react-router-dom";
  import './home.css';
  import dogZao from '../assets/dogZao.png';
  import catZao from '../assets/catZao.png'

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
            {showDogTitle && <div className='dogProfileTitle left'>Cachorro</div>}
            <Link to={`/CatalogForDogs`}>
              <img className="dogProfile" src={dogZao} alt="" />
            </Link>
          </div>
          <div
            onMouseEnter={() => setShowCatTitle(true)}
            onMouseLeave={() => setShowCatTitle(false)}
            className="image-container"
          >
            {showCatTitle && <div className='dogProfileTitle right'>Gato</div>}
            <Link to={`/CatalogForCats`}>
              <img className="catProfile" src={catZao} alt="" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  export default Home;


