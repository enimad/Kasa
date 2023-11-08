import React from 'react';
import "./Banner.css";

function Banner({ image, texte }) {

    if (window.location.pathname === "/a-propos") {
        return (
            <div className="banner banner-height">
                <img className="banner-img" src={image} alt='Paysage naturel' />
                <div className="banner-sombre"></div>
                <h1>{texte}</h1>
            </div>
        )
    }
    else {
        return (
            <div className="banner">
                <img className="banner-img" src={image} alt='Paysage naturel' />
                <div className="banner-sombre"></div>
                <h1>{texte}</h1>
            </div>
        )
    }
}

export default Banner;