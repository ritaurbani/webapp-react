import React from 'react'
import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ReviewCard from '../components/ReviewCard'
import ReviewForm from '../components/ReviewForm'

const initialData = {
    name: "",
    text: "",
    vote: 0,
}

const MovieDetails = () => {

    const apiUrl = import.meta.env.VITE_BACKEND_URL

    const [movie, setMovie] = useState(null)
    const [formData, setFormData] = useState(initialData)
    
    //preleva id pagina corrente che sa dal percorso - prelevare i details del movie > axios per other info al mounting della pagina
    //abbiamo rotta con parametro che prendiamo con useParmas e usiamo per fare chiamata API
    const { slug } = useParams()

    const Navigate = useNavigate()

    const getMovie = () => {
        //ci arriva un movie solo/obj perche c`e`slug
        axios.get(`${apiUrl}/movies/${slug}`).then((resp) => {
            setMovie(resp.data.data)
        })
    }

    useEffect(() => {
        getMovie()
    }, [])

    // funzione che invia i dati del form al server quando viene premuto submit
    const handleSubmit = (formData) => {
        //i dati del form vengono postati nel backend 
        // axios.post(`${apiUrl}/movies`, formData).then((resp) => {    
        // })
        axios.post(`${apiUrl}/movies/${movie.id}/reviews`, formData).then((resp) => {
            console.log("Review added:", resp.data); 
            setFormData(initialData);
            // Se il salvataggio della review è andata a buon fine richiediamo i dati aggiornati del libro dal server
            getMovie() // Ricarica il film con le recensioni aggiornate
        })
    }


    return (
        <>
            { //perche faccio questo controllo..
                movie && (
                    <div className='container-movieDetail'>
                        <section>
                            <div className='back'>
                                <img className="img-detail" src={`${apiUrl}/img/${movie.image}`} alt="" />
                                <button onClick={() => Navigate(-1)}>Back</button>
                            </div>
                            <h2>{movie.title} </h2>
                            <p><strong>Director</strong>: {movie.director}</p>
                            <p><strong>Genre:</strong> {movie.genre}</p>
                            <p><strong>Released in:</strong> {movie.release_year}</p>
                            <p><strong>Abstract:</strong><br />{movie.abstract}</p>
                            {/* <p>vote: {movie.vote}</p> */}
                        </section>
                        <section>
                            <div className='row-reviewCard'>
                                {movie.reviews.map((curReview) => (
                                    <ReviewCard
                                        key={curReview.id}
                                        review={curReview} />
                                ))}
                            </div>
                        </section>

                        {/* REVIEW-FORM */}
                        <section>
                            <ReviewForm 
                            handleSubmit={handleSubmit}
                            formData={formData}
                            setFormData={setFormData}/>

                        </section>
                    </div>
                )
            }
        </>
    )
}

export default MovieDetails