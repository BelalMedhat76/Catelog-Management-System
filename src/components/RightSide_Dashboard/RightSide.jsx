import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";

import { AiFillFund } from "react-icons/ai";
import { BsArrowDownCircle } from "react-icons/bs";
import { RiStarSFill } from "react-icons/ri";
import profilePic from "../../assets/profilePic.jpg";
import Profile from "../ProfileMenu/profile";
import "./RightSide.css";
import { useNavigate } from "react-router-dom";

const RightBar = () => {
  const navigate = useNavigate();

  const navigateToAddProduct = () => {
    // 👇️ navigate to /contacts
    navigate("/add");
  };
  const ProgressbarStyle = {
    height: "2",
    width: "20px",
    backgroundColor: "yellow",
  };
  return (
    <>
      <Profile />
      <button className="AddProducts_btn" onClick={navigateToAddProduct}>
        Add Product
      </button>
      <div className="RightSideCardinfo">
        <div className="RightSidecard1">
          <div className="Rightcard-line1">
            {" "}
            <p>My Balance</p>
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>$200K</span>
            <p style={{ fontSize: "12px" }}> Withdraw Money</p>
            {/* {" "}
             */}
          </div>
          <div className="card1-line2">
            <span style={{ color: "#03A63C", fontWeight: "bold" }}>+ 00 %</span>
            <span className="Rightcard-line2-frame">
              <AiFillFund size={"25px"} />
            </span>
          </div>
        </div>
      </div>
      <div className="RightOrderList">
        <p style={{ fontSize: "20px", textAlign: "center" }}>
          {" "}
          Top 10 Categories <BsArrowDownCircle size={"20px"} />
        </p>

        <ol>
          <li>Olified Chemicals</li>
          <li>MATERIAL PROCESSING</li>
          <li>Supply</li>
          <li>Mobile</li>
          <li>MATERIAL PROCESSING</li>
          <li>Supply</li>
          <li>Mobile</li>
          <li>Mobile</li>
          <li>Mobile</li>
          <li>Supply</li>
        </ol>
        <p style={{ textAlign: "center", color: "#13678A" }}>
          <a href="#"> View All Categories</a>
        </p>
      </div>
      <div className="latestProduct">
        <p style={{ textAlign: "center" }}>Latest Products Reviews</p>
        <div className="latestProduct_img">
          <img src={profilePic} id="Product_img" alt="" />
          <p style={{ fontSize: "12px" }}>The Product is more than wond...</p>
        </div>
        <p
          style={{
            fontSize: "13px",
            textAlign: "right",
            lineHeight: ".2px",
            paddingRight: "15px",
          }}
        >
          by Johnny Depp
        </p>
        <div className="latestProduct_img">
          <img src={profilePic} id="Product_img" alt="" />
          <p style={{ fontSize: "12px" }}>The Product is more than wond...</p>
        </div>
        <p
          style={{
            fontSize: "13px",
            textAlign: "right",
            lineHeight: ".2px",
            paddingRight: "15px",
          }}
        >
          by Johnny Depp
        </p>
      </div>
      <div className="RightProgressBar">
        <p style={{ textAlign: "center" }}>Store Reviews</p>
        <div className="stars">
          <div className="starsIcon">
            <span style={{ letterSpacing: "0.1px" }}>
              <RiStarSFill color={"#E5FF3D"} />{" "}
              <RiStarSFill color={"#E5FF3D"} />{" "}
              <RiStarSFill color={"#E5FF3D"} />{" "}
              <RiStarSFill color={"#E5FF3D"} />
              <RiStarSFill />
            </span>
          </div>
          <div>4.5 Out Of 5</div>
        </div>
        <p style={{ textAlign: "center" }}>Total 4.50 K Reviews</p>
        <div className="progress_bar-Data">
          5Star
          <div className="progresbar_container">
            <div className="bar1"></div>
          </div>
          <span> 2350</span>
        </div>

        <div className="progress_bar-Data">
          4Star
          <div className="progresbar_container">
            <div className="bar2"></div>
          </div>
          <span> 1199</span>
        </div>
        <div className="progress_bar-Data">
          2Star
          <div className="progresbar_container">
            <div className="bar3"></div>
          </div>
          <span> 987</span>
        </div>
        <div className="progress_bar-Data">
          2Star
          <div className="progresbar_container">
            <div className="bar4"></div>
          </div>
          <span> 514</span>
        </div>
        <div className="progress_bar-Data">
          1Star
          <div className="progresbar_container">
            <div className="bar5"></div>
          </div>
          <span> 250</span>
        </div>
      </div>
    </>
  );
};
export default RightBar;
