import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WebinarPayment = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				{/* <-- Payment Form Section --> */}
				<div className="form-section">
					<h2>Pembayaran Pendaftaran Webinar</h2>
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
						<label for="expiry-date">Nama Depan</label>
						<input type="text" id="expiry-date" placeholder="nama depan"></input>
					</div>

					<div className="input-group">
						<label for="cvv">Nama Belakang</label>
						<input type="text" id="cvv" placeholder="nama belakang"></input>
					</div>
                    
					<div className="input-group">
						<label for="card-number">Alamat Email</label>
						<input
							type="text"
							id="card-number"
							placeholder="example@gmail.com"></input>
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

export default WebinarPayment;
