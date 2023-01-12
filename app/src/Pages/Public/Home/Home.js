import React from 'react';
import "./Home.css";
import img from '@/Assets/Images/Components/Home/img_home_section.svg';

const Home = () => {
    return (
        <div className='home'>
            <header className='section-banner'>
                <img className='img_section-banner' src={img} alt='Landscape' />
                <h1>Chez vous, partout et ailleurs</h1>
            </header>
            <section className='section-cards'>
                <div className='card'>
                    <h2>Titre de la location</h2>
                </div>
                <div className='card'>
                    <h2>Titre de la location</h2>
                </div>
                <div className='card'>
                    <h2>Titre de la location</h2>
                </div>
            </section>
        </div>
    );
};

export default Home;