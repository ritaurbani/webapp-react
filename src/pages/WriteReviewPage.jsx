import React from 'react'

const WriteReviewPage = () => {

    const [formData, setFormData] = useState({name:"",content: "", })

    const handleChange = (e) => {
        const keyToChange = event.target.name;
        const newValue = event.target.value;
        setFormData({...formData,[keyToChange]:newValue})
    };

    const handleSubmit = (e) => {
        event.preventDefault();
        //i dati del form vengono postati nel backend 
        axios.post(`http://localhost:3000/movies`, formData).then((resp) => {
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
    <div>
        <h2>Leave a Review</h2>
        <form onSubmit={handleSubmit}>
            {/* name input */}
            <div>
                <label htmlFor="">Name</label>
                <input 
                type="text"
                id=''
                placeholder=''
                name='content'
                value={formData.name}
                onChange={handleChange}/>
            </div>
            {/* text input */}
            <div>
                <label htmlFor="">Write a review</label>
                <textarea 
                type="text"
                id=''
                placeholder=''
                name='content'
                value={formData.content}
                onChange={handleChange}></textarea>
            </div>
            {/* stars */}
            {/* <div>
                {[1,2,3,4,5].map((star) => (
                    <span onClick={}><i key={i} className="fa-regular fa-star"></i></span>
                ))}
            </div> */}
            <button type='submit'>Submit your review</button>
        </form>
    </div>
  )
}

export default WriteReviewPage