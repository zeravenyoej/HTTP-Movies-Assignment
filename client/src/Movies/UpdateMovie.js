import React, { useState } from 'react';

const UpdateMovie = (props) => {

    const [updatedMove, setUpdatedMovie] = useState({
        id: '',
        title: '',
        director: '',
        metascore: '',
        stars: []
    });

    const handleChange = e => {
        setUpdatedMovie({
            ...updatedMove,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault()
    };

    return (
        <div className='updateDiv'>
            <form className='updateForm'>
                <input className='inputs' type='text' name='title' placeholder='Title' value={updatedMove.title} onChange={handleChange}/>
                <input className='inputs' type='text' name='director' placeholder='Director' value={updatedMove.director} onChange={handleChange}/>
                <button id='submit' onClick={handleSubmit}>Submit Edits</button>
            </form>
        </div>
    )
};

export default UpdateMovie;