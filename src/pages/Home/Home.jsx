import React from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';
import './Home.css'
import GenreButton from '../../components/buttons/Genre-button/Genre-button';
import Heading from '../../components/buttons/Heading/Heading';
import MusicListItem from '../../components/Music-list-item/Music-list-item';
import MusicCard from '../../components/Music-card/Music-card';

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
            {/* Quick picks */}
            <section>
                <div>
                    <Heading subheading='Start radio from a song' heading='Quick Picks' />
                </div>
                <div className='music-list'>
                    <MusicListItem imagesrc='https://m.media-amazon.com/images/I/615ZAC0r0qL.jpg' title='Dance Monkey' artist='Tones and I' />
                    <MusicListItem imagesrc='https://m.media-amazon.com/images/I/615ZAC0r0qL.jpg' title='Dance Monkey' artist='Tones and I' />
                    <MusicListItem imagesrc='https://m.media-amazon.com/images/I/615ZAC0r0qL.jpg' title='Dance Monkey' artist='Tones and I' />
                    <MusicListItem imagesrc='https://m.media-amazon.com/images/I/615ZAC0r0qL.jpg' title='Dance Monkey' artist='Tones and I' />
                    <MusicListItem imagesrc='https://m.media-amazon.com/images/I/615ZAC0r0qL.jpg' title='Dance Monkey' artist='Tones and I' />
                    <MusicListItem imagesrc='https://m.media-amazon.com/images/I/615ZAC0r0qL.jpg' title='Dance Monkey' artist='Tones and I' />
                    <MusicListItem imagesrc='https://m.media-amazon.com/images/I/615ZAC0r0qL.jpg' title='Dance Monkey' artist='Tones and I' />
                    <MusicListItem imagesrc='https://m.media-amazon.com/images/I/615ZAC0r0qL.jpg' title='Dance Monkey' artist='Tones and I' />
                    <MusicListItem imagesrc='https://m.media-amazon.com/images/I/615ZAC0r0qL.jpg' title='Dance Monkey' artist='Tones and I' />
                </div>
            </section>
            {/* India's Biggest Hits */}
            <section>
                <div>
                    <Heading subheading='Start radio from a song' heading='Quick Picks' />
                </div>
                <div className="card-list">
                    <MusicCard imgsrc='https://m.media-amazon.com/images/I/615ZAC0r0qL.jpg' title='Dance Monkey' artist='Tones and I' />
                    <MusicCard imgsrc='https://m.media-amazon.com/images/I/615ZAC0r0qL.jpg' title='Dance Monkey' artist='Tones and I' />
                    <MusicCard imgsrc='https://m.media-amazon.com/images/I/615ZAC0r0qL.jpg' title='Dance Monkey' artist='Tones and I' />
                    <MusicCard imgsrc='https://m.media-amazon.com/images/I/615ZAC0r0qL.jpg' title='Dance Monkey' artist='Tones and I' />
                    <MusicCard imgsrc='https://m.media-amazon.com/images/I/615ZAC0r0qL.jpg' title='Dance Monkey' artist='Tones and I' />
                    <MusicCard imgsrc='https://m.media-amazon.com/images/I/615ZAC0r0qL.jpg' title='Dance Monkey' artist='Tones and I' />
                </div>
            </section>
        </div>
    );
}

export default Home;
