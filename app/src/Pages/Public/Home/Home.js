import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Home.css";

import img from '@/Assets/Images/Pages/Home/img_home_section.png';

import Banner from "@/Components/Banner/Banner";
import Card from "@/Components/Card/Card";

import ServiceLogement from "@/_Services/logements.service.js";

const Home = () => {
    return (
        <section className='home'>
            <Banner img={img} texte="Chez vous, partout et ailleurs" />

            <ul className='sectionLogements'>
                {
                    ServiceLogement.GetAllLogement().map((logement) =>
                        <NavLink key={logement.id} to={"/logement/" + logement.id + "/#"}>
                            <Card key={logement.id} image={logement.cover} title={logement.title} />
                        </NavLink>
                    )
                }
            </ul>


        </section>
    );
};

export default Home;