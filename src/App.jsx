import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./pages/MainPage/Header/Header";
import Home from "./pages/MainPage/Home/Home";
// import About from "./pages/About/About";
import About from "./pages/MainPage/About/About";
import Category from "./pages/MainPage/Category/Category";
import Destination from "./pages/MainPage/Destination/Destination";
import Packages from "./pages/MainPage/Packages/Packages";
import Banner from "./pages/MainPage/Banner/Banner";
import Contact from "./pages/MainPage/Contact/Contact";
import Offer from "./pages/MainPage/Offer/Offer";
import Blog from "./pages/MainPage/Blog/Blog";
import Footer from "./pages/MainPage/Footer/Footer";

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
