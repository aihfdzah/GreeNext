import { Card, Container, Row, Col, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "../components/Spinner"; // Pastikan path sesuai dengan lokasi Spinner.js
import { FaDownload, FaEye, FaLinkedin } from "react-icons/fa"; // Tambahkan package react-icons

const sertifikatList = [
	{
		id: 1,
		title: "Pengantar Pertanian Modern",
		image: "sertifikat1.png",
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
		title: "Konsep Panduan Pertanian Presisi",
		image: "sertifikat4.png",
	},
	{
		id: 5,
		title: "Pemanfaatan Teknologi IoT",
		image: "sertifikat5.png",
	},
	{
		id: 6,
		title: "Pemanfaatan Big Data & AI",
		image: "sertifikat6.png",
	},
];

const Sertifikat = () => {
	const [activeLink, setActiveLink] = useState("sertifikat");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

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
				<p>
					Selamat Kamu mendapatkan sertifikat dari Course FarmEduZ!
				</p>
				<Row>
					{sertifikatList.map((cert) => (
						<Col key={cert.id} md={4} className="mb-3 mt-3">
							{" "}
							{/* Ubah margin bawah menjadi mb-3 */}
							<Card className="shadow-sm h-100">
								<Card.Img
									variant="top"
									src={cert.image}
									alt={cert.title}
									style={{ height: "230px", objectFit: "cover" }}
								/>
								<Card.Body style={{ backgroundColor: "#17412D" }}>
	<Card.Title className="mb-3" style={{ color: "#f5f2ed" }}>
		{cert.title}
	</Card.Title>
	<div className="d-flex justify-content-between">
		<Button
			variant="outline"
			className="me-2 custom-button"
			style={{
				color: "#f5f2ed",
				borderColor: "#f5f2ed",
			}}
		>
			<FaDownload className="me-2" />
			Download
		</Button>
		<Button
			variant="outline"
			className="me-2 custom-button"
			style={{
				color: "#f5f2ed",
				borderColor: "#f5f2ed",
			}}
		>
			<FaEye className="me-2" />
			Lihat
		</Button>
		<Button
			variant="outline"
			className="custom-button"
			style={{
				color: "#f5f2ed",
				borderColor: "#f5f2ed",
			}}
		>
			<FaLinkedin className="me-2" />
			LinkedIn
		</Button>
	</div>
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
