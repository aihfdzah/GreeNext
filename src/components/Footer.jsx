const Footer = () => {
	return (
		<footer className="footer footer-expand-lg footer-dark bg-dark text-white py-3">
			<div className="footer-content">
				<div className="footer-logo">
					<img src="./logo.png" className="logo-footer" alt="FarmEduZ Logo" />
					<i className="bx fa-solid fa-globe">
						<br />
						Bahasa Indonesia
					</i>
				</div>

				<div
					className="collapse footer-collapse flex-direction-column"
					id="footerFoot">
					<ul className="foooter">
						<li className="footer-item">
							<a className="footer-link" href="#dashboard">
								Dashboard
							</a>
						</li>

						<li className="footer-item">
							<a className="footer-link" href="#kelas">
								Kelas
							</a>
						</li>

						<li className="footer-item">
							<a className="footer-link" href="#sumberdaya">
								Sumber Daya
							</a>
						</li>

						<li className="footer-item">
							<a className="footer-link" href="#komunitas">
								Komunitas
							</a>
						</li>

						<li className="footer-item">
							<a className="footer-link" href="#tentangkita">
								Tentang Kita
							</a>
						</li>
					</ul>
				</div>

				<div className="collapse-footer-collapse" id="footerFoot">
					<div className="down">
						<ul className="foooter">
							<li className="footer-item">
								<a className="footer-link" href="#">
									Tentang Kami
								</a>
							</li>

							<li className="footer-item">
								<a className="footer-link" href="#">
									Hubungi Kami
								</a>
							</li>

							<li className="footer-item">
								<a className="footer-link" href="#">
									Tentang Privasi
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="collapse-footer-collapse" id="footerFoot">
					<div className="down">
						<ul className="foooter">
							<li className="footer-item">
								<a className="footer-link" href="#">
									Bantuan & Dukungan
								</a>
							</li>

							<li className="footer-item">
								<a className="footer-link" href="#">
									Pengaturan Cookie
								</a>
							</li>

							<li className="footer-item">
								<a className="footer-link" href="#">
									Investor
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
