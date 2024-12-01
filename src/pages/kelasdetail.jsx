import { useNavigate } from "react-router-dom"; // Import untuk navigasi
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Kelasdetail = () => {
	const navigate = useNavigate(); // Hook untuk navigasi

	return (
		<>
			<Navbar />
			<div className="container mt-4">
				{/* Tombol Kembali */}
				<div className="back-button mb-3">
					<button
						className="btn btn-transparant d-flex align-items-center gap-2"
						onClick={() => navigate("/kelas")}>
						<i className="fa fa-arrow-left"></i> {/* Ikon panah kiri */}
						Kembali
					</button>
				</div>

				<div className="row display-flex flex-wrap-wrap gap-20px">
					{/* <!-- Course Details --> */}
					<div className="col-md-8">
						<h1 className="course-title">
							Belajar Teknologi Pertanian Modern: Drone untuk Pertanian Cerdas
						</h1>
						<p className="course-meta">
							4.9 (294,203 ratings) | 100 member | Charlie Vetrows
						</p>
						<img
							src="./detailkelas.jpg"
							id="detailkelas"
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
							<h4>Materi Kelas</h4>
							<div className="accordion-item">
								<div className="accordion-header1">
									Minggu 1 - Pengantar Teknologi Drone untuk Pertanian
								</div>
								<div className="accordion-content">
									<p>Pengantar (01:42)</p>
									<p>Apa itu drone pertanian? (01:42)</p>
									<p>
										Penggunaan jenis drone untuk memenuhi pertumbuhan tanaman
										(01:42)
									</p>
									<p>
										Cara memilih drone yang sesuai untuk kebutuhan pertanian
										(01:42)
									</p>
								</div>
							</div>

							<div className="accordion-item">
								<div className="accordion-header">
									Minggu 2 - Teknik Pengoperasian Drone
								</div>
								<div className="accordion-content">
									{/* <p>Detail materi untuk Minggu 2 akan tersedia di sini.</p> */}
								</div>
							</div>

							<div className="accordion-item">
								<div className="accordion-header">
									Minggu 3 - Aplikasi Praktis dan Studi Kasus
								</div>
								<div className="accordion-content">
									{/* <p>Detail materi untuk Minggu 3 akan tersedia di sini.</p> */}
								</div>
							</div>
						</div>
					</div>

					{/* <!-- Course Pricing and Benefits --> */}
					<div className="col-md-4">
						<div className="benefits-card">
							<div className="price">Rp129,000</div>
							<a href="/cokartu" className="btn-orange">
								Daftar Kelas
							</a>
							<h5>Benefit yang didapatkan</h5>
							<ul className="benefit-list">
								<li>20 Jam video pembelajaran</li>
								<li>Analisis data pertanian secara efektif</li>
								<li>20 Artikel pertanian cerdas</li>
								<li>Sertifikat kompetensi</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Kelasdetail;
