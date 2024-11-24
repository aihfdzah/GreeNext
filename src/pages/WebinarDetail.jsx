import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const WebinarDetail = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<div className="row display-flex flex-wrap-wrap gap-20px">
					{/* <!-- Course Details --> */}
					<div className="col-md-8">
						<h1 className="course-title">
							Webinar Pengenalan Sistem Pertanian Presisi
						</h1>
						<p className="course-meta">👥 Kuota | 🗣️ Pemateri</p>
						<img
							src="./foto3.jpg"
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
