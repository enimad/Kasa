import React from 'react';

import "@/Components/Stars/Stars.css";

import PinkStar from '@/Assets/Images/Components/Stars/pinkstar.png';
import GreyStar from '@/Assets/Images/Components/Stars/greystar.png';

function Stars({ rating }) {

    const rates = [1, 2, 3, 4, 5]
    return (
        <div className='starsWrapper'>
            {rates.map((rate) =>
                rating >= rate
                    ? <img key={rate} className='star' src={PinkStar} alt="Etoile pleine" />
                    : <img key={rate} className='star' src={GreyStar} alt="Etoile vide" />
            )}
        </div>
    );
};

export default Stars;