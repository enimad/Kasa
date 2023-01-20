import React from 'react';

import "@/Components/Stars/Stars.css";

function Stars({ full, empty }) {
    return (
        <div className='stars-wrapper'>
            <img className='star' src={full} alt="Notation de l'hébèrgement" />
            <img className='star' src={full} alt="Notation de l'hébèrgement" />
            <img className='star' src={full} alt="Notation de l'hébèrgement" />
            <img className='star' src={full} alt="Notation de l'hébèrgement" />
            <img className='star' src={empty} alt="Notation de l'hébèrgement" />
        </div>
    );
};

export default Stars;