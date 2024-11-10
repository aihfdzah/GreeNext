import React from "react";

const Detailebook = () => {
    return (
        <div className="container">
            <main className="book-detail">
                <div className="back-button">
                    <button>&larr;</button>
                </div>

                <div className="content">
                    <div className="left-section">
                        <h2>Pemuliaan Tanaman Modern</h2>
                        <div className="book-image">
                            <img src="./bioteknologi pertanian.jpg" alt="Pemuliaan Tanaman Modern"/>
                            <div className="favorite">
                                <button>&hearts;</button>
                            </div>
                        </div>
                        
                        <div className="author">Lestari Irene Putra, Badriah, Hari Gunawan, Devi Andriani, Mujahiddah Jannah, Indah Fitriati, Siti Sari Pramita Sari, Niqsani Tann, Jumrah, Muhammad Lu’bis</div>
                        <div className="buttons">
                            <button className="read-button">Baca buku</button>
                            <button className="buy-button">Beli buku</button>
                        </div>
                    </div>

                    <div className="right-section">
                        <h3>Deskripsi Singkat</h3>
                        <p>
                            Buku <strong>Pemuliaan Tanaman Modern</strong> menjelaskan teknik dan metode pemuliaan tanaman terkini yang dirancang untuk meningkatkan kualitas dan produktivitas tanaman melalui pendekatan ilmiah. Buku ini mencakup dasar-dasar genetika, teknik persilangan, seleksi tanaman, hingga penerapan bioteknologi untuk mencapai hasil yang lebih unggul dan tahan terhadap berbagai kondisi lingkungan.
                        </p>

                        <div className="progress-section">
                            <span>0 hal</span>
                            <div className="progress-bar">
                                <div className="progress" style="width: 1%;"></div>
                            </div>
                            <span>1% selesai</span>
                        </div>
                    </div>
                </div>
            </main>

        </div>


    );
};

export default Detailebook;
