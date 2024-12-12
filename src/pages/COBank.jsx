import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Untuk navigasi
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../Styles/Ebookpay.css";
import { useEffect } from "react";
import Spinner from "../components/Spinner"; // Pastikan path sesuai dengan lokasi Spinner.js

const COBank = () => {
	const [paymentMethod, setPaymentMethod] = useState("bank");
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

	const [loading, setLoading] = useState(true); // State untuk mengatur loading spinner

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000); // Simulasikan loading selama 3 detik

		return () => clearTimeout(timer);
	}, []);

	// Jika sedang loading, tampilkan spinner
	if (loading) {
		return <Spinner />;
	}

	return (
		<>
			<Navbar />
			<div className="container mt-5">
				{/* Tombol Kembali */}
				<div className="mb-4">
					<button
						className="btn btn-trasparant d-flex align-items-center gap-2"
						onClick={() => navigate("/detailkls")}>
						<i className="fa fa-arrow-left"></i>
						Kembali
					</button>
				</div>

				<div className="row">
					{/* Form Pembayaran */}
					<div className="col-lg-7">
						<div className="form-container p-4 border rounded">
							<h2 className="mb-4">Pembayaran Ebook</h2>
							<div className="payment-options mb-3">
								<label className="me-3">
									<input
										type="radio"
										name="payment"
										value="kartu"
										checked={paymentMethod === "kartu"}
										onChange={handlePaymentChange}
									/>{" "}
									Kartu
								</label>
								<label>
									<input
										type="radio"
										name="payment"
										value="transfer"
										checked={paymentMethod === "transfer"}
										onChange={handlePaymentChange}
									/>{" "}
									Transfer Bank
								</label>
							</div>
							
                            <div className="payment-section">
                                <form>
                                    <label for="bank">Pilih Metode Pembayaran</label>
                                        <select className="option" id="bank" name="bank">
                                            <option value="">Pilih Bank</option>
                                            <option value="bri">BCA</option>
                                            <option value="bca">BRI</option>
                                            <option value="mandiri">Mandiri</option>
                                        </select>
                                </form>
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
                                <a href="/cobankdetail">
							        <button
                                        className="btn w-100"
                                        onClick={handleSubmit}
                                        style={{ backgroundColor: "#ef7a53", color: "#f5f2ed" }}>
                                        Lanjutkan
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

export default COBank;
