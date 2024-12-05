import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner"; // Pastikan path sesuai dengan lokasi Spinner.js
const RuangDiskusiDetail = () => {
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
						onClick={() => navigate("/ruangdiskusi")}>
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
						</div>

						<div className="comment-section">
							<input
								type="text"
								className="comment-input"
								placeholder="Tuliskan Balasan Komentar Anda Disini ..."
							/>
							<button className="comment-button">Kirim</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default RuangDiskusiDetail;
