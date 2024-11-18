import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EbookPayment = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				{/* <-- Payment Form Section --> */}
				<div className="form-section">
					<h2>Pembayaran E-book</h2>
					<div className="payment-options">
						<label>
							<input type="radio" name="payment" checked>
								{" "}
								Kartu
							</input>
						</label>
						<label>
							<input type="radio" name="payment">
								{" "}
								Transfer Bank
							</input>
						</label>
					</div>

					<div className="input-group">
						<label for="card-name">Nama Kartu</label>
						<input
							type="text"
							id="card-name"
							placeholder="Nama di kartu"></input>
					</div>

					<div className="input-group">
						<label for="card-number">Nomor Kartu</label>
						<input
							type="text"
							id="card-number"
							placeholder="1234 5678 9011 1213"></input>
					</div>

					<div className="input-group">
						<label for="expiry-date">Tanggal Kedaluwarsa</label>
						<input type="text" id="expiry-date" placeholder="MM/YY"></input>
					</div>

					<div className="input-group">
						<label for="cvv">CVC / CVV</label>
						<input type="text" id="cvv" placeholder="123"></input>
					</div>

					<div className="save-card">
						<input type="checkbox" id="save-card"></input>
						<label for="save-card">Simpan Detail Kartu</label>
					</div>
				</div>

				{/* -- Order Summary Section -- */}
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
					<button className="button">Lanjutkan</button>
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

export default EbookPayment;
