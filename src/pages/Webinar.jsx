import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../Styles/Webinar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useEffect } from "react";
import Spinner from "../components/Spinner"; // Pastikan path sesuai dengan lokasi Spinner.js
const Webinar = () => {
	const [activeButton, setActiveButton] = useState("webinar"); // Initialize activeButton state
	const navigate = useNavigate(); // Initialize navigation
	const [loading, setLoading] = useState(true); // State untuk mengatur loading spinner
	const handleButtonClick = (buttonName, path) => {
		setActiveButton(buttonName);
		navigate(path);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000); // Simulasikan loading selama 3 detik

		return () => clearTimeout(timer);
	}, []);

	// Jika sedang loading, tampilkan spinner
	if (loading) {
		return <Spinner />;
	}

	return (
		<>
			<Navbar />
			<Row
				className="py-3 d-flex text-left mt-5"
				style={{
				}}>
				<Col>
					<h1 style={{ color: "#17412d" }}>Webinar & Seminar</h1>
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
							activeButton === "katalogteknologi" ? "active" : ""
						}`}
						onClick={() =>
							handleButtonClick("katalogteknologi", "/katalogteknologi")
						}>
						Katalog teknologi
					</Button>
				</Col>
			</Row>

			<div className="container mt-5" style={{ marginBottom: "30%" }}>
				<h1 className="text-center">Webinar & Seminar</h1>
				<div className="d-flex align-items-center justify-content-between py-2 border-bottom mt-1 mb-3">
					{/* Search Bar */}
					<div
						className="input-group mx-3 flex-grow-1"
						style={{ maxWidth: "600px", position: "relative" }}>
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
							placeholder="Cari Webinar..."
						/>
					</div>

					{/* Icon Group */}
					<div className="d-flex align-items-center">
						<i
							className="fa-regular fa-heart mx-2"
							style={{
								fontSize: "20px",
								cursor: "pointer",
								color: "#ef7a53",
							}}></i>
						<i
							className="fa-solid fa-cart-shopping mx-2"
							style={{
								fontSize: "20px",
								cursor: "pointer",
								color: "#ef7a53",
							}}></i>
					</div>
				</div>

				<div
					id="highlightedEventCarousel"
					className="carousel slide mt-0"
					data-bs-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active mb-3">
							<img
								src="./foto2.jpg"
								className="d-block w-100"
								style={{ borderRadius: "10px" }}
								alt="Highlight Event 1"
							/>
							<div className="carousel-caption">
								<h2>Pengenalan Sistem Pertanian Presisi</h2>
								<p>
									Inovasi pertanian menjadi kunci untuk meningkatkan
									produktivitas, efisiensi, dan keberlanjutan sektor pertanian
									di Indonesia.
								</p>
								<span className="date">24 Januari 2025</span>
								<p className="location">Lembang, Kota Bandung, Jawa Barat</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src="./foto5.jpg"
								className="d-block w-100"
								style={{ borderRadius: "10px" }}
								alt="Highlight Event 2"
							/>
							<div className="carousel-caption">
								<h2>Sistem Teknologi Pertanian</h2>
								<p>
									Menyoroti bagaimana teknologi meningkatkan efisiensi pertanian
									modern.
								</p>
								<span className="date">15 - 16 April 2025</span>
								<p className="location">Kabupaten Bandung, Jawa Barat</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src="./foto6.jpg"
								className="d-block w-100"
								style={{ borderRadius: "10px" }}
								alt="Highlight Event 3"
							/>
							<div className="carousel-caption">
								<h2>Manajemen Pertanian Berkelanjutan</h2>
								<p>
									Fokus pada strategi untuk menjaga keberlanjutan sektor
									pertanian.
								</p>
								<span className="date">20 Juli 2025</span>
								<p className="location">Via Zoom</p>
							</div>
						</div>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#highlightedEventCarousel"
						data-bs-slide="prev">
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#highlightedEventCarousel"
						data-bs-slide="next">
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>

				<div className="event-list">
					<div className="event-card">
						<img src="./foto6.jpg" alt="Event Thumbnail" style={{ width: "55%" }} />
						<div className="event-info">
							<h3>Dinamika Pertanian Konvesional </h3>
							<p>108 orang mengikuti seminar ini</p>
							<p>
								📍Lembang, <br /> Kabupaten Bandung, Jawa Barat
							</p>
							<p>Tanggal: 28 - 29 Februari 2025</p>
						</div>
						{/* Tombol Daftar di bawah */}
						<a href="./WebinarDetail">
							<button
								className="btn-status"
								style={{ display: "block", margin: "10px auto" }}>
								Daftar
							</button>
						</a>
					</div>

					<div className="event-card">
						<img src="./foto5.jpg" alt="Event Thumbnail" />
						<div className="event-info">
							<h3>Sistem Teknologi Pertanian</h3>
							<p>192 orang mengikuti seminar ini</p>
							<p>
								📍Lembang, <br /> Kabupaten Bandung, Jawa Barat
							</p>
							<p>Tanggal: 15 - 16 April 2025</p>
						</div>
						<a href="./WebinarDetail">
							<button className="btn-status">Daftar</button>
						</a>
					</div>

					<div className="event-card">
						<img src="./foto4.jpg" alt="Event Thumbnail" />
						<div className="event-info">
							<h3>Manajemen Pertanian</h3>
							<p>100 orang mengikuti seminar ini</p>
							<p> ⛓️‍💥Via Zoom </p>
							<p>Tanggal: 20 Juli 2025</p>
						</div>
						<a href="./WebinarDetail">
							<button className="btn-status">Daftar</button>
						</a>
					</div>

					<div className="event-card">
						<img src="./foto9.jpg" alt="Event Thumbnail" />
						<div className="event-info">
							<h3>Inovasi Pertanian Hemat Air</h3>
							<p>122 orang mengikuti seminar ini</p>
							<p> ⛓️‍💥Via Zoom </p>
							<p>Tanggal: 01 Oktober 2025</p>
						</div>
						<a href="./WebinarDetail">
							<button className="btn-status">Daftar</button>
						</a>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Webinar;
