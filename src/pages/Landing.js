
import React from "react";
import "./Landing.css";

function Landing() {
  return (
    <>
      <svg className="filter-defs">
        <filter id="ink-bleed">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.1"
            numOctaves="3"
            seed="8"
          />
          <feDisplacementMap
            in="SourceGraphic"
            scale="2"
          />
        </filter>
      </svg>

      <div className="content">
        <div className="Intro">
          <div className="Heading">
            <h1 className="ink-text">Ballot Breakdown</h1>
            <h2 className="ink-text">
              What to know before the 2026 Midterm Elections
            </h2>
          </div>

          <p className="Description">
            From the governor’s race to local ballot measures, this year’s
            midterm elections will shape California and Los Angeles for years
            to come. The Daily Bruin breaks down the candidates and measures
            on the ballot so you know what to expect before you vote. Select
            a race below to learn more.
          </p>
        </div>

        <div className="Button-grid">
          <h3 className="Button ink-text bigger-text">Governor</h3>
          <h3 className="Button ink-text bigger-text">Mayor</h3>
          <h3 className="Button ink-text smaller-text">State Assembly</h3>
          <h3 className="Button ink-text bigger-text">State Senate</h3>
          <h3 className="Button ink-text smaller-text">
            State Ballot Measures
          </h3>
          <h3 className="Button ink-text smaller-text">
            Local Ballot Measures
          </h3>
        </div>
      </div>
    </>
  );
}

export default Landing;
