import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Untuk navigasi
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../Styles/Ebookpay.css";

const COBankNext = () => {
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
				{/* Tombol Kembali */}
				{/* <div className="mb-4">
					<button
						className="btn btn-trasparant d-flex align-items-center gap-2"
						onClick={() => navigate("/detailkls")}>
						<i className="fa fa-arrow-left"></i>
						Kembali
					</button>
				</div> */}

				<div className="row">
					{/* Form Pembayaran */}
					<div className="col-lg-7">
						<div className="form-container p-4 border rounded">
							<h2 className="mb-4">Pembayaran Ebook</h2>
							<div className="payment-options mb-3">
                                <div className="bank-logo">
                                    <p>BCA</p>
                                </div>
							</div>
							<hr />
                            <i className="fa-solid fa-triangle-exclamation"></i>
                                <p>Selesaikan pembayaran dalam waktu 48 jam. Setelah pembayaran diselesaikan, 
                                    butuh waktu hingga 30 menit untuk mengirimkan kursus ke akun FarmEduZ Anda. 
                                    Setelah kursus dikirim, Anda akan menerima pemberitahuan melalui email.
                                </p>
                            

                            <div className="error-icon">
                                <img src="./bca.jpeg" alt="" />
                                <h2 style={{ color: "#060807", fontSize: "20px" }}>
                                    12345678924681097
                                </h2>

                                <p className="des" style={{ color: "#060807" }}>
                                    Terima kasih atas pembelian Anda. 
                                    Silakan gunakan informasi berikut untuk menyelesaikan pembayaran.
                                    
                                    <a href="#" 
                                        style={{ color: "#ef7a53" }}>
                                        Baca Petunjuk
                                    </a>
                                </p>

                                <a href="#">
							        <button
                                        className="btn w-100"
                                        onClick={handleSubmit}
                                        style={{ backgroundColor: "#ef7a53", color: "#f5f2ed", maxWidth: "100px", marginBottom : "20%"}}>
                                        Salin
							        </button>
                                </a>
                            </div>
                            <hr />

                            <div className="payment-info">
                                <p>Tanggal Kadaluarsa: <strong>25/09/2024</strong></p>
                                <p>Nama Pembeli: <strong>Gunung Talamau</strong></p>
                                <p>Merchant: <strong>Farm EduZ</strong></p>
                            </div>
                            <div className="order-details">
                                <p>Detail Pesanan</p>
                                <div className="order-item">
                                    <p>Konsep Paduan Pertanian Presisi</p>
                                    <p>Rp. 50.000</p>
                                </div>
                            </div>

							
							
						</div>
					</div>

					{/* Ringkasan Pesanan */}
					<div className="col-lg-5">
						<div className="order-summary p-4 border rounded">
							<h2 className="mb-4">Ringkasan Pesanan</h2>
							<div className="d-flex justify-content-between mb-2">
								<span>Harga Asli:</span>
								<span>Rp 100.000</span>
							</div>
							<div className="d-flex justify-content-between mb-2">
								<span>Diskon:</span>
								<span>-Rp 50.000</span>
							</div>
							<hr />
							<div className="d-flex justify-content-between fw-bold mb-4">
								<span>TOTAL</span>
								<span>Rp 50.000</span>
							</div>
                                <a href="/coberhasil">
							        <button
                                        className="btn w-100"
                                        onClick={handleSubmit}
                                        style={{ backgroundColor: "#ef7a53", color: "#f5f2ed" }}>
                                        Selesaikan Pembayaran
							        </button>
                                </a>
							<p className="text-muted mt-3">
								Data pribadi Anda akan digunakan untuk memproses pesanan Anda,
								mendukung pengalaman Anda di situs ini, dan untuk tujuan lain
								yang dijelaskan dalam kebijakan privasi kami. Garansi uang
								kembali 30 hari.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default COBankNext;
