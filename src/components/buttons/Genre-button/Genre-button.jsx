import React from 'react';
import './Genre-button.css';

const GenreButton = (props) => {
    return (
        <div className="genre-button-container">
            <button className='genre-button'>{props.value}</button>
        </div>
    );
}

export default GenreButton;
