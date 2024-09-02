import React from "react";

interface Props {
  activeTab: any;
  setActiveTab: any;
}

const Sidebar = ({ activeTab, setActiveTab }: Props) => {
  const titles = ["Overview", "Members", "Activities", "Awards"];
  const tabs = ["overview", "members", "activities", "awards"];
  return (
    <div className="sidebar">
      {tabs.map((tab, i) => (
        <div className="row-container" style={{ gap: "1rem" }}>
          <button
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {titles[i]}
          </button>
        </div>
      ))}
      {/* <div className="row-container" style={{ gap: "1rem" }}>
        <div className="circle"></div>
        <button
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
      </div>

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
      </button> */}
      <img
        src={"/logo.png"}
        style={{ width: "12rem", padding: "2rem 0" }}
      ></img>
    </div>
  );
};

export default Sidebar;
