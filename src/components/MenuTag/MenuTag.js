import React from 'react';
import './MenuTag.css';

function MenuTag(props) {
    return (
        <div className='MenuTag' id={props.id + 'MenuTag'} >
            <h1>{props.text}</h1>
        </div>
    );
}

export default MenuTag;