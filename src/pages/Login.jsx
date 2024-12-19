import "bootstrap/dist/css/bootstrap.min.css";
import S from "../assets/S.png";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaLock, FaEnvelope } from "react-icons/fa";
import axios from "axios";

function Login() {
	const [showPassword, setShowPassword] = useState(false);
	// Axios Awal login
	const [error, setError] = useState(null);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();

	// Handle form input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		setError("");
		console.log(formData.email, formData.password);
		try {
			const response = await axios.post(
				"https://greenext-server-production.up.railway.app/api/v1/auth/login",
				{
					email: formData.email,
					password: formData.password,
				},
				{
					withCredentials: true,
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			console.log("response : ", response);
			if (response.status == 200) {
				alert("Berhasil Login!");
				navigate("/dashboard");
			}
		} catch (error) {
			// console.log(error.response.data.message)
			setError(error.response.data.message);
			// if (error.response?.status){
			// 	setError(response.data.message)
			// }
			console.error("Error login", error.message);
		}

		// Redirect to home on login (add user validation if needed)
		// navigate("/home");
	};
	//   Axios Akhir Login
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
					<img src={S} alt="Precision Farming" className="img-fluid" />
				</div>
				<div className="text-left text-white">
					<h1
						className="judul"
						style={{
							fontSize: "16pt",
							color: "#ef7a53",
							fontWeight: "bold",
							textAlign: "left",
						}}>
						Konsep Panduan Pertanian Presisi
					</h1>
					<p className="mt-3" style={{ color: "#F5F2ED" }}>
						Kursus ini secara komprehensif memperkenalkan sistem panduan
						otomatis, yang penting untuk pertanian modern.
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
						style={{ fontSize: "20pt", color: "#ef7a53", fontWeight: "bold" }}>
						Login Untuk Bergabung Bersama Kami
					</h1>
					<p style={{ color: "#17412d", fontSize: "10pt" }} className="mb-2">
						Bergabung bersama kami dan wujudkan sektor pertanian maju.
					</p>
				</div>
				<form className="w-75" onSubmit={handleLogin}>
					{/* <div className="mb-3">
						<input
							type="text"
							placeholder="Username"
							className="form-control"
						/>
					</div> */}

					<div className="input-group mb-3">
						<span className="input-group-text bg-white">
							<FaEnvelope />
						</span>
						<input
							type="email"
							name="email"
							placeholder="Email"
							className="form-control"
							value={formData.email}
							onChange={handleInputChange}
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
							className="form-control"
							value={formData.password}
							onChange={handleInputChange}
						/>
						<span
							className="input-group-text bg-white"
							onClick={togglePasswordVisibility}
							style={{ cursor: "pointer" }}>
							{showPassword ? <FaEye /> : <FaEyeSlash />}
						</span>
					</div>

					{error && (
						<p className={`text-danger small text-left shake`}>{error}</p>
					)}

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
						className="btn active w-100 bt login-button"
						style={{
							backgroundColor: "#ef7a53",
							borderColor: "#ef7a53",
							color: "#F5F2ED",
						}}>
						Masuk
					</button>
				</form>

				<p className="mt-3 small">
					Apakah anda memiliki akun?{" "}
					<a
						href="/register"
						className="text-decoration-none"
						style={{ color: "#17412d", fontWeight: "bold" }}>
						Buat Akun
					</a>
				</p>

				<div className="w-75 mt-2">
					<div className="d-flex align-items-center">
						<hr className="flex-grow-1" />
						<span
							className="mx-2"
							style={{ fontSize: " 8pt", color: "#17412d" }}>
							Atau menggunakan email & facebook
						</span>
						<hr className="flex-grow-1" />
					</div>
					<div className="d-flex justify-content-between mt-3">
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

export default Login;
