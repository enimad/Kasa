import React from 'react';
import "@/Components/Banner/Banner.css";

function Banner({ img, texte }) {
    return (
        <div className="banner">
            <img className="banner-img" src={img} alt='Landscape' />
            <div className="banner-sombre"></div>
            <h1>{texte}</h1>
        </div>
    )
}

export default Banner;