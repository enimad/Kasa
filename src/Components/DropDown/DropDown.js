import React, { useState } from 'react';

import "./DropDown.css";

import Arrow from '../../Assets/Images/Components/DropDown/arrow.png';

function DropDown({ title, content, fontsize }) {
    const [dropDown, setDropDown] = useState(false)

    const classToggle = () => {
        setDropDown(!dropDown);
    }

    if (window.location.pathname === "/a-propos") {
        return (
            <section className='dropdown'>
                <div className='dropdown-titre-wrapper'>
                    <h3 className='dropdown-titre'>{title}</h3>
                    <img className={`dropdown-img ${dropDown ? "rotate" : ""}`} src={Arrow} alt='Arrow' onClick={classToggle}></img>
                </div>
                <p className={`dropdown-content ${dropDown ? "" : "displayNone"}`}>{content}</p>
            </section>
        );
    }

    else {
        return (
            <section className='dropdown'>
                <div className='dropdown-titre-wrapper'>
                    <h3 className={`dropdown-titre ${fontsize}`}>{title}</h3>
                    <img className={`dropdown-img ${dropDown ? "rotate" : ""}`} src={Arrow} alt='Arrow' onClick={classToggle}></img>
                </div>
                <div className={`dropdown-content ${fontsize} ${dropDown ? "" : "displayNone"}`}>{content}</div>
            </section>
        );
    }

};

export default DropDown;