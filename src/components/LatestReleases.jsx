import './LatestReleases.css';
import React, { useEffect, useState } from 'react';
import { getLastFilms } from '../redux/FilmSlice';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LatestReleases = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { items, loading, error } = useSelector((state) => state.films);

    const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

    // Dividir manualmente en grupos de 5 películas
    const chunkedFilms = [];
    for (let i = 0; i < items.content.length; i += 5) {
        chunkedFilms.push(items.content.slice(i, i + 5));
    }

    useEffect(() => {
        dispatch(getLastFilms({ page: 0, size: 25 }));
    }, [dispatch]);

    const handleNext = () => {
        const nextIndex = currentGroupIndex + 1 >= chunkedFilms.length ? 0 : currentGroupIndex + 1;
        setCurrentGroupIndex(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = currentGroupIndex - 1 < 0 ? chunkedFilms.length - 1 : currentGroupIndex - 1;
        setCurrentGroupIndex(prevIndex);
    };

    if (loading) return <p>Cargando películas...</p>;
    if (error) return <p>Error: {error}</p>;
    if (chunkedFilms.length === 0) return <p>No hay películas disponibles.</p>;

    const currentGroup = chunkedFilms[currentGroupIndex];

    return (
        <>
            <div className="carousel">
                

                <div className="carousel-content">
                    <button className="carousel-button prev" onClick={handlePrev}>
                        ←
                    </button>
                    <div className="carousel-item active">
                        {currentGroup.map((film, index) => (
                            <div key={index} className="film-card">
                                <img
                                    src={film.image ? `data:image/jpeg;base64,${film.image}` : "default-image-path.jpg"}
                                    alt={film.title}
                                />
                                <h3>{film.title}</h3>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-button next" onClick={handleNext}>
                        →
                    </button>
                </div>

                
            </div>
        </>
    );
};

export default LatestReleases;
