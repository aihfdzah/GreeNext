import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios"; // Tambahkan import axios
import "../styles/Dashboard.css";

function Dashboard() {
	const [activeButton, setActiveButton] = useState(null); // State untuk melacak tombol aktif
	const [username, setUsername] = useState("user"); // State untuk username
	const navigate = useNavigate();

	// Penambahan kode untuk mengambil data username dari API
	useEffect(() => {
		const fetchUsername = async () => {
			try {
				const token = localStorage.getItem("token"); // Ambil token dari localStorage
				if (token) {
					const response = await axios.get(
						"http://localhost:5173/api/v1/user", // Endpoint API
						{
							headers: {
								Authorization: `Bearer ${token}`, // Kirim token sebagai header
							},
						}
					);
					if (response.data && response.data.username) {
						setUsername(response.data.username); // Set username dari respons API
					}
				} else {
					console.error("Token tidak ditemukan. User belum login.");
				}
			} catch (error) {
				console.error("Gagal mengambil data user:", error);
			}
		};
		fetchUsername(); // Panggil fungsi fetchUsername
	}, []);

	const handleButtonClick = (buttonName, path) => {
		setActiveButton(buttonName); // Perbarui tombol aktif
		navigate(path); // Navigasi ke path yang ditentukan
	};
	return (
		<Container fluid className="p-lg-3 p-md-0 mt-0">
			<Row
				className="py-3 d-flex text-left mb-1"
				style={{
					marginTop: "40px",
					marginLeft: "-5px",
					marginBottom: "-90px",
				}}>
				<Col>
					<h1 style={{ color: "#17412d" }}>Dashboard</h1>
				</Col>
				<Col
					className="text-end me-auto text-left"
					style={{ marginLeft: "-200px" }}>
					<Button
						className={`button-custom ${
							activeButton === "home" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("home", "/home")}>
						Home
					</Button>
					<Button
						className={`button-custom ${
							activeButton === "kelas" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("kelas", "/kelas")}>
						Kelas
					</Button>
					<Button
						className={`button-custom ${
							activeButton === "sumber" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("sumber", "/sumberdaya")}>
						Sumber Daya
					</Button>
					<Button
						className={`button-custom ${
							activeButton === "histori" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("histori", "/histori")}>
						Histori
					</Button>
				</Col>
			</Row>
			<Row className="py-5">
				<Col md={6}>
					<h2
						style={{ color: "#17412d", marginRight: "200px", marginLeft: "" }}>
						Selamat Datang Kembali,{" "}
						<span style={{ color: "#ef7a53" }}>{username}!</span>
					</h2>
					<p>Ayo lanjutkan kelasnya sampai tuntas!</p>
					<h3>Lanjutkan kelasnya yuk!</h3>
				</Col>
				<Col md={6}>
					<Row style={{ marginTop: "-90px" }}>
						<Col md={4} style={{ marginTop: "90px" }}>
							<div className="card" style={{ backgroundColor: "#F5F2ED" }}>
								<div className="card-body">
									<h5 className="card-title">0</h5>
									<p className="card-text">Kelas</p>
								</div>
							</div>
						</Col>
						<Col md={4} style={{ marginTop: "90px" }}>
							<div className="card" style={{ backgroundColor: "#F5F2ED" }}>
								<div className="card-body">
									<h5 className="card-title">0</h5>
									<p className="card-text">Kelas Selesai</p>
								</div>
							</div>
						</Col>
						<Col md={4} style={{ marginTop: "90px" }}>
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
			<Row className="py-5" id="kelas-wrapper">
				<Col>
					<div className="d-flex justify-content-center">
						<div className="fs-1">
							<span className="text-orange">
								<i className="bi bi-book-half"></i>
							</span>
						</div>
						<div className="ms-3 text-center" style={{ marginBottom: "30%" }}>
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
