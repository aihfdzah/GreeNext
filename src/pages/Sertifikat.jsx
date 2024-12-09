import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "../components/Spinner"; // Pastikan path sesuai dengan lokasi Spinner.js
import { FaDownload, FaEye, FaLinkedin } from "react-icons/fa"; // Tambahkan package react-icons

const sertifikatList = [
	{
		id: 1,
		title: "Pengantar Pertanian Modern",
		image: "sertifikat1.png",
	},
	{
		id: 2,
		title: "Pertanian Berkelanjutan",
		image: "sertifikat2.png",
	},
	{
		id: 3,
		title: "Teknik Irigasi Cerdas",
		image: "sertifikat3.png",
	},
	{
		id: 4,
		title: "Konsep Panduan Pertanian Presisi",
		image: "sertifikat4.png",
	},
	{
		id: 5,
		title: "Pemanfaatan Teknologi IoT",
		image: "sertifikat5.png",
	},
	{
		id: 6,
		title: "Pemanfaatan Big Data & AI",
		image: "sertifikat6.png",
	},
];

const Sertifikat = () => {
	const [activeButton, setActiveButton] = useState("sertifikat"); // Set default button 'home' sebagai aktif
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);

	const handleButtonClick = (buttonName, path) => {
		setActiveButton(buttonName);
		navigate(path);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Spinner />;
	}

	return (
		<>
			<Navbar />
			<Container className="mt-5" style={{ marginBottom: "25%" }}>
				<Row
					className="py-3 d-flex text-left"
					style={{
						marginLeft: "-10px",
					}}>
					<Col>
						<h1 style={{ color: "#17412d" }}>Sertifikat</h1>
					</Col>
					<Col className="text-end me-auto">
						<Button
							className={`me-5 w-15 button-custom ${
								activeButton === "home" ? "active" : ""
							}`}
							onClick={() => handleButtonClick("home", "/home")}>
							Home
						</Button>
						<Button
							className={`p-0 me-5 w-15 button-custom ${
								activeButton === "sertifikat" ? "active" : ""
							}`}
							onClick={() => handleButtonClick("sertifikat", "/sertifikat")}>
							Sertifikat
						</Button>
						<Button
							className={`me-5 w-15 button-custom ${
								activeButton === "sumber" ? "active" : ""
							}`}
							onClick={() => handleButtonClick("sumber", "/sumberdaya")}>
							Sumber Daya
						</Button>
						<Button
							className={`me-5 w-15 button-custom ${
								activeButton === "histori" ? "active" : ""
							}`}
							onClick={() => handleButtonClick("histori", "/histori")}>
							Histori
						</Button>
					</Col>
				</Row>
				<Row className="py-5">
				<Col md={6}>
					<h3>Sertifikat</h3>
					<p>Sertifikasi pertanian sebagai bukti ketuntasan pembelajaran.</p>
				</Col>
				<Col md={6}>
					<Row style={{ marginTop: "-90px" }}>
						<Col md={4} style={{ marginLeft: "60%" }}>
							<div className="card" style={{ backgroundColor: "#F5F2ED" }}>
								<div className="card-body">
									<h5 className="card-title">6</h5>
									<p className="card-text">Sertifikat</p>
								</div>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
				<Row>
					{sertifikatList.map((cert) => (
						<Col key={cert.id} md={4} className="mb-3 mt-5">
							{" "}
							{/* Ubah margin bawah menjadi mb-3 */}
							<Card className="shadow-sm h-100">
								<Card.Img
									variant="top"
									src={cert.image}
									alt={cert.title}
									style={{ height: "240px", objectFit: "cover" }}
								/>
								<Card.Body style={{ backgroundColor: "#17412D" }}>
									<Card.Title className="mb-3" style={{ color: "#f5f2ed" }}>
										{cert.title}
									</Card.Title>
									<div className="d-flex justify-content-between">
										<Button
											variant="outline"
											className="me-2 custom-button"
											style={{
												color: "#f5f2ed",
												borderColor: "#f5f2ed",
											}}>
											<FaDownload className="me-2" />
											Download
										</Button>
										<Button
											variant="outline"
											className="me-2 custom-button"
											style={{
												color: "#f5f2ed",
												borderColor: "#f5f2ed",
											}}>
											<FaEye className="me-2" />
											Lihat
										</Button>
										<Button
											variant="outline"
											className="custom-button"
											style={{
												color: "#f5f2ed",
												borderColor: "#f5f2ed",
											}}>
											<FaLinkedin className="me-2" />
											LinkedIn
										</Button>
									</div>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
			<Footer />
		</>
	);
};

export default Sertifikat;
