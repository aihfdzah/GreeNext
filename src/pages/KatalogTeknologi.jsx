import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
const KatalogTeknologi = () => {
	const [activeButton, setActiveButton] = useState("katalogtekno"); // Initialize activeButton state
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


			<div className="container">
                <div class="list-item">
                    <div class="item-content">
                        <img src="./sensor tanah.jpg" alt="Sensor Tanah" class="item-image" />
                            <div class="item-text">
                                <p class="item-title">Sensor Tanah</p>
                                <p class="item-desc">Digunakan untuk mengukur kadar air, pH, dan nutrisi tanah.</p>
                            </div>
                    </div>
                    
                    <div class="item-action">
                        <span>👁️</span>
                        <a href="#">Lihat detail</a>
                    </div>
                </div>

                <div class="list-item">
                    <div class="item-content">
                            <img src="./lampu grow led.jpg" alt="Lampu Grow LED" class="item-image" />
                                <div class="item-text">
                                    <p class="item-title">Lampu Grow LED</p>
                                    <p class="item-desc">Lampu khusus untuk mendukung pertumbuhan tanaman di dalam ruangan.</p>
                                </div>
                    </div>

                    <div class="item-action">
                        <span>👁️</span>
                        <a href="#">Lihat detail</a>
                    </div>
                </div>
                <div class="list-item">
                    <div class="item-content">
                            <img src="./smart sprinklee.jpg" alt="Lampu Grow LED" class="item-image" />
                                <div class="item-text">
                                    <p class="item-title">Smart Sprinkle (Penyiraman Tanaman Cerdas)</p>
                                    <p class="item-desc">Sistem penyiraman tanaman yang bisa diatur waktu dan intensitasnya.</p>
                                </div>
                    </div>

                    <div class="item-action">
                        <span>👁️</span>
                        <a href="#">Lihat detail</a>
                    </div>
                </div>
                <div class="list-item">
                    <div class="item-content">
                            <img src="./traktor mini elektrik.jpg" alt="Lampu Grow LED" class="item-image" />
                                <div class="item-text">
                                    <p class="item-title">Traktor Mini Elektrik</p>
                                    <p class="item-desc">Alat bantu yang efisien dan mudah digunakan untuk mengelola lahan kecil hingga menengah.</p>
                                </div>
                    </div>

                    <div class="item-action">
                        <span>👁️</span>
                        <a href="#">Lihat detail</a>
                    </div>
                </div>
                <div class="list-item">
                    <div class="item-content">
                            <img src="drone pertanian.jpg" alt="Lampu Grow LED" class="item-image" />
                                <div class="item-text">
                                    <p class="item-title">Drone Pertanian</p>
                                    <p class="item-desc">Digunakan untuk pemetaan lahan, pemantauan tanaman dan penyemprotan pupuk/pestisida dari udara.</p>
                                </div>
                    </div>

                    <div class="item-action">
                        <span>👁️</span>
                        <a href="#">Lihat detail</a>
                    </div>
                </div>

            </div>

            <Footer />
		</>
	);
};

export default KatalogTeknologi;