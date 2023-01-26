import React, { useState } from 'react';

import "@/Components/Carroussel/Carroussel.css";

import LeftArrow from '@/Assets/Images/Components/Carroussel/leftarrow.png';
import RightArrow from '@/Assets/Images/Components/Carroussel/rightarrow.png';

function Carroussel({ image }) {

    const [index, setindex] = useState(0)

    const previousImage = () => {
        setindex((prevIndex) => prevIndex === 0 ? image.length - 1 : prevIndex - 1)
    }

    const nextImage = () => {
        setindex((prevIndex) => prevIndex + 1 === image.length ? 0 : prevIndex + 1)
    }

    if (image.length > 1) {
        return (
            <section className="carroussel">
                <img className="leftArrow" src={LeftArrow} alt="Flèche vers la gauche" onClick={() => previousImage()} />
                <div className="carrousselSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {image.map((picture, index) => (
                        <div className="slide" key={index} style={{ background: `no-repeat center/cover url(${picture})` }}></div>
                    ))}
                </div>
                <img className="rightArrow" src={RightArrow} alt="Flèche vers la droite" onClick={() => nextImage()} />
                <span className="slideNumber displayNone"> {index + 1} / {image.length} </span>
            </section>
        );
    }
    else {
        return (
            <section className="carroussel">
                <div className="carrousselSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {image.map((picture, index) => (
                        <div className="slide" key={index} style={{ background: `no-repeat center/cover url(${picture})` }}></div>
                    ))}
                </div>
            </section>
        );
    }

};

export default Carroussel;