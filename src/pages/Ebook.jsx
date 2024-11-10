import React from "react";

const Ebook = () => {
    return (
        <div className="container">
            <main>
                <h1>E-book & Panduan</h1>
                <div className="search-bar">
                    <input type="text" placeholder="Cari e-book..."></input>
                </div>

                <div className="tabs">
                    <button className="tab active">Populer</button>
                    <button className="tab">Penjualan Teratas</button>
                    <button className="tab">Mengikuti</button>
                    <button className="tab">Baru</button>
                    <button className="tab">Next</button>
                </div>

                <div className="book-grid">
                    <div className="book-card"> <img src="./bioteknologi pertanian.jpg" alt="" />
                        Bioteknologi Pertania</div>

                    <div className="book-card"><img src="./inovasi agribisnis.jpg" alt="" />
                        Inovasi Agribisnis</div>

                    <div className="book-card"><img src="./manajemen agroindustri.jpg" alt="" />
                        Manajemen Agroindustri</div>

                    <div className="book-card"><img src="./pertanian berkelanjutan.jpg" alt="" />
                        Pertanian Berkelanjutan</div>

                    <div className="book-card"><img src="./pertanian masa depan.jpg" alt="" />
                        Pertanian Masa Depan</div>

                    <div className="book-card"><img src="./pertanian postmodern.jpg" alt="" />
                        Pertanian Postmodern</div>

                    <div className="book-card"><img src="./produktivitas tanama pertanian.jpg" alt="" />
                        Produktivitas Tanaman Pertanian</div>

                    <div className="book-card"><img src="./tanaman modern.jpg" alt="" />
                        Tanaman Modern</div>

                    <div className="book-card"><img src="./teknologi.jpg" alt="" />
                        Teknologi Pertanian</div>

                    <div className="book-card"><img src="./pertanian 4.0.jpg" alt="" />
                        Pertanian 4.0</div>
                </div>

                <div className="progress-list">
                    <div className="progress-item">
                        <img src="agronomi-icon.png" className="icon"/>
                        <span className="title">Agronomi</span>
                        <span className="pages">10 hal</span>
                        <div className="progress-bar">
                            <div className="progress" id="progress1"></div>
                        </div>
                        <span className="progress-percentage">5% selesai</span>
                    </div>

                    <div className="progress-item">
                        <img src="pemuliaan-icon.png" className="icon"/>
                        <span className="title">Pemuliaan Tanaman Modern</span>
                        <span className="pages">35 hal</span>
                        <div className="progress-bar">
                            <div className="progress" id="progress2"></div>
                        </div>
                        <span className="progress-percentage">25% selesai</span>
                    </div>

                    <div className="progress-item">
                        <img src="pertanian-icon.png" className="icon"/>
                        <span className="title">Pertanian Era Digital</span>
                        <span className="pages">50 hal</span>
                        <div className="progress-bar">
                            <div className="progress" id="progress3"></div>
                        </div>
                        <span className="progress-percentage">15% selesai</span>
                    </div>
                </div>
            </main>
        </div>

        
    );
};

export default Ebook;