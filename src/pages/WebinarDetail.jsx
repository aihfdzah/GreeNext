import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom"; // Untuk navigasi
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner"; // Pastikan path sesuai dengan lokasi Spinner.js
const WebinarDetail = () => {
	const navigate = useNavigate(); // Hook untuk navigasi
	const [loading, setLoading] = useState(true); // State untuk mengatur loading spinner

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000); // Simulasikan loading selama 3 detik

		return () => clearTimeout(timer);
	}, []);

	// Jika sedang loading, tampilkan spinner
	if (loading) {
		return <Spinner />;
	}
	return (
		<>
			<Navbar />
			<div className="container mt-3">
				{/* Tombol Kembali */}
				<div>
					<button
						className="btn btn-trasparant d-flex align-items-center gap-2"
						onClick={() => navigate("/Webinar")}>
						<i className="fa fa-arrow-left"></i> {/* Ikon Back */}
						Kembali
					</button>
				</div>
				<div className="row display-flex flex-wrap-wrap gap-20px">
					{/* <!-- Course Details --> */}
					<div className="col-md-8">
						<h1 className="course-title">
							Webinar Pengenalan Sistem Pertanian Presisi
						</h1>
						<p className="course-meta">👥 Kuota | 🗣️ Pemateri</p>
						<img
							src="./dtailwbnar.jpg"
							id="webinar"
							alt="Drone Pertanian"
							className="course-image"
						/>
						<p className="course-description">
							Pelajari cara memanfaatkan teknologi drone dalam sektor pertanian
							untuk meningkatkan hasil panen dan efisiensi lahan. Kelas ini
							dirancang untuk memberikan pengetahuan praktis dalam
							mengoperasikan drone, memetakan lahan, dan menganalisis data
							pertanian secara cerdas. Cocok bagi pemula maupun profesional yang
							ingin mengembangkan keterampilan di era pertanian 4.0.
						</p>

						<div className="accordion">
							<h5>Jadwal Pelaksanaan</h5>
							<div className="accordion-item">
								<div className="accordion-header">
									<span className="date">24 Januari 2025</span>
									<br />
									<span className="location">
										{" "}
										Lembang, Kota Bandung, Jawa Barat 📍
									</span>
								</div>
								<div className="accordion-content">
									{/* <p>Detail materi untuk Minggu 2 akan tersedia di sini.</p> */}
								</div>
							</div>
						</div>
					</div>

					{/* <!-- Course Pricing and Benefits --> */}
					<div className="col-md-4">
						<div className="benefits-card">
							<div className="price">Rp50,000</div>
							<a href="/webinarpay" className="btn-orange">
								Daftar Kelas
							</a>
							<h5>Benefit yang didapatkan</h5>
							<ul className="benefit-list">
								<li>🔐 Relasi</li>
								<li>🎓 Ilmu yang bermanfaat</li>
								<li>🪪 Sertifikat</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default WebinarDetail;
