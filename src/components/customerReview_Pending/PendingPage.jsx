import React from "react";
import { BiDotsHorizontal } from "react-icons/bi";
import "./customer_Pending.css";
import profilePic from "../../assets/profilePic.jpg";
import { Link } from "react-router-dom";
const Pending = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
        <div className="cutomerTableWidht" key={index}>
          <table className="PendingTable">
            <tbody>
              <tr>
                <td>{value.name}</td>
                <td>{value.reviewername}</td>
                <td>{value.rate}</td>
                <td>{value.actions}</td>
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
                    <td>
                      <p>{value.nameofProduct}</p>

                      <p>{value.state}</p>
                    </td>
                  </tr>
                </td>
                <td>
                  {" "}
                  <tr>
                    <td rowSpan={2}>
                      {" "}
                      <img src={profilePic} className="productPic" alt="" />
                    </td>
                    <td>
                      <p>{value.reviewerName}</p>
                      <p>{value.location}</p>
                    </td>
                  </tr>
                </td>
                <td style={{ width: "300px" }}>
                  <p>{value.dateOfReview}</p>
                  <p>{value.description}</p>
                </td>
                <td>
                  <button className="PendingBtn">
                    <a href="#"> Pending</a>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
};
export default Pending;
