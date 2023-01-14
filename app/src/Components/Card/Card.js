import React from "react";

import "@/Components/Card/Card.css";

function Card({ image, title }) {

    return (
        <li className="card">
            <img className="card-image" src={image} alt="Logement" />
            <div className="card-sombre"></div>
            <h3 className="card-titre">{title}</h3>
        </li>
    );
}

export default Card;