import React from 'react';
import { Outlet } from 'react-router-dom';
import '@/Layouts/Layout.css'

import Header from '@/Layouts/Header/Header';
import Footer from '@/Layouts/Footer/Footer'

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