import React from "react";
import "./Banner.css";
import TopContainer from './TopContainer';

function Banner() {
    return ( 
    <div className="banner">
        <TopContainer
        topName="Mohammad Talha"
        topCaption="A Mechanical Engineer, and a Programmer"/>
        <TopContainer topName="React"/>
    </div>
    );
}

export default Banner;