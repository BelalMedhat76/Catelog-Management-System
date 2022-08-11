import React from "react";
import { BiDotsHorizontal } from "react-icons/bi";
import profilePic from "../../assets/profilePic.jpg";
const Pending = (props) => {
  return (
    <div className="PendingTable">
      <table border={1}>
        <tbody>
          <tr>
            <td>Product Category</td>
            <td>Reviewer</td>
            <td>Review</td>
            <td>Status</td>
            <td rowSpan={2}>
              <BiDotsHorizontal size={"40px"} />
            </td>
          </tr>
          <tr>
            <td>
              <tr>
                <td rowSpan={2}>
                  {" "}
                  <img src={profilePic} className="productPic" alt="" />
                </td>
                <td>Product Name</td>
              </tr>
              <tr>
                <td>equipment</td>
              </tr>
            </td>
            <td>
              {" "}
              <tr>
                <td rowSpan={2}>
                  {" "}
                  <img src={profilePic} className="productPic" alt="" />
                </td>
                <td>Product Name</td>
              </tr>
            </td>
            <td>5.may.2022</td>
            <td>pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Pending;
