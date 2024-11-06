import React from "react"

const Profilefoto = () => {
    return (
        <div className="container" id="profilefoto">
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

            <main className="content bg-white">
                <h1>Foto</h1>
                <p>Tambahkan foto Anda yang bagus untuk profil</p>
                <hr/>

                <div className="photo-preview"> Pratinjau Gambar
                    <div className="placeholder-icon"><i class="fa-regular fa-user"></i></div>
                </div>

                <div>
                    <label className="label">Tambah atau Ganti Gambar</label>

                    <div className="upload-control gap-10 align-items-center">
                        <input type="file" aria-label="Unggah gambar" id=""/>
                        {/* <input type="file" aria-label="Unggah Gambar" id="upload-photo" className="upload-input" value="Tidak ada gambar yang di pilih" style="widht: auto"></input> */}
                        {/* <input type="file" id="upload-photo" className="upload-input" value="Tidak ada gambar yang di pilih"></input> */}
                        <button className="upload-button gap-10" id="upload-button">Unggah Gambar</button>
                    </div>

                </div>
                    

                    
                    <button className="save-button">Simpan Perubahan</button>
                
            </main>
        </div>


    );
};

export default Profilefoto;