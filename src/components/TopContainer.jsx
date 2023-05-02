import React from 'react';
import './TopContainer.css';

function TopContainer(props) {
    return (
        <div className="top-container" style={props.thisStyle}>

            <h1 id='top-name'>{props.thisName}</h1>
            <p id="top-caption">{props.thisCaption}</p>

        </div>
    );
}

export default TopContainer;

/*
let c = "b";

const customStyle = {
    color: "yellowgreen",
    borderRadius: "30px"
}

if (c === "b") {
    customStyle.color = "blue";
}
else if (c === "r") {
    customStyle.color = "red";
}
else if (c === "g") {
    customStyle.color = "green";
}

style={customStyle}
*/