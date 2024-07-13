import React from "react";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import Products from "./components/Products";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
export default App;
/*
<div
        style={{
          paddingTop: "88px",
          height: "calc(100vh - 88px)",
          backgroundColor: "red",
        }}
></div>
*/
