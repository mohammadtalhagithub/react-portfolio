import React from 'react';
import './TopContainer.css';

function TopContainer(props) {
    return (
        <div className="top-container">
            <h1 id="top-name">{props.topName}</h1>

            <p id="top-caption">{props.topCaption}</p>
        </div>
    );
}

export default TopContainer;
