import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Untuk navigasi
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../Styles/Ebookpay.css";

const COKartuGagal = () => {
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
		alert("Pembayaran gagal!");
	};

	return (
		<>
			<Navbar />
			<div className="container" style={{margin:"80px 0px"}}>
				{/* Tombol Kembali */}
				{/* <div className="mb-4">
					<button
						className="btn btn-trasparant d-flex align-items-center gap-2"
						onClick={() => navigate("/KelasDetail")}>
						<i className="fa fa-arrow-left"></i>
						Kembali
					</button>
				</div> */}
                
                <h1>Terima Kasih Atas Permintaan Anda.</h1>
                    <div className="error-icon">
                        <i className="fa-regular fa-face-frown"></i>
                        <h2 style={{ color: "#ef7a53" }}>OOPS!</h2>
                    </div>
                    
                    <p className="desc"> Kami tidak dapat melanjutkan proses pembayaran.</p>
                    <p className="desc2">Silakan coba lagi untuk menyelesaikan permintaan.</p>

                    <a href="/cokartupass">
                        <button
                            className="btn w-100"
                            onClick={handleSubmit}
                            style={{ backgroundColor: "#ef7a53", color: "#f5f2ed" }}>
                            Selesaikan Pembayaran
						</button>
                    </a>
                    <a href="#" className="guide-link">Periksa Panduan</a>

                </div>
			<Footer />
		</>
	);
};

export default COKartuGagal;
