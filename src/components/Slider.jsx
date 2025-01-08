import React, { useState, useEffect } from "react";
import "./Slider.css";

import { useDispatch, useSelector } from "react-redux"
import { getAllFilms} from "../redux/FilmSlice"

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const dispatch = useDispatch();

    const { items, loading, error } = useSelector((state) => state.films);

    useEffect(() => {
        dispatch(getAllFilms({ page: 0, size: 16 }));
    }, [dispatch]);
    

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === items.content.length ? 0 : prevIndex + 1//cuando se llega a la última imagen, el índice se reinicia a 1, mostrando la primera imagen 
            );
            setIsTransitioning(true);
            }, 3000);

        return () => clearInterval(interval);
    }, [items]); //La lista de dependencias está vacía ([]), por lo que este useEffect solo se ejecuta una vez, al principio, cuando el componente se monta.

    const handleTransitionEnd = () => {
        if (currentIndex === items.content.length) {
        setIsTransitioning(false); // Desactiva la transición
        setCurrentIndex(0); // Reinicia al primer índice
        }
    };

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar películas.</p>;

    return (
        <div className="slider-container">
        <div
            className={`slider ${isTransitioning ? "transitioning" : ""}`} //si isTrainsitioning es true la clase se llama "slider transitioning" sino "slider"
            style={{
            transform: `translateX(-${currentIndex * 100}%)`, //transformacion que hace que la imagen se mueva horizontalmente a la izquierda
            }}
            onTransitionEnd={handleTransitionEnd} //onTransitionEnd -> evento que se ejecuta cuando la transicion se completa
        >
            {/*
            {[
            ...images,
            images[0], // Se desglosa el array images y se añade la primera imagen al final para crear un efecto de slider infinito
            ].map((src, index) => (
            
            
            <img key={index} src={src} alt={`Slide ${index + 1}`} />
            ))}
            */}
            {[...items.content, items.content[0]].map((film, index) => (
            <img
                key={index}
                src={film && film.image ? `data:image/jpeg;base64,${film.image}` : 'default-image-path.jpg'}
                alt={`Slide ${index + 1}`}
            />
        ))}
        </div>
        </div>
    );
};

export default Slider;
