import React from 'react';
import './Music-card.css';
const MusicCard = (props) => {
    return (
        <div className='music-card'>
            <div className="music-card-frame">
                <img src={props.imgsrc} alt={props.title} ></img>
            </div>
            <div className="music-card-info">
                <h3 className="music-card-title">{props.title}</h3>
                <p className="music-card-artist">{props.artist}</p>
            </div>
        </div>
    );
}

export default MusicCard;
