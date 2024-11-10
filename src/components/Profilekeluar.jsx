import { useNavigate } from "react-router-dom";
import profile from "../assets/Profile.png";
const Profilekeluar = () => {
	const navigate = useNavigate();
	return (
		<div
			className="container"
			id="profilekeamanan"
			style={{ marginBottom: "25%" }}>
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
					<button onClick={() => navigate("/keamanan")}>Keamanan</button>
				</div>

				<div className="button-sidebar">
					<button onClick={() => navigate("/keluar")}>Keluar Akun</button>
				</div>
			</div>

			<main className="content">
				<h1>Keluar Akun</h1>
				<p>Untuk keluar dari akun yang anda gunakan saat ini</p>
				<hr />
				<div className="logout-confirmation">
					<p>
						<strong>Apakah Anda yakin untuk keluar dari akun?</strong>
					</p>
					<p>Kami akan menunggu Anda kembali ke FarmEduZ!</p>
					<div className="button-group">
						<button className="cancel-button">Batal</button>
						<button className="logout-button">Keluar</button>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Profilekeluar;
