import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiDotsHorizontal } from "react-icons/bi";
import profilePic from "../../assets/profilePic.jpg";

const AllClientProduct = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
        <div className="Product_table" key={index}>
          <table style={{ textAlign: "center" }} className="table_content">
            <tr>
              <td rowSpan={2}>
                {" "}
                <img src={profilePic} className="productPic" alt="" />
              </td>
              <td>{value.name}</td>
              <td>{value.money}</td>
              <td>{value.star}</td>
              <td>{value.activity}</td>
              <td>{value.demands}</td>
              <td rowSpan={2} style={{ textAlign: "center", padding: "10px" }}>
                <BiDotsHorizontal size={"40px"} />
              </td>
            </tr>

            <tr>
              <td>{value.nameofProduct}</td>
              <td>{value.moneyofclient}</td>
              <td>
                <AiFillStar size={"20px"} color="#A2FA00" />
                {value.rate}
              </td>
              <td>{value.date}</td>
              <td>{value.numOfOrders}</td>
            </tr>
          </table>
        </div>
      ))}
    </>
  );
};
export default AllClientProduct;
