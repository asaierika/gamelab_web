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
        <div key={tab} className="row-container" style={{ gap: "1rem" }}>
          <button
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {titles[i]}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
