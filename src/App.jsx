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
  const { isNameCardActive,setIsNameCardActives} = useContext(AppContext)

  return (
    <div className="app-container">
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
