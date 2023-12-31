import React, { useState, useEffect } from 'react';
import './catalogStyle.css';
import '../index.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import soundFile from "../assets/catSong.mp3";

//Movie Posters
import ohLongJohnson from "../assets/ohLongJohnson.jpg";
import catAurea from "../assets/catAurea.jpg";
import garfieldMovie from "../assets/GarfieldMovie.jpg";
import catXdog from "../assets/catXdog.jpg";
import drawingCat from "../assets/DrawingCat.jpg";
import garfieldCartoon from "../assets/GarfieldCartoon.jpg";
import relaxingCat2 from "../assets/relaxingCat2.jpg";
import relaxingCat from "../assets/relaxingCat.jpg";
import catNight from "../assets/catNight.jpg";
import catPurring from "../assets/catPurring.jpg";
import catFriend from "../assets/catFriend.jpg";
import catNoise from "../assets/catNoise.jpg";

function CatCatalog() {
    const [animatedMovies, setAnimatedMovies] = useState([
        catAurea,
        ohLongJohnson,
        garfieldMovie,
        catXdog,
        drawingCat,
        garfieldCartoon,
    ]);

    const [calmingMovies, setCalmingMovies] = useState([
        relaxingCat2,
        relaxingCat,
        catNight,
        catPurring,
        catFriend,
        catNoise,
    ]);

    const [playSound, setPlaySound] = useState(false);
    
    
    const playAudio = () => {
        const audio = new Audio(soundFile);
        audio.play();
    };

    useEffect(() => {
        
        const intervalId = setInterval(() => {
            setPlaySound(true);
        }, 5000);

        return () => {
            clearInterval(intervalId); 
        };
    }, []);

   
    useEffect(() => {
        if (playSound) {
            playAudio();
            setPlaySound(false);
        }
    }, [playSound]);



    return (
        <>
            <div className="catalog-container">
                <Link to="/" className="back-button">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
                <div className="section">
                    <h1 className='Titulo-section'>Filmes Animados para Gatos</h1>
                    <div className="movie-list">
                        {animatedMovies.map((movie, index) => (
                            <Link to={`/CatalogForCats/${index + 13}`} key={index} className="movie-link">
                                <img
                                    className="movie-poster"
                                    src={movie}
                                    alt={`Movie ${index + 1}`}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="section">
                    <h1 className='Titulo-section'>Filmes Calmos para Gatos</h1>
                    <div className="movie-list">
                        {calmingMovies.map((movie, index) => (
                            <Link to={`/CatalogForCats/${index + 19}`} key={index} className="movie-link">
                                <img
                                    className="movie-poster"
                                    src={movie}
                                    alt={`Movie ${index + 1}`}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CatCatalog;
