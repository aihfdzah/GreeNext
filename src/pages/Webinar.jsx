import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
const Webinar = () => {
	const [activeButton, setActiveButton] = useState("webinar"); // Initialize activeButton state
	const navigate = useNavigate(); // Initialize navigation

	const handleButtonClick = (buttonName, path) => {
		setActiveButton(buttonName);
		navigate(path);
	};

	return (
		<>
			<Navbar />
			<Row
				className="py-3 d-flex text-left"
				style={{
					marginTop: "70px",
					marginLeft: "-255px",
					marginBottom: "-90px",
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
							activeButton === "histori" ? "active" : ""
						}`}
						onClick={() =>
							handleButtonClick("katalogteknologi", "/katalogteknologi")
						}>
						Katalog teknologi
					</Button>
				</Col>
			</Row>

			<div className="container" style={{ marginBottom: "35%" }}>
				<h1 className="text-center">Webinar & Seminar</h1>
				<div
					className="d-flex align-items-center justify-content-between py-2 border-bottom"
					style={{ marginBottom: "10%" }}>
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

				<div className="highlighted-event">
					<img src="./foto2.jpg" alt="Highlight Event" />
					<div className="highlight-content">
						<h2>Pengenalan Sistem Pertanian Presisi</h2>
						<p>
							Inovasi pertanian menjadi kunci untuk meningkatkan produktivitas,
							efisiensi, dan keberlanjutan sektor pertanian di Indonesia.
						</p>
						<span className="date">24 Januari 2025</span>
						<p className="location">Lembang, Kota Bandung, Jawa Barat</p>
					</div>
					<p className="down mt-2">Up Coming Event</p>
				</div>

				<div className="event-list">
					<div className="event-card">
						<img src="./foto6.jpg" alt="Event Thumbnail" />
						<div className="event-info">
							<h3>Dinamika Pertanian Konvesional </h3>
							<p>108 orang mengikuti seminar ini</p>
							<p>
								📍Lembang, <br /> Kabupaten Bandung, Jawa Barat
							</p>
							<p>Tanggal: 28 - 29 Februari 2025</p>
						</div>
						<a href="./WebinarDetail">
							<button className="btn-status">Daftar</button>
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
