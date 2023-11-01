import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Router>
        <div className="bg-gray-200 w-full min-h-screen overflow-hidden">
          <Header />
          <Home />
        </div>
      </Router>
    </>
  );
}

export default App;
