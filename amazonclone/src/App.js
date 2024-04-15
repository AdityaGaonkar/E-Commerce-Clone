import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          {/* Wrap Checkout component with Route */}
          <Route path="/" element={<Home />} />
          {/* Wrap Home component with Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
