import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateMovie = (props) => {

    const [updatedMovie, setUpdatedMovie] = useState({
        id: '',
        title: '',
        director: '',
        metascore: '',
        stars: []
    });

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/movies/${props.match.params.id}`)
        .then(res=>{
            setUpdatedMovie(res.data)
        })
        .catch(err=>{
            console.log(err.response)
        })
    },[props.match.params.id])

    const handleChange = e => {
        setUpdatedMovie({
            ...updatedMovie,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault()
        axios.put(`http://localhost:5000/api/movies/${updatedMovie.id}`, updatedMovie )
            .then(res=>{
                props.history.push('/')
            })
            .catch(err=>{
                console.log(err)
            })
    };

    return (
        <div className='updateDiv'>
            <h1>Update Movie</h1>
            <form className='updateForm' onSubmit={handleSubmit}>
                <input className='inputs' type='text' name='title' placeholder='Title' value={updatedMovie.title} onChange={handleChange}/>
                <input className='inputs' type='text' name='director' placeholder='Director' value={updatedMovie.director} onChange={handleChange}/>
                <button id='submit' type='submit'>Submit Edits</button>
            </form>
        </div>
    )
};

export default UpdateMovie;