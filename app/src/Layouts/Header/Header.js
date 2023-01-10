import React from 'react';
import './Header.css';
import logo from '@/Assets/Images/Components/Header/logo_header.svg';

const Header = () => {
    return (
        <header className='header'>
            <img className='logo_header' src={logo} alt='Kasa logo' />
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>A Propos</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;