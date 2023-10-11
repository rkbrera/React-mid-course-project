import React from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

export default function MainLayout() {
  return (
    <div className="MainLayout">
      <Navbar />
      <div className="d-flex flex-column min-vh-100 py-4 bg-primary bg-gradient">
        <Outlet />npm 
      </div>
      <Footer />
    </div>
  );
}
