import React from 'react';

import "@/Pages/Public/Logements/Logement.css";

import Carroussel from '@/Components/Carroussel/Carroussel';
import InfosLogement from '@/Components/InfosLogement/InfosLogement';
import Tags from '@/Components/Tags/Tags';
import Profil from '@/Components/Profil/Profil';
import Stars from '@/Components/Stars/Stars';
import DropDown from '@/Components/DropDown/DropDown';

import Arrow from '@/Assets/Images/Components/Carroussel/bigarrow.png';
import StarFull from '@/Assets/Images/Components/Stars/fullstar.png';
import StarEmpty from '@/Assets/Images/Components/Stars/emptystar.png';

import DDArrow from '@/Assets/Images/Components/DropDown/arrow.png';



const Logement = () => {
    return (
        <div className='logement'>

            <Carroussel image="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" arrow={Arrow} number="1" totalnumber="4" />

            <section className='logement-infos'>
                <div className='logement-infos-tags-wrapper'>
                    <InfosLogement title="Appartement cosy" location="Ile de France - Paris 17e" />
                    <ul className='tags'>
                        <Tags nameTag="Batignolle" />
                        <Tags nameTag="Montmartre" />
                        <Tags nameTag="Paris" />
                    </ul>
                </div>
                <div className='logement-profil-stars-wrapper'>
                    <Profil name="Nathalie Jean" picture="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg" />
                    <Stars full={StarFull} empty={StarEmpty} />
                </div>
            </section>
            <section className='logement-dropdown'>
                <DropDown title="Description" image={DDArrow} content="Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement." />
                <DropDown title="Equipments" image={DDArrow} content="Équipements de base" />
            </section >

        </div >
    );
};

export default Logement;