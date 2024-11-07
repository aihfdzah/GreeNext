import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Kelas from './pages/Kelas';
import Tentang from './pages/Tentang';
import Profile from './pages/Profile';
import Profilefoto from './pages/Profilefoto';
import Profileinfo from "./pages/Profileinfo";
import Profileprivasi from "./pages/Profileprivasi";
import Profilekeamanan from "./pages/Profilekeamanan";
import Profilekeluar from "./pages/Profilekeluar";
import Kelasdetail from "./pages/kelasdetail";


const App = () => {
  return (
    <div>
      <Navbar />
      <Kelas />
      <Kelasdetail />
      <Tentang />
      <Profile />
      <Profilefoto />
      <Profileinfo />
      <Profileprivasi />
      <Profilekeamanan />
      <Profilekeluar />
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

export default App;
