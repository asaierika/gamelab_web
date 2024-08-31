// src/Sidebar.js
import React from "react";

interface Props {
  activeTab: any;
  setActiveTab: any;
}

const Sidebar = ({ activeTab, setActiveTab }: Props) => {
  return (
    <div className="sidebar">
      <button
        className={activeTab === "overview" ? "active" : ""}
        onClick={() => setActiveTab("overview")}
      >
        Overview
      </button>
      <button
        className={activeTab === "members" ? "active" : ""}
        onClick={() => setActiveTab("members")}
      >
        Members
      </button>
      <button
        className={activeTab === "activities" ? "active" : ""}
        onClick={() => setActiveTab("activities")}
      >
        Activities
      </button>
      <button
        className={activeTab === "awards" ? "active" : ""}
        onClick={() => setActiveTab("awards")}
      >
        Awards
      </button>
      <button
        className={activeTab === "joinUs" ? "active" : ""}
        onClick={() => setActiveTab("joinUs")}
      >
        Join us
      </button>
      {/* Add more tabs as needed */}
    </div>
  );
};

export default Sidebar;
