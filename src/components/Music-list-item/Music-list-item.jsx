import React from 'react';
import './Music-list-item.css';
const MusicListItem = (props) => {
    return (
        <div className='misic-list-item'>
            <div className="music-li-img-frame">
                <img src={props.imagesrc} alt={props.title} ></img>
            </div>
            <div className="music-li-info">
                <h3 className="music-li-title">{props.title}</h3>
                <p className="music-li-artist">{props.artist}</p>
            </div>
        </div>
    );
}

export default MusicListItem;
