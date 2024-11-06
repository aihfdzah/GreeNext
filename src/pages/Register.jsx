import "bootstrap/dist/css/bootstrap.min.css";
import W from "../assets/W.png";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaLock, FaRegEnvelope } from "react-icons/fa";

function Register() {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
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
						style={{ fontSize: "16pt", color: "#ef7a53", fontWeight: "bold" }}>
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
				<form className="w-75">
					<div className="mb-3">
						<input
							type="text"
							placeholder="Username"
							className="form-control"
						/>
					</div>

					<div className="input-group mb-3">
						<span className="input-group-text bg-white">
							<FaRegEnvelope />
						</span>
						<input type="email" placeholder="Email" className="form-control" />
					</div>

					<div className="input-group mb-3">
						<span className="input-group-text bg-white">
							<FaLock />
						</span>
						<input
							type={showPassword ? "text" : "password"}
							placeholder="Password"
							className="form-control"
						/>
						<span
							className="input-group-text bg-white"
							onClick={togglePasswordVisibility}
							style={{ cursor: "pointer" }}>
							{showPassword ? <FaEye /> : <FaEyeSlash />}
						</span>
					</div>

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
							style={{ fontSize: " 8pt", color: "#17412d" }}>
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
