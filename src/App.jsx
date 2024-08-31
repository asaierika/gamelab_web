// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css'; 

function App() {
  const [activeTab, setActiveTab] = useState('overview'); // Default active tab

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <Content activeTab={activeTab} />
    </div>
  );
}

export default App;
