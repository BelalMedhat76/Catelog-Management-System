import React from "react";
import "./NAV.css";
import { AiFillCheckSquare, AiFillMacCommand } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className="sideNavbar " style={{ padding: "10px" }}>
      <h1> Store Setting</h1>
      <a href="/">
        <span>
          {" "}
          <RiDashboardLine className="icon" />
          Dashboard
        </span>{" "}
      </a>
      <a href="/">
        <span>
          {" "}
          <AiFillMacCommand className="icon" /> Products
        </span>
      </a>
      <a href="/">
        {" "}
        <span>
          {" "}
          <AiFillCheckSquare className="icon" />
          Orders
        </span>
      </a>
      <a href="/">
        {" "}
        <span>
          <TiGroup className="icon" /> Customer Reviews
        </span>
      </a>
      <a href="/">
        <span>
          <BiMessageRoundedDots className="icon" /> Messages
        </span>{" "}
      </a>
      <a href="/">
        <span>
          <FaRegHandshake className="icon" /> Deals
        </span>{" "}
      </a>
      <a href="/">
        <span>
          <FiSettings className="icon" /> Settings
        </span>{" "}
      </a>
    </div>
  );
};
export default Navbar;
