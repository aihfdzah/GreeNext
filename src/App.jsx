import './App.css'
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Kelas from './pages/Kelas';

const App = () => {
  return (
    <div>
      <Navbar />
      <Kelas />
      <Footer />
    </div>
  );
};

export default App
