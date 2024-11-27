import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import User from "./components/User/User";
import Recognize from "./components/RecognizeYou/RecognizeYou";
import Profile from "./components/Profile/Profile";
import UserReward from "./components/UserReward/UserReward";
import Setting from "./components/MenuList/setting/setting";
import RecognizeNow from "./components/RecognizeNow/RecognizeNow";
import AdminHome from "./components/MenuList/Home/Home";
import Reward from "./components/MenuList/Reward/Reward";
import Transaction from "./components/MenuList/Transcations/Transcations";
import Employee from "./components/MenuList/Employee/Employee";
import Report from "./components/MenuList/Report/Report";
import Configure from "./components/MenuList/Configure/Configure";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/recognize/recognize-you" element={<Recognize />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/reward" element={<UserReward />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/recognize/recognize-now" element={<RecognizeNow />} />

      <Route path="/admin" element={<AdminHome />} />
      <Route path="/admin/employee" element={<Employee />} />
      <Route path="/admin/reward" element={<Reward />} />
      <Route path="/admin/Report" element={<Report />} />
      <Route path="/admin/transcation" element={<Transaction />} />
      <Route path="/admin/setting" element={<Setting />} />
      <Route path='/admin/configure' element={<Configure />} />
    </Routes>
  );
};

export default App;

