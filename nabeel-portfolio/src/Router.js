import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import MyWorkScreen from "./screens/MyWorkScreen";
import ContactScreen from "./screens/ContactScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/mywork" element={<MyWorkScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
