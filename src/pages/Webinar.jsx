import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../Styles/Webinar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import {
	FaSeedling,
	FaUserFriends,
	FaMapMarkerAlt,
	FaCalendarAlt,
	FaSignInAlt,
	FaCogs,
	FaLeaf,
	FaVideo,
	FaWater,
} from "react-icons/fa";
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
			<Row className="d-flex text-left mt-5" style={{maxWidth:'1440px', margin:"auto", padding:"3rem 2rem"}}>
				<Col>
					<h1 style={{ color: "#17412d", fontSize: "16pt" }}>
						Webinar & Seminar
					</h1>
				</Col>
				<Col className="text-end me-auto text-left">
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

			<div className="container mt-2" style={{marginBottom:"2rem", padding:"0px 2rem"}}>
				<h1 className="text-center">Webinar & Seminar</h1>
				<div className="d-flex align-items-center border-bottom mb-4 pb-4" style={{justifyContent:"space-between", gap:'1.5rem'}}>
					{/* Search Bar */}
					<div
						className="mx-3 flex-grow-1"
						style={{ position: "relative" }}>
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
								paddingTop:".625rem",
								paddingBottom:".625rem",
							}}
							placeholder="Cari Webinar..."
						/>
					</div>

					{/* Icon Group */}
					<div className="d-flex align-items-center">
						<i
							className="fa-regular fa-heart mx-2"
							style={{
								fontSize: "30px",
								cursor: "pointer",
								color: "#ef7a53",
							}}></i>
						<i
							className="fa-solid fa-cart-shopping mx-2"
							style={{
								fontSize: "30px",
								cursor: "pointer",
								color: "#ef7a53",
							}}></i>
					</div>
				</div>

				<div
					id="highlightedEventCarousel"
					className="carousel slide mt-0"
					data-bs-ride="carousel">
					<div className="carousel-inner mb-5">
						<div className="carousel-item active">
							<img
								src="./smart-agriculture-2.jpg"
								className="d-block w-100"
								style={{ borderRadius: "10px", height:'450px', objectFit:"cover", filter:"brightness(45%)" }}
								alt="Highlight Event 1"
							/>
							<div className="carousel-caption">
								<h2 style={{color:"white"}}>Pengenalan Sistem Pertanian Presisi</h2>
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
								src="./smart-agriculture-1.jpg"
								className="d-block w-100"
								style={{ borderRadius: "10px", height:'450px', objectFit:'cover', filter:"brightness(45%)" }}
								alt="Highlight Event 2"
							/>
							<div className="carousel-caption">
								<h2 style={{color:"white"}}>Sistem Teknologi Pertanian</h2>
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
								src="./smart-agriculture-3.jpg"
								className="d-block w-100"
								style={{ borderRadius: "10px", height:'450px', objectFit:'cover', filter:"brightness(45%)" }}
								alt="Highlight Event 3"
							/>
							<div className="carousel-caption">
								<h2 style={{color:"white"}}>Manajemen Pertanian Berkelanjutan</h2>
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
						<img
							src="./smart-agriculture-1.jpg"
							alt="Event Thumbnail"
							style={{ }}
						/>
						<div className="event-info">
							<h3 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
								<FaSeedling className="me-2" />
								Dinamika Pertanian Konvesional
							</h3>
							<p style={{ fontSize: "1rem", color: "#555" }}>
								<FaUserFriends className="me-2" />
								108 orang mengikuti seminar ini
							</p>
							<p style={{ fontSize: "1rem", color: "#555" }}>
								<FaMapMarkerAlt className="me-2" />
								Lembang, Kabupaten Bandung, Jawa Barat
							</p>
							<p style={{ fontSize: "1rem", color: "#555" }}>
								<FaCalendarAlt className="me-2" />
								Tanggal: 28 - 29 Februari 2025
							</p>
						</div>
						<a href="./WebinarDetail">
							<button
								className="btn-status"
								style={{
									display: "block",
									margin: "10px auto",
									backgroundColor: "#ef7a53",
									color: "#fff",
									borderRadius: "20px",
									padding: "10px 20px",
									fontSize: "1rem",
									border: "none",
									cursor: "pointer",
								}}>
								<FaSignInAlt className="me-2" />
								Daftar
							</button>
						</a>
					</div>

					<div className="event-card">
						<img
							src="./smart-agriculture-2.jpg"
							alt="Event Thumbnail"
							style={{  }}
						/>
						<div className="event-info">
							<h3 style={{ fontSize: "1.5rem", fontWeight: "600" }} className="mb-3">
								<FaCogs className="me-2" />
								Sistem Teknologi Pertanian
							</h3>
							<p style={{ fontSize: "16px", color: "#555" }}>
								<FaUserFriends className="me-2" />
								192 orang mengikuti seminar ini
							</p>
							<p style={{ fontSize: "16px", color: "#555" }}>
								<FaMapMarkerAlt className="me-2" />
								Lembang, Kabupaten Bandung, Jawa Barat
							</p>
							<p style={{ fontSize: "16px", color: "#555" }}>
								<FaCalendarAlt className="me-2" />
								Tanggal: 15 - 16 April 2025
							</p>
						</div>
						<a href="./WebinarDetail">
							<button className="btn-status" style={{
									display: "block",
									margin: "10px auto",
									backgroundColor: "#ef7a53",
									color: "#fff",
									borderRadius: "20px",
									padding: "10px 20px",
									fontSize: "1rem",
									border: "none",
									cursor: "pointer",
								}}>
								<FaSignInAlt className="me-2" />
								Daftar
							</button>
						</a>
					</div>

					<div className="event-card">
						<img
							src="./smart-agriculture-3.jpg"
							alt="Event Thumbnail"
							style={{ }}
						/>
						<div className="event-info">
							<h3 style={{ fontSize: "1.5rem", fontWeight: "600" }} className="mb-3">
								<FaLeaf className="me-2" />
								Manajemen Pertanian
							</h3>
							<p style={{ fontSize: "16px", color: "#555" }}>
								<FaUserFriends className="me-2" />
								100 orang mengikuti seminar ini
							</p>
							<p style={{ fontSize: "16px", color: "#555" }}>
								<FaVideo className="me-2" />
								Via Zoom
							</p>
							<p style={{ fontSize: "16px", color: "#555" }}>
								<FaCalendarAlt className="me-2" />
								Tanggal: 20 Juli 2025
							</p>
						</div>
						<a href="./WebinarDetail">
							<button className="btn-status" style={{
									display: "block",
									margin: "10px auto",
									backgroundColor: "#ef7a53",
									color: "#fff",
									borderRadius: "20px",
									padding: "10px 20px",
									fontSize: "1rem",
									border: "none",
									cursor: "pointer",
								}}>
								<FaSignInAlt className="me-2" />
								Daftar
							</button>
						</a>
					</div>

					<div className="event-card">
						<img
							src="./smart-agriculture-4.jpg"
							alt="Event Thumbnail"
							style={{  }}
						/>
						<div className="event-info">
							<h3 style={{ fontSize: "1.5rem", fontWeight: "600" }} className="mb-3">
								<FaWater className="me-2" />
								Inovasi Pertanian Hemat Air
							</h3>
							<p style={{ fontSize: "16px", color: "#555" }}>
								<FaUserFriends className="me-2" />
								122 orang mengikuti seminar ini
							</p>
							<p style={{ fontSize: "16px", color: "#555" }}>
								<FaVideo className="me-2" />
								Via Zoom
							</p>
							<p style={{ fontSize: "16px", color: "#555" }}>
								<FaCalendarAlt className="me-2" />
								Tanggal: 01 Oktober 2025
							</p>
						</div>
						<a href="./WebinarDetail">
							<button className="btn-status" style={{
									display: "block",
									margin: "10px auto",
									backgroundColor: "#ef7a53",
									color: "#fff",
									borderRadius: "20px",
									padding: "10px 20px",
									fontSize: "1rem",
									border: "none",
									cursor: "pointer",
								}}>
								<FaSignInAlt className="me-2" />
								Daftar
							</button>
						</a>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Webinar;
