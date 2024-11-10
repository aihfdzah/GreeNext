import profile from "../assets/profile.png";
const Profileprivasi = () => {
	return (
		<div className="container" id="profileinfo">
			<div className="sidebar">
				<img src={profile} alt="Profile Picture" />
				<h3>Wahyu Rojolele</h3>
				<p>@wahyurojolele123</p>
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

			<main class="content">
				<h1>Privasii</h1>
				<p>Ubah pengaturan privasi anda di sini</p>
				<hr />

				<div class="privacy-settings">
					<h2>Pengaturan halaman profil</h2>

					<div class="setting-item">
						<input type="checkbox" class="toggle-switch"></input>
						<label> Tampilkan profil anda ke pengguna FarmEduZ lainnya</label>
					</div>

					<div class="setting-item">
						<input type="checkbox" class="toggle-switch"></input>
						<label>Perlihatkan kursus yang anda ikuti di halaman anda</label>
					</div>
					<button class="save-button">Simpan Perubahan</button>
				</div>
			</main>
		</div>
	);
};

export default Profileprivasi;
