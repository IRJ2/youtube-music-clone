import React from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';
import './Home.css'
import GenreButton from '../../components/buttons/Genre-button/Genre-button';

const Home = () => {
    return (
        <div className='home'>
            <Searchbar />
            {/* Genre */}
            <section>
                <GenreButton value='Romance' />
                <GenreButton value='Workout' />
                <GenreButton value='Podcasts' />
                <GenreButton value='FeelGood' />
                <GenreButton value='Party' />
                <GenreButton value='Relax' />
                <GenreButton value='Energize' />
            </section>
        </div>
    );
}

export default Home;
