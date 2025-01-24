function MovieCard({movie}) {
    // const backendUrl = import.meta.env.VITE_BACKEND_URL;

    return (
        <div className="card">
            {/*if movie image exists then..else */}
            <img src={movie.image? 
                `http://localhost:3000/img/${movie.image}` :
                "https://picsum.photos/400/600"} alt="" />
            <div className="card-body">
                <h5>{movie.title} <br/> {movie.director}</h5>
                <p>{movie.abstract}</p>
                mostra dettagli

            </div>
        </div>
    )
}
export default MovieCard

