import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import User from "./components/User/User";
import Recognize from "./components/Recognize/Recognize";
import Profile from "./components/Profile/Profile";
// import Reward from "./components/Reward/Reward";
// import Setting from "./components/Setting/Setting";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/recognize" element={<Recognize />} />
      <Route path="/profile" element={<Profile />} />
      {/* <Route path="/reward" element={<Reward />} />
      <Route path="/setting" element={<Setting />} /> */}
    </Routes>
  );
};

export default App;
