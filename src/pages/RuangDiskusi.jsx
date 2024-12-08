import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner"; // Pastikan path sesuai dengan lokasi Spinner.js
const RuangDiskusi = () => {
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
			<div className="container mt-3">
				{/* Tombol kembali */}
				<div>
					<button
						className="btn btn-transparent d-flex align-items-center gap-2"
						onClick={() => navigate("/studikasusdetail")}>
						<i className="fas fa-arrow-left" aria-hidden="true"></i>{" "}
						{/* Ikon Back */}
						Kembali
					</button>
				</div>

				<div className="discussion-room mt-2">
					<div className="header">
						<img src="foto2.jpg" alt="Pertanian Presisi" />

						<div className="header-content">
							<h1>PENERAPAN PERTANIAN PRESISI</h1>
							<p>(PRECISION AGRICULTURE)</p>

							<div className="stats">
								<span>253 Disukai</span>
								<span>3 Komentar</span>
								<span>87 Dibagikan</span>
							</div>
						</div>
					</div>
					<div className="comments">
						<div className="comment">
							<p className="username">@AgriTech_Santoso</p>
							<p>
								Menurut saya, pertanian presisi bisa jadi solusi ideal untuk
								meningkatkan lahan kecil dengan produktivitas tinggi. Namun,
								tantangan terbesar saat ini adalah biaya teknologi yang masih
								cukup tinggi. Mungkin kita bisa mulai dengan sensor sederhana
								dulu?
							</p>
							<a href="/ruangdiskusidetail">
								<button className="reply-btn">Balas Komentar</button>
							</a>
							<button className="close-btn">×</button>
						</div>
						<div className="comment">
							<p className="username">@DigitalFarm_Cecep</p>
							<p>
								Penting juga bagi petani untuk tahu cara membaca hasil dari
								sensor atau aplikasi yang dipakai. Percuma ada teknologi kalau
								tidak ada edukasi. Semoga format/fasilitas bisa bantu
								menyebarkan pengetahuan ini ke komunitas!
							</p>
							<a href="/ruangdiskusidetail">
								<button className="reply-btn">Balas Komentar</button>
							</a>
							<button className="close-btn">×</button>
						</div>
						<div className="comment">
							<p className="username">@Tania.FarmExpert247</p>
							<p>
								Pertanian presisi memang memberikan hasil yang bagus, tapi butuh
								dukungan akses yang merata. Bagaimana menurut teman-teman, apa
								cukup dengan sensor saja atau juga perlu alat lainnya?
							</p>
							<a href="/ruangdiskusidetail">
								<button className="reply-btn">Balas Komentar</button>
							</a>
							<button className="close-btn">×</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default RuangDiskusi;
