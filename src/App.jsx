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
