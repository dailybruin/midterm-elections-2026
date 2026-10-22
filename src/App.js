import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import CategoryPage from './pages/CategoryPage';

function App() {
  /*
  const [ data, setData ] = useState(null);

  useEffect(() => {
    fetch("<TODO: insert api url here>")
    .then(res => res.json())
    .then(res => setData(res.data['article.aml']))
  }, [])

  return data && ( */
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/:slug" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;