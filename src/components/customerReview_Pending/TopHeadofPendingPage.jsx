import React from "react";
import { Component } from "react";
import { FiSearch } from "react-icons/fi";
import { RiAlarmWarningLine } from "react-icons/ri";
import Profile from "../ProfileMenu/profile";

class TopPindingHead extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="searchLine2">
          <ul>
            <li style={{ fontSize: "20px", fontWeight: "bold" }}>
              Manage Products
            </li>
            <li>Products/ManageProducts</li>
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

export default TopPindingHead;
