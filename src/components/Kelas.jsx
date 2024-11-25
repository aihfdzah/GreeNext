import "../Styles/Kelas.css";
const Kelas = () => {
	return (
		<>
			<div className="container" style={{ marginBottom: "23%" }}>
				<div
					className="d-flex align-items-center justify-content-between py-2 border-bottom"
					style={{ marginBottom: "10%" }}>
					{/* Search Bar */}
					<div
						className="input-group mx-3 flex-grow-1"
						style={{ maxWidth: "100%", position: "relative", width: "100%" }}>
						<i
							className="fa-solid fa-magnifying-glass"
							style={{
								color: "#ef7a53",
								position: "absolute",
								left: "15px",
								top: "50%",
								transform: "translateY(-50%)",
							}}></i>
						<input
							type="text"
							className="form-control bg-transparent"
							style={{
								borderColor: "#ef7a53",
								borderRadius: "20px",
								paddingLeft: "40px",
							}}
							placeholder="Cari Kursus..."
						/>
					</div>

					{/* Icon Group */}
					<div className="d-flex align-items-center">
						<i
							className="fa-regular fa-heart mx-2"
							style={{
								fontSize: "20px",
								cursor: "pointer",
								color: "#ef7a53",
							}}></i>
						<i
							className="fa-solid fa-cart-shopping mx-2"
							style={{
								fontSize: "20px",
								cursor: "pointer",
								color: "#ef7a53",
							}}></i>
					</div>
				</div>

				{/* -------------- Layout Konten Utama -------- */}
				<div className="main-content">
					{/* ---------- Sidebar Filter --> */}
					<div className="filter">
						<select>
							<option>Jenis Teknologi</option>
							<option>IoT</option>
							<option>Big Data</option>
							<option>Agroekologi</option>
						</select>
						<select>
							<option>Tingkat Kesulitan</option>
							<option>Pemula</option>
							<option>Menengah</option>
							<option>Lanjut</option>
						</select>
						<select>
							<option>Pelatihan</option>
							<option>Gratis</option>
							<option>Berbayar</option>
						</select>
						<select>
							<option>Harga</option>
							<option>Promo</option>
							<option>Terpopuler</option>
						</select>
						<select>
							<option>Sertifikasi</option>
							<option>Terbaru</option>
							<option>Terpopuler</option>
						</select>
					</div>

					{/* ---------------- Daftar Kursus ------------- */}
					<div className="daftar-kursus display-flex flex-direction-column">
						{/* Example Horizontal Course Card */}
						<div
							className="course-item-horizontal  border-0 border-bottom"
							style={{ borderBottomColor: " #17412d" }}>
							<div className="konten-course-horizontal">
								<p className="title-course">Pengantar Pertanian Modern</p>
								<p className="deskripsi-course">
									Kursus ini memberikan pemahaman dasar tentang pertanian
									modern, mulai dari praktik pertanian tradisional hingga
									perkembangan teknologi yang diterapkan ...
									<a href="/detailkls" className="next">
										Baca Selengkapnya
									</a>
								</p>
								<div className="tag-course">
									<span>Menengah</span>
									<span>4.8/5</span>
									<span>Gratis</span>
								</div>
							</div>
							<div className="image-button-container">
								<img src="./foto2.jpg" alt="Course" className="course-image" />
								<a
									href="/detailkls"
									className="button-daftar"
									style={{
										borderRadius: "20px",
										width: "200px",
										marginTop: "10px",
									}}>
									Daftar Sekarang
								</a>
							</div>
						</div>

						<div className="course-item-horizontal  border-0 border-bottom">
							<div className="konten-course-horizontal">
								<p className="title-course">
									Pertanian Berkelanjutan dan Agroekologi
								</p>
								<p className="deskripsi-course">
									Fokus pada konsep dan praktik pertanian berkelanjutan, kursus
									ini mengajarkan tentang bagaimana meminimalkan dampak
									lingkungan dari aktivitas pertanian ...
									<a href="/detailkls" className="next">
										Baca Selengkapnya
									</a>
								</p>
								<div className="tag-course">
									<span>Menengah</span>
									<span>4.8/5</span>
									<span>Gratis</span>
								</div>
							</div>
							<div className="image-button-container">
								<img src="./foto3.jpg" alt="Course" className="course-image" />
								<a
									href="/detailkls"
									className="button-daftar"
									style={{
										borderRadius: "20px",
										width: "200px",
										marginTop: "10px",
									}}>
									Daftar Sekarang
								</a>
							</div>
						</div>

						<div className="course-item-horizontal  border-0 border-bottom">
							<div className="konten-course-horizontal">
								<p className="title-course">Pengantar Pertanian Modern</p>
								<p className="deskripsi-course">
									Kursus ini memberikan pemahaman dasar tentang pertanian
									modern, mulai dari praktik pertanian tradisional hingga
									perkembangan teknologi yang diterapkan ...
									<a href="/detailkls" className="next">
										Baca Selengkapnya
									</a>
								</p>
								<div className="tag-course">
									<span>Menengah</span>
									<span>4.8/5</span>
									<span>Gratis</span>
								</div>
							</div>
							<div className="image-button-container">
								<img src="./foto4.jpg" alt="Course" className="course-image" />
								<a
									href="/detailkls"
									className="button-daftar"
									style={{
										borderRadius: "20px",
										width: "200px",
										marginTop: "10px",
									}}>
									Daftar Sekarang
								</a>
							</div>
						</div>

						<div className="course-item-horizontal  border-0 border-bottom">
							<div className="konten-course-horizontal">
								<p className="title-course">Pengantar Pertanian Modern</p>
								<p className="deskripsi-course">
									Kursus ini memberikan pemahaman dasar tentang pertanian
									modern, mulai dari praktik pertanian tradisional hingga
									perkembangan teknologi yang diterapkan ...
									<a href="/detailkls" className="next">
										Baca Selengkapnya
									</a>
								</p>
								<div className="tag-course">
									<span>Menengah</span>
									<span>4.8/5</span>
									<span>Gratis</span>
								</div>
							</div>
							<div className="image-button-container">
								<img src="./foto5.jpg" alt="Course" className="course-image" />
								<a
									href="/detailkls"
									className="button-daftar"
									style={{
										borderRadius: "20px",
										width: "200px",
										marginTop: "10px",
									}}>
									Daftar Sekarang
								</a>
							</div>
						</div>

						<div className="course-item-horizontal  border-0 border-bottom">
							<div className="konten-course-horizontal">
								<p className="title-course">Pengantar Pertanian Modern</p>
								<p className="deskripsi-course">
									Kursus ini memberikan pemahaman dasar tentang pertanian
									modern, mulai dari praktik pertanian tradisional hingga
									perkembangan teknologi yang diterapkan ...
									<a href="/detailkls" className="next">
										Baca Selengkapnya
									</a>
								</p>
								<div className="tag-course">
									<span>Menengah</span>
									<span>4.8/5</span>
									<span>Gratis</span>
								</div>
							</div>
							<div className="image-button-container">
								<img src="./foto6.jpg" alt="Course" className="course-image" />
								<a
									href="/detailkls"
									className="button-daftar"
									style={{
										borderRadius: "20px",
										width: "200px",
										marginTop: "10px",
									}}>
									Daftar Sekarang
								</a>
							</div>
						</div>

						<div className="course-item-horizontal  border-0 border-bottom">
							<div className="konten-course-horizontal">
								<p className="title-course">Pengantar Pertanian Modern</p>
								<p className="deskripsi-course">
									Kursus ini memberikan pemahaman dasar tentang pertanian
									modern, mulai dari praktik pertanian tradisional hingga
									perkembangan teknologi yang diterapkan ...
									<a href="/detailkls" className="next">
										Baca Selengkapnya
									</a>
								</p>
								<div className="tag-course">
									<span>Menengah</span>
									<span>4.8/5</span>
									<span>Gratis</span>
								</div>
							</div>
							<div className="image-button-container">
								<img src="./foto1.jpg" alt="Course" className="course-image" />
								<a
									href="/detailkls"
									className="button-daftar"
									style={{
										borderRadius: "20px",
										width: "200px",
										marginTop: "10px",
									}}>
									Daftar Sekarang
								</a>
							</div>
						</div>

						{/* Tambahkan lebih banyak course-item-horizontal serupa */}
					</div>
				</div>

				<div className="pagination">
					<a href="#" className="prev">
						← Sebelumnya
					</a>
					<span className="page-numbers">
						<a href="#" className="page active">
							1
						</a>
						<a href="#" className="page">
							2
						</a>
						<a href="#" className="page">
							3
						</a>
						{/* <span className="dots">...</span> */}
						<a href="#" className="page">
							4
						</a>
						<a href="#" className="page">
							5
						</a>
					</span>
					<a href="#" className="next">
						Selanjutnya →
					</a>
				</div>
			</div>
		</>
	);
};

export default Kelas;
