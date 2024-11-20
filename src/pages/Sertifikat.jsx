import { Card, Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const sertifikatList = [
	{
		id: 1,
		title: "Pengantar Pertanian Modern",
		description:
			"Sertifikat ini diberikan setelah menyelesaikan pelatihan dasar tentang teknologi terbaru.",
		image: "sertifikat1.png", // Ganti dengan path gambar yang sesuai
	},
	{
		id: 2,
		title: "Pertanian Berkelanjutan",
		description:
			"Sertifikat ini mengapresiasi fokus pada praktik ramah lingkungan dan ekosistem berkelanjutan.",
		image: "sertifikat2.png",
	},
	{
		id: 3,
		title: "Teknik Irigasi Cerdas",
		description:
			"Pelatihan ini berfokus pada manajemen irigasi modern dengan teknologi.",
		image: "sertifikat3.png",
	},
	{
		id: 4,
		title: "Konsep Panduan Pertanian Presisi",
		description:
			"Menyediakan teknik pertanian presisi berbasis data yang akurat.",
		image: "sertifikat4.png",
	},
	{
		id: 5,
		title: "Pemanfaatan Teknologi IoT",
		description: "IoT untuk pengawasan hasil pertanian secara real-time.",
		image: "sertifikat5.png",
	},
	{
		id: 6,
		title: "Pemanfaatan Big Data & AI",
		description: "Meningkatkan produktivitas dengan analisis data.",
		image: "sertifikat6.png",
	},
];

const Sertifikat = () => {
	return (
		<>
			<Navbar />
			<Container style={{ marginBottom: "23%" }}>
				<h1>Pelatihanku</h1>
				<h1
					style={{ textAlign: "center", marginBottom: "5%", color: "#17412d" }}>
					<a
						href="/kelas"
						style={{ marginRight: "50px", textDecoration: "none" }}>
						Kelas
					</a>
					<a
						href="/sertifikat"
						style={{ marginRight: "50px", textDecoration: "none" }}>
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
								{" "}
								<Card.Img variant="top" src={cert.image} alt={cert.title} />
								<Card.Body
									style={{ backgroundColor: "#17412D", color: "white" }}>
									<Card.Title>{cert.title}</Card.Title>
									<Card.Text style={{ color: "white" }}>
										{cert.description}
									</Card.Text>
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
