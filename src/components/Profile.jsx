const Profile = () => {
	return (
		<div className="container" id="profile">
			<div className="sidebar">
				<img src="./profile.png" alt="Profile Picture" />
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

			<div className="profile-content">
				<h1>Profil Publik</h1>
				<h2>Tambahkan Informasi Tentang Diri Anda</h2>

				<form>
					<div className="form-row">
						<div className="form-group">
							<label>Nama Depan</label>
							<input type="text" value="Wahyu"></input>
						</div>

						<div className="form-group">
							<label>Nama Belakang</label>
							<input type="text" value="Redioko"></input>
						</div>
					</div>

					<div className="form-group">
						<label>Nama Akun</label>
						<input type="text" value="@wahyuredioko123"></input>
					</div>

					<div className="form-group">
						<label>Profesi</label>
						<input type="text" value="Penyuluh Pertanian"></input>
					</div>

					<div className="form-row">
						<div className="form-group">
							<label>Pendidikan Terakhir</label>
							<input
								type="text"
								value="Sekolah Menengah Kejuruan (SMK)"></input>
						</div>

						<div className="form-group">
							<label>Jurusan</label>
							<input type="text" value="Agribisnis Tanaman"></input>
						</div>
					</div>

					<div className="form-row">
						<div className="form-group">
							<label>Tanggal Lahir</label>
							<input type="date" value="1988-07-25"></input>
						</div>
						<div className="form-group">
							<label>Jenis Kelamin</label>
							<input type="text" value="Laki - Laki"></input>
						</div>
					</div>

					<div className="form-group">
						<label>Kabupaten / Kota</label>
						<input type="text" value="Kab. Sleman"></input>
					</div>

					<div className="form-group">
						<label>Provinsi</label>
						<input type="text" value="Daerah Istimewa Yogyakarta (DIY)"></input>
					</div>

					<div className="form-group">
						<label>Kontak Personal</label>
						<input type="text" value="085692777510"></input>
					</div>

					<div className="form-group">
						<label>Social Media</label>
						<input type="text" value="http://twitter.com"></input>
						<input type="text" value="http://www.facebook.com/"></input>
						<input type="text" value="http://www.linkedin.com/"></input>
						<input type="text" value="http://www.youtube.com/"></input>
						<input type="text" value="http://www.instagram.com/"></input>
					</div>

					<button type="submit" className="btn-save">
						Simpan Perubahan
					</button>
				</form>
			</div>
		</div>
	);
};

export default Profile;
