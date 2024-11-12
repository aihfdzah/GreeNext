import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Ebook = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<main>
					<h1 className="text-center">E-book & Panduan</h1>
					<div className="search-bar">
						<input type="text" placeholder="Cari e-book..."></input>
					</div>

					<div className="tabs">
						<button className="tab active">Populer</button>
						<button className="tab">Penjualan Teratas</button>
						<button className="tab">Mengikuti</button>
						<button className="tab">Baru</button>
						<button className="tab">Next</button>
					</div>

					<div className="book-grid">
						<div className="book-card">
							<a href="/detailebook">
								<img src="./bioteknologi pertanian.jpg" alt="detail" />
								Bioteknologi Pertanian
							</a>
						</div>

						<div className="book-card">
							<a href="/detailebook">
								<img src="./inovasi agribisnis.jpg" alt="" />
								Inovasi Agribisnis
							</a>
						</div>

						<div className="book-card">
							<a href="/detailebook">
								<img src="./manajemen agroindustri.jpg" alt="" />
								Manajemen Agroindustri
							</a>
						</div>

						<div className="book-card">
							<a href="">
								<img src="./manajemen agroindustri.jpg" alt="" />
								Pertanian Berkelanjutan
							</a>
						</div>

						<div className="book-card">
							<img src="./pertanian masa depan.jpg" alt="" />
							<a href=""></a>
							Pertanian Masa Depan
						</div>

						<div className="book-card">
							<img src="./pertanian postmodern.jpg" alt="" />
							Pertanian Postmodern
							<a href=""></a>
						</div>

						<div className="book-card">
							<img src="./produktivitas tanama pertanian.jpg" alt="" />
							Produktivitas Tanaman Pertanian
							<a href=""></a>
						</div>

						<div className="book-card">
							<img src="./tanaman modern.jpg" alt="" />
							Tanaman Modern
							<a href=""></a>
						</div>

						<div className="book-card">
							<img src="./teknologi.jpg" alt="" />
							Teknologi Pertanian
							<a href=""></a>
						</div>

						<div className="book-card">
							<img src="./pertanian 4.0.jpg" alt="" />
							Pertanian 4.0
							<a href=""></a>
						</div>
					</div>

					<div className="progress-list">
						<div className="progress-item">
							<img src="agronomi-icon.png" className="icon" />
							<span className="title">Agronomi</span>
							<span className="pages">10 hal</span>
							<div className="progress-bar">
								<div className="progress" id="progress1"></div>
							</div>
							<span className="progress-percentage">5% selesai</span>
						</div>

						<div className="progress-item">
							<img src="pemuliaan-icon.png" className="icon" />
							<span className="title">Pemuliaan Tanaman Modern</span>
							<span className="pages">35 hal</span>
							<div className="progress-bar">
								<div className="progress" id="progress2"></div>
							</div>
							<span className="progress-percentage">25% selesai</span>
						</div>

						<div className="progress-item">
							<img src="pertanian-icon.png" className="icon" />
							<span className="title">Pertanian Era Digital</span>
							<span className="pages">50 hal</span>
							<div className="progress-bar">
								<div className="progress" id="progress3"></div>
							</div>
							<span className="progress-percentage">15% selesai</span>
						</div>
					</div>
				</main>
			</div>
			<Footer />
		</>
	);
};

export default Ebook;
