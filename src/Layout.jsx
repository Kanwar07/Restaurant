import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavBar />

      <Footer />
      <Outlet />
    </>
  );
}

export default Layout;
