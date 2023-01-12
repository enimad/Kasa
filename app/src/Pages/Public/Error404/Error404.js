import React from 'react';
import { Link } from 'react-router-dom';

import "./Error404.css";
import logo_404 from '@/Assets/Images/Components/Error404/logo_error404.svg';

const error404 = () => {
    return (
        <div className='error404'>
            <img className='logo_404' src={logo_404} alt='Landscape' />
            <h1>Oups! La page que vous demandez n'existe pas.</h1>
            <p><Link to='Home'>Retourner sur la page d’accueil</Link></p>
        </div>
    );
};

export default error404;