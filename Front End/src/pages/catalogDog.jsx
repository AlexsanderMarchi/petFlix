import React, { useState, useEffect } from 'react';
import './catalogStyle.css';
import '../index.css';
import PetflixHeader from '../../components/Header';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import soundFile from "../assets/dogSong.mp3";
//Movie Posters
import hakunaMatata from "../assets/hakunaMatata.png";
import marleyEeu from "../assets/marleyEeu.jpeg";
import semFloresta from "../assets/semFloresta.jpg";
import cachorroDancante from "../assets/cachorroDancante.jpg";
import calmDog from "../assets/calmDog.jpg";
import cuteDog from "../assets/cuteDog.jpg";
import dogDreaming from "../assets/dogDreaming.png";
import dogFails from "../assets/dogFails.jpg";
import toHowl from "../assets/toHowl.png";
import tiltHead from "../assets/tiltHead.png";
import shower from "../assets/shower.jpg";
import quatroVidas from "../assets/quatroVidas.jpg";

function DogCatalog() {
    const [animatedMovies, setAnimatedMovies] = useState([
        hakunaMatata,
        toHowl,
        dogFails,
        shower,
        semFloresta,
        cachorroDancante,
    ]);

    const [calmingMovies, setCalmingMovies] = useState([
        dogDreaming,
        tiltHead,
        calmDog,
        cuteDog,
        marleyEeu,
        quatroVidas,
    ]);


    const [playSound, setPlaySound] = useState(false);
    
    // Função para reproduzir o som
    const playAudio = () => {
        const audio = new Audio(soundFile);
        audio.play();
    };

    useEffect(() => {
        
        const intervalId = setInterval(() => {
            setPlaySound(true); 
        }, 4000); 

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
                    <h1 className='Titulo-section'>Filmes Animados para Cachorros</h1>
                    <div className="movie-list">
                        {animatedMovies.map((movie, index) => (
                            <Link to={`/CatalogForDogs/${index + 1}`} key={index} className="movie-link">
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
                    <h1 className='Titulo-section'>Filmes Calmos para Cachorros</h1>
                    <div className="movie-list">
                        {calmingMovies.map((movie, index) => (
                            <Link to={`/CatalogForDogs/${index + 7}`} key={index} className="movie-link">
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

export default DogCatalog;
