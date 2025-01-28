import React from 'react'
import { useState } from 'react'

const initialData = {
    name: "",
    text: "",
}

const ReviewForm = () => {

    const apiUrl = import.meta.env.VITE_BACKEND_URL

    const availableScore = Array.from(Array(6).keys())
   
    const [formData, setFormData] = useState(initialData)

    const handleChange = (event) => {
        const keyToChange = event.target.name;
        const newValue = event.target.value;
        setFormData({ ...formData, [keyToChange]: newValue })
    };

    const handleSubmit = (e) => {
        event.preventDefault();
        //i dati del form vengono postati nel backend 
        axios.post(`${apiUrl}/movies`, formData).then((resp) => {
            //Ora non ho lista di post-che e nell altra pagina-qui faccio redirect a quella lista o singolo post
            navigate("/posts")
            // //Il server salva il nuovo post e restituisce la risposta con i dati del post appena salvato.
            // console.log(resp)
            // // 2 creo la copia dell'array posts precedente, aggiungendo il nuovo post
            // const newArray = [...posts, resp.data];
            // // 3. L'array posts viene aggiornato con il nuovo post - setPosts sincronizza l'interfaccia utente ta con il backend
            // setPosts(newArray);
            // // 4. Ripulisco i campi del form reset back to initial values after the post has been added.
            // setFormData(initialFormData);
        })
    }

  return (
    
      <div className='form-container'>
          <form onSubmit={handleSubmit}>
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
                <select className='form-select' name="" id="">
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
                      name='content'
                      value={formData.content}
                      onChange={handleChange}></textarea>
              </div>

              <button className='btn' type='submit'>Submit your review</button>
          </form>
      </div>

  )
}

export default ReviewForm

