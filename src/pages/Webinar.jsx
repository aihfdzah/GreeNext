import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Webinar = () => {
	return (
		<>
			<Navbar />
            {/* <div className="container" style={{ marginBottom: "20%" }}>
				<div className="header">
					<div>
						<button className="button-filter justify-content-center align-items-center">
							Filter
						</button>
					</div>
					<div className="search-bar display-flex background-transparent">
						<i className="fa-solid fa-magnifying-glass"></i>
						<input type="text" placeholder="Cari kursus..." />
					</div>
					<i className="fa-regular fa-heart"></i>
					<i className="fa-solid fa-cart-shopping"></i>
				</div>

				<div>
					<h2 style={{ fontSize: "20pt" }}>62 Hasil Untuk "Pertanian"</h2>
				</div> */}

            <div clasclassNames="container">
                    <div className="header">
                        <input type="text" placeholder="Search" className="search-bar" value="pertanian"/>
                        <p className="result-count">62 hasil untuk “pertanian”</p>
                    </div>
                    
                    <div className="highlighted-event">
                        <img src="./foto3.jpg" alt="Highlight Event"/>
                        <div className="highlight-content">
                            <h2>Pengenalan Sistem Pertanian Presisi</h2>
                            <p>Lokasi: Lembang, Kabupaten Bandung, Jawa Barat</p>
                            <p>24-25 Jan 2025</p>
                        </div>
                    </div>

                    <div className="event-list">
                        <div className="event-card">
                            <img src="./foto5.jpg" alt="Event Thumbnail"/>
                            <div className="event-info">
                                <h3>Pengenalan Sistem Pertanian </h3>
                                <p>Lokasi: Lembang, Kabupaten Bandung, Jawa Barat</p>
                                <p>Tanggal: 24-25 Jan 2025</p>
                            </div>
                            <button className="btn-status">Offline</button>
                        </div>

                        <div className="event-card">
                            <img src="./foto5.jpg" alt="Event Thumbnail"/>
                            <div className="event-info">
                                <h3>Pengenalan Sistem Pertanian</h3>
                                <p>Lokasi: Lembang, Kabupaten Bandung, Jawa Barat</p>
                                <p>Tanggal: 24-26 Jan 2025</p>
                            </div>
                            <button className="btn-status">Offline</button>
                        </div>

                        <div className="event-card">
                            <img src="./foto5.jpg" alt="Event Thumbnail"/>
                            <div className="event-info">
                                <h3>Pengenalan Sistem Pertanian</h3>
                                <p>Lokasi: Lembang, Kabupaten Bandung, Jawa Barat</p>
                                <p>Tanggal: 24-26 Jan 2025</p>
                            </div>
                            <button className="btn-status">Offline</button>
                        </div>
                    </div>



            </div>
            
            <Footer />
		</>
	);
};

export default Webinar;