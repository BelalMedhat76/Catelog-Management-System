import React from "react";
import "./dashHome.css";

import { RiAlarmWarningLine, RiDashboardLine } from "react-icons/ri";
import { AiFillMacCommand } from "react-icons/ai";
import { AiFillCheckSquare } from "react-icons/ai";
import { TiGroup } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { FiSearch, FiSettings } from "react-icons/fi";

import CenterDashboard from "../center-dashboardContent/centerContent";
import Profile from "../ProfileMenu/profile";
import RightBar from "../RightSide_Dashboard/RightSide";
import Navbar from "../LeftNav/NAV";
const Dashboard = () => {
  return (
    <>
      <div className="flex-container">
        {/* <Navbar /> */}
        <div className="center-dashboardContet" style={{ padding: "10px" }}>
          <CenterDashboard />
        </div>
        <div className="right-dashboardContet" style={{ padding: "15px" }}>
          <RightBar />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
