import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import "../styles/Dashboard.css";
import Spinner from "../components/Spinner"; // Pastikan path sesuai dengan lokasi Spinner.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Dashboard() {
	// console.log(user)
	const navigate = useNavigate();
	const [activeButton, setActiveButton] = useState(null); // State to track the active button
	const [error, setError] = useState(null); // state untuk menampilkan error
	const [user, setUser] = useState(null); // state untuk menampilkan user
	const [loading, setLoading] = useState(true); // State untuk mengatur loading spinner
	const [hasClass, setHasClass] = useState(true); // state untuk mengatur konten dashboard apakah memiliki kelas atau tidak

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await axios.get(
					"http://localhost:5000/api/v1/auth/me",
					{
						withCredentials: true, // Ensure cookies are sent with the request
					}
				);
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

	const content = loading ? (
		<Spinner />
	) : error ? (
		<div>{error}</div>
	) : !user ? (
		<div>No User data available</div>
	) : (
		<>
			<Navbar />
			<Container
				fluid
				className="dashboard-container"
				style={{
					paddingRight: "2rem",
					paddingLeft: "2rem",
					maxWidth: "1440px",
				}}>
				<Row
					className="py-3 d-flex text-left"
					style={{
						marginTop: "70px",
						maxWidth: "1440px",
						margin: "4rem auto 1rem auto",
					}}>
					<Col>
						<h1 style={{ color: "#17412d", fontSize: "20pt" }}>Dashboard</h1>
					</Col>
					<Col className="text-end me-auto text-left" style={{}}>
						<Button
							className={`button-custom ${
								activeButton === "dashboard" ? "active" : ""
							}`}
							onClick={() => handleButtonClick("dashboard", "/dashboard")}>
							Home
						</Button>
						<Button
							className={`button-custom ${
								activeButton === "sertifikat" ? "active" : ""
							}`}
							onClick={() => handleButtonClick("sertifikat", "/sertifikat")}>
							Sertifikat
						</Button>
						<Button
							className={`button-custom ${
								activeButton === "sumber" ? "active" : ""
							}`}
							onClick={() => handleButtonClick("sumber", "/sumber")}>
							Sumber Daya
						</Button>
						<Button
							className={`button-custom ${
								activeButton === "histori" ? "active" : ""
							}`}
							onClick={() => handleButtonClick("katalogteknologi", "/histori")}>
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
				<h3
					style={{ fontSize: "30px", fontWeight: "500", marginBottom: "2rem" }}>
					Lanjutkan kelasnya yuk!
				</h3>
				{hasClass ? (
					<div className="daftar-kursus display-flex flex-direction-column">
						{/* Example Horizontal Course Card */}
						<div
							className="course-item-horizontal  border-0 border-bottom"
							style={{ borderBottomColor: " #17412d" }}>
							<div className="konten-course-horizontal">
								<p className="title-course">Pengantar Pertanian Modern</p>
								<p className="deskripsi-course">
									Kursus ini memberikan pemahaman dasar tentang pertanian
									modern, mulai dari praktik pertanian tradisional hingga
									perkembangan teknologi yang diterapkan ...
									<a href="/detailkls" className="next">
										Baca Selengkapnya
									</a>
								</p>
								<div className="progress-kelas">
									<div
										className="progress-fill"
										style={{ width: "50%" }} // Ganti nilai ini sesuai persentase
									></div>
								</div>
							</div>
							<div className="image-button-container">
								<img src="./foto2.jpg" alt="Course" className="course-image" />
								<a
									href="/detailkls"
									className="button-daftar"
									style={{
										borderRadius: "20px",
										width: "200px",
										marginTop: "10px",
									}}>
									Lanjutkan Kelas
								</a>
							</div>
						</div>

						<div className="course-item-horizontal  border-0 border-bottom">
							<div className="konten-course-horizontal">
								<p className="title-course">
									Pertanian Berkelanjutan dan Agroekologi
								</p>
								<p className="deskripsi-course">
									Fokus pada konsep dan praktik pertanian berkelanjutan, kursus
									ini mengajarkan tentang bagaimana meminimalkan dampak
									lingkungan dari aktivitas pertanian ...
									<a href="/detailkls" className="next">
										Baca Selengkapnya
									</a>
								</p>
								<div className="progress-kelas">
									<div
										className="progress-fill"
										style={{ width: "20%" }} // Ganti nilai ini sesuai persentase
									></div>
								</div>
							</div>
							<div className="image-button-container">
								<img src="./foto3.jpg" alt="Course" className="course-image" />
								<a
									href="/detailkls"
									className="button-daftar"
									style={{
										borderRadius: "20px",
										width: "200px",
										marginTop: "10px",
									}}>
									Lanjutkan Kelas
								</a>
							</div>
						</div>

						<div className="course-item-horizontal  border-0 border-bottom">
							<div className="konten-course-horizontal">
								<p className="title-course">Pengantar Pertanian Modern</p>
								<p className="deskripsi-course">
									Kursus ini memberikan pemahaman dasar tentang pertanian
									modern, mulai dari praktik pertanian tradisional hingga
									perkembangan teknologi yang diterapkan ...
									<a href="/detailkls" className="next">
										Baca Selengkapnya
									</a>
								</p>
								<div className="progress-kelas">
									<div
										className="progress-fill"
										style={{ width: "85%" }} // Ganti nilai ini sesuai persentase
									></div>
								</div>
							</div>
							<div className="image-button-container">
								<img src="./foto4.jpg" alt="Course" className="course-image" />
								<a
									href="/detailkls"
									className="button-daftar"
									style={{
										borderRadius: "20px",
										width: "200px",
										marginTop: "10px",
									}}>
									Lanjutkan Kelas
								</a>
							</div>
						</div>

						<div className="course-item-horizontal  border-0 border-bottom">
							<div className="konten-course-horizontal">
								<p className="title-course">Pengantar Pertanian Modern</p>
								<p className="deskripsi-course">
									Kursus ini memberikan pemahaman dasar tentang pertanian
									modern, mulai dari praktik pertanian tradisional hingga
									perkembangan teknologi yang diterapkan ...
									<a href="/detailkls" className="next">
										Baca Selengkapnya
									</a>
								</p>
								<div className="progress-kelas">
									<div
										className="progress-fill"
										style={{ width: "50%" }} // Ganti nilai ini sesuai persentase
									></div>
								</div>
							</div>
							<div className="image-button-container">
								<img src="./foto5.jpg" alt="Course" className="course-image" />
								<a
									href="/detailkls"
									className="button-daftar"
									style={{
										borderRadius: "20px",
										width: "200px",
										marginTop: "10px",
									}}>
									Lanjutkan Kelas
								</a>
							</div>
						</div>

						<div className="course-item-horizontal  border-0 border-bottom">
							<div className="konten-course-horizontal">
								<p className="title-course">Pengantar Pertanian Modern</p>
								<p className="deskripsi-course">
									Kursus ini memberikan pemahaman dasar tentang pertanian
									modern, mulai dari praktik pertanian tradisional hingga
									perkembangan teknologi yang diterapkan ...
									<a href="/detailkls" className="next">
										Baca Selengkapnya
									</a>
								</p>
								<div className="progress-kelas">
									<div
										className="progress-fill"
										style={{ width: "60%" }} // Ganti nilai ini sesuai persentase
									></div>
								</div>
							</div>
							<div className="image-button-container">
								<img src="./foto6.jpg" alt="Course" className="course-image" />
								<a
									href="/detailkls"
									className="button-daftar"
									style={{
										borderRadius: "20px",
										width: "200px",
										marginTop: "10px",
									}}>
									Lanjutkan Kelas
								</a>
							</div>
						</div>

						<div className="course-item-horizontal  border-0 border-bottom">
							<div className="konten-course-horizontal">
								<p className="title-course">Pengantar Pertanian Modern</p>
								<p className="deskripsi-course">
									Kursus ini memberikan pemahaman dasar tentang pertanian
									modern, mulai dari praktik pertanian tradisional hingga
									perkembangan teknologi yang diterapkan ...
									<a href="/detailkls" className="next">
										Baca Selengkapnya
									</a>
								</p>
								<div className="progress-kelas">
									<div
										className="progress-fill"
										style={{ width: "20%" }} // Ganti nilai ini sesuai persentase
									></div>
								</div>
							</div>
							<div className="image-button-container">
								<img src="./foto1.jpg" alt="Course" className="course-image" />
								<a
									href="/detailkls"
									className="button-daftar"
									style={{
										borderRadius: "20px",
										width: "200px",
										marginTop: "10px",
									}}>
									Lanjutkan Kelas
								</a>
							</div>
						</div>

						{/* Tambahkan lebih banyak course-item-horizontal serupa */}
					</div>
				) : (
					<Row className="py-5" id="kelas-wrapper">
						<Col>
							<div className="d-flex justify-content-center">
								<div className="fs-1">
									<span className="text-orange">
										<i className="bi bi-book-half"></i>
									</span>
								</div>
								<div className="text-center" style={{ marginBottom: "30%" }}>
									<h2 className="mb-3">Kelas Saya</h2>
									<p className="mb-5 mt-2">
										Tidak ada kelas yang sedang berlangsung
									</p>
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
				)}
			</Container>
			<Footer />
		</>
	);

	return content;
}

export default Dashboard;
