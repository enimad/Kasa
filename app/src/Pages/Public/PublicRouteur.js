import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Apropos, Logement } from '@/Pages/Public/Index';

import Layout from '@/Layouts/Layout';
import Erreur404 from '@/Pages/Public/404/404';

const PublicRouteur = () => {
    return (
        <Routes>
            <Route element={<Layout></Layout>}>
                <Route path="" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home></Home>} />
                <Route path="/logement/:id" element={<Logement></Logement>} />
                <Route path="/a-propos" element={<Apropos></Apropos>} />
                <Route path="*" element={<Erreur404></Erreur404>} />
            </Route>
        </Routes>
    )
};

export default PublicRouteur;