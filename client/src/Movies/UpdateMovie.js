import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateMovie = (props) => {

    const [newMovie, setNewMovie] = useState({
        title: '',
        director: '',
        metascore: '', 
        stars: '', 
        id: ''
    });

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/movies/${props.match.params.id}`)
        .then(res=>{
            console.log(res.data)
            setNewMovie(res.data)
        })
        .catch(err=>console.log(err))
    },[props.match.params.id]);

    const handleChange = e => {
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault()
        axios.put(`http://localhost:5000/api/movies/${newMovie.id}`, newMovie )
        .then(res=>{

            props.history.push('/')
        })

        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='title' placeholder='title' value={newMovie.title} onChange={handleChange}/>
                <input type='text' name='director' placeholder='Name' value={newMovie.director} onChange={handleChange}/>
                <button>Submit Changes</button>
            </form>
        </div>
    );
};

export default UpdateMovie;