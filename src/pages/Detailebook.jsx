import { useNavigate } from "react-router-dom"; // Import untuk navigasi
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../Styles/Detailebook.css";

const Detailebook = () => {
	const navigate = useNavigate(); // Hook untuk navigasi

	return (
		<>
			<Navbar />
			<div className="container" id="detailebook">
				<main className="book-detail">
					{/* Tombol Kembali */}
					<div className="back-button mb-3">
						<button
							className="btn btn-light d-flex align-items-center gap-2"
							onClick={() => navigate("/carousel")}>
							<i className="fa fa-arrow-left"></i> {/* Ikon panah */}
							Kembali
						</button>
					</div>

					{/* Konten Buku */}
					<div className="content" id="detailebook">
						<div className="left-section">
							<h2>Bioteknologi Pertanian</h2>
							<div className="book-image">
								<img
									src="./bioteknologi pertanian.jpg"
									alt="Bioteknologi Pertanian"
								/>
								<div className="favorite">
									<button>&hearts;</button>
								</div>
							</div>

							<div className="author">
								Esna Dilli Novianto, Erma Suryanti, Indriati Husain, Fitri
								Yulianti, Rosminah, Muhammad Abdul Aziz, Silvia Permata Sari,
								Sri Suryaningsih Djunu, Juniaty Arruan Bulawan, Indah Apriliya,
								Muhammad Isra, Syamsul Bahri
							</div>
							<div className="buttons">
								<button className="read-button">Baca buku</button>
								<button className="buy-button">
									<a href="/ebookpay">Beli buku</a>
								</button>
							</div>
						</div>

						<div className="right-section">
							<h3>Deskripsi Singkat</h3>
							<p>
								Buku <strong>Bioteknologi</strong> adalah disiplin ilmu yang
								merupakan cabang dari biologi, yang fokus utamanya adalah pada
								penerapan teknologi untuk memanfaatkan makhluk hidup baik itu
								mikroorganisme, tumbuhan, maupun hewan dalam berbagai proses
								yang bertujuan untuk menghasilkan produk, baik berupa barang
								maupun jasa, yang dirancang untuk meningkatkan kualitas hidup
								manusia secara keseluruhan. Cabang ilmu ini tidak hanya mencakup
								aspek tradisional yang telah digunakan selama berabad-abad,
								seperti fermentasi dan pemuliaan tanaman, tetapi juga telah
								berkembang pesat dengan masuknya bioteknologi modern yang
								melibatkan teknik-teknik canggih seperti rekayasa genetika,
								kultur jaringan, dan penggunaan enzim dalam industri. integral
								dari budaya, kepercayaan, dan kehidupan sehari-hari manusia.
							</p>

							<div className="progress-section">
								<span>0 hal</span>
								<div className="progress-bar">
									<div className="progress" style={{ width: "1%" }}></div>
								</div>
								<span>1% selesai</span>
							</div>
						</div>
					</div>
				</main>
			</div>
			<Footer />
		</>
	);
};

export default Detailebook;
