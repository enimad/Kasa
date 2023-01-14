import React from 'react';
import { Link } from 'react-router-dom';

import "./Error404.css";
import logo_404 from '@/Assets/Images/Pages/Error404/logo_error404.png';

const error404 = () => {
    return (
        <section className='error404'>
            <img className='error404-logo' src={logo_404} alt='Landscape' />
            <h1>Oups! La page que vous demandez n'existe pas.</h1>
            <p><Link to='Home'>Retourner sur la page d’accueil</Link></p>
        </section>
    );
};

export default error404;