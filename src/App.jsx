import './App.css'
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Kelas from './pages/Kelas';
import Profile from './pages/Profile';
import Tentang from './pages/Tentang';
import Profilefoto from './pages/Profilefoto';
import Proinfo from './pages/Proinfo';
import Profileprivasi from './pages/Profileprivasi';

const App = () => {
  return (
    <div>
      <Navbar />
      <Kelas />
      <Tentang />
      <Profile />
      <Profilefoto />
      <Proinfo />
      <Profileprivasi />
      <Footer />
    </div>
  );
};

// function App () {
//   return (
//     <BrowserRouter>
//       <Router>
//         <Route path="/kelas" element={<Kelas />} />
//         <Route path="/tentang" element={<Tentang />} />
//       </Router>
//     </BrowserRouter>
//   );
// }

export default App
