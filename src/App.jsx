import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./pages/Dashboard/Header/Header";
import Home from "./pages/Dashboard/Home/Home";
import About from "./pages/About/About";
import Category from "./pages/Category/Category";
import Destination from "./pages/Destination/Destination";
import Packages from "./pages/Packages/Packages";
import Banner from "./pages/Dashboard/Banner/Banner";
import Contact from "./pages/Contact/Contact";
import Offer from "./pages/Offer/Offer";
import Blog from "./pages/Blog/Blog";
import Footer from "./pages/Dashboard/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="bg-gray-100 w-full min-h-screen overflow-hidden">
          <Header />
          <Home />
          <Category />
          <About />
          <Packages />
          <Destination /> 
          <Banner />
          <Offer />
          <Blog />
          <Contact />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
