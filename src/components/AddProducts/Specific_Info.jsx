import React from "react";
import "./GeneralInfo.css";
import TopAddProduct from "./TopAddProduct_head";
import { createBrowserHistory } from "history";
import BsCircle from "react-icons/bs";
import { AiFillDelete, AiOutlineArrowDown } from "react-icons/ai";
import { BiCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const SpecificInfo = () => {
  const navigate = useNavigate();
  const NavigateToGeneralInfo = () => {
    navigate("/generalproduct");
  };
  return (
    <div className="specificProduct_content">
      {/* <Navbar /> */}
      <TopAddProduct />
      <div className="TwoProduct_Btn">
        <button className="btn_general" onClick={NavigateToGeneralInfo}>
          <a href="#">General Info</a>
        </button>
        <button className="btn_specific">
          <a href="#">Specific Info</a>
        </button>
      </div>
      <div className="spacific">
        <div className="specifVariants">
          {" "}
          <p>
            Varaints{" "}
            <AiOutlineArrowDown
              style={{ marginLeft: "20px ", fontSize: "20px" }}
            />
            <p style={{ fontSize: "12px" }}>
              Add Variants & make combinations if the product comes in different
              variation
            </p>
          </p>
          <table className="specific_table">
            <tbody>
              <tr>
                <td>Option Tilte</td>
                <td>Option Value</td>
                <td></td>
              </tr>
              <tr className="spaceUnder">
                <td
                  className="specific_size"
                  style={{ padding: "0 10px 0 10px" }}
                >
                  <div className="specific_size">
                    Size
                    <AiOutlineArrowDown
                      style={{ marginLeft: "10px", fontSize: "20px" }}
                    />
                  </div>
                </td>
                <td className="specific_value">S X L M X L S X</td>
                <td className="specific_delete">
                  <AiFillDelete size={"20px"} />
                </td>
              </tr>
              <tr>
                <td>Option Tilte</td>
                <td>Option Value</td>
                <td></td>
              </tr>
              <tr className="spaceUnder">
                <td
                  className="specific_size"
                  style={{ padding: "0 10px 0 10px" }}
                >
                  <div className="specific_size">
                    Color
                    <AiOutlineArrowDown
                      style={{ marginLeft: "10px", fontSize: "20px" }}
                    />
                  </div>
                </td>
                <td className="specific_value">
                  <BiCircle
                    style={{
                      backgroundColor: "red",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />{" "}
                  X{" "}
                  <BiCircle
                    style={{
                      backgroundColor: "green",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />{" "}
                  X{" "}
                  <BiCircle
                    style={{
                      backgroundColor: "blue",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  X
                </td>
                <td className="specific_delete">
                  <AiFillDelete size={"20px"} />
                </td>
              </tr>
              <tr>
                <td>Option Tilte</td>
                <td>Option Value</td>
                <td></td>
              </tr>
              <tr className="spaceUnder">
                <td
                  className="specific_size"
                  style={{ padding: "0 10px 0 10px" }}
                >
                  <div className="specific_size">
                    Material
                    <AiOutlineArrowDown
                      style={{ marginLeft: "10px", fontSize: "20px" }}
                    />
                  </div>
                </td>
                <td className="specific_value">Iron</td>
                <td className="specific_delete">
                  <AiFillDelete size={"20px"} />
                </td>
              </tr>
              <tr>
                <td className="option_btn">Add Option</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="related_product">
          <p>
            Related Product{" "}
            <AiOutlineArrowDown
              style={{ marginLeft: "10px", fontSize: "20px" }}
            />
          </p>
          <div style={{ width: "300px", display: "flex", flexWrap: "nowrap" }}>
            if you have similar products, do not miss the opportunity to make a
            lot of money and add them....
          </div>
          <div className="option_btn1">Add Option</div>
        </div>
        <div className="embedYoutube">
          <div className="embedLeft">
            <p>
              Embeded Youtube Videos
              <AiOutlineArrowDown
                style={{ marginLeft: "10px", fontSize: "20px" }}
              />
            </p>
            <div
              style={{ width: "300px", display: "flex", flexWrap: "nowrap" }}
            >
              if you have visual content for your product ,free to attach it...
            </div>
            <div className="embedurl">URL</div>
            <div className="embedurl2">Add Another Link</div>
          </div>
          <div className="embedRight">
            <div className="embedtwo_btn">
              <div className="embed_submit">Submit</div>
              <div className="embed_delete">Delete</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpecificInfo;
