import React from "react";
import Navbar from "../pages/utilities/navbar/Navbar";
import Footer from "../pages/utilities/footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
