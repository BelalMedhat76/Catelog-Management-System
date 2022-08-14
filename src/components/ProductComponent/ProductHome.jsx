import React from "react";
import "./ProductHome.css";
import MyProduct from "../../MyProduct_data";
import TopHead from "./topHeader";
import { AiOutlineArrowLeft } from "react-icons/ai";
import AllClientProduct from "./AllProduct";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ProductPage = () => {
  const navigate = useNavigate();
  const navigateToAddProduct = () => {
    navigate("/add");
  };
  const navigateToReviewProduct = () => {
    navigate("/review");
  };
  const navigateToFilter = () => {
    navigate("/filter");
  };
  const navigateToAllProduct = () => {
    navigate("/allproduct");
  };
  return (
    <div className="Prduct-container">
      <div className="Product_Left_Nav"></div>
      <div className="Product-Right-side">
        <TopHead />

        <button className="Products-Btn" onClick={navigateToAddProduct}>
          <Link to="/add">Add Product</Link>
        </button>

        <div className="Product_Nav">
          <span className="active ">
            <a
              href="#"
              className="product_link"
              style={{ backgroundColor: "#154666" }}
              onClick={navigateToAllProduct}
            >
              All
            </a>
          </span>
          <span>
            <a
              href="#"
              className="product_link"
              onClick={navigateToReviewProduct}
            >
              Pending
            </a>
          </span>
          <span>
            <a
              href="#"
              className="product_link"
              onClick={navigateToReviewProduct}
            >
              Published
            </a>
          </span>
          <span className="link_shadow ">
            <a href="#" onClick={navigateToFilter}>
              Filters{" "}
              <AiOutlineArrowLeft size={"20px"} style={{ marginLeft: "5px" }} />
            </a>
          </span>
        </div>
        <AllClientProduct details={MyProduct} />
      </div>
    </div>
  );
};
export default ProductPage;
