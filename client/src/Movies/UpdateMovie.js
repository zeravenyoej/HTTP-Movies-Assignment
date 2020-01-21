import React, { useState } from 'react';

const UpdateMovie = (props) => {

    const [updatedMove, setUpdatedMovie] = useState({
        title: ''
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
        <div>
            <form>
                <input type='text' name='title' placeholder='Title' value={updatedMove.title} onChange={handleChange}/>
                <input type='text' name='director' placeholder='Director' value={updatedMove.director} onChange={handleChange}/>
                <div onClick={handleSubmit}>Submit Edits</div>
            </form>
        </div>
    )
};

export default UpdateMovie;