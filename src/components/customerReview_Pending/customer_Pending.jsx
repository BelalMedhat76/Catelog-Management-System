import React from "react";
import "./customer_Pending";
import PendingData from "../../Pending_data";
import Pending from "../customerReview_Pending/PendingPage";

import TopHead from "../ProductComponent/topHeader";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import TopPindingHead from "./TopHeadofPendingPage";

const CustomerReviewPage = () => {
  return (
    <div className="Prduct-container">
      <div className="Product_Left_Nav">{/* <Navbar /> */}</div>
      <div className="customer-Right-side">
        <TopPindingHead />

        <h3 style={{ marginLeft: "30px" }}>Client Reviews</h3>

        <div className="Product_Nav">
          <span>
            <Link to="/productsback" className="product_link">
              All
            </Link>
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
              <AiOutlineArrowLeft size={"20px"} style={{ marginLeft: "5px" }} />
            </a>
          </span>
          <span className="link_shadow ">
            <a href="#">
              Filters{" "}
              <AiOutlineArrowLeft size={"20px"} style={{ marginLeft: "5px" }} />
            </a>
          </span>

          {/* <Product details={RecentProduct} /> */}
        </div>
        <Pending details={PendingData} />
      </div>
    </div>
  );
};
export default CustomerReviewPage;
