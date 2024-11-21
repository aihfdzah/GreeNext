import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Carousel = () => {
	return (
		<>
			<Navbar />
            <div className="container">
                <section class="product"> 
                    <h2 class="product-category">Best Ebook</h2>
                    <button class="pre-btn"><img src="arrow.png" alt=""/></button>
                    <button class="nxt-btn"><img src="arrow.png" alt=""/></button>
                    
                    <div class="product-container">
                        <div class="product-card">
                            <div class="product-image">
                                <span class="discount-tag">FREE</span>
                                <img src="./bioteknologi pertanian.jpg" class="product-thumb" alt=""/>
                                <button class="card-btn">open</button>
                                <a href="/ebookfree"></a>
                            </div>
                            <div class="product-info">
                                <p class="product-short-description">a short line about the cloth..</p>
                            </div>
                        </div>
                        <div class="product-card">
                            <div class="product-image">
                                <span class="discount-tag">FREE</span>
                                <img src="./inovasi agribisnis.jpg" class="product-thumb" alt=""/>
                                <button class="card-btn">open</button>
                                <a href="/ebookfree"></a>
                            </div>
                            <div class="product-info">
                                <p class="product-short-description">a short line about the cloth..</p>
                            </div>
                        </div>
                        <div class="product-card">
                            <div class="product-image">
                                <span class="discount-tag">LOCK</span>
                                <img src="./manajemen agroindustri.jpg" class="product-thumb" alt=""/>
                                <button class="card-btn">buy</button>
                            </div>
                            <div class="product-info">
                                <p class="product-short-description">a short line about the cloth..</p>
                                <span class="price">$10</span><span class="actual-price">$30</span>
                            </div>
                        </div>
                        <div class="product-card">
                            <div class="product-image">
                                <span class="discount-tag">LOCK</span>
                                <img src="./manajemen agroindustri.jpg" class="product-thumb" alt=""/>
                                <button class="card-btn">buy</button>
                            </div>
                            <div class="product-info">
                                <p class="product-short-description">a short line about the cloth..</p>
                                <span class="price">$10</span><span class="actual-price">$30</span>
                            </div>
                        </div>
                        <div class="product-card">
                            <div class="product-image">
                                <span class="discount-tag">LOCK</span>
                                <img src="./pertanian masa depan.jpg" class="product-thumb" alt=""/>
                                <button class="card-btn">buy</button>
                            </div>
                            <div class="product-info">
                                <p class="product-short-description">a short line about the cloth..</p>
                                <span class="price">$15</span><span class="actual-price">$30</span>
                            </div>
                        </div>
                        <div class="product-card">
                            <div class="product-image">
                                <span class="discount-tag">LOCK</span>
                                <img src="./pertanian postmodern.jpg" class="product-thumb" alt=""/>
                                <button class="card-btn">buy</button>
                            </div>
                            <div class="product-info">
                                <p class="product-short-description">a short line about the cloth..</p>
                                <span class="price">$15</span><span class="actual-price">$30</span>
                            </div>
                        </div>
                        <div class="product-card">
                            <div class="product-image">
                                <span class="discount-tag">LOCK</span>
                                <img src="./produktivitas tanama pertanian.jpg" class="product-thumb" alt=""/>
                                <button class="card-btn">buy</button>
                            </div>
                            <div class="product-info">
                                <p class="product-short-description">a short line about the cloth..</p>
                                <span class="price">$10</span><span class="actual-price">$30</span>
                            </div>
                        </div>
                        <div class="product-card">
                            <div class="product-image">
                                <span class="discount-tag">LOCK</span>
                                <img src="./tanaman modern.jpg" class="product-thumb" alt=""/>
                                <button class="card-btn">buy</button>
                            </div>
                            <div class="product-info">
                                <p class="product-short-description">a short line about the cloth..</p>
                                <span class="price">$20</span><span class="actual-price">$40</span>
                            </div>
                        </div>
                        <div class="product-card">
                            <div class="product-image">
                                <span class="discount-tag">LOCK</span>
                                <img src="./teknologi.jpg" class="product-thumb" alt=""/>
                                <button class="card-btn">buy</button>
                            </div>
                            <div class="product-info">
                                <p class="product-short-description">a short line about the cloth..</p>
                                <span class="price">$25</span><span class="actual-price">$45</span>
                            </div>
                        </div>
                        <div class="product-card">
                            <div class="product-image">
                                <span class="discount-tag">LOCK</span>
                                <img src="./pertanian 4.0.jpg" class="product-thumb" alt=""/>
                                <button class="card-btn">buy</button>
                            </div>
                            <div class="product-info">
                                <p class="product-short-description">a short line about the cloth..</p>
                                <span class="price">$25</span><span class="actual-price">$45</span>
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




