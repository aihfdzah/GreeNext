import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/Dashboard.css";
import axios from "axios";

function Dashboard() {
	// console.log(user)
	const [activeButton, setActiveButton] = useState(null); // State to track the active button
	const [error, setError] = useState(null);
	const [user, setUser] = useState(null)
	const navigate = useNavigate();

	useEffect(() => {
		const fetchUser = async () => {
			try {
			const response = await axios.get('http://localhost:5000/api/v1/auth/me', {
				withCredentials:true
			})
				setUser(response.data.user)
				console.log(user)
			} catch (error) {  	
				console.error('Error fetching data user', error.message)
				setError('Failed to fetch user data')
			}
		}
		fetchUser()
	}, [])

	// useEffect(() => {
	// 	const fetchUser = async () => {
	// 		try {
	// 			const response = await fetch('http://localhost:5000/api/v1/auth/me', {
	// 				method: 'GET',
	// 				credentials: 'include', // Ensures cookies are sent
	// 			}, {
	// 				headers : {
	// 					Cookies : `token=${token}`
	// 				}
	// 			});
	// 			const data = await response.json();
	// 			if (data.success) {
	// 				setUser(data.user);
	// 			} else {
	// 				setError(data.message);
	// 			}
	// 		} catch (error) {
	// 			console.error('Error fetching data user', error.message);
	// 			setError('Failed to fetch user data');
	// 		}
	// 	};
	// 	fetchUser();
	// }, []);
	

	if (error) {
    return <div>{error}</div>;
  }

	if (!user) {
    return <div>Loading...</div>;
  }
	
	const handleButtonClick = (buttonName, path) => {
		setActiveButton(buttonName); // Update the active button state
		navigate(path); // Navigate to the specified path
	};

	return (
		<Container fluid className="p-lg-4 p-md-0 mt-5">
			<Row
				className="py-3 d-flex text-left"
				style={{
					marginLeft: "-40px",
					marginBottom: "",
				}}>
				<Col>
					<h1 style={{ color: "#17412d" }}>Dashboard</h1>
				</Col>
				<Col className="text-end me-auto">
					<Button
						className={`me-5 w-15 button-custom ${
							activeButton === "home" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("home", "/home")}>
						Home
					</Button>
					<Button
						className={` p-0 me-5 w-15 button-custom ${
							activeButton === "sertifikat" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("sertifikat", "/sertifikat")}>
						Sertifikat
					</Button>
					<Button
						className={`me-5  w-15 button-custom ${
							activeButton === "sumber" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("sumber", "/sumberdaya")}>
						Sumber Daya
					</Button>
					<Button
						className={`me-5 w-15 button-custom ${
							activeButton === "histori" ? "active" : ""
						}`}
						onClick={() => handleButtonClick("histori", "/histori")}>
						Histori
					</Button>
				</Col>
			</Row>
			<Row className="py-5">
				<Col md={6}>
					<h2>
						Selamat Datang Kembali,{" "}
						<span style={{ color: "#ef7a53" }}>{user.username}</span>
						<span>{user.email}</span>
					</h2>
					<p>Ayo lanjutkan kelasnya sampai tuntas!</p>
					<h3>Lanjutkan kelasnya yuk!</h3>
				</Col>
				<Col md={6}>
					<Row style={{ marginTop: "-90px" }}>
						<Col md={4} style={{ marginTop: "90px" }}>
							<div className="card" style={{ backgroundColor: "#F5F2ED" }}>
								<div className="card-body">
									<h5 className="card-title">0</h5>
									<p className="card-text">Kelas</p>
								</div>
							</div>
						</Col>
						<Col md={4} style={{ marginTop: "90px" }}>
							<div className="card" style={{ backgroundColor: "#F5F2ED" }}>
								<div className="card-body">
									<h5 className="card-title">0</h5>
									<p className="card-text">Kelas Selesai</p>
								</div>
							</div>
						</Col>
						<Col md={4} style={{ marginTop: "90px" }}>
							<div className="card" style={{ backgroundColor: "#F5F2ED" }}>
								<div className="card-body">
									<h5 className="card-title">0</h5>
									<p className="card-text">Resource</p>
								</div>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row className="py-5" id="kelas-wrapper">
				<Col>
					<div className="d-flex justify-content-center">
						<div className="fs-1">
							<span className="text-orange">
								<i className="bi bi-book-half"></i>
							</span>
						</div>
						<div className="ms-3 text-center" style={{ marginBottom: "30%" }}>
							<h2>Kelas Saya</h2>
							<p>Tidak ada kelas yang sedang berlangsung</p>
							<Button
								href="/kelas"
								className="w-100"
								style={{
									color: "#F5F2ED",
									backgroundColor: "#ef7a53",
									border: "none",
								}}>
								Cari Kelas
							</Button>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default Dashboard;
