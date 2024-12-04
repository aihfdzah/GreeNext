import "bootstrap/dist/css/bootstrap.min.css";
import W from "../assets/W.png";
import Logo from "../assets/logo.png";
import { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Register() {
	const navigate = useNavigate()
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState('')

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	// Handle form input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('')
		console.log(formData.username, formData.password, formData.email)
		try {
			const response = await axios.post('http://localhost:5000/api/v1/auth/register', {
				username : formData.username, 
				password: formData.password, 
				email: formData.email
			}, 
			{
				headers : {
					"Content-Type": "application/json	"
				}
			});
			console.log(response.data)
			if (response.status == 201){
				alert('Berhasil registrasi, Silahkan login terlebih dahulu!s');
				navigate('/')
			}
		} catch (error) {
			setError(error.response.data.message)
			console.error("Error Registering user", error.message);
		}
	};

	return (
		<div className="input-container vh-100 d-flex flex-column flex-lg-row">
			{/* Left Section */}
			<div
				className="col-lg-6 d-flex flex-column justify-content-center p-5"
				style={{ backgroundColor: "#17412D" }}>
				<img
					src={Logo}
					alt="Logo FarmEduZ"
					className="mb-4"
					style={{ height: 40, width: 110 }}
				/>
				<div className="mb-3">
					<img src={W} alt="Precision Farming" className="img-fluid" />
				</div>
				<div className="text-left text-white">
					<h1
						className="h4"
						style={{
							fontSize: "16pt",
							color: "#ef7a53",
							fontWeight: "bold",
							textAlign: "left",
						}}>
						Pemanfaatan Big Data dan AI untuk Pertanian
					</h1>
					<p className="mt-3" style={{ color: "#F5F2ED" }}>
						Di era digital, penggunaan Big Data dan kecerdasan buatan (AI) dapat
						membantu meningkatkan hasil pertanian dan mengurangi risiko.
					</p>
				</div>
			</div>

			{/* Right Section */}
			<div
				className="col-lg-6 d-flex flex-column justify-content-center align-items-center p-5"
				style={{ backgroundColor: "#F5F2ED" }}>
				<div className="ml-3 w-75">
					<h1
						className="text-left d-flex mb-2"
						style={{ fontSize: "24pt", color: "#ef7a53", fontWeight: "bold" }}>
						Mari Bersama Majukan Sektor Pertanian Indonesia
					</h1>
					<p style={{ color: "#17412d", fontSize: "10pt" }} className="mb-2">
						Bergabung bersama kami dan wujudkan sektor pertanian maju.
					</p>
				</div>
				<form className="w-75" onSubmit={handleSubmit}>
					<div className="mb-3">
						<input
							type="text"
							name="username"
							placeholder="Username"
							value={formData.username}
							onChange={handleInputChange}
							className="form-control"
						/>
					</div>

					<div className="input-group mb-3">
						<span className="input-group-text bg-white">
							<FaEnvelope />
						</span>
						<input
							type="email"
							name="email"
							placeholder="Email"
							value={formData.email}
							onChange={handleInputChange}
							className="form-control"
						/>
					</div>

					<div className="input-group mb-3">
						<span className="input-group-text bg-white">
							<FaLock />
						</span>
						<input
							type={showPassword ? "text" : "password"}
							name="password"
							placeholder="Password"
							value={formData.password}
							onChange={handleInputChange}
							className="form-control"
						/>
						<span
							className="input-group-text bg-white"
							onClick={togglePasswordVisibility}
							style={{ cursor: "pointer" }}>
							{showPassword ? <FaEye /> : <FaEyeSlash />}
						</span>
					</div>

					{error && <p className="text-danger small text-left shake">{error}</p>}

					<p className="text-left small" style={{ color: "#17412d" }}>
						Dengan membuat akun, Anda menyetujui{" "}
						<a
							href="#"
							className="text-decoration-none"
							style={{ color: "#17412d", fontWeight: "bold" }}>
							Kebijakan Privasi
						</a>{" "}
						kami, dan{" "}
						<a
							href="#"
							className="text-decoration-none"
							style={{ color: "#17412d", fontWeight: "bold" }}>
							Kebijakan Komunikasi Elektronik.
						</a>
					</p>

					<button
						type="submit"
						className="btn w-100"
						style={{
							backgroundColor: "#ef7a53",
							borderColor: "#ef7a53",
							color: "#F5F2ED",
						}}>
						Daftar
					</button>
				</form>

				<p className="mt-3 small">
					Apakah anda memiliki akun?{" "}
					<a
						href="/"
						className="text-decoration-none"
						style={{ color: "#17412d", fontWeight: "bold" }}>
						Masuk
					</a>
				</p>

				<div className="w-75 mt-2">
					<div className="d-flex align-items-center">
						<hr className="flex-grow-1" />
						<span
							className="mx-2"
							style={{ fontSize: "8pt", color: "#17412d" }}>
							Atau menggunakan email & facebook
						</span>
						<hr className="flex-grow-1" />
					</div>
					<div className="d-flex justify-content-between mt-2">
						<button
							className="btn w-45 h-25"
							style={{
								backgroundColor: "#FFFF",
								color: "#17412D",
								fontWeight: "bold",
								width: "47%",
							}}>
							Google
						</button>
						<button
							className="btn btn-outline w-45"
							style={{
								backgroundColor: "#FFFF",
								color: "#17412D",
								fontWeight: "bold",
								width: "47%",
								boxShadow: "20px",
							}}>
							Facebook
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
