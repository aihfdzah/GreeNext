import { useState, useEffect } from "react";
import "../Styles/Footer.css";

const Footer = () => {
	const [activeLink, setActiveLink] = useState(""); // State untuk tautan aktif

	// Atur tautan aktif berdasarkan URL saat ini
	useEffect(() => {
		setActiveLink(window.location.pathname);
	}, []);

	const handleLinkClick = (link) => {
		setActiveLink(link); // Tetapkan tautan aktif
	};

	return (
		<footer className="footer footer-expand-lg footer-dark bg-dark text-white py-4">
			<div className="footer-content" style={{padding:"0rem 4rem"}}>
				<div className="footer-logo">
					<img src="../logo.png" className="logo-footer" alt="FarmEduZ Logo" />

					<div style={{display:"flex", alignItems:"end", gap:".25rem"}}>
						<i className="bx fa-solid fa-globe d-flex flex"></i>
						<span>Bahasa Indonesia</span>
					</div>
				</div>

				<div
					className="collapse footer-collapse flex-direction-column"
					id="footerFoot">
					<ul className="foooter">
						<li className="footer-item">
							<a
								className={`footer-link ${
									activeLink === "/home" ? "active-link" : ""
								}`}
								href="/home"
								onClick={() => handleLinkClick("/home")}>
								Dashboard
							</a>
						</li>
						<li className="footer-item">
							<a
								className={`footer-link ${
									activeLink === "/kelas" ? "active-link" : ""
								}`}
								href="/kelas"
								onClick={() => handleLinkClick("/kelas")}>
								Kelas
							</a>
						</li>
						<li className="footer-item">
							<a
								className={`footer-link ${
									activeLink === "/sumberdaya" ? "active-link" : ""
								}`}
								href="/sumberdaya"
								onClick={() => handleLinkClick("/sumberdaya")}>
								Sumber Daya
							</a>
						</li>
						<li className="footer-item">
							<a
								className={`footer-link ${
									activeLink === "/tentang" ? "active-link" : ""
								}`}
								href="/tentang"
								onClick={() => handleLinkClick("/tentang")}>
								Tentang Kita
							</a>
						</li>
					</ul>
				</div>

				<div className="collapse-footer-collapse" id="footerFoot">
					<div className="down">
						<ul className="foooter">
							<li className="footer-item">
								<a
									className={`footer-link ${
										activeLink === "#tentang-kami" ? "active-link" : ""
									}`}
									href="#tentang-kami"
									onClick={() => handleLinkClick("#tentang-kami")}>
									Tentang Kami
								</a>
							</li>
							<li className="footer-item">
								<a
									className={`footer-link ${
										activeLink === "#hubungi-kami" ? "active-link" : ""
									}`}
									href="#hubungi-kami"
									onClick={() => handleLinkClick("#hubungi-kami")}>
									Hubungi Kami
								</a>
							</li>
							<li className="footer-item">
								<a
									className={`footer-link ${
										activeLink === "#tentang-privasi" ? "active-link" : ""
									}`}
									href="#tentang-privasi"
									onClick={() => handleLinkClick("#tentang-privasi")}>
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
								<a
									className={`footer-link ${
										activeLink === "#bantuan" ? "active-link" : ""
									}`}
									href="#bantuan"
									onClick={() => handleLinkClick("#bantuan")}>
									Bantuan & Dukungan
								</a>
							</li>
							<li className="footer-item">
								<a
									className={`footer-link ${
										activeLink === "#cookie" ? "active-link" : ""
									}`}
									href="#cookie"
									onClick={() => handleLinkClick("#cookie")}>
									Pengaturan Cookie
								</a>
							</li>
							<li className="footer-item">
								<a
									className={`footer-link ${
										activeLink === "#investor" ? "active-link" : ""
									}`}
									href="#investor"
									onClick={() => handleLinkClick("#investor")}>
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
