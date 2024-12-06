import profile from "../assets/profile.png";
import { useNavigate } from "react-router-dom";

const Profileprivasi = () => {
	const navigate = useNavigate(); // Menambahkan useNavigate untuk navigasi

	return (
		<div
			className="container"
			id="profileprivasi"
			style={{ marginBottom: "24%" }}>
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
				<h1>Privasi</h1>
				<p>Ubah pengaturan privasi anda di sini</p>
				<hr />

				<div className="privacy-settings">
					<h2>Pengaturan halaman profil</h2>

					<div className="setting-item">
						<input type="checkbox" className="toggle-switch" />
						<label> Tampilkan profil anda ke pengguna FarmEduZ lainnya</label>
					</div>

					<div className="setting-item">
						<input type="checkbox" className="toggle-switch" />
						<label>Perlihatkan kursus yang anda ikuti di halaman anda</label>
					</div>
					<button className="save-button">Simpan Perubahan</button>
				</div>
			</div>
		</div>
	);
};

export default Profileprivasi;
