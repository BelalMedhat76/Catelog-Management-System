import React from "react";
import "./Filter.css";
import { AiFillStar } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
const FiltersData = (props) => {
  return (
    <>
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
    </>
  );
};
export default FiltersData;
