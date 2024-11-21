import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Carousel = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<section className="product">
					<h2 className="product-category">Best Ebook</h2>
					{/* <button class="pre-btn"><img src="arrow.png" alt=""/></button>
                    <button class="nxt-btn"><img src="arrow.png" alt=""/></button> */}

					<div className="product-container">
						<div className="product-card">
							<div className="product-image">
								<span className="discount-tag">FREE</span>
								<a href="/ebookfree">
									<img
										src="./bioteknologi pertanian.jpg"
										className="product-thumb"
										alt=""
									/>
									<button className="card-btn">open</button>
								</a>
							</div>
							<div className="product-info">
								<p className="product-short-description">awokawaok</p>
							</div>
						</div>

						<div className="product-card">
							<div className="product-image">
								<span className="discount-tag">FREE</span>
								<a href="/ebookfree">
									<img
										src="./inovasi agribisnis.jpg"
										className="product-thumb"
										alt=""
									/>
									<button className="card-btn">open</button>
								</a>
							</div>
							<div className="product-info">
								<p className="product-short-description">awokawok</p>
							</div>
						</div>

						<div className="product-card">
							<div className="product-image">
								<span className="discount-tag">LOCKED</span>
								<a href="/ebookpayment">
									<img
										src="./pertanian keberlanjutan.jpg"
										classsName="product-thumb"
										alt=""
									/>
									<button className="card-btn">buy</button>
								</a>
							</div>
							<div className="product-info">
								<p className="product-short-description">
									a short line about the cloth..
								</p>
								<span className="price">$10</span>
								<span className="actual-price">$30</span>
							</div>
						</div>

						<div className="product-card">
							<div className="product-image">
								<span className="discount-tag">LOCKED</span>
								<a href="/ebookpayment">
									<img
										src="./manajemen agroindustri.jpg"
										className="product-thumb"
										alt=""
									/>
									<button className="card-btn">buy</button>
								</a>
							</div>
							<div className="product-info">
								<p className="product-short-description">
									a short line about the cloth..
								</p>
								<span className="price">$10</span>
								<span className="actual-price">$30</span>
							</div>
						</div>

						<div className="product-card">
							<div className="product-image">
								<span className="discount-tag">LOCKED</span>
								<a href="/ebookpayment">
									<img
										src="./pertanian masa depan.jpg"
										className="product-thumb"
										alt=""
									/>
									<button className="card-btn">buy</button>
								</a>
							</div>
							<div className="product-info">
								<p className="product-short-description">
									a short line about the cloth..
								</p>
								<span className="price">$15</span>
								<span className="actual-price">$30</span>
							</div>
						</div>

						<div className="product-card">
							<div className="product-image">
								<span className="discount-tag">LOCKED</span>
								<a href="/ebookpayment">
									<img
										src="./pertanian postmodern.jpg"
										className="product-thumb"
										alt=""
									/>
									<button className="card-btn">buy</button>
								</a>
							</div>
							<div className="product-info">
								<p className="product-short-description">
									a short line about the cloth..
								</p>
								<span className="price">$15</span>
								<span className="actual-price">$30</span>
							</div>
						</div>

						<div className="product-card">
							<div className="product-image">
								<span className="discount-tag">LOCKED</span>
								<a href="/ebookpayment">
									<img
										src="./produktivitas tanama pertanian.jpg"
										className="product-thumb"
										alt=""
									/>
									<button className="card-btn">buy</button>
								</a>
							</div>
							<div className="product-info">
								<p className="product-short-description">
									a short line about the cloth..
								</p>
								<span className="price">$10</span>
								<span className="actual-price">$30</span>
							</div>
						</div>

						<div className="product-card">
							<div className="product-image">
								<span className="discount-tag">LOCKED</span>
								<a href="/ebookpayment">
									<img
										src="./tanaman modern.jpg"
										className="product-thumb"
										alt=""
									/>
									<button className="card-btn">buy</button>
								</a>
							</div>
							<div className="product-info">
								<p className="product-short-description">
									a short line about the cloth..
								</p>
								<span className="price">$20</span>
								<span className="actual-price">$40</span>
							</div>
						</div>

						<div className="product-card">
							<div className="product-image">
								<span className="discount-tag">LOCKED</span>
								<a href="/ebookpayment">
									<img src="./teknologi.jpg" className="product-thumb" alt="" />
									<button className="card-btn">buy</button>
								</a>
							</div>
							<div className="product-info">
								<p className="product-short-description">
									a short line about the cloth..
								</p>
								<span className="price">$25</span>
								<span className="actual-price">$45</span>
							</div>
						</div>

						<div className="product-card">
							<div className="product-image">
								<span className="discount-tag">LOCKED</span>
								<a href="/ebookpayment">
									<img
										src="./pertanian 4.0.jpg"
										className="product-thumb"
										alt=""
									/>
									<button className="card-btn">buy</button>
								</a>
							</div>
							<div className="product-info">
								<p className="product-short-description">
									a short line about the cloth..
								</p>
								<span className="price">$25</span>
								<span className="actual-price">$45</span>
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
