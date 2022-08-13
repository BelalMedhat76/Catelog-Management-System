import React from "react";
import Dashboard from "./components/dashboardHome/dashHome.jsx";
import ProductPage from "./components/ProductComponent/ProductHome.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/LeftNav/NAV";
import Product from "./components/dashboard-RecentProduct/RecentProduct";
import CustomerReviewPage from "./components/customerReview_Pending/customer_Pending.jsx";
import Pending from "./components/customerReview_Pending/PendingPage";
import GeneralProduct from "./components/AddProducts/General_Info";
import SpecificInfo from "./components/AddProducts/Specific_Info";
import ProductOrders from "./components/Orders/Orders.jsx";

function App() {
  return (
    <div className="App">
      {/* <CustomerReviewPage /> */}
      {/* <GeneralProduct /> */}
      {/* <SpecificInfo /> */}
      <BrowserRouter>
        <Navbar />

        {/* <Dashboard /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/review" element={<CustomerReviewPage />} />
          <Route path="/reviews" element={<CustomerReviewPage />} />
          <Route path="/generalproduct" element={<GeneralProduct />} />
          <Route path="/add" element={<GeneralProduct />} />
          <Route path="/specific" element={<SpecificInfo />} />
          <Route path="/orders" element={<ProductOrders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
