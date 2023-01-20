import React from 'react';

import "@/Components/Tags/Tags.css";

function Tags({ nameTag }) {
    return (
        <li className='tag'>{nameTag}</li>
    );
};

export default Tags;