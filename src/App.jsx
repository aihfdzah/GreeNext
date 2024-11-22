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
import EBook from "./pages/Ebook";
import Tentang from "./pages/Tentang";
import Ebook from "./pages/Ebook";
import Detailebook from "./pages/Detailebook";
import EbookFree from "./pages/EbookFree";
import EbookLock from "./pages/EbookLock";
import EbookPayment from "./pages/EbookPayment";
import Carousel from "./pages/Carousel";
import KelasDetail from "./pages/kelasdetail";
import Sertifikat from "./pages/Sertifikat";
import Webinar from "./pages/Webinar";
import WebinarDetail from "./pages/WebinarDetail";
// import Kelasdetail from "./components/Kelasdetail";
// import Detailkls from "./pages/Detailkls";
import Privasi from "./pages/Privasi";
// import Tentangkita from "./pages/Tentangkita";
// import NotFound from "./pages/NotFound";
// import Sumber from "./pages/Sumber";
// import Keamanan from "./pages/Keamanan";
import Keluar from "./pages/Keluar";
import WebinarDetail from "./pages/WebinarDetail";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<HalamanProfile />} />
				<Route path="/fotoprofile" element={<FotoProfile />} />
				<Route path="/sumberdaya" element={<EBook />} />
				<Route path="/pemberitahuan" element={<Pemberitahuan />} />
				<Route path="/keamananprofile" element={<KeamananProfile />} />
				<Route path="/kelas" element={<HalamanKelas />} />
				<Route path="/home" element={<Home />} />
				<Route path="/tentang" element={<Tentang />} />
				<Route path="/ebook" element={<Ebook />} />
				<Route path="/webinar" element={<Webinar />} />
				<Route path="/webinardetail" element={<WebinarDetail />} />
				<Route path="/detailebook" element={<Detailebook />} />
				<Route path="/ebookfree" element={<EbookFree />} />
				<Route path="/ebooklock" element={<EbookLock />} />
				<Route path="/ebookpay" element={<EbookPayment />} />
				<Route path="/carousel" element={<Carousel />} />
				{/* <Route path="/ebookgrts" element={<EbookFree />}/> */}
				<Route path="/detailkls" element={<KelasDetail />} />
				<Route path="/sertifikat" element={<Sertifikat />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/privasi" element={<Privasi />} />
				{/* <Route path="/sumberdaya" element={<Sumber />} />
					<Route path="/tentangkita" element={<Tentangkita />} />
					<Route path="/keamanan" element={<Keamanan />} /> */}
					<Route path="/keluar" element={<Keluar />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
