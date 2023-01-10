import React from 'react';
import "./Footer.css";
import logo from '@/Assets/Images/Components/Footer/logo_footer.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <img className='logo_footer' src={logo} alt='Kasa logo' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;