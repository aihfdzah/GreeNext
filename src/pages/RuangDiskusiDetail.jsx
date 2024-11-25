import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RuangDiskusi from "./RuangDiskusi";

const RuangDiskusiDetail = () => {
	return (
		<>
			<Navbar />
			<div className="container">
                <div className="discussion-room">
                    <div className="header">
                        <img src="foto2.jpg" alt="Pertanian Presisi"/>

                        <div className="header-content">
                            <h1>PENERAPAN PERTANIAN PRESISI</h1>
                            <p>(PRECISION AGRICULTURE)</p>

                            <div className="stats">
                                <span>253 Disukai</span>
                                <span>3 Komentar</span>
                                <span>87 Dibagikan</span>
                            </div>
                        </div>
                    </div>

                    <div className="comments">
                        <div className="comment">
                            <p className="username">@AgriTech_Santoso</p>
                            <p>
                            Menurut saya, pertanian presisi bisa jadi solusi ideal untuk
                            meningkatkan lahan kecil dengan produktivitas tinggi. Namun,
                            tantangan terbesar saat ini adalah biaya teknologi yang masih
                            cukup tinggi. Mungkin kita bisa mulai dengan sensor sederhana
                            dulu?
                            </p>
                        </div>

                        <div className="comment-section">
                                <input
                                    type="text"
                                    className="comment-input"
                                    placeholder="Tuliskan Balasan Komentar Anda Disini ..."
                                />
                                <button className="comment-button">Kirim</button>
                            </div>

                    </div>
                </div>
            </div>
            <Footer />
		</>
	);
};

export default RuangDiskusiDetail;
