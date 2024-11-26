import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const StudiKasusDetail = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<div class="card-container">
					<h2>
						PENERAPAN PERTANIAN PRESISI <br /> (PRECISION AGRICULTURE)
					</h2>
					<hr />
					<div class="card-content">
						<div className="left">
							<img src="./image 13.png" alt="Gambar Pertanian" />
							<a href="/ruangdiskusi">
								<button class="discussion-button">Ruang diskusi</button>
							</a>
						</div>

						<div class="card-text-right" id="text">
							<div class="text-content">
								<h3>
									Bagaimana Penerapan Pertanian Presisi (Precision Agriculture)?
								</h3>
								<p>
									Pertanian presisi adalah pendekatan yang menggunakan teknologi
									canggih untuk menghasilkan hasil pertanian sembari menghemat
									sumber daya. Dengan memanfaatkan sensor, GPS, drone, dll.,
									petani dapat memahami kondisi spesifik lahan dan menyesuaikan
									tindakan secara efektif.
								</p>

								<h3>Teknologi Kunci</h3>
								<ul>
									<li>
										1. Sensor tanah dan tanaman - Mengukur kelembapan, nutrisi,
										dan pH tanah.
									</li>
									<li>
										2. GPS dan drone - Memantau tanaman secara real-time untuk
										mengidentifikasi kebutuhan lahan spesifik.
									</li>
									<li>
										3. Data dan IoT - Memungkinkan analisis mendalam untuk
										efisiensi.
									</li>
									<li>
										4. Internet of Things (IoT) - Mendukung integrasi untuk
										berbagi data secara real-time.
									</li>
								</ul>
								{/* <a href="#" class="read-more">Jelajahi selengkapnya</a> */}
							</div>
						</div>
					</div>
					<div class="card-footer">
						<div class="tag-course">
							<span>isi icon save</span>
							<span>isi icon teruskan</span>
						</div>
						<div class="tag-course">
							<span>isi icon save</span>
							<span>isi icon teruskan</span>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default StudiKasusDetail;
