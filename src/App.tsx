// src/App.js
import React, { useState, useContext, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import NameCard from "./components/NameCard";
import HintBox from "./components/HintBox";
import Start from "./components/Start";
import "./App.css";
import { AppContext } from "./AppContext";

function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const { isNameCardActive } = useContext(AppContext);

  return (
    <div className="app-container">
      <Start></Start>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Content activeTab={activeTab} />
      <NameCard></NameCard>
      <HintBox></HintBox>
    </div>
  );
}

export default App;
