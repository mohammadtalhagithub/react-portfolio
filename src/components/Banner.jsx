import React from "react";
import "./Banner.css";
import TopContainer from './TopContainer';

const topStyle = {
    position: "relative",
    top: "55px",
    color: "red"
}

const bottomStyle = {
    position: "relative",
    top: "60%",
    color: "#F3E0BE",
    lineHeight: "1px"
}

const customText = {
    name1: "Mohammad Talha",
    name2: "",
    caption1: "A Mechanical Engineer, and a Programmer",
    caption2: "Success is a series of small wins.- Jaime Tardy",

}

function Banner() {
    return (
        <div className="banner">
            <TopContainer
                thisStyle={topStyle}
                thisName={customText.name1}
                thisCaption={customText.caption1}
            />

            <TopContainer
                thisStyle={bottomStyle}
                thisName={customText.name2}
                thisCaption={customText.caption2}
            />
        </div>
    );
}

export default Banner;