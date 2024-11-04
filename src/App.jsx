import './App.css'
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Kelas from './pages/Kelas';
import Tentang from './pages/Tentang';

const App = () => {
  return (
    <div>
      <Navbar />
      <Kelas />
      <Tentang />
      <Footer />
    </div>
  );
};

export default App
