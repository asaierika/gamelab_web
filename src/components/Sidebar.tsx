import React from "react";

interface Props {
  activeTab: any;
  setActiveTab: any;
}

const Sidebar = ({ activeTab, setActiveTab }: Props) => {
  return (
    <div className="sidebar">
      <img
        src={"/logo.png"}
        style={{ width: "10rem", padding: "2rem 0 0 0" }}
      ></img>
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
    </div>
  );
};

export default Sidebar;
