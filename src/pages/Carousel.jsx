import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner"; // Pastikan path sesuai dengan lokasi Spinner.js
const Carousel = () => {
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
			<div className="container-carousel mt-3">
				<section className="product">
					{/* Tombol Kembali */}
					<div className="back-button mb-3">
						<button
							className="btn btn-light d-flex align-items-center gap-2"
							onClick={() => navigate("/sumberdaya")}>
							<i className="fa fa-arrow-left"></i> {/* Ikon panah */}
							Kembali
						</button>
					</div>
					<h2 className="product-category">Ebook Populer</h2>
					<div className="product-container">
						<div className="product-card">
							<div className="product-image">
								<span className="discount-tag">Gratis</span>
								<a href="/detailebook">
									<img
										src="./bioteknologi pertanian.jpg"
										className="product-thumb"
										alt=""
									/>
									<button className="card-btn">Buka</button>
								</a>
							</div>
						</div>

						<div className="product-card">
							<div className="product-image">
								<span className="discount-tag">Gratis</span>
								<a href="/detailebook">
									<img
										src="./inovasi agribisnis.jpg"
										className="product-thumb"
										alt=""
									/>
									<button className="card-btn">Buka</button>
								</a>
							</div>
						</div>

						<div className="product-card">
							<div className="product-image">
								<span className="discount-tag">TERKUNCI</span>
								<a href="/ebookpayment">
									<img
										src="./pertanian berkelanju.jpg"
										className="product-thumb"
										alt=""
									/>
									<button className="card-btn">Beli</button>
								</a>
							</div>
							<div className="product-info">
								<span className="price">Rp50.000</span>
								<span className="actual-price">Rp200.000</span>
							</div>
						</div>

						<div className="product-card">
							<div className="product-image">
								<span className="discount-tag">TERKUNCI</span>
								<a href="/ebookpayment">
									<img
										src="./manajemen agroindustri.jpg"
										className="product-thumb"
										alt=""
									/>
									<button className="card-btn">Beli</button>
								</a>
							</div>
							<div className="product-info">
								<span className="price">Rp.50.000</span>
								<span className="actual-price">Rp200.000</span>
							</div>
						</div>

						<div className="product-card">
							<div className="product-image">
								<span className="discount-tag">TERKUNCI</span>
								<a href="/ebookpayment">
									<img
										src="./pertanian masa depan.jpg"
										className="product-thumb"
										alt=""
									/>
									<button className="card-btn">Beli</button>
								</a>
							</div>
							<div className="product-info">
								<span className="price">Rp125.000</span>
								<span className="actual-price">Rp250.000</span>
							</div>
						</div>

						<div className="product-card">
							<div className="product-image">
								<span className="discount-tag">TERKUNCI</span>
								<a href="/ebookpayment">
									<img
										src="./pertanian postmodern.jpg"
										className="product-thumb"
										alt=""
									/>
									<button className="card-btn">Beli</button>
								</a>
							</div>
							<div className="product-info">
								<span className="price">Rp100.000</span>
								<span className="actual-price">Rp270.000</span>
							</div>
						</div>

						<div className="product-card">
							<div className="product-image">
								<span className="discount-tag">TERKUNCI</span>
								<a href="/ebookpayment">
									<img
										src="./produktivitas tanama pertanian.jpg"
										className="product-thumb"
										alt=""
									/>
									<button className="card-btn">Beli</button>
								</a>
							</div>
							<div className="product-info">
								<span className="price">Rp100.000</span>
								<span className="actual-price">Rp270.000</span>
							</div>
						</div>

						<div className="product-card">
							<div className="product-image">
								<span className="discount-tag">TERKUNCI</span>
								<a href="/ebookpayment">
									<img
										src="./tanaman modern.jpg"
										className="product-thumb"
										alt=""
									/>
									<button className="card-btn">Beli</button>
								</a>
							</div>
							<div className="product-info">
								<span className="price">Rp75.000</span>
								<span className="actual-price">Rp150.000</span>
							</div>
						</div>

						<div className="product-card">
							<div className="product-image">
								<span className="discount-tag">TERKUNCI</span>
								<a href="/ebookpayment">
									<img src="./teknologi.jpg" className="product-thumb" alt="" />
									<button className="card-btn">Beli</button>
								</a>
							</div>
							<div className="product-info">
								<span className="price">Rp200.000</span>
								<span className="actual-price">Rp350.000</span>
							</div>
						</div>

						<div className="product-card">
							<div className="product-image">
								<span className="discount-tag">TERKUNCI</span>
								<a href="/ebookpayment">
									<img
										src="./pertanian 4.0.jpg"
										className="product-thumb"
										alt=""
									/>
									<button className="card-btn">Beli</button>
								</a>
							</div>
							<div className="product-info">
								<span className="price">Rp200.000</span>
								<span className="actual-price">Rp350.000</span>
							</div>
						</div>
					</div>
				</section>
			</div>

			<Footer />
		</>
	);
};

export default Carousel;
