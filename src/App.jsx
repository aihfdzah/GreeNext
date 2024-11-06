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
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/" element={<HalamanKelas />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
