import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { Home } from "./components/Home";
import Projects from "./Projects";
import Finder from "./components/Finder";

function App() {
  const houseData = {
    imageUrl: "url_of_the_house_image.jpg",
    address: "1234 Main St, Anytown, USA",
    price: 350000,
  };
  return (
    <Router>
      <div className="w-full h-screen">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects house={houseData} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/finder" element={<Finder />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
