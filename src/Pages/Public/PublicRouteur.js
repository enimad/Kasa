import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Apropos, Logement } from '../Public/Index';

import Layout from '../../Layouts/Layout';
import Erreur404 from '../Public/Error404/Error404';

const PublicRouteur = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/Kasa" element={<Navigate to="/home" />} />

                <Route path="" element={<Navigate to="/home" />} />

                <Route path="/home" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/a-propos" element={<Apropos />} />

                <Route path="*" element={<Erreur404 />} />
            </Route>
        </Routes>
    )
};

export default PublicRouteur;