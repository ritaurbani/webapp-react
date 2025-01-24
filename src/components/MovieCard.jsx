function MovieCard({movie}) {
    return (
        <div className="card">
            <img src={`http://localhost:3000/img/${movie.image}`} alt="" />
            <div className="card-body">
                <h5>{movie.title} <br/> {movie.director}</h5>
                <p>{movie.abstract}</p>
                mostra dettagli

            </div>
        </div>
    )
}
export default MovieCard

