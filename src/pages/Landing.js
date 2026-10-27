import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/categories";
import { useData } from "../DataContext";
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
              What to know before the 2026 midterm elections
            </h2>
          </div>

          <p className="Description">
            Westwood residents will vote on several races, 14 statewide ballot measures and 10 local ballot measures in the 2026 midterm elections. The Daily Bruin previews a Westwood voter’s ballot ahead of Election Day on Nov. 3. Select a button below to learn more.
          </p>
        </div>

        <div className="Button-grid">
          {categories.map((c) => (
            <Link key={c.slug} to={`/${c.slug}`} className="Button-link">
              <h3 className={`Button ink-text ${c.size ?? ""}`}>{c.title}</h3>
            </Link>
          ))}
        </div>
        
      </div>
    </>
  );
}

export default Landing;