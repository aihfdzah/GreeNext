import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Carousel = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Spinner />;
	}

	return (
		<>
			<Navbar />
			<div className="container-carousel mt-3 justify-content-center">
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

					{/* Bootstrap Carousel */}
					<div
						id="ebookCarousel"
						className="carousel slide"
						data-bs-ride="carousel">
						{/* Indicators */}
						<div className="carousel-indicators">
							<button
								type="button"
								data-bs-target="#ebookCarousel"
								data-bs-slide-to="0"
								className="active"
								aria-current="true"
								aria-label="Slide 1"></button>
							<button
								type="button"
								data-bs-target="#ebookCarousel"
								data-bs-slide-to="1"
								aria-label="Slide 2"></button>
							<button
								type="button"
								data-bs-target="#ebookCarousel"
								data-bs-slide-to="2"
								aria-label="Slide 3"></button>
						</div>

						{/* Carousel Content */}
						<div className="carousel-inner mt-0">
							{/* Slide 1 */}
							<div className="carousel-item active">
								<div className="row">
									<div className="col-md-4">
										<div className="product-card">
											<div className="product-image">
												<span className="discount-tag">Gratis</span>
												<a href="/detailebook">
													<img
														src="./bioteknologi pertanian.jpg"
														className="product-thumb"
														alt="Bioteknologi Pertanian"
													/>
													<button className="card-btn">Buka</button>
												</a>
											</div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="product-card">
											<div className="product-image">
												<span className="discount-tag">Gratis</span>
												<a href="/detailebook">
													<img
														src="./inovasi agribisnis.jpg"
														className="product-thumb"
														alt="Inovasi Agribisnis"
													/>
													<button className="card-btn">Buka</button>
												</a>
											</div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="product-card">
											<div className="product-image">
												<span className="discount-tag">TERKUNCI</span>
												<a href="/ebookpay">
													<img
														src="./pertanian berkelanju.jpg"
														className="product-thumb"
														alt="Pertanian Berkelanjutan"
													/>
													<button className="card-btn">Beli</button>
												</a>
											</div>
											<div className="product-info">
												<span className="price">Rp50.000</span>
												<span className="actual-price">Rp200.000</span>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Slide 2 */}
							<div className="carousel-item">
								<div className="row">
									<div className="col-md-4">
										<div className="product-card">
											<div className="product-image">
												<span className="discount-tag">TERKUNCI</span>
												<a href="/ebookpay">
													<img
														src="./manajemen agroindustri.jpg"
														className="product-thumb"
														alt="Manajemen Agroindustri"
													/>
													<button className="card-btn">Beli</button>
												</a>
											</div>
											<div className="product-info">
												<span className="price">Rp.50.000</span>
												<span className="actual-price">Rp200.000</span>
											</div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="product-card">
											<div className="product-image">
												<span className="discount-tag">TERKUNCI</span>
												<a href="/ebookpay">
													<img
														src="./pertanian masa depan.jpg"
														className="product-thumb"
														alt="Pertanian Masa Depan"
													/>
													<button className="card-btn">Beli</button>
												</a>
											</div>
											<div className="product-info">
												<span className="price">Rp125.000</span>
												<span className="actual-price">Rp250.000</span>
											</div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="product-card">
											<div className="product-image">
												<span className="discount-tag">TERKUNCI</span>
												<a href="/ebookpay">
													<img
														src="./pertanian postmodern.jpg"
														className="product-thumb"
														alt="Pertanian Postmodern"
													/>
													<button className="card-btn">Beli</button>
												</a>
											</div>
											<div className="product-info">
												<span className="price">Rp100.000</span>
												<span className="actual-price">Rp270.000</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Carousel Controls */}
						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#ebookCarousel"
							data-bs-slide="prev">
							<span
								className="carousel-control-prev-icon"
								aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#ebookCarousel"
							data-bs-slide="next">
							<span
								className="carousel-control-next-icon"
								aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
};

export default Carousel;
