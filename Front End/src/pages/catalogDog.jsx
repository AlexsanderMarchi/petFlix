import React, { useState, useEffect } from 'react';
import './catalogDog.css';
import '../index.css'
import PetflixHeader from '../../components/Header';
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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


    return (
        <>
            <div>
                <PetflixHeader />
            </div>
            <div className="catalog-container">
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
                    <h1 className='Titulo-section'>Filmes Calmaos para Cachorros</h1>
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
