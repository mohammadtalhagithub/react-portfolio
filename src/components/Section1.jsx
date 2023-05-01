import React from "react";
import './Section.css';

function Section1(props) {
  return (
    <div class="section-container">
        <h2>{props.title}</h2>
        <p>Motivated, personable IT professional with 4 year college degree. Ability to quickly adapt to new designs,
          processes, and environments. Diplomatic and tactful with professionals and non-professionals at all levels.
          Accustomed to handling sensitive, confidential records.</p>
    </div>
  );
}

export default Section1;