import React from "react";

const Profilekeamanan = () => {
    return (
        <div className="container" id="profilekeamanan">
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
                <h1>Akun</h1>
                <p>Edit pengaturan akun dan ubah sandi Anda di sini</p>
                <hr/>
                
                <div className="account-settings">
                    <div className="email-section">
                        <label for="email">Email Terdaftar:</label>
                        <input type="email" id="email" value="wahyurajabie123@gmail.com" disabled></input>
                        <button className="action-button">Ubah Email</button>
                    </div>

                    <div className="password-section">
                        <label for="current-password">Sandi:</label>
                        <input type="password" id="current-password" placeholder="Masukkan sandi saat ini"></input>
                        <input type="password" id="new-password" placeholder="Masukkan sandi baru"></input>
                        <input type="password" id="confirm-password" placeholder="Ketik ulang sandi baru"></input>
                        <button className="action-button">Ubah Sandi</button>
                    </div>
                    <button className="save-button">Simpan Perubahan</button>
                </div>
            </main>

        </div>


    );
};

export default Profilekeamanan;