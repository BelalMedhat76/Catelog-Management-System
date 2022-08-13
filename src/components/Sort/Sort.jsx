import React from "react";
import { AiFillCalendar, AiFillStar, AiOutlineArrowLeft } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import TopPindingHead from "../customerReview_Pending/TopHeadofPendingPage";
import "./Sort.css";
import Sort_Products from "../../Sortby";
import SortTableData from "./Sort_Table";
const SortBy = () => {
  return (
    <div className="Sort">
      <TopPindingHead />
      <h3 style={{ marginLeft: "30px" }}>Client Reviews</h3>
      <div className="sort_container">
        <div className="sort_left">
          <div className="sort-date">
            <p>Filter by date</p>
            <div className="sort_calender">
              D/M/Y <AiFillCalendar />
            </div>
            <p>Filter by Category</p>
            <div className="sort_category">
              <button>
                concrete <TiDeleteOutline size={"20px"} />
              </button>
            </div>
            <p>Filter by Star</p>
            <div className="sort_stars">
              <span>
                {" "}
                <AiFillStar
                  style={{ color: "#F2BE22", fontSize: "20px" }}
                />{" "}
                <AiFillStar style={{ color: "#F2BE22", fontSize: "20px" }} />{" "}
                <AiFillStar style={{ color: "#F2BE22", fontSize: "20px" }} />{" "}
                <AiFillStar style={{ color: "#F2BE22", fontSize: "20px" }} />
              </span>
            </div>
          </div>
        </div>
        <div className="sort_right">
          <div className="Product_Nav">
            <span>
              <a href="/productsback" className="product_link">
                All
              </a>
            </span>
            <span>
              <a
                href="#"
                className="product_link active"
                style={{ color: "#ffffff" }}
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
                Sort By{" "}
                <AiOutlineArrowLeft
                  size={"20px"}
                  style={{ marginLeft: "5px" }}
                />
              </a>
            </span>
            <span className="link_shadow ">
              <a href="#">
                Filters{" "}
                <AiOutlineArrowLeft
                  size={"20px"}
                  style={{ marginLeft: "5px" }}
                />
              </a>
            </span>
          </div>

          <SortTableData details={Sort_Products} />
        </div>
      </div>
    </div>
  );
};
export default SortBy;
