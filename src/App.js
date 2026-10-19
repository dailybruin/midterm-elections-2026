import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CandidateDropdown from "./components/CandidateDropdown";

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("<TODO: insert api url here>")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  //ADD THIS after 'return': data && 
  return(
    <div className="App">
      <Header/>
      Hello Daily Bruin!
      <CandidateDropdown name = "Xaiver" description = "lorem" picture = "picture"/>
      <Footer/>
    </div>
  );
}

export default App;
