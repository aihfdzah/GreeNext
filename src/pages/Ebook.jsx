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
                        Pertanian Era Digital</div>

                    <div className="book-card"><img src="./inovasi agribisnis.jpg" alt="" />
                        Pengembangan Pertanian Presisi</div>

                    <div className="book-card"><img src="./manajemen agroindustri.jpg" alt="" />
                        Agronomi</div>

                    <div className="book-card"><img src="./pertanian berkelanjutan.jpg" alt="" />
                        Sistem Pertanian Presisi</div>

                    <div className="book-card"><img src="./pertanian masa depan.jpg" alt="" />
                        Agroteknologi Modern</div>

                    <div className="book-card"><img src="./pertanian postmodern.jpg" alt="" />
                        Hortikultura</div>

                    <div className="book-card"><img src="./produktivitas tanama pertanian.jpg" alt="" />
                        Pemuliaan Tanaman Modern</div>

                    <div className="book-card"><img src="./tanaman modern.jpg" alt="" />
                        Inovasi Dalam Agribisnis</div>

                    <div className="book-card"><img src="./teknologi.jpg" alt="" />
                        Pertanian Keberlanjutan</div>
                        
                    <div className="book-card"><img src="./pertanian 4.0.jpg" alt="" />
                        Pertanian Postmodern</div>
                </div>

                <div className="progress-list">
                    <div className="progress-item">
                        <img src="agronomi-icon.png" className="icon"/>
                        <span className="title">Agronomi</span>
                        <span className="pages">10 hal</span>
                        <div className="progress-bar">
                            <div className="progress" style="width: 5%;"></div>
                        </div>
                        <span className="progress-percentage">5% selesai</span>
                    </div>

                    <div className="progress-item">
                        <img src="pemuliaan-icon.png" className="icon"/>
                        <span className="title">Pemuliaan Tanaman Modern</span>
                        <span className="pages">35 hal</span>
                        <div className="progress-bar">
                            <div className="progress" style="width: 25%;"></div>
                        </div>
                        <span className="progress-percentage">25% selesai</span>
                    </div>

                    <div className="progress-item">
                        <img src="pertanian-icon.png" className="icon"/>
                        <span className="title">Pertanian Era Digital</span>
                        <span className="pages">50 hal</span>
                        <div className="progress-bar">
                            <div className="progress" style="width: 15%;"></div>
                        </div>
                        <span className="progress-percentage">15% selesai</span>
                    </div>
                </div>
            </main>
        </div>

        
    );
};

export default Ebook;