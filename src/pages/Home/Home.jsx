import React from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';
import './Home.css'
import GenreButton from '../../components/buttons/Genre-button/Genre-button';
import Heading from '../../components/buttons/Heading/Heading';
import MusicListItem from '../../components/Music-list-item/Music-list-item';
import MusicCard from '../../components/Music-card/Music-card';
import Navbar from '../../components/Navbar/Navbar';
import Data from '../../data.json' // Importing data from data.json
const Home = () => {
    const songs = Data.songs;
    const quickPicks = songs.slice(0, 12);
    const indiaHits = songs.slice(9, 15);
    return (
        <div className='home'>
            <Navbar />
            <div className='home-cont'>
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
                {/* Quick picks */}
                <section>
                    <div>
                        <Heading subheading='Start radio from a song' heading='Quick Picks' />
                    </div>
                    <div className='music-list'>
                        {
                            quickPicks.map((song) => {
                                return <MusicListItem imagesrc={song.banner} title={song.title} artist={song.artist} />
                            })
                        }
                    </div>
                </section>
                {/* India's Biggest Hits */}
                <section>
                    <div>
                        <Heading subheading='Start radio from a song' heading='Quick Picks' />
                    </div>
                    <div className="card-list">
                        {
                            indiaHits.map((song) => {
                                return <MusicCard imgsrc={song.banner} title={song.title} artist={song.artist} />
                            })
                        }
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
