import React from 'react';

import "@/Components/Carroussel/Carroussel.css";


function Carroussel({ image, arrow, number, totalnumber }) {
    return (
        // Il y a une section en position relative qui comprend: une image en objectfit: cover + une div sombre + une flèche à droite + une flèche à gauche + un indicateur du nombre de photo en bas (1/4)
        <section className='carroussel'>
            <img className="carroussel-image" src={image} alt="Logement" />
            <div className="carroussel-image-sombre"></div>
            <img className="carroussel-arrowleft" src={arrow} alt="Logement" />
            <img className="carroussel-arrowright" src={arrow} alt="Logement" />
            <h3 className='carroussel-number'>{`${number}/${totalnumber}`}</h3>
        </section>
    );
};

export default Carroussel;