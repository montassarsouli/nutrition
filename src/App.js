import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import TopRating from "./components/body/TopRating";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <TopRating />
      <Products />
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
