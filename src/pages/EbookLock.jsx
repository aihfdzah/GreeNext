import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EbookLock = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<div className="title">Pemuliaan Tanaman Modern</div>

				<div className="cover">
					<img src="./manajemen agriondustri.jpg" alt="Book Cover" />
					<div className="overlay">
						<div className="lock-icon">&#128274;</div>
						<div className="message">
							Anda harus membeli e-book terlebih dahulu untuk membaca!
						</div>
						<a href="#" className="button">
							Beli Sekarang!
						</a>
					</div>
					<div className="navigation">
						<span className="nav-icon">&#8592;</span>
						<span className="nav-icon">&#8594;</span>
					</div>
				</div>

				<div className="pagination">1 of 199</div>
			</div>

			<Footer />
		</>
	);
};

export default EbookLock;
