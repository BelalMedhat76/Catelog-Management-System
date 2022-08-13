import React from "react";
import { BsThreeDots } from "react-icons/bs";
import "./Sort.css";
import profilePic from "../../assets/profilePic.jpg";
import { AiFillStar } from "react-icons/ai";
import { valueAbsolute } from "fontawesome";
const SortTableData = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
        <table className="sortTableContent" key={index}>
          <tbody>
            <tr>
              <td>{value.head1}</td>
              <td>{value.head2}</td>
              <td rowSpan={2}>
                <BsThreeDots size={"25px"} />
              </td>
            </tr>
            <tr>
              <td rowSpan={2}>
                <div className="contentofPic">
                  {" "}
                  <img
                    src={profilePic}
                    className="productPic"
                    id="profilePic"
                    alt=""
                  />
                  <div>
                    <p>{value.name}</p>
                    <p>{value.location}</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="sort_review_table">
                  <p>
                    <AiFillStar style={{ color: "#F2BE22" }} />{" "}
                    <AiFillStar style={{ color: "#F2BE22" }} />{" "}
                    <AiFillStar style={{ color: "#F2BE22" }} />{" "}
                    <AiFillStar style={{ color: "#F2BE22" }} />
                    {value.date} <br style={{ margin: "10px" }} />
                    {value.descripton}
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
};
export default SortTableData;
