import "./App.css";
import React from "react";
import Dashboard from "./components/dashboardHome/dashHome.jsx";
import ProductPage from "./components/ProductComponent/ProductHome.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/LeftNav/NAV";
import Product from "./components/dashboard-RecentProduct/RecentProduct";
import CustomerReviewPage from "./components/customerReview_Pending/customer_Pending.jsx";
import Pending from "./components/customerReview_Pending/PendingPage";

function App() {
  return (
    <div className="App">
      {/* <CustomerReviewPage /> */}
      <BrowserRouter>
        <Navbar />
        {/* <Dashboard /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/review" element={<CustomerReviewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
