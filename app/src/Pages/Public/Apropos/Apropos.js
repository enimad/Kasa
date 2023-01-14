import React from 'react';
import "@/Pages/Public/Apropos/Apropos.css";
import Banner from "@/Components/Banner/Banner";
import BannerImg from "@/Assets/Images/Pages/Apropos/bannerapropos.png";

const Apropos = () => {
    return (
        <section className='apropos'>
            <Banner img={BannerImg} texte="" />
        </section>
    );
};

export default Apropos;