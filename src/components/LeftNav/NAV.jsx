import React from "react";
import "./NAV.css";
import { AiFillCheckSquare, AiFillMacCommand } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sideNavbar " style={{ padding: "10px" }}>
      <h1> Store Setting</h1>
      <Link to="/">
        <span>
          {" "}
          <RiDashboardLine className="icon" />
          Dashboard
        </span>{" "}
      </Link>
      <Link to="/products">
        <span>
          {" "}
          <AiFillMacCommand className="icon" /> Products
        </span>
      </Link>
      <Link to="/orders">
        {" "}
        <span>
          {" "}
          <AiFillCheckSquare className="icon" />
          Orders
        </span>
      </Link>
      <Link to="/review">
        {" "}
        <span>
          <TiGroup className="icon" /> Customer Reviews
        </span>
      </Link>
      <Link to="/message">
        <span>
          <BiMessageRoundedDots className="icon" /> Messages
        </span>{" "}
      </Link>
      <Link to="/deals">
        <span>
          <FaRegHandshake className="icon" /> Deals
        </span>{" "}
      </Link>
      <Link to="/setting">
        <span>
          <FiSettings className="icon" /> Settings
        </span>{" "}
      </Link>
    </div>
  );
};
export default Navbar;
