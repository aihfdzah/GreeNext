import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState, useRef } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { useEffect } from "react";
import Spinner from "../components/Spinner"; // Pastikan path sesuai dengan lokasi Spinner.js
import "../Styles/KatalogTeknologi.css";
import axios from "axios";
import MiniSpinner from "../components/MiniSpinner";


const KatalogTeknologi = () => {
	const [activeButton, setActiveButton] = useState("katalogteknologi"); // Initialize activeButton state
	const navigate = useNavigate(); // Initialize navigation
	const [search, setSearch] = useState("");
	const [searchLoading, setSearchLoading] = useState(false);
	const [loading, setLoading] = useState(true); // State untuk mengatur loading spinner
	const [catalog, setCatalog] = useState([])
	const searchTimeout = useRef(null);

	const handleButtonClick = (buttonName, path) => {
		setActiveButton(buttonName);
		navigate(path);
	};

	const truncate = (str, maxLength) => {
		return str.length > maxLength ? str.slice(0, maxLength) + "... " : str;
	};

	const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setSearchLoading(true);

    // Clear any previous timeout
    if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
    }

    // Set a new timeout
    searchTimeout.current = setTimeout(() => {
        setSearchLoading(false);
    }, 300);
};

// Cleanup timeout on unmount
useEffect(() => {
	return () => {
			if (searchTimeout.current) {
					clearTimeout(searchTimeout.current);
			}
	};
}, []);

	const filteredCatalog = catalog.filter(
		(item) =>
			item.name.toLowerCase().includes(search.toLowerCase()) ||
			item.description.toLowerCase().includes(search.toLowerCase()) 
	);

	useEffect(() => {
		const fetchCatalogTech = async () => {
			setLoading(true)
			try {
				const response = await axios.get('https://greenext-server-production.up.railway.app/api/v1/tech-catalog/')
				setCatalog(response.data.data)
			} catch (error) {
				console.error('Error Get Catalog', error.message)
			} finally{
				setLoading(false)
			}
				
		}
		fetchCatalogTech();
	}, []);

	// Jika sedang loading, tampilkan spinner
	if (loading) {
		return <Spinner />;
	}

	return (
		<>
			<Navbar />
			{console.log(catalog)}
			<Row
				className="py-3 d-flex text-left"
				style={{
					maxWidth:"1440px",
					margin:"4rem auto 1rem auto",
					padding:"0rem 4rem"
				}}>
				<Col>
					<h1 style={{ color: "#17412d" }}>Katalog Teknologi</h1>
				</Col>
				<Col
					className="text-end me-auto text-left"
					style={{ marginLeft: "-200px" }}>
					<Button
						className={`button-custom ${
							activeButton === "sumber" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("sumber", "/sumberdaya")}>
						E-Book
					</Button>
					<Button
						className={`button-custom ${
							activeButton === "webinar" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("webinar", "/webinar")}>
						Webinar & Seminar
					</Button>
					<Button
						className={`button-custom ${
							activeButton === "studikasus" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("studikasus", "/studikasus")}>
						Studi Kasus
					</Button>
					<Button
						className={`button-custom ${
							activeButton === "katalogteknologi" ? "active" : ""
						}`}
						onClick={() =>
							handleButtonClick("katalogteknologi", "/katalogteknologi")
						}>
						Katalog teknologi
					</Button>
				</Col>
			</Row>

			<div className="container mt-4" style={{marginBottom:'10rem', padding:"0rem 4rem", minHeight:'40vh'}}>
				<h1 className="text-center">Katalog Teknologi</h1>
				{/* Search Bar */}
				<div
					className="input-group flex-grow-1 align-items-center mb-4"
					style={{
						position: "relative",
					}}>
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
						placeholder="Katalog Teknologi..."
						onChange={handleSearchChange}
					/>
				</div>

				{searchLoading ? (
						<div style={{ margin: 'auto', display: 'flex', justifyContent: 'center', alignContent: 'start' }}>
								<MiniSpinner />
						</div>
				) : filteredCatalog.length > 0 ? (
						filteredCatalog.map((item) => (
								<div className="list-item mt-2" key={item.id}>
										<div className="item-content">
												<img
														src={`./${item.image}`}
														alt={item.name}
														className="item-image"
												/>
												<div className="item-text">
														<p className="item-title" style={{textTransform:'capitalize'}}>{item.name}</p>
														<p className="item-desc">
																{truncate(item.description, 150)}
														</p>
												</div>
										</div>

										<div className="item-action">
												<i className="fa fa-eye"></i>
												<Link to={`${item.id}`}>Lihat detail</Link>
										</div>
								</div>
						))
				) : (
						<p className="text-center mt-4">No data found</p>
				)}
			</div>

			<Footer />
		</>
	);
};

export default KatalogTeknologi;
