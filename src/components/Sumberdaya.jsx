import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/Dashboard.css";

function Sumberdaya() {
	const [activeButton, setActiveButton] = useState(null); // State to track the active button
	const navigate = useNavigate();

	const handleButtonClick = (buttonName, path) => {
		setActiveButton(buttonName); // Update the active button state
		navigate(path); // Navigate to the specified path
	};

	return (
		<Container fluid className="py-4 mt-5" style={{ marginBottom: "200%" }}>
			<Row className="py-3">
				<Col>
					<h1 style={{ color: "#17412d" }}>Sumber Daya</h1>
				</Col>
				<Col className="text-end me-auto" style={{ marginLeft: "-200px" }}>
					<Button
						className={`button-custom ${
							activeButton === "e-book" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("e-book", "/ebook")}>
						E-Book
					</Button>
					<Button
						className={`button-custom ${
							activeButton === "Webinar" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("webinar", "/webinar")}>
						Webinar & Seminar
					</Button>
					<Button
						className={`button-custom ${
							activeButton === "sumber" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("sumber", "/sumber")}>
						Studi Kasus
					</Button>
					<Button
						className={`button-custom ${
							activeButton === "histori" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("histori", "/histori")}>
						Katalog Teknologi
					</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default Sumberdaya;
