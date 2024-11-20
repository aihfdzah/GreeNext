
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PanahImg from "../assets/Panah.svg";

const EbookFree = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<div className="title">Pemuliaan Tanaman Modern</div>

			<div className="container_inside">
				<div className="cover">
					<img src="./inovasi agribisnis.jpg" alt="Book Cover" />
					<div className="navigation">
						<button className="nav-icon">
							{/* <a href="/ebooklock"></a> */}
							
							&#8592;</button>
						<button className="nav-icon">&#8594;</button>
					</div>
				</div>

				<div className="authors">
					Lestari Irene Purba, Badariah, Hari Gunawan, Dewi Andriani, Maghfiroh
					Jamil, Indriani Husain, Silva Peniata Sari, Maysari Yamin, Jumiarah,
					Muhaiman Lubis
				</div>
			</div>
				

				<div className="pagination">1 of 189</div>

			</div>
			<Footer />
		</>
	);
};

export default EbookFree;
