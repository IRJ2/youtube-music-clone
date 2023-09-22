import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/2048px-Youtube_Music_icon.svg.png" alt="logo" />
                <h1>Music</h1>
            </div>
            <div className="navbar-menu">
                <button className='navbar-menu-item'>Home</button>
                <button className='navbar-menu-item'>Explore</button>
                <button className='navbar-menu-item'>Library</button>
            </div>
            <hr />
            <button className='navbar-sign-in-btn' >Sign in</button>
            <p className='navbar-caption'>Sign in to create & share playlists, get personalized recommendations, and more.</p>
        </div>
    );
}

export default Navbar;
