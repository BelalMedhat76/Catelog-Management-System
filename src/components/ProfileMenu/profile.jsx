import React from "react";
import "./profile.css";
import { CgProfile } from "react-icons/cg";
import { SiGooglemessages } from "react-icons/si";
import profilePic from "../../assets/profilePic.jpg";
import { FiHelpCircle, FiLogOut, FiSettings } from "react-icons/fi";
import { BiLockOpenAlt } from "react-icons/bi";
const Profile = () => {
  return (
    <>
      {/* <input
        className="dark-light"
        type="checkbox"
        id="dark-light"
        name="dark-light"
      />
      <label htmlFor="dark-light"></label>

      <div className="light-back"></div> */}

      {/* <a href="https://front.codes/" className="logo" target="_blank">
        <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
      </a> */}

      <div className="sec-center">
        <input
          className="dropdown "
          type="checkbox"
          id="dropdown"
          name="dropdown"
        />
        <label className="for-dropdown " htmlFor="dropdown">
          <img src={profilePic} className="profilePic" alt="" />
          <p>Johnny Depp</p>
        </label>
        <div className="section-dropdown">
          <a href="#">
            <CgProfile style={{ marginRight: "10px" }} size={"25px"} />
            Profile
          </a>

          <a href="#">
            <SiGooglemessages style={{ marginRight: "10px" }} size={"25px"} />
            Messages
          </a>
          <a href="#">
            <FiHelpCircle style={{ marginRight: "10px" }} size={"25px"} />
            Help
          </a>
          <a href="#">
            <FiSettings style={{ marginRight: "10px" }} size={"25px"} />
            Settings
          </a>
          <a href="#">
            <BiLockOpenAlt style={{ marginRight: "10px" }} size={"25px"} />
            Lock Screen
          </a>
          <a href="#">
            <FiLogOut style={{ marginRight: "10px" }} size={"25px"} />
            Log Out
          </a>
        </div>
      </div>
    </>
  );
};
export default Profile;
