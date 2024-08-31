import React from "react";
import Overview from "./contents/Overview.tsx";
import Members from "./contents/Members.tsx";
import Awards from "./contents/Awards.tsx";
import Activities from "./contents/Activities.tsx";
import NameCard from "./NameCard.tsx";

interface Props {
  activeTab: any;
}
const Content = ({ activeTab }: Props) => {
  return (
    <div className="content">
      {/* <img src={logo}></img> */}
      <div>
        {activeTab === "overview" && <Overview></Overview>}
        {activeTab === "members" && <Members></Members>}
        {activeTab === "activities" && <Activities></Activities>}
        {activeTab === "awards" && <Awards></Awards>}
        {activeTab === "joinUs" && <div>Settings Page Content Here.</div>}
      </div>
      <div className="name-card-container">
        <NameCard></NameCard>
      </div>
    </div>
  );
};

export default Content;
