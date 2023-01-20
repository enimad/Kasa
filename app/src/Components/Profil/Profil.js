import React from 'react';

import "@/Components/Profil/Profil.css";

function Profil({ name, picture }) {
    return (
        <section className='profil'>
            <h1 className='profil-name'>{name}</h1>
            <img className='profil-picture' src={picture} alt="Photographie de l'hôte" />
        </section>
    );
};

export default Profil;