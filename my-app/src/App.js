import React from "react";
import "./index.css";
import './App.css';
import Home from "./routes/Home";
import Offers from "./routes/Offers";
import Project from "./routes/Project";
import Contact from "./routes/Contact";

import { Route , Routes } from "react-router-dom";

function App() {
  return (
    
    <>
      <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/project" element={<Project />} />
           <Route path="/offers" element={<Offers/>} />
           <Route path="/contact" element={<Contact />} />

      </Routes>
    
    </>
  );
}

export default App;
