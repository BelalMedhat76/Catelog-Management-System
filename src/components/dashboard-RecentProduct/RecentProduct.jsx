import React from "react";
import "./RecentProduct.css";

import { BsFillStarFill, BsThreeDots } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
const Product = (props) => {
  return (
    <div className="Product_section">
      {props.details.map((value, index) => (
        <div className="filter_table_data" key={index}>
          <table>
            <tbody>
              <tr>
                <td>{value.name}</td>
                <td>{value.money}</td>
                <td>{value.star}</td>
                <td>{value.publish}</td>
                <td>{value.order}</td>
                <td rowSpan={2}>
                  <BsThreeDots size={"25px"} />
                </td>
              </tr>
              <tr>
                <td>{value.nameofPro}</td>
                <td>{value.amount}</td>
                <td>
                  <AiFillStar />
                  {value.rate}
                </td>
                <td>{value.date}</td>
                <td>{value.numofOrders}</td>
              </tr>
            </tbody>
          </table>
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
