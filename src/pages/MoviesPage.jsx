import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

function MoviesPage() {

const apiUrl = import.meta.env.VITE_BACKEND_URL

    //creo array generi
    const genres = ["Science Fiction", "Crime", "Romance", "Action"]

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")
    const [selectedGenre, setSelectedGenre] = useState("")

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

        if (selectedGenre !== "") {
            params.genre = selectedGenre
        }
        console.log(`${apiUrl}/movies`)
        console.log(`${apiUrl}/movies`, {params})
        axios.get(`${apiUrl}/movies`, { params }).then((resp) => {
            console.log(resp)
            setMovies(resp.data.data)
        })
    }

    const handleOnChange = (event) => {
        setSelectedGenre(event.target.value)
        getMovies()
    }

    return (
        <>
            <div className="container">
                <h1>List of Movies</h1>
                <div className="search">

                    {/* FILTRO PER GENERE */}
                    <select
                    className="select"
                        name=""
                        id=""
                        value={selectedGenre}
                        onChange={handleOnChange}>

                        <option value=""> All Genres </option>
                        {genres.map((curGenre, index) => (
                            <option key={index} value={curGenre}>
                                {curGenre}
                            </option>
                        ))}
                    </select>

                    {/* SEARCH BAR */}
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
                            <MovieCard movie={curMovie} />
                        </div>
                    ))}
                </div>) : (<p>No results. Please try again</p>)
                }

            </div>
        </>
    )
}

export default MoviesPage;