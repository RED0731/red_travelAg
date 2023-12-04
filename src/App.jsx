import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./pages/MainPage/Header/Header";

import Footer from "./pages/MainPage/Footer/Footer";
import Mainpage from "./pages/MainPage/Mainpage";

function App() {
  return (
    <>
      <Router>
        <div className="bg-gray-100 w-full min-h-screen overflow-hidden">
          <Header />
          <Mainpage />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
