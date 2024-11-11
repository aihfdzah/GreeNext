import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HalamanKelas from "./pages/HalamanKelas";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HalamanProfile from "./pages/HalamanProfile";
import FotoProfile from "./pages/FotoProfile";
import Pemberitahuan from "./pages/Pemberitahuan";
import Tentangkita from "./pages/Tentangkita";
import NotFound from "./pages/NotFound";
import Sumber from "./pages/Sumber";
import Privasi from "./pages/Privasi";
import Keamanan from "./pages/Keamanan";
import Keluar from "./pages/Keluar";
import Detailkls from "./pages/Detailkls";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<HalamanProfile />} />
				<Route path="/privasi" element={<Privasi />} />
				<Route path="/fotoprofile" element={<FotoProfile />} />
				<Route path="/pemberitahuan" element={<Pemberitahuan />} />
				<Route path="/kelas" element={<HalamanKelas />} />
				<Route path="/home" element={<Home />} />
				<Route path="/sumberdaya" element={<Sumber />} />
				<Route path="/tentangkita" element={<Tentangkita />} />
				<Route path="/keamanan" element={<Keamanan />} />
				<Route path="/keluar" element={<Keluar />} />
				<Route path="/detailkls" element={<Detailkls />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
