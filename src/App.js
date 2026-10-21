import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing' ;

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
    <div className="App">
      <Header/>
      <Landing/>
      <Footer/>
    </div>
  );
}

export default App;
