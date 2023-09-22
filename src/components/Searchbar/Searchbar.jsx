import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faSearch } from '@fortawesome/free-solid-svg-icons'
import './Searchbar.css';

const Searchbar = () => {
    return (
        <div className='searchbar'>
            <div className='searchbar-box'>
                <div className="searchbar-search-icon-box">
                    <FontAwesomeIcon className='searchbar-search-icon' icon={faSearch} />
                </div> 
                <input className='searchbar-input' type="text" placeholder='Search songs,albums, artists, podcasts' />
            </div>
            <div className='searchbar-menu'>
                <div className="searchbar-icon-box"></div>
                <FontAwesomeIcon icon={faEllipsisVertical} />
                <button className="searchbar-signin-btn">
                    Sign in
                </button>
            </div>
        </div>

    );
}

export default Searchbar;
