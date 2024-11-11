import "./App.css";
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
import Detailkls from "./pages/Detailkls";
import Privasi from "./pages/Privasi";
// import Tentangkita from "./pages/Tentangkita";
// import NotFound from "./pages/NotFound";
// import Sumber from "./pages/Sumber";
// import Keamanan from "./pages/Keamanan";
// import Keluar from "./pages/Keluar";


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
					<Route path="/detailkls" element={<Detailkls />} />
					<Route path="/privasi" element={<Privasi />} />
					<Route path="*" element={<NotFound />} />
					{/* <Route path="/sumberdaya" element={<Sumber />} />
					<Route path="/tentangkita" element={<Tentangkita />} />
					<Route path="/keamanan" element={<Keamanan />} />
					<Route path="/keluar" element={<Keluar />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
