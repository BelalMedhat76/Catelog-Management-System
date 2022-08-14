import React from "react";
import "./RecentProduct.css";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
const Product2 = (props) => {
  return (
    <div className="Product_sectionv">
      {props.details.map((value, index) => (
        <table className="reacent_data" key={index}>
          <tbody>
            <tr>
              <td style={{ fontSize: "15px" }}> {value.name}</td>
              <td style={{ fontSize: "15px" }}> {value.client}</td>
              <td style={{ fontSize: "15px" }}>{value.date}</td>
              <td style={{ fontSize: "15px" }}> {value.cost}</td>
              <td style={{ fontSize: "15px" }}> {value.method}</td>
              <td style={{ fontSize: "15px" }}> {value.state}</td>
            </tr>

            <tr>
              <td> {value.customerId}</td>
              <td>{value.customerName}</td>
              <td> {value.orderdate}</td>
              <td>{value.money}</td>
              <td>{value.paymethod}</td>
              <td style={{ color: "green" }}>
                {" "}
                {value.orderstate}
                <IoCheckmarkCircleSharp
                  style={{ marginLeft: "2px" }}
                  size={"18px"}
                />
              </td>
            </tr>
          </tbody>
        </table>
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
