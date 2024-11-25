import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const StudiKasusDetail = () => {
	return (
		<>
			<Navbar />
			<div className="container">
                <div class="discussion-room">
                    <div class="header">
                        <img src="foto2.jpg" alt="Pertanian Presisi"/>

                        <div class="header-content">
                            <h1>PENERAPAN PERTANIAN PRESISI</h1>
                            <p>(PRECISION AGRICULTURE)</p>

                            <div class="stats">
                                <span>253 Disukai</span>
                                <span>3 Komentar</span>
                                <span>87 Dibagikan</span>
                            </div>
                        </div>
                    </div>

                    <div class="comments">
                        <div class="comment">
                            <p class="username">@AgriTech_Santoso</p>
                            <p>
                            Menurut saya, pertanian presisi bisa jadi solusi ideal untuk
                            meningkatkan lahan kecil dengan produktivitas tinggi. Namun,
                            tantangan terbesar saat ini adalah biaya teknologi yang masih
                            cukup tinggi. Mungkin kita bisa mulai dengan sensor sederhana
                            dulu?
                            </p>
                        </div>

                        <div class="comment-section">
                                <input
                                    type="text"
                                    class="comment-input"
                                    placeholder="Tuliskan Balasan Komentar Anda Disini ..."
                                />
                                <button class="comment-button">Kirim</button>
                            </div>

                    </div>
                </div>
            </div>
            <Footer />
		</>
	);
};

export default StudiKasusDetail;
