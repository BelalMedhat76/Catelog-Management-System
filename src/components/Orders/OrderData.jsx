import React from "react";
import "./Orders.css";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import { RiCheckboxBlankLine } from "react-icons/ri";

const OrderDataComponent = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
        <div className="Orders_Data" key={index}>
          <table>
            <tbody>
              <tr>
                <td>
                  <RiCheckboxBlankLine
                    size={"20px"}
                    style={{ marginRight: "10px" }}
                  />{" "}
                  {value.IdofOrder}
                </td>
                <td>{value.customername}</td>
                <td>{value.kind}</td>
                <td>{value.dateOfOrder}</td>
                <td>{value.salary}</td>
                <td>{value.method}</td>
                <td>{value.state}</td>
                <td rowSpan={2}>
                  <HiDotsHorizontal size={"25px"} />
                </td>
              </tr>
              <tr>
                <td>
                  <AiOutlineCheckSquare
                    size={"20px"}
                    style={{ marginRight: "10px" }}
                  />
                  {value.orderid}
                </td>
                <td>{value.name}</td>
                <td>{value.product}</td>
                <td>{value.date}</td>
                <td>{value.money}</td>
                <td>{value.payment}</td>
                <td>
                  {value.orderState}
                  <BsCheckCircleFill style={{ marginLeft: "10px" }} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
};

export default OrderDataComponent;
