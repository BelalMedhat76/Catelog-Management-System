import React from "react";
import "./RecentProduct.css";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
const Product2 = (props) => {
  return (
    <div className="Product_section">
      {props.details.map((value, index) => (
        <div className="reacent_data" key={index}>
          <div
            className="recentRow1"
            style={{
              paddingTop: "20px",
              marginBottom: "10px",
              paddingLeft: "15px",
            }}
          >
            <p style={{ fontSize: "15px" }}> {value.name}</p>
            <p style={{ fontSize: "15px" }}> {value.client}</p>
            <p style={{ fontSize: "15px" }}>{value.date}</p>
            <p style={{ fontSize: "15px" }}> {value.cost}</p>
            <p style={{ fontSize: "15px" }}> {value.method}</p>
            <p style={{ fontSize: "15px" }}> {value.state}</p>
          </div>
          <div
            className="recentRow1"
            style={{ paddingBottom: "20px", paddingRight: "15px" }}
          >
            <p> {value.customerId}</p>
            <p>{value.customerName}</p>
            <p> {value.orderdate}</p>
            <p>{value.money}</p>
            <p>{value.paymethod}</p>
            <p style={{ color: "green" }}>
              {" "}
              {value.orderstate}
              <IoCheckmarkCircleSharp
                style={{ marginLeft: "2px" }}
                size={"18px"}
              />
            </p>
          </div>
        </div>
      ))}
      <div className="product_btn">
        <button className="AllProduct_Btn">
          <a href="#"> View All Products</a>
        </button>
      </div>
    </div>
  );
};
export default Product2;
