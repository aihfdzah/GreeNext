import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../Styles/Ebook.css";
import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Ebook = () => {
	const [activeButton, setActiveButton] = useState("sumber"); // Initialize activeButton state
	const [activeTab, setActiveTab] = useState("populer"); // State for active tab
	const navigate = useNavigate(); // Initialize navigation

	const handleButtonClick = (buttonName, path) => {
		setActiveButton(buttonName);
		navigate(path);
	};

	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};

	return (
		<>
			<Navbar />
			<Row
				className="py-3 d-flex text-left"
				style={{
					marginTop: "70px",
					marginLeft: "-100px",
					marginBottom: "-90px",
				}}>
				<Col>
					<h1 style={{ color: "#17412d" }}>Ebook</h1>
				</Col>
				<Col
					className="text-end me-auto text-left"
					style={{ marginLeft: "-200px" }}>
					<Button
						className={`button-custom ${
							activeButton === "sumber" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("sumber", "/sumberdaya")}>
						E-Book
					</Button>
					<Button
						className={`button-custom ${
							activeButton === "webinar" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("webinar", "/webinar")}>
						Webinar & Seminar
					</Button>
					<Button
						className={`button-custom ${
							activeButton === "studikasus" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("studikasus", "/studikasus")}>
						Studi Kasus
					</Button>
					<Button
						className={`button-custom ${
							activeButton === "histori" ? "active" : ""
						}`}
						onClick={() =>
							handleButtonClick("katalogteknologi", "/katalogteknologi")
						}>
						Katalog teknologi
					</Button>
				</Col>
			</Row>

			<div className="container mt-3">
				<main>
					<h1 className="text-center">E-book & Panduan</h1>
					{/* Search Bar */}
					<div
						className="input-group mx-3 flex-grow-1"
						style={{ maxWidth: "95%", position: "relative" }}>
						<i
							className="fa-solid fa-magnifying-glass"
							style={{
								color: "#ef7a53",
								position: "absolute",
								left: "15px",
								top: "50%",
								transform: "translateY(-50%)",
							}}></i>
						<input
							type="text"
							className="form-control bg-transparent"
							style={{
								borderColor: "#ef7a53",
								borderRadius: "20px",
								paddingLeft: "40px",
							}}
							placeholder="Cari E-book..."
						/>
					</div>

					<div className="progress-list">
						<div className="progress-item">
							<img src="Agronomi.png" className="icon" />
							<span
								className="title"
								style={{ fontSize: "10pt", paddingTop: "13px" }}>
								Agronomi
							</span>
							<span className="pages">10 hal</span>
							<div className="progress-bar">
								<div className="progress" id="progress1"></div>
							</div>
							<span className="progress-percentage">5% selesai</span>
						</div>

						<div className="progress-item">
							<img src="Pemulian Tanaman.png" className="icon" />
							<span
								className="title"
								style={{ fontSize: "10pt", paddingTop: "13px" }}>
								Pemuliaan Tanaman Modern
							</span>
							<span className="pages">35 hal</span>
							<div className="progress-bar">
								<div className="progress" id="progress2"></div>
							</div>
							<span className="progress-percentage">25% selesai</span>
						</div>

						<div className="progress-item">
							<img src="Pertanian era digital.png" className="icon" />
							<span
								className="title"
								style={{ fontSize: "10pt", paddingTop: "13px" }}>
								Pertanian Era Digital
							</span>
							<span className="pages">50 hal</span>
							<div className="progress-bar">
								<div className="progress" id="progress3"></div>
							</div>
							<span className="progress-percentage">15% selesai</span>
						</div>
					</div>

					<div className="tabs">
						<button
							className={`tab ${activeTab === "populer" ? "active" : ""}`}
							onClick={() => handleTabClick("populer")}>
							Populer
						</button>
						<button
							className={`tab ${activeTab === "penjualan" ? "active" : ""}`}
							onClick={() => handleTabClick("penjualan")}>
							Penjualan Teratas
						</button>
						<button
							className={`tab ${activeTab === "mengikuti" ? "active" : ""}`}
							onClick={() => handleTabClick("mengikuti")}>
							Mengikuti
						</button>
						<button
							className={`tab ${activeTab === "baru" ? "active" : ""}`}
							onClick={() => handleTabClick("baru")}>
							Baru
						</button>
						<button
							className={`tab ${activeTab === "next" ? "active" : ""}`}
							onClick={() => handleTabClick("next")}>
							Next
						</button>
					</div>

					<div className="book-grid">
						<div className="book-card">
							<a href="/detailebook">
								<img src="./bioteknologi pertanian.jpg" alt="detail" />
								Bioteknologi Pertanian
							</a>
						</div>

						<div className="book-card">
							<a href="/detailebook">
								<img src="./inovasi agribisnis.jpg" alt="" />
								Inovasi Agribisnis
							</a>
						</div>

						<div className="book-card">
							<a href="/carousel">
								<img src="./manajemen agroindustri.jpg" alt="" />
								Manajemen Agroindustri
							</a>
						</div>

						<div className="book-card">
							<a href="/carousel">
								<img src="./pertanian keberlanjutan.jpg" alt="" />
								Pertanian Berkelanjutan
							</a>
						</div>

						<div className="book-card">
							<a href="/carousel">
								<img src="./pertanian masa depan.jpg" alt="" />
								Pertanian Masa Depan
							</a>
						</div>

						<div className="book-card">
							<a href="/carousel">
								<img src="./pertanian postmodern.jpg" alt="" />
								Pertanian Postmodern
							</a>
						</div>

						<div className="book-card">
							<a href="/carousel">
								<img src="./produktivitas tanama pertanian.jpg" alt="" />
								Produktivitas Tanaman Pertanian
							</a>
						</div>

						<div className="book-card">
							<a href="/carousel">
								<img src="./tanaman modern.jpg" alt="" />
								Tanaman Modern
							</a>
						</div>

						<div className="book-card">
							<a href="/carousel">
								<img src="./teknologi.jpg" alt="" />
								Teknologi Pertanian
							</a>
						</div>

						<div className="book-card">
							<a href="/carousel">
								<img src="./pertanian 4.0.jpg" alt="" />
								Pertanian 4.0
							</a>
						</div>
					</div>
				</main>
			</div>
			<Footer />
		</>
	);
};

export default Ebook;
