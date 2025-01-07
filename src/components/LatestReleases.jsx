import './LatestReleases.css'
import React, { useEffect, useState } from 'react'
import { getLastFilms } from '../redux/FilmSlice'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LatestReleases = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { items, loading, error } = useSelector((state) => state.films);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        dispatch(getLastFilms( {page: 0, size: 16} ));
    }, [dispatch]);

    useEffect(() => {
            const interval = setInterval(() => {
                handleNext;
            }, 2000);
            return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.content.length)
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.content.length) % items.content.length);
    };

    if (loading) return <p>Cargando películas...</p>;
    if (error) return <p>Error: {error}</p>;
    if (items.content.length === 0) return <p>No hay películas disponibles.</p>;

    

    return (
        <>
        <div className="carousel">
            <button className="carousel-button prev" onClick={handlePrev}>
                ←
            </button>

            <div className="carousel-content">
                {items.content.map((film, index) => (
                    
                    <div
                        key={film.id}
                        className={`carousel-item ${index === currentIndex ? "active" : ""}`}
                        style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
                    >
                        <img src={film.image ? `data:image/jpeg;base64,${film.image}` : 'default-image-path.jpg'} alt={film.title} />
                        <h3>{film.title}</h3>
                    </div>
                ))}
            </div>

            <button className="carousel-button next" onClick={handleNext}>
                →
            </button>
        </div>
        </>
    )
}
export default LatestReleases;