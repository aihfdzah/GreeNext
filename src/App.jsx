import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Kelas from './pages/Kelas';
import Tentang from './pages/Tentang';
import Profile from './pages/Profile';
import Profilefoto from './pages/Profilefoto';
import Proinfo from "./pages/Proinfo";
import Profileprivasi from "./pages/Profileprivasi";
import Profilekeamanan from "./pages/Profilekeamanan";


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
      <Profilekeamanan />
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
