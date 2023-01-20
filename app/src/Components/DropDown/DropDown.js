import React, { useState } from 'react';

import "@/Components/DropDown/DropDown.css";

function DropDown({ title, image, content }) {
    const [dropDown, setDropDown] = useState(false)

    const classToggle = () => {
        setDropDown(!dropDown);
    }

    return (
        <section className='dropdown'>
            <div className='dropdown-titre-wrapper'>
                <h3 className='dropdown-titre'>{title}</h3>
                <img className={`dropdown-img ${dropDown ? "rotate" : ""}`} src={image} alt='Arrow' onClick={classToggle}></img>
            </div>
            <p className={`dropdown-content ${dropDown ? "" : "displayNone"}`}>{content}</p>
        </section>
    );
};

export default DropDown;