import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Category from "./pages/Category/Category";

function App() {
  return (
    <>
      <Router>
        <div className="bg-gray-100 w-full min-h-screen overflow-hidden">
          <Header />
          <Home />
          <Category />
          <About />
        </div>
      </Router>
    </>
  );
}

export default App;
