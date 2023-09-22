import React from 'react';
import './Explore.css';
import Navbar from '../../components/Navbar/Navbar';
import Searchbar from '../../components/Searchbar/Searchbar';
const Explore = () => {
    return (
        <div className='explore'>
            <Navbar />
            <div className='explore-cont'>
                <Searchbar />
            </div>
        </div>
    );
};

export default Explore;
