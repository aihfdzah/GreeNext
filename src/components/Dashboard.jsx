import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/Dashboard.css";

function Dashboard() {
	const [activeButton, setActiveButton] = useState(null); // State to track the active button
	const navigate = useNavigate();

	const handleButtonClick = (buttonName, path) => {
		setActiveButton(buttonName); // Update the active button state
		navigate(path); // Navigate to the specified path
	};

	return (
		<Container fluid className="100vh p-lg-4 p-md-0 mt-5">
			<Row className="py-3">
				<Col>
					<h1 style={{ fontSize: "20pt", color: "grey" }}>Dashboard</h1>
				</Col>
				<Col className="text-end ">
					<Button
						className={`ml-1 w-25 button-custom ${
							activeButton === "home" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("home", "/home")}>
						Home
					</Button>
					<Button
						className={`ml-3 w-25 button-custom ${
							activeButton === "sertifikat" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("sertifikat", "/sertifikat")}>
						Sertifikat
					</Button>
					<Button
						className={`ml-4 me-3 w-25 button-custom ${
							activeButton === "sumber" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("sumber", "/sumber")}>
						Sumber Daya
					</Button>
					<Button
						className={`me-5 button-custom ${
							activeButton === "histori" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("histori", "/histori")}>
						Histori
					</Button>
				</Col>
			</Row>
			<Row className="py-4">
				<Col md={6}>
					<h2>
						Selamat Datang Kembali,{" "}
						<span style={{ color: "#ef7a53" }}>Wahyu Rojolele!</span>
					</h2>
					<p>Ayo lanjutkan kelasnya sampai tuntas!</p>
					<h3>Lanjutkan kelasnya yuk!</h3>
				</Col>
				<Col md={6}>
					<Row>
						<Col md={4}>
							<div className="card" style={{ backgroundColor: "#F5F2ED" }}>
								<div className="card-body">
									<h5 className="card-title">0</h5>
									<p className="card-text">Kelas</p>
								</div>
							</div>
						</Col>
						<Col md={4}>
							<div className="card" style={{ backgroundColor: "#F5F2ED" }}>
								<div className="card-body">
									<h5 className="card-title">0</h5>
									<p className="card-text">Kelas Selesai</p>
								</div>
							</div>
						</Col>
						<Col md={4}>
							<div className="card" style={{ backgroundColor: "#F5F2ED" }}>
								<div className="card-body">
									<h5 className="card-title">0</h5>
									<p className="card-text">Resource</p>
								</div>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row className="py-5">
				<Col>
					<div className="d-flex justify-content-center">
						<div className="fs-1">
							<span className="text-orange">
								<i className="bi bi-book-half"></i>
							</span>
						</div>
						<div className="ms-3 text-center">
							<h2>Kelas Saya</h2>
							<p>Tidak ada kelas yang sedang berlangsung</p>
							<Button
								href="/kelas"
								className="w-100"
								style={{
									color: "#F5F2ED",
									backgroundColor: "#ef7a53",
									border: "none",
								}}>
								Cari Kelas
							</Button>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default Dashboard;
