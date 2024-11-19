import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.png";
const Profile = () => {
	const navigate = useNavigate();

	return (
		<div className="container" id="profile" style={{ marginBottom: "35%" }}>
			<div className="sidebar">
				<img src={profile} alt="Profile Picture" />
				<h3>Wahyu Rojolele</h3>
				<p>@wahyurojolele123</p>

				<div className="button-sidebar">
					<button onClick={() => navigate("/profile")}>Profil</button>
				</div>

				<div className="button-sidebar">
					<button onClick={() => navigate("/fotoprofile")}>Foto</button>
				</div>

				<div className="button-sidebar">
					<button onClick={() => navigate("/pemberitahuan")}>
						Pemberitahuan
					</button>
				</div>

				<div className="button-sidebar">
					<button onClick={() => navigate("/privasi")}>Privasi</button>
				</div>

				<div className="button-sidebar">
					<button onClick={() => navigate("/keamananprofile")}>Keamanan</button>
				</div>

				<div className="button-sidebar">
					<button onClick={() => navigate("/keluar")}>Keluar Akun</button>
				</div>
			</div>

			<div className="profile-content">
				<h1>Profil Publik</h1>
				<h2>Tambahkan Informasi Tentang Diri Anda</h2>

				<form>
					<div className="form-row">
						<div className="form-group">
							<label>Nama Depan</label>
							<input type="text" value="Wahyu" readOnly></input>
						</div>

						<div className="form-group">
							<label>Nama Belakang</label>
							<input type="text" value="Rojolele" readOnly></input>
						</div>
					</div>

					<div className="form-group">
						<label>Nama Akun</label>
						<input type="text" value="@wahyurojolele123" readOnly></input>
					</div>

					<div className="form-group">
						<label>Profesi</label>
						<input type="text" value="Penyuluh Pertanian" readOnly></input>
					</div>

					<div className="form-row">
						<div className="form-group">
							<label>Pendidikan Terakhir</label>
							<input
								type="text"
								value="Sekolah Menengah Kejuruan (SMK)"
								readOnly></input>
						</div>

						<div className="form-group">
							<label>Jurusan</label>
							<input type="text" value="Agribisnis Tanaman" readOnly></input>
						</div>
					</div>

					<div className="form-row">
						<div className="form-group">
							<label>Tanggal Lahir</label>
							<input type="date" value="1988-07-25" readOnly></input>
						</div>
						<div className="form-group">
							<label>Jenis Kelamin</label>
							<input type="text" value="Laki - Laki" readOnly></input>
						</div>
					</div>

					<div className="form-group">
						<label>Kabupaten / Kota</label>
						<input type="text" value="Kab. Sleman" readOnly></input>
					</div>

					<div className="form-group">
						<label>Provinsi</label>
						<input
							type="text"
							value="Daerah Istimewa Yogyakarta (DIY)"
							readOnly></input>
					</div>

					<div className="form-group">
						<label>Kontak Personal</label>
						<input type="text" value="085692777510" readOnly></input>
					</div>

					<div className="form-group">
						<label>Social Media</label>
						<input type="text" value="http://twitter.com" readOnly></input>
						<input
							type="text"
							value="http://www.facebook.com/"
							readOnly></input>
						<input
							type="text"
							value="http://www.linkedin.com/"
							readOnly></input>
						<input type="text" value="http://www.youtube.com/" readOnly></input>
						<input
							type="text"
							value="http://www.instagram.com/"
							readOnly></input>
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
