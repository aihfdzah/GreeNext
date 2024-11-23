import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Carousel = () => {
	return (
		<>
			<Navbar />
            <div className="container">
                <section className="product"> 
                    <h2 className="product-category">Ebook Populer</h2>
                    {/* <button class="pre-btn"><img src="arrow.png" alt=""/></button>
                    <button class="nxt-btn"><img src="arrow.png" alt=""/></button> */}
                    
                    <div className="product-container">
                        <div className="product-card">
                            <div className="product-image">
                                <span className="discount-tag">Gratis</span>
                                <a href="/detailebook">
                                <img src="./bioteknologi pertanian.jpg" className="product-thumb" alt=""/>
                                <button className="card-btn">Buka</button>
                                </a>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <span className="discount-tag">Gratis</span>
                                <a href="/detailebook">
                                <img src="./inovasi agribisnis.jpg" className="product-thumb" alt=""/>
                                <button className="card-btn">Buka</button>
                                </a>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <span className="discount-tag">TERKUNCI</span>
                                <a href="/ebookpayment">
                                <img src="./pertanian berkelanju.jpg" classsName="product-thumb" alt=""/>
                                <button className="card-btn">Beli</button>
                                </a>
                            </div>
                            <div className="product-info">
                                <span className="price">Rp50.000</span><span className="actual-price">Rp200.000</span>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <span className="discount-tag">TERKUNCI</span>
                                <a href="/ebookpayment">
                                <img src="./manajemen agroindustri.jpg" className="product-thumb" alt=""/>
                                <button className="card-btn">Beli</button>
                                </a>
                            </div>
                            <div className="product-info">
                                <span className="price">Rp.50.000</span><span className="actual-price">Rp200.000</span>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <span className="discount-tag">TERKUNCI</span>
                                <a href="/ebookpayment">
                                <img src="./pertanian masa depan.jpg" className="product-thumb" alt=""/>
                                <button className="card-btn">Beli</button>
                                </a>
                            </div>
                            <div className="product-info">
                                <span className="price">Rp125.000</span><span className="actual-price">Rp250.000</span>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <span className="discount-tag">TERKUNCI</span>
                                <a href="/ebookpayment">
                                <img src="./pertanian postmodern.jpg" className="product-thumb" alt=""/>
                                <button className="card-btn">Beli</button>
                                </a>
                            </div>
                            <div className="product-info">
                                <span className="price">Rp100.000</span><span className="actual-price">Rp270.000</span>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <span className="discount-tag">TERKUNCI</span>
                                <a href="/ebookpayment">
                                <img src="./produktivitas tanama pertanian.jpg" className="product-thumb" alt=""/>
                                <button className="card-btn">Beli</button>
                                </a>
                            </div>
                            <div className="product-info">
                                <span className="price">Rp100.000</span><span className="actual-price">Rp270.000</span>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <span className="discount-tag">TERKUNCI</span>
                                <a href="/ebookpayment">
                                <img src="./tanaman modern.jpg" className="product-thumb" alt=""/>
                                <button className="card-btn">Beli</button>
                                </a>
                            </div>
                            <div className="product-info">
                                <span className="price">Rp75.000</span><span className="actual-price">Rp150.000</span>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <span className="discount-tag">TERKUNCI</span>
                                <a href="/ebookpayment">
                                <img src="./teknologi.jpg" className="product-thumb" alt=""/>
                                <button className="card-btn">Beli</button>
                                </a>
                            </div>
                            <div className="product-info">
                                <span className="price">Rp200.000</span><span className="actual-price">Rp350.000</span>
                            </div>
                        </div>
                        
                        <div className="product-card">
                            <div className="product-image">
                                <span className="discount-tag">TERKUNCI</span>
                                <a href="/ebookpayment">
                                <img src="./pertanian 4.0.jpg" className="product-thumb" alt=""/>
                                <button className="card-btn">Beli</button>
                                </a>
                            </div>
                            <div className="product-info">  
                                <span className="price">Rp200.000</span><span className="actual-price">Rp350.000</span>
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




