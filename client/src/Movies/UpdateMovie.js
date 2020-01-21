import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateMovie = (props) => {

    const [updatedMove, setUpdatedMovie] = useState({
        id: '',
        title: '',
        director: '',
        metascore: '',
        stars: []
    });

    useEffect(()=>{
        axios.get(`http://localhost:5000/update-movie/${props.match.params.id}`)
        .then(res=>{
            setUpdatedMovie(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[props.match.params.id])

    const handleChange = e => {
        setUpdatedMovie({
            ...updatedMove,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault()
        console.log('updated')
    };

    return (
        <div className='updateDiv'>
            <h1>Update Movie</h1>
            <form className='updateForm'>
                <input className='inputs' type='text' name='title' placeholder='Title' value={updatedMove.title} onChange={handleChange}/>
                <input className='inputs' type='text' name='director' placeholder='Director' value={updatedMove.director} onChange={handleChange}/>
                <button id='submit' onClick={handleSubmit}>Submit Edits</button>
            </form>
        </div>
    )
};

export default UpdateMovie;