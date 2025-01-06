import React, { useState, useEffect } from "react";
import "./Slider.css";

const images = [
    "https://via.placeholder.com/300x200?text=2",
    "https://via.placeholder.com/300x200?text=3",
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length ? 1 : prevIndex + 1 //cuando se llega a la última imagen, el índice se reinicia a 1, mostrando la primera imagen 
            );
            setIsTransitioning(true);
            }, 3000);

        return () => clearInterval(interval);
    }, []); //La lista de dependencias está vacía ([]), por lo que este useEffect solo se ejecuta una vez, al principio, cuando el componente se monta.

    const handleTransitionEnd = () => {
        if (currentIndex === images.length) {
        setIsTransitioning(false); // Desactiva la transición
        setCurrentIndex(0); // Reinicia al primer índice
        }
    };

    return (
        <div className="slider-container">
        <div
            className={`slider ${isTransitioning ? "transitioning" : ""}`} //si isTrainsitioning es true la clase se llama "slider transitioning" sino "slider"
            style={{
            transform: `translateX(-${currentIndex * 100}%)`, //transformacion que hace que la imagen se mueva horizontalmente a la izquierda
            }}
            onTransitionEnd={handleTransitionEnd} //onTransitionEnd -> evento que se ejecuta cuando la transicion se completa
        >
            {[
            ...images,
            images[0], // Se desglosa el array images y se añade la primera imagen al final para crear un efecto de slider infinito
            ].map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index + 1}`} />
            ))}
        </div>
        </div>
    );
};

export default Slider;
