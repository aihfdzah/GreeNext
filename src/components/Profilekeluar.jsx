import { useNavigate } from "react-router-dom";
import axios from "axios";
import profile from "../assets/profile.png";
const Profilekeluar = () => {
	const navigate = useNavigate();

	const logoutUser = async () => {
		try {
			const response = axios.post('http://localhost:5000/api/v1/auth/logout', {},{
				withCredentials:true // include cookie.
			})
	
			if((await response).status == 200){
				console.log(response.data);
				alert('Logout successfully!')
				navigate('/')
				console.log('masuk sini kah?')
			}
			
		} catch (error) {
			console.error('Log Out Error!', error.message)
			alert("Failed to logout")
		}
	}

	return (
		<div
			className="container-profile"
			id="profilekeluar"
			style={{padding:"0rem 4rem"}}>
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
				<h1>Keluar Akun</h1>
				<h2>Untuk keluar dari akun yang anda gunakan saat ini</h2>
				<hr />

				<div className="logout-confirmation" style={{ padding: "22%" }}>
					<p>
						<strong>Apakah Anda yakin untuk keluar dari akun?</strong>
					</p>

					<p>Kami akan menunggu Anda kembali ke FarmEduZ!</p>

					<div className="button-group">
						<button className="cancel-button">Batal</button>
						<button className="logout-button">
						<a onClick={logoutUser} >Keluar</a>
							</button>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Profilekeluar;
