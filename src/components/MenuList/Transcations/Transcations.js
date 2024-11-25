import { useState } from "react";
import Menu from "../../Menu/Menu";
import Header from "../../Header/Header";
import Overview from "./Overview";
import Purchase from "./Purchase";
import Billing from "./Billing";
import Returns from "./Returns";
import "./Transcations.css";

const Transcation = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return <Overview />;
      case "Purchase":
        return <Purchase />;
      case "Billing":
        return <Billing />;
      case "Returns":
        return <Returns />;
      default:
        return null;
    }
  };

  return (
    <div className="transcation-wrap">
      <Menu />
      <div className="container">
        <Header />
        <div className="transcation">
          <div className="transcation-tab">
            {["Overview", "Purchase", "Billing", "Returns"].map((tab) => (
              <div
                key={tab}
                className={`tab-item ${activeTab === tab ? "active-tab" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
          <div className="tab-content">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Transcation;
