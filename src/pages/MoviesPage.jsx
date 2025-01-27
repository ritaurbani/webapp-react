import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

function MoviesPage() {
//creo array generi
    const genre = ["Poesia Epica", "Romanzo Storico"]

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")
    // const backendUrl = import.meta.env.VITE_BACKEND_URL;

    //indirizzo di backend e`variabile d ambiente

    useEffect(() => {
        getMovies()
    }, []);

    //se usiamo filtri settiamo parametri della ricerca
    const getMovies = () => {
        const params = {};
        if (search.length > 0) {
            //parametro search > backend controlla se c e questo parametro e aggiunge where alla query sql...
            params.search = search
        }
        axios.get(`http://localhost:3000/movies`, { params }).then((resp) => {
            setMovies(resp.data.data)
        })
    }

    return (
        <>
            <div className="container">
                <h1>List of Movies</h1>
                <div className="search">
                    <select name="" id="">
                        <option value=""></option>
                        {/* {genres.map(())} */}
                    </select>
                    <input
                        className="search-bar"
                        type="search"
                        aria-label="Search movies by keyword"
                        placeholder="search for a movie"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <button className="btn-search" onClick={getMovies}>Search</button>
                </div>
                {/* EMPTY SEARCH HANDLER */}
                {movies.length > 0 ? (<div className="row">
                    {movies.map((curMovie) => (
                        <div className="col" key={curMovie.id}>
                            <MovieCard movie={curMovie}/>
                        </div>
                    ))}
                </div>) : (<p>No results. Please try again</p>)
                }

            </div>
        </>
    )
}

export default MoviesPage;