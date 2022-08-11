import "./App.css";
import React from "react";
import Dashboard from "./components/dashboardHome/dashHome.jsx";
import ProductPage from "./components/ProductComponent/ProductHome.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/LeftNav/NAV";
import Product from "./components/dashboard-RecentProduct/RecentProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <Dashboard /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
        {/* <Route path="/products" element={<ProductPage />} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
