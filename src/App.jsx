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
import KeamananProfile from "./pages/KeamananProfile";
import NotFound from "./pages/NotFound";
import EBook from "./pages/Ebook"
import Tentang from "./pages/Tentang"
import Ebook from "./pages/Ebook"
import Detailebook from "./pages/Detailebook"

// import 
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
					<Route path="/register" element={<Register />}/>
					<Route path="/profile" element={<HalamanProfile />}/>
					<Route path="/fotoprofile" element={<FotoProfile />}/>
					<Route path="/sumberdaya" element={<EBook />}/>
					<Route path="/pemberitahuan" element={<Pemberitahuan />}/>
					<Route path="/keamananprofile" element={<KeamananProfile />}/>
					<Route path="/kelas" element={<HalamanKelas />}/>
					<Route path="/home" element={<Home />}/>
					<Route path="/tentang" element={<Tentang />}/>
					<Route path="/ebook" element={<Ebook />}/>
					<Route path="/ebook" element={<Detailebook />}/>
					<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
