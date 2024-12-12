import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../Styles/StudiKasusDetail.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner"; // Pastikan path sesuai dengan lokasi Spinner.js
const StudiKasusDetail = () => {
	const navigate = useNavigate();
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
			<div className="container mt-3" style={{padding:'0rem 4rem'}}>
				{/* Tombol kembali */}
				<div>
					<button
						className="btn btn-transparent d-flex align-items-center gap-2"
						onClick={() => navigate("/studikasus")}>
						<i className="fas fa-arrow-left" aria-hidden="true"></i>{" "}
						{/* Ikon Back */}
						Kembali
					</button>
				</div>

				{/* Kontainer utama */}
				<div className="card-container mt-5" style={{maxWidth:'1440px'}}>
					{/* Judul */}
					<h2>
						PENERAPAN PERTANIAN PRESISI <br /> (PRECISION AGRICULTURE)
					</h2>
					<hr />

					{/* Konten */}
					<div className="card-content">
						{/* Kolom Kiri */}
						<div className="content-left">
							<img
								src="./foto2.jpg"
								alt="Gambar Pertanian"
								onError={(e) => (e.target.src = "fallback.jpg")} // Fallback untuk error
							/>
							<a href="/ruangdiskusi">
								<button className="discussion-button">
									<i className="fas fa-comments"></i> Ruang Diskusi
								</button>
							</a>
						</div>

						{/* Kolom Kanan */}
						<div className="card-text-right" id="text">
							<div className="text-content">
								<h3>
									Bagaimana Penerapan Pertanian Presisi (Precision Agriculture)?
								</h3>
								<p>
									Pertanian presisi adalah pendekatan yang menggunakan teknologi
									canggih untuk menghasilkan hasil pertanian sembari menghemat
									sumber daya. Dengan memanfaatkan sensor, GPS, drone, dll.,
									petani dapat memahami kondisi spesifik lahan dan menyesuaikan
									tindakan secara efektif.
								</p>

								<h3>Teknologi Kunci</h3>
								<ul>
									<li>
										<i className="fas fa-seedling"></i> Sensor tanah dan tanaman
										- Mengukur kelembapan, nutrisi, dan pH tanah.
									</li>
									<li>
										<i className="fas fa-map-marker-alt"></i> GPS dan drone -
										Memantau tanaman secara real-time untuk mengidentifikasi
										kebutuhan lahan spesifik.
									</li>
									<li>
										<i className="fas fa-database"></i> Data dan IoT -
										Memungkinkan analisis mendalam untuk efisiensi.
									</li>
									<li>
										<i className="fas fa-network-wired"></i> Internet of Things
										(IoT) - Mendukung integrasi untuk berbagi data secara
										real-time.
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Footer Kartu */}
					<div className="card-footer">
						<div className="tag-course">
							{/* Ikon Save */}
							<span>
								<i className="fas fa-bookmark"></i> Simpan
							</span>
							{/* Ikon Share */}
							<span>
								<i className="fas fa-share-alt"></i> Bagikan
							</span>
						</div>
						<div className="tag-course">
							{/* Contoh tambahan, jika dibutuhkan */}
							<span>
								<i className="fas fa-thumbs-up"></i> Suka
							</span>
							<span>
								<i className="fas fa-thumbs-down"></i> Tidak Suka
							</span>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default StudiKasusDetail;
