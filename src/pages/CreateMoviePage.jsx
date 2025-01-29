import React from 'react'
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const intialValues = {
  title: "",
  director: "",
  genre:"",
  abstract: "",
  //file e`un obj con contenuto, dimensioni..ma mettiamo stringa
  image: ""
}


const CreateMoviePage = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_URL

  const navigate = useNavigate();

  const [movieData, setMovieData] = useState(intialValues)

  const handleChange = (event) => {
    // const {name, value} = event.target
    //possiamo caricare piu files ma noi carichiamo solo 1
    const inputName = event.target.name

    if (inputName === "image") {    
      const inputFile = event.target.files[0]
      setMovieData({ ...movieData, image: inputFile })
    }else {    
      const value = event.target.value
      setMovieData({...movieData, [inputName]: value})

    }
  }

const handleSubmit = (event) => {
  event.preventDefault();
  // Non possiamo inviare il file tramite JSON, quindi creiamo l'oggetto FormData
  const dataToSend = new FormData();

  // dataToSend.append("title", movieData.title);
  // dataToSend.append("director", movieData.director);
  // dataToSend.append("abstract", movieData.abstract);
  for (let key in movieData) {
    dataToSend.append(key, movieData[key]);
  }
   axios.post(`${apiUrl}/movies`, dataToSend, {
    headers: {
       "Content-Type": "multipart/form-data", // Serve per dire al server che i dati contengono anche i file
    }
   }).then((resp) =>{
     // Quando arriva il messaggio di conferma facciamo redirect alla pagina di libri
     navigate("/movies");
   }
  ).catch((error) => {
    console.error("Errore durante l'invio dei dati:", error);
    alert("Si è verificato un errore, riprova.");
  });

}


  return (
    <section>
      <h2>Post a movie</h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="title">title
            <input
            required
            minLength="3"
            className='createMovie'
            type="text"
            name='title'
            value={movieData.title}
            onChange={handleChange} />
          </label>
        </div>

        <div>
          <label htmlFor="">
            director
            <input 
              className='createMovie'
            type="text"
            name='director'
              value={movieData.director}
              onChange={handleChange} />
          </label>
        </div>

        <div>
          <label htmlFor="">
            genre
            <input 
              className='createMovie'
            type="text"
            name='genre'
              value={movieData.genre}
              onChange={handleChange} />
          </label>
        </div>

        <div>
          <label htmlFor="">
            abstract
            <textarea
              className='createMovie'
            type="text"
            name='abstract'
              value={movieData.abstract}
              onChange={handleChange}>
            </textarea>
          </label>
        </div>

        <div>
          <label htmlFor="image">
            <input
              className='createMovie'
              type="file"
              name='image'
              onChange={handleChange} />
          </label>
        </div>
        <button className='btn' type='submit'>Submit</button>

      </form>
    </section>
  )
}

export default CreateMoviePage