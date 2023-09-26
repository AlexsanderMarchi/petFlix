import React, { useState, useEffect } from 'react';
import './catalogDog.css';
import '../index.css'
import PetflixHeader from '../../components/Header';
import { Link } from "react-router-dom";

function DogCatalog() {
    const [animatedMovies, setAnimatedMovies] = useState([
        'https://live.staticflickr.com/8467/8138344272_c3c5d33399_b.jpg',
        'https://i.pinimg.com/564x/91/9b/f4/919bf433435845a455a0e5c429f9d47a.jpg',
        'https://i.pinimg.com/564x/91/9b/f4/919bf433435845a455a0e5c429f9d47a.jpg',
        'https://i.pinimg.com/564x/91/9b/f4/919bf433435845a455a0e5c429f9d47a.jpg',
        'https://i.pinimg.com/564x/91/9b/f4/919bf433435845a455a0e5c429f9d47a.jpg',
        'https://i.pinimg.com/564x/91/9b/f4/919bf433435845a455a0e5c429f9d47a.jpg',
    ]);

    const [calmingMovies, setCalmingMovies] = useState([
        'https://i.pinimg.com/564x/91/9b/f4/919bf433435845a455a0e5c429f9d47a.jpg',
        'https://i.pinimg.com/564x/91/9b/f4/919bf433435845a455a0e5c429f9d47a.jpg',
        'https://i.pinimg.com/564x/91/9b/f4/919bf433435845a455a0e5c429f9d47a.jpg',
        'https://i.pinimg.com/564x/91/9b/f4/919bf433435845a455a0e5c429f9d47a.jpg',
        'https://i.pinimg.com/564x/91/9b/f4/919bf433435845a455a0e5c429f9d47a.jpg',
        'https://i.pinimg.com/564x/91/9b/f4/919bf433435845a455a0e5c429f9d47a.jpg',

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
                            <Link to={`/CatalogForDogs/${index + 1}`} key={index}>
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
                    <h1 className='Titulo-section'>Filmes Calmantes para Cachorros</h1>
                    <div className="movie-list">
                        {calmingMovies.map((movie, index) => (
                            <img
                                key={index}
                                className="movie-poster"
                                src={movie}
                                alt={`Movie ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default DogCatalog;
