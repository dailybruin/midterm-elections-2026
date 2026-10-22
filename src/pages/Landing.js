import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/categories";
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
          <feDisplacementMap in="SourceGraphic" scale="2" />
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
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={`/${c.slug}`}
              className="Button-link"
            >
              <h3 className={`Button ink-text ${c.size}`}>{c.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Landing;