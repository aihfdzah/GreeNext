import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Admin.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
function Admin() {
	const [admins, setAdmins] = useState([]); // Data admin dari API
	const [loading, setLoading] = useState(false); // State untuk loading
	const [error, setError] = useState(null); // State untuk error
	const [search, setSearch] = useState(""); // State untuk pencarian
	const [sidebarOpen, setSidebarOpen] = useState(true); // State untuk sidebar
	const [activeItem, setActiveItem] = useState("admin"); // Item aktif pada sidebar

	useEffect(() => {
		// Fungsi untuk mengambil data admin dari API
		const fetchAdmins = async () => {
			setLoading(true);
			setError(null);
			try {
				const response = await axios.get("https://greenext-server-production.up.railway.app/api/v1/admin");
				setAdmins(response.data.data);
			} catch (err) {
				console.error("Error fetching admin data:", err.message);
				setError("Gagal memuat data admin. Silakan coba lagi nanti.");
			} finally {
				setLoading(false);
			}
		};

		fetchAdmins();
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Spinner />;
	}

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	const handleMenuClick = (item) => {
		setActiveItem(item);
	};

	const handleSearchChange = (e) => {
		setSearch(e.target.value);
	};

	// Filter data berdasarkan kata kunci pencarian
	const filteredAdmins = admins.filter(
		(admin) =>
			admin.username.toLowerCase().includes(search.toLowerCase()) ||
			admin.email.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="d-flex">
			{/* Sidebar */}
			{sidebarOpen && (
				<nav className="sidebar-admin">
					<div className="p-4">
						<h4 className="text-white">
							FarmEdu<span style={{ color: "#ef7a53" }}>Z</span> Admin
						</h4>
					</div>
					<ul className="list-unstyled px-3">
						<li className="mb-3">
							<a
								href="/dashboardadmin"
								className={`text-white text-decoration-none d-flex align-items-center sidebar-link ${
									activeItem === "dashboard" ? "active" : ""
								}`}
								onClick={() => handleMenuClick("dashboard")}>
								<i className="fa fa-dashboard me-2"></i> Dashboard
							</a>
						</li>
						<li className="mb-3">
							<a
								href="/profileadmin"
								className={`text-white text-decoration-none d-flex align-items-center sidebar-link ${
									activeItem === "profile" ? "active" : ""
								}`}
								onClick={() => handleMenuClick("profile")}>
								<i className="fa fa-user me-2"></i> Profile
							</a>
						</li>
						<li className="mb-3">
							<a
								href="/user"
								className={`text-white text-decoration-none d-flex align-items-center sidebar-link ${
									activeItem === "user" ? "active" : ""
								}`}
								onClick={() => handleMenuClick("user")}>
								<i className="fa fa-users me-2"></i> Pengguna
							</a>
						</li>
						<li className="mb-3">
							<a
								href="/admin"
								className={`text-white text-decoration-none d-flex align-items-center sidebar-link ${
									activeItem === "admin" ? "active" : ""
								}`}
								onClick={() => handleMenuClick("admin")}>
								<i className="fa fa-cogs me-2"></i> Admin
							</a>
						</li>
						<li className="mb-3">
							<a
								href="/kelasadmin"
								className={`text-white text-decoration-none d-flex align-items-center sidebar-link ${
									activeItem === "kelasadmin" ? "active" : ""
								}`}
								onClick={() => handleMenuClick("kelasadmin")}>
								<i className="fa fa-folder-open me-2"></i> Kelas
							</a>
						</li>
						<li className="mb-3">
							<a
								href="#"
								className={`text-white text-decoration-none d-flex align-items-center sidebar-link ${
									activeItem === "webinar" ? "active" : ""
								}`}
								onClick={() => handleMenuClick("webinar")}>
								<i className="fa fa-tasks me-2"></i> Webinar
							</a>
						</li>
						<li className="mb-3">
							<a
								href="#"
								className={`text-white text-decoration-none d-flex align-items-center sidebar-link ${
									activeItem === "ebook" ? "active" : ""
								}`}
								onClick={() => handleMenuClick("ebook")}>
								<i className="fa fa-book me-2"></i> Ebook
							</a>
						</li>
						<li>
							<a
								className={`text-white text-decoration-none d-flex align-items-center sidebar-link ${
									activeItem === "logout" ? "active" : ""
								}`}
								onClick={(e) => {
									e.preventDefault();
									if (window.confirm("Apakah Anda yakin ingin keluar?")) {
										handleMenuClick("logout");
										window.location.href = "/";
									}
								}}>
								<i className="fa fa-sign-out me-2"></i> Logout
							</a>
						</li>
					</ul>
				</nav>
			)}

			{/* Content */}
			<div className="content-admin flex-grow-1">
				<header
					className="d-flex justify-content-between align-items-center py-3 px-4 shadow-sm"
					style={{ backgroundColor: "#f5f2ed" }}>
					<h5 className="mb-0">Daftar Admin</h5>
					<div className="d-flex align-items-center">
						<img
							src="https://via.placeholder.com/40"
							alt="Profile"
							className="rounded-circle"
						/>
						<button
							className="btn btn-outline-primary ms-3"
							onClick={toggleSidebar}>
							{sidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
						</button>
					</div>
				</header>

				<div className="container-admin mt-4 px-4">
					{/* Input Pencarian */}
					<div className="mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="Cari admin..."
							value={search}
							onChange={handleSearchChange}
						/>
					</div>

					{loading ? (
						<div className="text-center my-5">
							<div className="spinner-border" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
					) : error ? (
						<div className="alert alert-danger" role="alert">
							{error}
						</div>
					) : (
						<table className="table table-striped">
							<thead>
								<tr>
									<th>Nama Admin</th>
									<th>Email</th>
								</tr>
							</thead>
							<tbody>
								{filteredAdmins.length > 0 ? (
									filteredAdmins.map((admin) => (
										<tr key={admin.id}>
											<td>{admin.username}</td>
											<td>{admin.email}</td>
										</tr>
									))
								) : (
									<tr>
										<td colSpan="2" className="text-center">
											Tidak ada admin yang ditemukan.
										</td>
									</tr>
								)}
							</tbody>
						</table>
					)}
				</div>
			</div>
		</div>
	);
}

export default Admin;
