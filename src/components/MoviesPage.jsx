import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

function MoviesPage() {
    const [movies, setMovies] = useState([])
    // const backendUrl = import.meta.env.VITE_BACKEND_URL;
 

   
    //indirizzo di backend e`variabile d ambiente
   
 useEffect(() => {
        getMovies()
    }, []);

    const getMovies = () => {
        axios.get(`http://localhost:3000/movies`).then((resp) => {
            setMovies(resp.data.data)
        })
    }

    return (
        <>
            <h1>List of Movies</h1>
            <div className="row">
                {movies.map((curMovie) => (
                    <div className="col" key={curMovie.id}>
                        <MovieCard movie={curMovie}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MoviesPage;