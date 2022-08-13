import React from "react";
import "./GeneralInfo.css";
import {
  AiFillDollarCircle,
  AiOutlineArrowDown,
  AiOutlineClose,
  AiOutlineDownload,
} from "react-icons/ai";
import GrClose from "react-icons/gr";
import Navbar from "../LeftNav/NAV";

import TopAddProduct from "./TopAddProduct_head";
import { useNavigate } from "react-router-dom";
const GeneralProduct = () => {
  const navigate = useNavigate();
  const NavigateToSpecifiInfo = () => {
    navigate("/specific");
  };

  return (
    <div className="generalProduct_content">
      {/* <Navbar /> */}
      <TopAddProduct />
      <div className="TwoProduct_Btn">
        <button className="btn_general">
          <a href="#">General Info</a>
        </button>
        <button className="btn_specific" onClick={NavigateToSpecifiInfo}>
          <a href="#">Specific Info</a>
        </button>
      </div>
      <div className="AddProductcenter">
        <div className="AddProductcenter_Left">
          <div className="Product_form">
            <form action="#">
              <p>Product Name</p>
              <input
                disabled
                type="text"
                name=""
                id=""
                placeholder="Enter Product Name"
              />
              <p>Product Description</p>
              <input
                disabled
                type="text"
                name=""
                id="textarea"
                placeholder="Enter Product Description"
              />
            </form>
          </div>
          <div className="product_drag_image">
            <p>Product images</p>
            <div className="drage_drop">
              <span className="circle"></span>
              <p>Drag and drop or browse</p>
            </div>
          </div>
          <div className="search_engin">
            <div className="engin_left">
              <p>search engin optimaization</p>
              <div style={{ width: "50%" }}>
                add title & meta description to sea how the products look in
                search engin{" "}
              </div>
              <table style={{ marginTop: "20px" }}>
                <tr>
                  <td style={{ paddingBottom: "20px" }}>Page Title</td>
                  <td style={{ paddingBottom: "20px" }}>URL</td>
                </tr>
                <tr>
                  <td>
                    <div className="serchEngin_child">
                      <p>Name your product page</p>
                    </div>
                  </td>
                  <td>
                    <div className="serchEngin_child">
                      <p>Https://0000000000</p>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div className="engin_right">
              <p>Meta description</p>
              <div className="enter_desc">
                <p>Enter a description...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="AddProductcenter_Right">
          <div className="product_category">
            <p>Product Categorie</p>
            <div className="category_line2">
              <p style={{ fontSize: "12px" }}>select product categories</p>
              <p style={{ fontSize: "14px", color: "#184C78" }}>Add New</p>
            </div>
            <div className="categorie_concrete">
              <p>Concrete</p>
              <p>
                <AiOutlineArrowDown size={"20px"} />
              </p>
            </div>
          </div>
          <div className="product_Tags">
            <p>Product Tags</p>
            <div className="deleted">
              <button>
                concrete <AiOutlineClose />
              </button>
              <button>
                concrete <AiOutlineClose />
              </button>
            </div>
          </div>
          <div className="manufactur">
            <div className="manufactur_name">Manufacturer Name</div>
            <div className="manufactur_name">Manufacturer Name</div>
          </div>
          <div className="Price">
            <p>Price</p>
            <div className="enter_price">
              <AiFillDollarCircle size={"20px"} />
              <span style={{ marginLeft: "10px" }}>Enter Price</span>
            </div>
            <p>Discount</p>
            <div className="enter_discount">
              <AiOutlineDownload size={"20px"} />
              <span style={{ marginLeft: "10px" }}>Enter Discount</span>
            </div>
            <div className="saveProduct">
              <button className="SubmitProduct">
                <a href="#">Submit</a>
              </button>
              <button className="DeleteProduct">
                <a href="#">Delete Product</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GeneralProduct;
