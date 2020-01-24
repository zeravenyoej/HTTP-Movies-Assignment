import React, { useState } from 'react';
import axios from 'axios'

const AddForm = (props) => {

    const [addedMovie, setAddedMovie] = useState({
        title: '',
        director: '',
        metascore: '', 
        // stars: '', 
        id: ''
    })

    const handleChange = e => {
        setAddedMovie({
            ...addedMovie,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(`http://localhost:5000/api/movies/`, addedMovie )
        .then(res=>{
            props.history.push('/')
            setAddedMovie({
                ...addedMovie
            })
        })
        .catch(err=>console.log(err))
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='title' placeholder='title' value={addedMovie.title} onChange={handleChange}/>
                <input type='text' name='director' placeholder='Name' value={addedMovie.director} onChange={handleChange}/>
                <input type='text' name='metascore' placeholder='Metascore' value={addedMovie.metascore} onChange={handleChange}/>
                <button>Add Movie</button>
            </form>
        </div>
    );
};

export default AddForm;