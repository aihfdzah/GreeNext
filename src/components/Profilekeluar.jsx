const Profilekeluar = () => {
	return (
		<div className="container" id="profilekeamanan">
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
