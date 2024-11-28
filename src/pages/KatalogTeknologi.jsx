import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Styles/KatalogTeknologi.css";
const KatalogTeknologi = () => {
	const [activeButton, setActiveButton] = useState("katalogteknologi"); // Initialize activeButton state
	const navigate = useNavigate(); // Initialize navigation
	const [searchQuery, setSearchQuery] = useState("");

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
					marginLeft: "-155px",
					marginBottom: "-90px",
				}}>
				<Col>
					<h1 style={{ color: "#17412d" }}>Katalog Teknologi</h1>
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

			<div className="container mt-4">
				<h1 className="text-center">Katalog Teknologi</h1>
				{/* Search Bar */}
				<div
					className="input-group mx-3 flex-grow-1 align-items-center m-3"
					style={{
						maxWidth: "97%",
						position: "relative",
					}}>
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
						placeholder="Katalog Teknologi..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div>

				<div class="list-item mt-2">
					<div class="item-content">
						<img
							src="./sensor tanah.jpg"
							alt="Sensor Tanah"
							class="item-image"
						/>
						<div class="item-text">
							<p class="item-title">Sensor Tanah</p>
							<p class="item-desc">
								Digunakan untuk mengukur kadar air, pH, dan nutrisi tanah.
							</p>
						</div>
					</div>

					<div class="item-action">
						<i className="fa fa-eye"></i>
						<a href="#">Lihat detail</a>
					</div>
				</div>

				<div class="list-item">
					<div class="item-content">
						<img
							src="./lampu grow led.jpg"
							alt="Lampu Grow LED"
							class="item-image"
						/>
						<div class="item-text">
							<p class="item-title">Lampu Grow LED</p>
							<p class="item-desc">
								Lampu khusus untuk mendukung pertumbuhan tanaman di dalam
								ruangan.
							</p>
						</div>
					</div>

					<div class="item-action">
						<i className="fa fa-eye"></i>
						<a href="#">Lihat detail</a>
					</div>
				</div>
				<div class="list-item">
					<div class="item-content">
						<img
							src="./smart sprinklee.jpg"
							alt="Lampu Grow LED"
							class="item-image"
						/>
						<div class="item-text">
							<p class="item-title">
								Smart Sprinkle (Penyiraman Tanaman Cerdas)
							</p>
							<p class="item-desc">
								Sistem penyiraman tanaman yang bisa diatur waktu dan
								intensitasnya.
							</p>
						</div>
					</div>

					<div class="item-action">
						<i className="fa fa-eye"></i>
						<a href="#">Lihat detail</a>
					</div>
				</div>
				<div class="list-item">
					<div class="item-content">
						<img
							src="./traktor mini elektrik.jpg"
							alt="Lampu Grow LED"
							class="item-image"
						/>
						<div class="item-text">
							<p class="item-title">Traktor Mini Elektrik</p>
							<p class="item-desc">
								Alat bantu yang efisien dan mudah digunakan untuk mengelola
								lahan kecil hingga menengah.
							</p>
						</div>
					</div>

					<div class="item-action">
						<i className="fa fa-eye"></i>
						<a href="#">Lihat detail</a>
					</div>
				</div>
				<div class="list-item">
					<div class="item-content">
						<img
							src="drone pertanian.jpg"
							alt="Lampu Grow LED"
							class="item-image"
						/>
						<div class="item-text">
							<p class="item-title">Drone Pertanian</p>
							<p class="item-desc">
								Digunakan untuk pemantauan tanaman dan penyemprotan
								pupuk/pestisida dari udara.
							</p>
						</div>
					</div>

					<div class="item-action">
						<i className="fa fa-eye"></i>
						<a href="#">Lihat detail</a>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default KatalogTeknologi;
