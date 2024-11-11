import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/Dashboard.css";

const Ebook = () => {
	const [activeButton, setActiveButton] = useState("home"); // Initialize activeButton state
	const navigate = useNavigate(); // Initialize navigation

	const handleButtonClick = (buttonName, path) => {
		setActiveButton(buttonName);
		navigate(path);
	};

	return (
		<>
			<Row
				className="py-3 d-flex"
				style={{
					marginTop: "70px",
					marginLeft: "-490px",
					marginBottom: "-100px",
				}}>
				<Col>
					<h1 style={{ color: "#17412d" }}>Sumber Daya</h1>
				</Col>
				<Col className="text-end me-auto" style={{ marginRight: "20px" }}>
					<Button
						className={`button-custom ${
							activeButton === "sumber" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("sumber", "/sumberdaya")}>
						E-Book
					</Button>
					<Button
						className={`button-custom ${
							activeButton === "sertifikat" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("sertifikat", "/sertifikat")}>
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
						onClick={() => handleButtonClick("histori", "/histori")}>
						Katalog teknologi
					</Button>
				</Col>
			</Row>

			<div className="container" style={{ marginBottom: "25%" }}>
				<main>
					<h1>E-book & Panduan</h1>
					<div className="search-bar">
						<input type="text" placeholder="Cari e-book..."></input>
					</div>

					<div className="tabs">
						<button className="tab active">Populer</button>
						<button className="tab">Penjualan Teratas</button>
						<button className="tab">Mengikuti</button>
						<button className="tab">Baru</button>
						<button className="tab">Next</button>
					</div>

					<div className="book-grid">
						<div className="book-card">
							{" "}
							<img src="./bioteknologi pertanian.jpg" alt="detail" />
							Bioteknologi Pertanian
							<a href="./Detailebook.jsx"></a>
						</div>

						<div className="book-card">
							<img src="./inovasi agribisnis.jpg" alt="" />
							Inovasi Agribisnis
							<a href=""></a>
						</div>

						<div className="book-card">
							<img src="./manajemen agroindustri.jpg" alt="" />
							Manajemen Agroindustri
							<a href=""></a>
						</div>

						<div className="book-card">
							<img src="./pertanian berkelanjutan.jpg" alt="" />
							Pertanian Berkelanjutan
							<a href=""></a>
						</div>

						<div className="book-card">
							<img src="./pertanian masa depan.jpg" alt="" />
							Pertanian Masa Depan
							<a href=""></a>
						</div>

						<div className="book-card">
							<img src="./pertanian postmodern.jpg" alt="" />
							Pertanian Postmodern
							<a href=""></a>
						</div>

						<div className="book-card">
							<img src="./produktivitas tanama pertanian.jpg" alt="" />
							Produktivitas Tanaman Pertanian
							<a href=""></a>
						</div>

						<div className="book-card">
							<img src="./tanaman modern.jpg" alt="" />
							Tanaman Modern
							<a href=""></a>
						</div>

						<div className="book-card">
							<img src="./teknologi.jpg" alt="" />
							Teknologi Pertanian
							<a href=""></a>
						</div>

						<div className="book-card">
							<img src="./pertanian 4.0.jpg" alt="" />
							Pertanian 4.0
							<a href=""></a>
						</div>
					</div>

					<div className="progress-list">
						<div className="progress-item">
							<img src="agronomi-icon.png" className="icon" />
							<span className="title">Agronomi</span>
							<span className="pages">10 hal</span>
							<div className="progress-bar">
								<div className="progress" id="progress1"></div>
							</div>
							<span className="progress-percentage">5% selesai</span>
						</div>

						<div className="progress-item">
							<img src="pemuliaan-icon.png" className="icon" />
							<span className="title">Pemuliaan Tanaman Modern</span>
							<span className="pages">35 hal</span>
							<div className="progress-bar">
								<div className="progress" id="progress2"></div>
							</div>
							<span className="progress-percentage">25% selesai</span>
						</div>

						<div className="progress-item">
							<img src="pertanian-icon.png" className="icon" />
							<span className="title">Pertanian Era Digital</span>
							<span className="pages">50 hal</span>
							<div className="progress-bar">
								<div className="progress" id="progress3"></div>
							</div>
							<span className="progress-percentage">15% selesai</span>
						</div>
					</div>
				</main>
			</div>
		</>
	);
};

export default Ebook;