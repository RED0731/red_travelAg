import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./pages/Header/Header";

function App() {
  return (
    <>
      <Router>
        <div className="bg-gray-200 w-full min-h-screen overflow-hidden">
          <Header />
        </div>
      </Router>
    </>
  );
}

export default App;
