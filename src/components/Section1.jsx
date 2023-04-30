import React from "react";

function Section1(props) {
    return (
        <section class="container-fluid">

    <div class="row summary-row curved-card">

      <div class="col summary-col">
        <h2>{props.title}</h2>
        <p>Motivated, personable IT professional with 4 year college degree. Ability to quickly adapt to new designs,
          processes, and environments. Diplomatic and tactful with professionals and non-professionals at all levels.
          Accustomed to handling sensitive, confidential records.</p>

      </div>

    </div>

  </section>
    );
}

export default Section1;