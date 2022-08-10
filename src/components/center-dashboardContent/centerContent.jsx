import React from "react";
import "./centerContent.css";
import RecentProduct from "../../RecentProduct2";
import { FiSearch } from "react-icons/fi";
import { RiAlarmWarningLine } from "react-icons/ri";
import {
  BsArrowDownLeft,
  BsArrowUpRight,
  BsFillCalendarDayFill,
} from "react-icons/bs";
import {
  AiFillCalendar,
  AiFillCarryOut,
  AiFillDollarCircle,
} from "react-icons/ai";
import dashChart from "../../assets/dashChart.png";
import Product from "../dashboard-RecentProduct/RecentProduct";
import dashboardCards from "../../data";
import Product2 from "../dashboard-RecentProduct/RecentProduct2";
const CenterDashboard = () => {
  return (
    <>
      <div className="searchLine">
        <div className="SearchBar">
          <FiSearch /> Search For ...
        </div>
        <div style={{ padding: "20px", fontSize: "20px" }}>
          <RiAlarmWarningLine />
        </div>
      </div>
      <div className="whoIam">
        <span style={{ fontWeight: "bold" }}>Good Morning.</span>
        <span>Johnny</span>
        <p>here is what is happening with your store</p>
      </div>

      <div className="dashboardCards ">
        <div className="card1 ">
          <div className="card1-line1">
            {" "}
            <span>Total Earnings</span>
            <span style={{ fontWeight: "bold", color: "black" }}>$50K</span>
            {/* {" "}
             */}
          </div>
          <div className="card1-line2">
            <span style={{ color: "#03A63C", fontWeight: "bold" }}>
              <BsArrowUpRight />
              +20 %
            </span>
            <span className="card-line2-frame">
              <AiFillDollarCircle size={"25px"} />
            </span>
          </div>
        </div>
        <div className="card2">
          <div className="card2-line1">
            {" "}
            <span>Orders</span>
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>
              3500
              <p style={{ fontSize: "15px" }}>
                {" "}
                <a href=""> view all orders</a>
              </p>
            </span>
            {/* {" "}
             */}
          </div>
          <div className="card1-line2">
            <span style={{ color: "#03A63C", fontWeight: "bold" }}>
              <BsArrowDownLeft />
              -4%
            </span>
            <span className="card-line2-frame">
              <AiFillCarryOut size={"25px"} />
            </span>
          </div>
        </div>
        <div className="card3">
          <div className="card3-line1">
            {" "}
            <span>Customers</span>
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>
              3500
              <p style={{ fontSize: "15px" }}>
                {" "}
                <a href=""> view all orders</a>
              </p>
            </span>
            {/* {" "}
             */}
          </div>
          <div className="card1-line2">
            <span style={{ color: "#03A63C", fontWeight: "bold" }}>
              <BsArrowUpRight />
              +20 %
            </span>
            <span className="card-line2-frame">
              <AiFillCalendar size={"25px"} />
            </span>
          </div>
        </div>
      </div>
      <section className="chartSection">
        <div className="dashboard_Chart_Part">
          <div style={{ padding: "15px" }}>Revenue</div>
          <div className="dashboard-calender">
            01.May .2022 to 31May .2022 <BsFillCalendarDayFill />
          </div>
        </div>
        <div className="dashboard_cards_details">
          <div>
            <p>7.568</p>
            <p>Orders</p>
          </div>
          <div>
            <p>$30K</p>
            <p>Earnings</p>
          </div>
          <div>
            <p>20.92%</p>
            <p>Conversion Rate</p>
          </div>
        </div>
        <div className="dashboard_Chart">
          <img src={dashChart} alt="" />
        </div>
      </section>
      <section className="recent_product">
        <div className="recent_product_cards">
          <Product details={dashboardCards} />
        </div>
        <div className="recent_product_cards">
          <Product2 details={RecentProduct} />
        </div>
      </section>
    </>
  );
};
export default CenterDashboard;
