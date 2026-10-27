import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TeamCredits from "./pages/Credits";
import Landing from "./pages/Landing";
import CategoryPage from "./pages/CategoryPage";
import { DataContext } from "./DataContext";

const API =
  "https://oink.dailybruin.com/api/packages/flatpages/midterms-2026";

// Served from a subpath in production, from the root in local dev
const BASENAME =
  process.env.NODE_ENV === "production" ? "/2026/midterm-elections" : "/";

// resets scroll to the top when you change pages
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API)
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
      })
      .then((res) => setData(res.data["article.aml"]))
      .catch(setError);
  }, []);

  if (error) return <p>Something went wrong loading this page.</p>;
  if (!data) return null;

  return (
    <DataContext.Provider value={data}>
      <BrowserRouter basename={BASENAME}>
        <ScrollToTop />
        <div className="App">
          {/* Shared ink filter: lives here so every page can use url(#ink-bleed) */}
          <svg className="filter-defs" aria-hidden="true" focusable="false">
            <defs>
              <filter id="ink-bleed">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.04"
                  numOctaves="3"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="3"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
              <filter id="ink-light">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.03"
                  numOctaves="2"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="1.5"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </defs>
          </svg>

          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/credits" element={<TeamCredits />} />
            <Route path="/:slug" element={<CategoryPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;