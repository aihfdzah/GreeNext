import './App.css'
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default App
