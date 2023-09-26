import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './home.css';
import PetflixHeader from '../../components/Header';

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
            <img className="dogProfile" src="https://www.cnet.com/a/img/resize/20d6844768bd3f5f0df41deee97897423bcaf3c5/hub/2021/11/03/3c2a7d79-770e-4cfa-9847-66b3901fb5d7/c09.jpg?auto=webp&fit=crop&height=1200&width=1200" alt="" />
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


