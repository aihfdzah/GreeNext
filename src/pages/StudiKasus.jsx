import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const StudiKasus = () => {
	const [activeButton, setActiveButton] = useState("studikasus");
	const [searchQuery, setSearchQuery] = useState(""); // Untuk menangani pencarian
	const navigate = useNavigate();

	const handleButtonClick = (buttonName, path) => {
		setActiveButton(buttonName);
		navigate(path);
	};

	const caseStudies = [
		{
			title: "Penerapan Pertanian Presisi (Presisi Agriculture)",
			image: "./foto2.jpg",
			link: "/studikasusdetail",
			views: "1k",
			likes: 87,
		},
		{
			title: "Pengembangan Agrowisata Berbasis Komunitas",
			image: "./foto3.jpg",
			link: "/studikasusdetail2",
			views: "90",
			likes: 87,
		},
		{
			title: "Penggunaan Teknologi IoT untuk Tanaman Sayuran Hidroponik",
			image: "./foto4.jpg",
			link: "/studikasusdetail3",
			views: "2k",
			likes: 87,
		},
	];

	// Filter studi kasus berdasarkan pencarian
	const filteredCaseStudies = caseStudies.filter((study) =>
		study.title.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<>
			<Navbar />

			{/* Header */}
			<Row
				className="py-3 d-flex text-left"
				style={{
					marginTop: "70px",
					marginLeft: "-30px",
					marginBottom: "-90px",
				}}>
				<Col>
					<h1 style={{ color: "#17412d" }}>Studi Kasus</h1>
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

			{/* Kontainer Studi Kasus */}
			<div className="container mt-5" id="studikasus">
				<h1 className="text-center">Studi Kasus</h1>
				{/* Search Bar */}
				<div
					className="input-group mx-3 flex-grow-1"
					style={{
						maxWidth: "96%",
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
						placeholder="Cari Studi Kasus..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div>

				{/* Daftar Studi Kasus */}
				{filteredCaseStudies.map((study, index) => (
					<div
						key={index}
						className="d-flex align-items-center justify-content-between border rounded p-3 mb-3 shadow-sm">
						{/* Konten Studi Kasus */}
						<div className="w-75">
							<a href={study.link} className="text-decoration-none text-dark">
								<h5 className="mb-2">{study.title}</h5>
							</a>
							<div className="d-flex align-items-center text-secondary mt-2">
								<i className="fa-regular fa-eye me-2"></i>
								<span className="me-4">{study.views}</span>
								<i className="fa-regular fa-thumbs-up me-2"></i>
								<span className="me-4">{study.likes}</span>
								<i className="fa-solid fa-download me-2"></i>
								<span className="me-4">Unduh</span>
								<i className="fa-regular fa-heart me-2"></i>
								<span>Tandai</span>
							</div>
						</div>
						{/* Gambar */}
						<div className="w-25 ms-3">
							<img
								src={study.image}
								alt="Studi Kasus"
								className="img-fluid rounded"
							/>
						</div>
					</div>
				))}
			</div>

			<Footer />
		</>
	);
};

export default StudiKasus;
