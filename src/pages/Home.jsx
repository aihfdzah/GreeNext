import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner"; // Pastikan path sesuai dengan lokasi Spinner.js
import { Container, Row, Col, Button } from "react-bootstrap"; // Tambahkan import Button dari Bootstrap

function Home() {
	const [activeButton, setActiveButton] = useState("home"); // Set default button 'home' sebagai aktif
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true); // State untuk mengatur loading spinner

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000); // Simulasikan loading selama 3 detik

		return () => clearTimeout(timer);
	}, []);

	// Fungsi untuk mengubah state activeButton dan melakukan navigasi
	const handleButtonClick = (buttonName, path) => {
		setActiveButton(buttonName);
		navigate(path);
	};

	// Jika sedang loading, tampilkan spinner
	if (loading) {
		return <Spinner />;
	}

	return (
		<>
			<Navbar />
			<Container className="mt-5">
				<Row
					className="py-3 d-flex text-left"
					style={{
						marginLeft: "-10px",
					}}>
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
						<h2>
							Selamat Datang Kembali,{" "}
							<span style={{ color: "#ef7a53" }}>Wahyu Rojolele!</span>
						</h2>
						<h3>Lanjutkan kelasnya yuk!</h3>
					</Col>
					<Col md={6}>
						<Row style={{ marginTop: "-90px" }}>
							<Col md={4} style={{ marginTop: "90px", marginLeft:"100px" }}>
								<div className="card" style={{ backgroundColor: "#F5F2ED" }}>
									<div className="card-body">
										<h5 className="card-title">7</h5>
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
						</Row>
					</Col>
				</Row>
				{/* Daftar Kelas */}
				<div className="daftar-kursus display-flex flex-direction-column">
					{/* Example Horizontal Course Card */}
					<div
						className="course-item-horizontal  border-0 border-bottom"
						style={{ borderBottomColor: " #17412d" }}>
						<div className="konten-course-horizontal">
							<p className="title-course">Pengantar Pertanian Modern</p>
							<p className="deskripsi-course">
								Kursus ini memberikan pemahaman dasar tentang pertanian modern,
								mulai dari praktik pertanian tradisional hingga perkembangan
								teknologi yang diterapkan ...
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
								ini mengajarkan tentang bagaimana meminimalkan dampak lingkungan
								dari aktivitas pertanian ...
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
								Kursus ini memberikan pemahaman dasar tentang pertanian modern,
								mulai dari praktik pertanian tradisional hingga perkembangan
								teknologi yang diterapkan ...
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
								Kursus ini memberikan pemahaman dasar tentang pertanian modern,
								mulai dari praktik pertanian tradisional hingga perkembangan
								teknologi yang diterapkan ...
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
								Kursus ini memberikan pemahaman dasar tentang pertanian modern,
								mulai dari praktik pertanian tradisional hingga perkembangan
								teknologi yang diterapkan ...
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
								Kursus ini memberikan pemahaman dasar tentang pertanian modern,
								mulai dari praktik pertanian tradisional hingga perkembangan
								teknologi yang diterapkan ...
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
			</Container>
			<Footer />
		</>
	);
}

export default Home;
