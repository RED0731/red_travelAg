import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Mainpage from "./pages/MainPage/Mainpage";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="bg-gray-100 w-full min-h-screen overflow-hidden">
          <Header />
          <Routes>
            <Route exact path="/" element={<Mainpage />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
