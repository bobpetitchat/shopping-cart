import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Store from "./components/Store";
import Checkout from "./components/Checkout";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/checkout" element={<Checkout />} />      
    </Routes>
      </BrowserRouter>
  )
}

export default RouteSwitch