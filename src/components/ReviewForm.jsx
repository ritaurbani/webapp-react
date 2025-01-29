import React from 'react'
import { useState } from 'react'

const initialData = {
    name: "",
    text: "",
    vote: 0,
}

const ReviewForm = ({handleSubmit,formData, setFormData}) => {

    const apiUrl = import.meta.env.VITE_BACKEND_URL

    const availableScore = Array.from(Array(6).keys())

    const [error, setError] =useState(false);

    const isDataValid = () => {
        if (formData.name.length <= 3 || 
            formData.vote < 0 || 
            formData.vote > 5 || 
            (formData.text.length > 0 && formData.length < 5)) {
            return false  //mi fermo perche errore non ce 
        }
        return true
    };

  const handleValidationSubmit = (event) => {
    event.preventDefault();
    setError(false);
    if(!isDataValid()) {
        setError(true);
    } else {
        handleSubmit(formData)
    }
  }
   

    //funzione che chiamiamo al cambiamento dell input per aggiornare i valori di initial data
    const handleChange = (event) => {
        //prendere nome e valore del campo da cambiare da aggiungere all obj iniziale
        //const {value, name} = event.target
        const keyToChange = event.target.name;
        const newValue = event.target.value;
        setFormData({ ...formData, [keyToChange]: newValue })
    };


  return (
    
      <div className='form-container'>

          {/* funzione per inviare i dati del form, dove formData è l'oggetto contenente i dati da inviare. */}
          {/* <form onSubmit={(event) => {event.preventDefault(); handleSubmit(formData)}}> */}
          <form onSubmit={handleValidationSubmit}>
            <h2>Leave a review</h2>

              {/* name input */}
              <div>
                  <label className='form-label' htmlFor="username">Name</label>
                  <input
                  className='form-input'
                      type="text"
                      placeholder='insert your name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange} />
              </div>
              {/* VOTO */}
             <div>
                  <label className='form-label' htmlFor="">Select a score</label>
                  <select className='form-select' name="vote" id="" onChange={handleChange}>
                    {availableScore.map((curVote) => (
                        <option key={curVote} value={curVote}>{curVote}</option>
                    ))}
                    
                </select>
             </div>

              {/* text input */}
              <div>
                  <label className='form-label' htmlFor="text">Leave a review</label>
                  <textarea
                      className='form-text'
                      type="text"
                      placeholder='Leave a review'
                      name='text'
                      value={formData.text}
                      onChange={handleChange}></textarea>
              </div>

            {error && (
                <div className='alert-banner'>VAlori Errati</div>
            )}
              <button className='btn' type='submit'>Submit your review</button>
          </form>
      </div>

  )
}

export default ReviewForm

