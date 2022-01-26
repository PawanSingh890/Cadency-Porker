import React from "react";

import Login from "./components/Login";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Login />
      </div>
    </>
  );
}

export default App;
