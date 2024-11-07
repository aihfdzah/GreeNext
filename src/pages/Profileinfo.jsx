import React from "react"

const Profileinfo = () => {
    return (
        <div className="container" id="profileinfo">
            <div className="sidebar">
                <img src="./profile.png" alt="Profile Picture"/>
                <h3>Wahyu Redioko</h3>
                <p>@wahyuredioko123</p>
                <div className="button-sidebar">
                    <button>Profil</button>
                </div>

                <div className="button-sidebar">
                    <button>Foto</button>
                </div>

                <div className="button-sidebar">
                    <button>Pemberitahuan</button>
                </div>

                <div className="button-sidebar">
                    <button>Privasi</button>
                </div>

                <div className="button-sidebar">
                    <button>Keamanan</button>
                </div>

                <div className="button-sidebar">
                    <button>Keluar Akun</button>
                </div>
            </div>

            <main className="content">
                <h1>Pemberitahuan</h1>
                <p>Kelola pesan notifikasi yang Anda terima</p>
                <hr/>
            <div className="tabs">
                <button className="tab active">Belum Dibaca</button>
                <button className="tab">Sudah Dibaca</button>
            </div>

            <div className="notifications">
                <div className="notification-card">
                    <h2>Dapatkan Diskon 20% untuk Semua Course di FarmEduZ!</h2>
                    <p>Isi sesuatu belajar pertanian modern dengan harga spesial! Nikmati diskon 20% untuk semua course di platform edukasi pertanian FarmEduZ!</p>
                    <button className="open-button">Buka</button>
                </div>

                <div className="notification-card">
                    <h2>Notifikasi Terbaru dari FarmEduZ!</h2>
                    <p>Hai! Kami punya kabar baik! Prof. Satria Wijaya akan mengisi dengan pengalaman ilmiah dari 20 tahun. Jangan lewatkan topik khusus kita...</p>
                    <button className="open-button">Buka</button>
                </div>
                
                <div className="notification-card">
                    <h2>Update FarmEduZ: Event Terbaru untuk Anda!</h2>
                    <p>Hai! Siapkan dirimu untuk webinar eksklusif bersama Dr. Arifin Susanto di pertanian digital di Indonesia!</p>
                    <button className="open-button">Buka</button>
                </div>
            </div>
        </main>

        </div>


    );
};

export default Profileinfo;