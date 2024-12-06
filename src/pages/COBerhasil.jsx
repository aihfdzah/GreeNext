import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Untuk navigasi
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../Styles/Ebookpay.css";

const COBerhasil = () => {
	const [paymentMethod, setPaymentMethod] = useState("kartu");
	const [formData, setFormData] = useState({
		cardName: "",
		cardNumber: "",
		expiryDate: "",
		cvc: "",
	});

	const navigate = useNavigate(); // Hook untuk navigasi

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		setFormData({ ...formData, [id]: value });
	};

	const handlePaymentChange = (e) => {
		setPaymentMethod(e.target.value);
	};

	const handleSubmit = () => {
		alert("Pembayaran berhasil!");
	};

	return (
		<>
			<Navbar />
			<div className="container mt-5">
				<h1>Terima Kasih Atas Pembayaranmu!</h1>
				<div className="error-icon2">
					<i className="fa-solid fa-check"></i>
				</div>

				<p className="desc"> Pesanan #12345678924681097 Terkonfirmasi</p>

				<a href="/home">
					<button
						className="btn w-100"
						onClick={handleSubmit}
						style={{
							backgroundColor: "#17412d",
							color: "#f5f2ed",
							marginTop: "20px",
						}}>
						Lacak Pesanan
					</button>
				</a>
				<a href="#" className="guide-link">
					Hasilkan Tanda Terima
				</a>
			</div>
			<Footer />
		</>
	);
};

export default COBerhasil;
