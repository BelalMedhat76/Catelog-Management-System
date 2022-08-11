import React from "react";
import "./ProductHome.css";
import MyProduct from "../../MyProduct_data";
import Navbar from "../LeftNav/NAV";
import TopHead from "../ProductComponent/topHeader";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Product from "../dashboard-RecentProduct/RecentProduct";
import RecentProduct from "../../data";
import profilePic from "../../assets/profilePic.jpg";
import { BiDotsHorizontal } from "react-icons/bi";

const ProductPage = () => {
  return (
    <div className="Prduct-container">
      <div className="Product_Left_Nav">{/* <Navbar /> */}</div>
      <div className="Product-Right-side">
        <TopHead />

        <button className="Products-Btn">
          <a href="#">Add Product</a>
        </button>

        <div className="Product_Nav">
          <span className="active ">
            <a
              href="#"
              className="product_link"
              style={{ backgroundColor: "#154666" }}
            >
              All
            </a>
          </span>
          <span>
            <a href="#" className="product_link">
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
              <AiOutlineArrowLeft size={"20px"} style={{ marginLeft: "5px" }} />
            </a>
          </span>

          {/* <Product details={RecentProduct} /> */}
        </div>
        {/* <AllClientProduct details={MyProduct} /> */}
      </div>
    </div>
  );
};
export default ProductPage;