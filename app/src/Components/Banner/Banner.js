import React from 'react';
import "@/Components/Banner/Banner.css";

function Banner({ image, texte }) {
    return (
        <div className="banner">
            <div className={`banner-img ${image}`} alt='Paysage naturel'></div>
            <div className="banner-sombre"></div>
            <h1>{texte}</h1>
        </div>
    )
}

export default Banner;