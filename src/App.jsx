// src/App.js
import React, { useState, useContext } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import NameCard from "./components/NameCard";
import HintBox from './components/HintBox';
import './App.css'; 
import { AppContext } from './AppContext';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const { name,setName, isNameCardActive,setIsNameCardActives} = useContext(AppContext)
  const [inputValue, setInputValue] = useState(name);
  const [isClicked, setIsClicked] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setName(event.target.value);
  };
  const handleClick = ()=>{
    setIsClicked(true);
    setTimeout(()=>setHasStarted(true), 1000);
  }
  return (
    <div className="app-container">
      {!hasStarted && <div className={`overlay column-container ${isClicked ? "fade-out":""}`}>
        <div className="title column-container" style={{gap:"2rem"}}>
          <img style={{width:"20rem"}}src="/logo.png"></img>
          <img src="/images/purple-cat.gif"></img>
          <div className="row-container">  
          <div>My name is...</div>
          <input value={inputValue}  onChange={handleChange} ></input>
          </div>
        
          <button className="light-button" onClick={() => handleClick()}>Start exploring GameLab!</button>
        </div>
      </div>}
      
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Content activeTab={activeTab} />
      <div className={`name-card-container ${isNameCardActive ? "active" : ""}`}>
        <NameCard></NameCard>
      </div>
      <HintBox></HintBox>
    </div>
  );
}

export default App;
