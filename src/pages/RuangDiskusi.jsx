import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const StudiKasusDetail = () => {
	return (
		<>
			<Navbar />
			<div className="container">
                <div class="discussion-room">
                    <div class="header-left">
                        <img src="foto3.jpg" alt="Pertanian Presisi"/>

                        <div class="header-content-right">
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
                            <button class="reply-btn">Balas Komentar</button>
                            <button class="close-btn">×</button>
                        </div>
                        <div class="comment">
                            <p class="username">@DigitalFarm_Cecep</p>
                            <p>
                            Penting juga bagi petani untuk tahu cara membaca hasil dari
                            sensor atau aplikasi yang dipakai. Percuma ada teknologi kalau
                            tidak ada edukasi. Semoga format/fasilitas bisa bantu menyebarkan
                            pengetahuan ini ke komunitas!
                            </p>
                            <button class="reply-btn">Balas Komentar</button>
                            <button class="close-btn">×</button>
                        </div>
                        <div class="comment">
                            <p class="username">@Tania.FarmExpert247</p>
                            <p>
                            Pertanian presisi memang memberikan hasil yang bagus, tapi
                            butuh dukungan akses yang merata. Bagaimana menurut teman-teman,
                            apa cukup dengan sensor saja atau juga perlu alat lainnya?
                            </p>
                            <button class="reply-btn">Balas Komentar</button>
                            <button class="close-btn">×</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
		</>
	);
};

export default StudiKasusDetail;
