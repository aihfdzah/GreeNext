import React from "react";
import NavbarWeb from '../components/NavbarWeb'
import Ebook from '../pages/Ebook'

const Detailebook = () => {
    return (
        <> <NavbarWeb />
        <div className="container">
            <main className="book-detail">
                <div className="back-button">
                    <button>&larr;</button>
                </div>

                <div className="content">
                    <div className="left-section">
                        <h2>Bioteknologi Pertanian</h2>
                        <div className="book-image">
                            <img src="./bioteknologi pertanian.jpg" alt=""/>
                            <div className="favorite">
                                <button>&hearts;</button>
                            </div>
                        </div>

                        <div className="author">Esna Dilli Novianto, Erma Suryanti, Indriati Husain, Fitri Yulianti, Rosminah, Muhammad Abdul Aziz,
                                                Silvia Permata Sari, Sri Suryaningsih Djunu, Juniaty Arruan Bulawan, Indah Apriliya, Muhammad Isra, 
                                                Syamsul Bahri</div>
                        <div className="buttons">
                            <button className="read-button">Baca buku</button>
                            <button className="buy-button">Beli buku</button>
                        </div>
                    </div>

                    <div className="right-section">
                        <h3>Deskripsi Singkat</h3>
                        <p>
                            Buku <strong>Bioteknologi</strong> adalah disiplin ilmu yang merupakan cabang dari biologi, 
                            yang fokus utamanya adalah pada penerapan teknologi untuk memanfaatkan makhluk hidup—baik itu mikroorganisme, tumbuhan, maupun hewan—dalam berbagai proses 
                            yang bertujuan untuk menghasilkan produk, baik berupa barang maupun jasa, yang dirancang untuk meningkatkan kualitas hidup manusia secara keseluruhan. 
                            Cabang ilmu ini tidak hanya mencakup aspek tradisional yang telah digunakan selama berabad-abad, seperti fermentasi dan pemuliaan tanaman, 
                            tetapi juga telah berkembang pesat dengan masuknya bioteknologi modern yang melibatkan teknik-teknik canggih seperti rekayasa genetika, kultur jaringan, 
                            dan penggunaan enzim dalam industri. integral dari budaya, kepercayaan, dan kehidupan sehari-hari manusia.
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
        </>


    );
};

export default Detailebook;
