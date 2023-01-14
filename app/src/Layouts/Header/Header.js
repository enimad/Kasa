import React from 'react';
import './Header.css';
import logo from '@/Assets/Images/Layouts/Header/logo_header.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <img className='header-logo' src={logo} alt='Kasa logo' />
            <nav>
                <ul>
                    <li><Link to='Home'>Accueil</Link></li>
                    <li><Link to='A-propos'>A Propos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;