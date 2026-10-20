import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CandidateDropdown from "./components/CandidateDropdown";

import frame from './images/Frame.png'

const props = [
  { name: "Proposition 1", 
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo", 
    image: {frame}}
];

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("<TODO: insert api url here>")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])
 
  return data && (
    <div className="App">
      <Header/>
      Hello Daily Bruin!
      <div style = {{height: 500}}>
        <CandidateDropdown 
          name = {props[0].name} 
          description = {props[0].description} 
          picture = {props[0].image}
        />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
