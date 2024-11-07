import "./App.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Kelas from "./components/Kelas";
// import Tentang from "./components/Tentang";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HalamanKelas from "./pages/HalamanKelas";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HalamanProfile from "./pages/HalamanProfile";
import FotoProfile from "./pages/FotoProfile";
import Pemberitahuan from "./pages/Pemberitahuan";
// const App = () => {
// 	return (
// 		<div>
// 			<Navbar />
// 			<Kelas />
// 			<Tentang />
// 			<Footer />
// 		</div>
// 	);
// };

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<HalamanProfile />} />
				<Route path="/fotoprofile" element={<FotoProfile />} />
				<Route path="/pemberitahuan" element={<Pemberitahuan />} />
				<Route path="/Kelas" element={<HalamanKelas />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
