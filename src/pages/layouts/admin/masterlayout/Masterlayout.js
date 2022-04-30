import React from "react";
import NavbarAdmin from "../navbarAdmin/NavbarAdmin";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import "../../../../assets/admin/css/styles.css";
import "../../../../assets/admin/js/scripts.js";
import { Outlet } from "react-router";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function Masterlayout() {
  return <section className="sb-nav-fixed">
      <NavbarAdmin />

      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <Outlet/>
          </main>
          <Footer />
        </div>
      </div>
    </section>;
}

export default Masterlayout;
