import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";        // new
import Footer from "./components/Footer";
import TeamCredits from "./pages/Credits";  // new, adjust to your file name/path
import Landing from "./pages/Landing";
import CategoryPage from "./pages/CategoryPage";
import { DataContext } from "./DataContext";

const API =
  "https://oink.dailybruin.com/api/packages/flatpages/midterms-2026";

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
      <BrowserRouter>
        <ScrollToTop />
          <div className="App">
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