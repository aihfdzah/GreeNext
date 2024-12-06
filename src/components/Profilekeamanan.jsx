import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.png";

const Profilekeamanan = () => {
	const navigate = useNavigate();

	return (
		<div className="container" id="profilekeamanan">
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

			<main className="profile-content">
				<h1>Akun</h1>
				<p>Edit pengaturan akun dan ubah sandi Anda di sini</p>
				<hr />

				<div className="account-settings">
					<div className="email-section">
						<label for="email">Email Terdaftar:</label>
						<input
							type="email"
							id="email"
							value="wahyurajabie123@gmail.com"
							disabled></input>
						<button className="action-button">Ubah Email</button>
					</div>

					<div className="password-section">
						<label for="current-password">Sandi:</label>
						<input
							type="password"
							id="current-password"
							placeholder="Masukkan sandi saat ini"></input>
						<input
							type="password"
							id="new-password"
							placeholder="Masukkan sandi baru"></input>
						<input
							type="password"
							id="confirm-password"
							placeholder="Ketik ulang sandi baru"></input>
						<button className="action-button">Ubah Sandi</button>
					</div>
					<button className="save-button">Simpan Perubahan</button>
				</div>
			</main>
		</div>
	);
};

export default Profilekeamanan;

// PUNYA ALI
// import profile from "../assets/Profile.png";
// const Profilekeamanan = () => {
// 	const navigate = useNavigate();
// 	return (
// 		<div
// 			className="container"
// 			id="profilekeamanan"
// 			style={{ marginBottom: "23%" }}>
// 			<div className="sidebar">
// 				<img src={profile} alt="Profile Picture" />
// 				<h3>Wahyu Rojolele</h3>
// 				<p>@wahyurojolele123</p>

// 				<div className="button-sidebar">
// 					<button onClick={() => navigate("/profile")}>Profil</button>
// 				</div>

// 				<div className="button-sidebar">
// 					<button onClick={() => navigate("/fotoprofile")}>Foto</button>
// 				</div>

// 				<div className="button-sidebar">
// 					<button onClick={() => navigate("/pemberitahuan")}>
// 						Pemberitahuan
// 					</button>
// 				</div>

// 				<div className="button-sidebar">
// 					<button onClick={() => navigate("/privasi")}>Privasi</button>
// 				</div>

// 				<div className="button-sidebar">
// 					<button onClick={() => navigate("/keamanan")}>Keamanan</button>
// 				</div>

// 				<div className="button-sidebar">
// 					<button onClick={() => navigate("/keluar")}>Keluar Akun</button>
// 				</div>
// 			</div>

// 			<main className="content">
// 				<h1>Akun</h1>
// 				<p>Edit pengaturan akun dan ubah sandi Anda di sini</p>
// 				<hr />

// 				<div className="account-settings">
// 					<div className="email-section">
// 						<label form="email">Email Terdaftar:</label>
// 						<input
// 							type="email"
// 							id="email"
// 							value="wahyurajabie123@gmail.com"
// 							disabled></input>
// 						<button className="action-button">Ubah Email</button>
// 					</div>

// 					<div className="password-section">
// 						<label form="current-password">Sandi:</label>
// 						<input
// 							type="password"
// 							id="current-password"
// 							placeholder="Masukkan sandi saat ini"></input>
// 						<input
// 							type="password"
// 							id="new-password"
// 							placeholder="Masukkan sandi baru"></input>
// 						<input
// 							type="password"
// 							id="confirm-password"
// 							placeholder="Ketik ulang sandi baru"></input>
// 						<button className="action-button">Ubah Sandi</button>
// 					</div>
// 					<button className="save-button">Simpan Perubahan</button>
// 				</div>
// 			</main>
// 		</div>
// 	);
// };

// export default Profilekeamanan;
