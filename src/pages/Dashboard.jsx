import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/Dashboard.css";
import Spinner from "../components/Spinner"; // Pastikan path sesuai dengan lokasi Spinner.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

function Dashboard() {
	// console.log(user)
	const [activeButton, setActiveButton] = useState(null); // State to track the active button
	const [error, setError] = useState(null);
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true); // State untuk mengatur loading spinner
	const navigate = useNavigate();

	useEffect(() => {
	const fetchUser = async () => {
		try {
			const response = await axios.get("http://localhost:5000/api/v1/auth/me", {
				withCredentials: true, // Ensure cookies are sent with the request
			});
			setUser(response.data.user); // Update user state
		} catch (err) {
			console.error("Error fetching user data:", err.message);
			setError("Failed to fetch user data");
		} finally {
			setLoading(false); // Stop loading
		}
	};

	fetchUser();
}, []); // Empty dependency array ensures it runs once on mount

if (loading) {
	return <Spinner />; // Show spinner while loading
}

if (error) {
	return <div>{error}</div>; // Show error message
}

if (!user) {
	return <div>No user data available</div>; // Handle no user case
}

	const handleButtonClick = (buttonName, path) => {
		setActiveButton(buttonName); // Update the active button state
		navigate(path); // Navigate to the specified path
	};

	return (
		<>
		<Navbar/>
		<Container fluid className="p-lg-4 p-md-0 mt-5">
			<Row
				className="py-3 d-flex text-left">
				<Col>
					<h1 style={{ color: "#17412d" }}>Dashboard</h1>
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
						className={` p-0 me-5 w-15 button-custom ${
							activeButton === "sertifikat" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("sertifikat", "/sertifikat")}>
						Sertifikat
					</Button>
					<Button
						className={`me-5  w-15 button-custom ${
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
					<h2>
						Selamat Datang Kembali,{" "}
						<span style={{ color: "#ef7a53" }}>{user.username}</span>
						<span>{user.email}</span>
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
									<p className="card-text">Sumber Daya</p>
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
		<Footer/>
		</>
	);
}

export default Dashboard;
