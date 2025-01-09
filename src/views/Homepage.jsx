import Header from '../components/Header'
import LatestReleases from '../components/LatestReleases'
import './Homepage.css'
import React, { useState, useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { getAllFilms, getLastFilms } from "../redux/FilmSlice"
// import { useNavigate } from "react-router-dom"


const Homepage = () => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const [currentLatestPage, setCurrentLatestPage] = useState(0);

    // const { items, loading, error } = useSelector((state) => state.films);


    return (
        <>
        <body>
            
            <Header />
            <LatestReleases/>
        </body>
        </>
    )
}

export default Homepage;