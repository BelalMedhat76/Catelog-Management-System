import React from "react";
import { Component } from "react";
import "./Filter.css";
import TopHead from "../ProductComponent/topHeader";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch, BsXLg } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import FiltersData from "./Filters_table";
import productFilterData from "../../ProductFilter";

const ProductFilter = () => {
  const navigate = useNavigate();
  const navigateToAddProduct = () => {
    navigate("/add");
  };
  const navigateToReviewProduct = () => {
    navigate("/review");
  };

  return (
    <div className="Filters">
      <div className="filter_Left_Nav"></div>
      <div className="filter-Right-side">
        <TopHead />
        <button className="Filter-Btn" onClick={navigateToAddProduct}>
          <a href="/add">Add Product</a>
        </button>
      </div>
      <div className="filterContent">
        <div className="filterContent_leftSide">
          <table id="table">
            <tbody className="concrete_table">
              <tr>
                <td style={{ color: "white" }}>
                  Concrete <BsXLg />
                </td>
                <td style={{ color: "white" }}>
                  {" "}
                  Concrete <BsXLg />
                </td>
              </tr>
              <tr>
                <td style={{ color: "white" }}>
                  {" "}
                  Concrete <BsXLg />
                </td>
                <td style={{ color: "white" }}>
                  {" "}
                  Concrete <BsXLg />
                </td>
              </tr>
              <tr>
                <td style={{ color: "white" }}>
                  {" "}
                  Concrete <BsXLg />
                </td>
              </tr>
              <div className="concreteBtn">
                {" "}
                <button>Clear All</button>
              </div>
            </tbody>
          </table>

          <p style={{ marginTop: "40px" }}>Products</p>
          <table className="product_types">
            <tbody>
              <tr>
                <td>PLUMBING</td>
                <td
                  style={{
                    textAlign: "center",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#8FC1B5",
                  }}
                >
                  5
                </td>
              </tr>
              <tr>
                <td>Chemical Works</td>
                <td
                  style={{
                    textAlign: "center",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#8FC1B5",
                  }}
                >
                  9
                </td>
              </tr>
              <tr>
                <td>METALS</td>
                <td
                  style={{
                    textAlign: "center",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#8FC1B5",
                  }}
                >
                  3
                </td>
              </tr>
              <tr>
                <td>MATERIAL PRICESSING</td>

                <td
                  style={{
                    textAlign: "center",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#8FC1B5",
                  }}
                >
                  6
                </td>
              </tr>
              <tr>
                <td>ELECTRICAL</td>
                <td
                  style={{
                    textAlign: "center",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#8FC1B5",
                  }}
                >
                  {" "}
                  0
                </td>
              </tr>
            </tbody>
          </table>
          <hr style={{ marginTop: "50px", color: "white", width: "100%" }} />
          <div className="progressbar">
            <span className="progress_line"></span>
            <span className="progress_circle"></span>
            <span className="progress_line"></span>
            <span className="progress_circle"></span>
            <span className="progress_line"></span>
          </div>
          <div className="bar_btns">
            <button>$1000</button>
            <span>to</span>
            <button>$3000</button>
          </div>
          <hr style={{ marginTop: "50px", color: "white", width: "100%" }} />
          <div className="Brands">
            <div className="Brands_search">
              <BsSearch style={{ marginRight: "10px", marginLeft: "10px" }} />
              Search Brands..
            </div>
          </div>
          <div className="brand_radio">
            <input type="radio" id="html" name="fav_language" /> 
            <label htmlFor="html">Cat</label>
            <br />
            <input type="radio" checked id="javascript" name="fav_language" /> 
            <label htmlFor="javascript">Cat</label>
            <br />
            <input type="radio" id="html" name="fav_language" /> 
            <label htmlFor="html">OPPO</label>
            <br />
            <input type="radio" id="html" name="fav_language" /> 
            <label htmlFor="html">Apple</label>
            <p style={{ marginLeft: "15px" }}>1000 More</p>
            <hr style={{ marginTop: "20px", color: "white", width: "100%" }} />
          </div>
          <table style={{ width: "50%", borderSpacing: "10px" }}>
            <tbody>
              <tr>
                <td>Discount</td>
                <td
                  style={{
                    textAlign: "center",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#8FC1B5",
                  }}
                >
                  0
                </td>
              </tr>
              <tr>
                <td>Rating</td>
                <td
                  style={{
                    textAlign: "center",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#8FC1B5",
                  }}
                >
                  0
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="filterContent_RightSide">
          <div className="Product_Nav">
            <span>
              <a
                href="/productsback"
                style={{ color: "white" }}
                className="product_link active"
              >
                All
              </a>
            </span>
            <span>
              <a
                href="#"
                className="product_link "
                style={{ color: "#000" }}
                onClick={navigateToReviewProduct}
              >
                Pending
              </a>
            </span>
            <span>
              <a href="#" className="product_link">
                Published
              </a>
            </span>

            <span className="link_shadow ">
              <a href="#">
                Filters{" "}
                <AiOutlineArrowRight
                  size={"20px"}
                  style={{ marginLeft: "5px" }}
                />
              </a>
            </span>
          </div>
          <FiltersData details={productFilterData} />
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
