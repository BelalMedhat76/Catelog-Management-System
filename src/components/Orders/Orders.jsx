// @ts-nocheck
import React from "react";
import {
  AiFillRobot,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
  AiOutlineCheckSquare,
  AiOutlinePicLeft,
} from "react-icons/ai";
import AllOrdersData from "../../ordersData";
import { BiCaretUpSquare } from "react-icons/bi";
import OrderDataComponent from "./OrderData";
import { GrCheckmark } from "react-icons/gr";

import { TiDeleteOutline } from "react-icons/ti";
import TopHead from "../ProductComponent/topHeader";
import "./Orders.css";
const ProductOrders = () => {
  return (
    <div className="Orders">
      <TopHead />
      <div className="orderhistory">
        <p>Order History</p>
        <button className="excel_btn">Export to Excel</button>
      </div>
      <div className="orderBtns">
        <div className="searchid">Search by ID.customer.order status</div>
        <div className="select">Select data</div>
        <div className="status">
          Order Status <AiOutlineArrowUp size={"20px"} />
        </div>
        <div className="payment">
          Payment Method <AiOutlineArrowUp size={"20px"} />
        </div>
        <div className="filters">
          Filters
          <AiOutlineArrowRight size={"20px"} />
        </div>
      </div>
      <div className="AllOrdersBtn">
        <div className="all_ordeder">
          {" "}
          <AiFillRobot style={{ marginRight: "10px" }} />
          All Orders
        </div>
        <div className="delivered">
          {" "}
          <GrCheckmark style={{ marginRight: "10px" }} />
          Delivered
        </div>
        <div className="pickup">
          {" "}
          <AiOutlinePicLeft style={{ marginRight: "10px" }} />
          PickUps
        </div>
        <div className="return">
          <BiCaretUpSquare style={{ marginRight: "10px" }} /> Returns
        </div>
        <div className="cancelled">
          {" "}
          <TiDeleteOutline style={{ marginRight: "10px" }} />
          Cancelled
        </div>
      </div>
      <OrderDataComponent details={AllOrdersData} />
    </div>
  );
};
export default ProductOrders;
