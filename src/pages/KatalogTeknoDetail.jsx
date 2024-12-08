import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom"; // Untuk navigasi
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner"; // Pastikan path sesuai dengan lokasi Spinner.js
const KatalogTeknoDetail = () => {
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
				<div className="mb-5">
					<button
						className="btn btn-trasparant d-flex align-items-center gap-2"
						onClick={() => navigate("/katalogteknologi")}>
						<i className="fa fa-arrow-left"></i> {/* Ikon Back */}
						Kembali
					</button>
				</div>
				<div className="text-room">
					<h1
						style={{
							fontSize: "2rem",
							fontWeight: "bold",
							marginTop: "-30px",
						}}>
						Sensor pH Tanah
					</h1>
					<div className="headerr">
						<iframe
							width="750"
							height="400"
							src="https://www.youtube.com/embed/3_V-q_wHoxo?si=CSHuXlxlMvI5wtef"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen></iframe>
					</div>

					<div className="text">
						<p>
							Pelajari cara memanfaatkan teknologi drone dalam sektor pertanian
							untuk meningkatkan hasil panen dan efisiensi lahan. Kelas ini
							dirancang untuk memberikan pengetahuan praktis dalam
							mengoperasikan drone, memetakan lahan, dan menganalisis data
							pertanian secara cerdas. Cocok bagi pemula maupun profesional yang
							ingin mengembangkan keterampilan di era pertanian 4.0.
						</p>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default KatalogTeknoDetail;
