import { Link } from "react-router-dom"

function MovieCard({ movie }) {
    // const backendUrl = import.meta.env.VITE_BACKEND_URL;

    return (
        <div className="card">

            {/*if movie image exists then..else */}
            <img src={movie.image ?
                `http://localhost:3000/img/${movie.image}` :
                "https://picsum.photos/400/600"} alt="" />
            <div className="card-content">
                <h5>{movie.title} <br /> {movie.director}</h5>
                <p>{movie.abstract}</p>
                <Link to={`/movies/${movie.id}`} className="btn" >Movie details</Link>
            </div>
        </div>

    )
}
export default MovieCard

