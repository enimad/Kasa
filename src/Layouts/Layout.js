import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css'

import Header from './Header/Header';
import Footer from './Footer/Footer'

const Layout = () => {
    return (
        <div className='layout'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;