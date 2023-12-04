import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Mainpage from "./pages/MainPage/Mainpage";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog/Blog";
import Tours from "./pages/Tours/Tours";
import Packages from "./pages/Packages/Packages";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <div className="bg-gray-100 w-full min-h-screen overflow-hidden">
          <Header />
          <Routes>
            <Route exact path="/" element={<Mainpage />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/tours" element={<Tours />} />
            <Route exact path="/packages" element={<Packages />} />
            <Route exact path="/blogs" element={<Blog />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
