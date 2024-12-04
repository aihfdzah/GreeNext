import { Card, Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "../components/Spinner"; // Pastikan path sesuai dengan lokasi Spinner.js
const sertifikatList = [
	{
		id: 1,
		title: "Pengantar Pertanian Modern",
		image: "sertifikat1.png", // Ganti dengan path gambar yang sesuai
	},
	{
		id: 2,
		title: "Pertanian Berkelanjutan",
		image: "sertifikat2.png",
	},
	{
		id: 3,
		title: "Teknik Irigasi Cerdas",
		image: "sertifikat3.png",
	},
	{
		id: 4,
		title: "Konsep Panduan Pertanian Presisi.",
		image: "sertifikat4.png",
	},
	{
		id: 5,
		title: "Pemanfaatan Teknologi IoT.",
		image: "sertifikat5.png",
	},
	{
		id: 6,
		title: "Pemanfaatan Big Data & AI.",
		image: "sertifikat6.png",
	},
];

const Sertifikat = () => {
	// State untuk melacak tautan yang aktif
	const [activeLink, setActiveLink] = useState("sertifikat");
	const [loading, setLoading] = useState(true); // State untuk mengatur loading spinner

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000); // Simulasikan loading selama 3 detik

		return () => clearTimeout(timer);
	}, []);

	// Jika sedang loading, tampilkan spinner
	if (loading) {
		return <Spinner />;
	}
	return (
		<>
			<Navbar />
			<Container className="mt-5" style={{ marginBottom: "23%" }}>
				<h1>Pelatihanku</h1>
				<h1
					style={{
						textAlign: "center",
						marginBottom: "5%",
						color: "#17412d",
					}}>
					<a
						href="/kelas"
						onClick={() => setActiveLink("kelas")}
						style={{
							marginRight: "50px",
							textDecoration: "none",
							color: activeLink === "kelas" ? "#EF7A53" : "#17412D",
							fontWeight: activeLink === "kelas" ? "bold" : "normal",
							transition: "0.3s",
						}}
						onMouseEnter={(e) => (e.target.style.color = "#EF7A53")}
						onMouseLeave={(e) =>
							(e.target.style.color =
								activeLink === "kelas" ? "#EF7A53" : "#17412D")
						}>
						Kelas
					</a>
					<a
						href="/sertifikat"
						onClick={() => setActiveLink("sertifikat")}
						style={{
							marginRight: "50px",
							textDecoration: "none",
							color: activeLink === "sertifikat" ? "#EF7A53" : "#17412D",
							fontWeight: activeLink === "sertifikat" ? "bold" : "normal",
							transition: "0.3s",
						}}
						onMouseEnter={(e) => (e.target.style.color = "#EF7A53")}
						onMouseLeave={(e) =>
							(e.target.style.color =
								activeLink === "sertifikat" ? "#EF7A53" : "#17412D")
						}>
						Sertifikat
					</a>
				</h1>
				<p style={{ marginBottom: "10%" }}>
					Selamat Kamu mendapatkan sertifikat dari Course FarmEduZ!
				</p>
				<Row>
					{sertifikatList.map((cert) => (
						<Col key={cert.id} md={4} style={{ marginTop: "15px" }}>
							<Card>
								<Card.Img variant="top" src={cert.image} alt={cert.title} />
								<Card.Body
									style={{
										backgroundColor: "#17412D",
										color: "white",
									}}>
									<Card.Title>{cert.title}</Card.Title>
									<Card.Text>{cert.description}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
			<Footer />
		</>
	);
};

export default Sertifikat;
