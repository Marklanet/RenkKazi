import React from "react";
import "./main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/common/topbar/Topbar";
import Footer from "./components/common/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Joinus from "./pages/joinus/Joinus";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";

export default function Main() {
  return (
    <>
      <Router>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/joinus" element={<Joinus />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
