import React from 'react'
import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ReviewCard from '../components/ReviewCard'

const MovieDetails = () => {

    const [movie, setMovie] = useState(null)
    //preleva id pagina corrente che sa dal percorso - prelevare i details del movie > axios per other info al mounting della pagina
    //abbiamo rotta con parametro che prendiamo con useParmas e usiamo per fare chiamata API
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`).then((resp) => {
            setMovie(resp.data.data)
        })
    }, [])

    return (
        <>
            { //perche faccio questo controllo..
                movie && (
                    <div className='container-movieDetail'>
                        <section>
                            <img className= "img-detail" src={`http://localhost:3000/img/${movie.image}`} alt="" />
                            <h2>{movie.title} </h2>
                            <p>Director: {movie.director}</p>
                            <p>Genre: {movie.genre}</p>
                            <p>Released in: {movie.release_year}</p>
                            <p>Abstract:<br/>{movie.abstract}</p>
                            {/* <p>vote: {movie.vote}</p> */}
                        </section>
                        <section>
                            <div className='row-reviewCard'>
                                {movie.reviews.map((curReview) => (
                                    <ReviewCard 
                                    key = {curReview.id}
                                    review = {curReview}/>
                                ))}           
                            </div>
                        </section>
                    </div>
                )
            }
        </>
    )
}

export default MovieDetails