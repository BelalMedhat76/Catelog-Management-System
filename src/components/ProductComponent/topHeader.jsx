import React from "react";
import "./ProductHome.css";
import Profile from "../ProfileMenu/profile";
import { Component } from "react";
import { FiSearch } from "react-icons/fi";
import { RiAlarmWarningLine } from "react-icons/ri";

class TopHead extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="searchLine2">
          <ul>
            <li style={{ fontSize: "20px", fontWeight: "bold" }}>
              My Products
            </li>
            <li>Products/MyProducts</li>
          </ul>
          <div className="SearchBar2">
            <FiSearch /> Search For ...
          </div>
          <div style={{ padding: "20px", fontSize: "20px" }}>
            <RiAlarmWarningLine />
          </div>
          <Profile />
        </div>
      </>
    );
  }
}

export default TopHead;
