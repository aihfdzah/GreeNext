import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Tambahkan useNavigate
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WebinarPayment = () => {
	// State untuk menyimpan data input
	const [paymentMethod, setPaymentMethod] = useState("kartu");
	const [formData, setFormData] = useState({
		cardName: "",
		firstName: "",
		lastName: "",
		email: "",
	});

	// Inisialisasi fungsi navigate
	const navigate = useNavigate();

	// Fungsi untuk menangani perubahan input
	const handleInputChange = (e) => {
		const { id, value } = e.target;
		setFormData({ ...formData, [id]: value });
	};

	// Fungsi untuk menangani metode pembayaran
	const handlePaymentChange = (e) => {
		setPaymentMethod(e.target.value);
	};

	// Fungsi untuk submit data
	const handleSubmit = () => {
		alert("Pembayaran berhasil!");
	};

	// Fungsi untuk kembali ke halaman sumberdaya
	const handleBack = () => {
		navigate("/sumberdaya");
	};

	return (
		<>
			<Navbar />
			<div className="container">
				{/* Back Button */}
				<div className="back-button mt-3">
					<button
						onClick={handleBack}
						className="btn btn-light d-flex align-items-center"
					>
						<i className="fa-solid fa-arrow-left me-2"></i> Kembali
					</button>
				</div>

				{/* Payment Form Section */}
				<div className="form-section mt-4">
					<h2>Pembayaran Pendaftaran Webinar</h2>
					<div className="payment-options">
						<label>
							<input
								type="radio"
								name="payment"
								value="kartu"
								checked={paymentMethod === "kartu"}
								onChange={handlePaymentChange}
							/>
							Kartu
						</label>
						<label>
							<input
								type="radio"
								name="payment"
								value="transfer"
								checked={paymentMethod === "transfer"}
								onChange={handlePaymentChange}
							/>
							Transfer Bank
						</label>
					</div>

					<div className="input-group">
						<label htmlFor="cardName">Nama Kartu</label>
						<input
							type="text"
							id="cardName"
							placeholder="Nama di kartu"
							value={formData.cardName}
							onChange={handleInputChange}
						/>
					</div>

					<div className="input-group">
						<label htmlFor="firstName">Nama Depan</label>
						<input
							type="text"
							id="firstName"
							placeholder="Nama depan"
							value={formData.firstName}
							onChange={handleInputChange}
						/>
					</div>

					<div className="input-group">
						<label htmlFor="lastName">Nama Belakang</label>
						<input
							type="text"
							id="lastName"
							placeholder="Nama belakang"
							value={formData.lastName}
							onChange={handleInputChange}
						/>
					</div>

					<div className="input-group">
						<label htmlFor="email">Alamat Email</label>
						<input
							type="email"
							id="email"
							placeholder="example@gmail.com"
							value={formData.email}
							onChange={handleInputChange}
						/>
					</div>
				</div>

				{/* Order Summary Section */}
				<div className="summary-section">
					<h2>Ringkasan Pesanan</h2>
					<div className="price-detail">
						Harga Asli: <span>Rp 100.000</span>
					</div>
					<div className="price-detail">
						Diskon: <span>-Rp 50.000</span>
					</div>
					<div className="total">
						TOTAL <span>Rp 50.000</span>
					</div>
					<button className="button" onClick={handleSubmit}>
						Lanjutkan
					</button>
					<div className="info-text">
						Data pribadi Anda akan digunakan untuk memproses pesanan Anda,
						mendukung pengalaman Anda di situs ini, dan untuk tujuan lain yang
						dijelaskan dalam kebijakan privasi kami. Dana yang kembali 30 hari.
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default WebinarPayment;
