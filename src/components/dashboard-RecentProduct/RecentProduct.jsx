import React from "react";
import "./RecentProduct.css";
import { BsFillStarFill } from "react-icons/bs";
const Product = (props) => {
  return (
    <div className="Product_section">
      {props.details.map((value, index) => (
        <div className="reacent_data" key={index}>
          <div
            className="recentRow"
            style={{ paddingTop: "20px", marginBottom: "10px" }}
          >
            <p style={{ fontSize: "20px", fontWeight: "500" }}> {value.name}</p>
            <p> {value.money}</p>
            <p>{value.rate}</p>
            <p> {value.publish}</p>
            <p> {value.order}</p>
          </div>
          <div className="recentRow" style={{ paddingBottom: "20px" }}>
            <p style={{ fontSize: "12px" }}>{value.category}</p>
            <p> {value.salary}</p>
            <p style={{ fontSize: "12px" }}>
              {" "}
              <BsFillStarFill size={"15px"} color={"red"} /> {value.rateCount}
            </p>
            <p>{value.date}</p>
            <p>{value.numOfOrders}</p>
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
export default Product;
