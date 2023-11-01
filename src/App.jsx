import React from "react";
import PrimaryButton from "./components/Button/PrimaryButton";

function App() {
  return (
    <>
      <div className="bg-gray-200 w-full min-h-screen text-green-500 p-24">
        <h1 className="text-gray-950 bg-gray-50 shadow p-8 rounded-md">
          Hello there, This is the main section
        </h1>
        <PrimaryButton>Primary Button</PrimaryButton>
      </div>
    </>
  );
}

export default App;
