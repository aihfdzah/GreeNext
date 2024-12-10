import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Admin.css";
import { useState } from "react";

function KelasAdmin() {
	const navigate = useNavigate();

	const [kelas, setKelas] = useState([
		{
			id: 1,
			name: "Pemrograman Dasar",
			level: "Mudah",
			hours: 20,
			status: "Active",
		},
		{
			id: 2,
			name: "Analisis Data",
			level: "Menengah",
			hours: 30,
			status: "Active",
		},
		{
			id: 3,
			name: "Pengembangan AI",
			level: "Sulit",
			hours: 40,
			status: "Inactive",
		},
	]);

	const [searchTerm, setSearchTerm] = useState("");
	const [sidebarOpen, setSidebarOpen] = useState(true);
	const [activeItem, setActiveItem] = useState("kelasadmin"); // Menyimpan item yang aktif

	// Fungsi untuk mengubah item yang aktif
	const handleMenuClick = (item) => {
		setActiveItem(item);
	};

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	// Fungsi Tambah Kelas
	const handleAddNew = () => {
		navigate("/kelasadmindetail", { state: null }); // Tanpa data kelas
	};

	// Fungsi Edit Kelas
	const handleEditKelas = (kelasItem) => {
		navigate("/kelasadmindetail", { state: kelasItem }); // Kirim data kelas
	};

	const handleDeleteKelas = (kelasId) => {
		setKelas(kelas.filter((k) => k.id !== kelasId));
	};

	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
	};

	const filteredKelas = kelas.filter((k) =>
		k.name.toLowerCase().includes(searchTerm.toLowerCase())
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
								href="*"
								className={`text-white text-decoration-none d-flex align-items-center sidebar-link ${
									activeItem === "profile" ? "active" : ""
								}`}
								onClick={() => handleMenuClick("profile")}>
								<i className="bi bi-person me-2"></i> Profile
							</a>
						</li>
						<li className="mb-3">
							<a
								href="/user"
								className={`text-white text-decoration-none d-flex align-items-center sidebar-link ${
									activeItem === "user" ? "active" : ""
								}`}
								onClick={() => handleMenuClick("user")}>
								<i className="bi bi-people me-2"></i> Pengguna
							</a>
						</li>
						<li className="mb-3">
							<a
								href="/admin"
								className={`text-white text-decoration-none d-flex align-items-center sidebar-link ${
									activeItem === "admin" ? "active" : ""
								}`}
								onClick={() => handleMenuClick("admin")}>
								<i className="bi bi-tools me-2"></i> Admin
							</a>
						</li>
						<li className="mb-3">
							<a
								href="/kelasadmin"
								className={`text-white text-decoration-none d-flex align-items-center sidebar-link ${
									activeItem === "kelasadmin" ? "active" : ""
								}`}
								onClick={() => handleMenuClick("kelasadmin")}>
								<i className="bi bi-folder2-open me-2"></i> Kelas
							</a>
						</li>
						<li className="mb-3">
							<a
								href="#"
								className={`text-white text-decoration-none d-flex align-items-center sidebar-link ${
									activeItem === "webinar" ? "active" : ""
								}`}
								onClick={() => handleMenuClick("webinar")}>
								<i className="bi bi-list-task me-2"></i> Webinar
							</a>
						</li>
						<li className="mb-3">
							<a
								href="#"
								className={`text-white text-decoration-none d-flex align-items-center sidebar-link ${
									activeItem === "ebook" ? "active" : ""
								}`}
								onClick={() => handleMenuClick("ebook")}>
								<i className="bi bi-clock-history me-2"></i> Ebook
							</a>
						</li>
						<li className="mb-3">
							<a
								href="#"
								className={`text-white text-decoration-none d-flex align-items-center sidebar-link ${
									activeItem === "groupchat" ? "active" : ""
								}`}
								onClick={() => handleMenuClick("groupchat")}>
								<i className="bi bi-chat me-2"></i> Group Chats
							</a>
						</li>
						<li>
							<a
								href="#"
								className={`text-white text-decoration-none d-flex align-items-center sidebar-link ${
									activeItem === "reports" ? "active" : ""
								}`}
								onClick={() => handleMenuClick("reports")}>
								<i className="bi bi-bar-chart me-2"></i> Reports
							</a>
						</li>
					</ul>
				</nav>
			)}

			<div className="content-admin flex-grow-1">
				<header
					className="d-flex justify-content-between align-items-center py-3 px-4 shadow-sm"
					style={{ backgroundColor: "#f5f2ed" }}>
					<h5 className="mb-0">Kelas</h5>
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
					<div className="d-flex justify-content-between align-items-center my-4">
						<button className="btn btn-primary" onClick={handleAddNew}>
							Tambah Kelas
						</button>
					</div>

					<div className="mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="Cari kelas..."
							value={searchTerm}
							onChange={handleSearch}
						/>
					</div>

					<table className="table table-striped">
						<thead>
							<tr>
								<th>Nama Kelas</th>
								<th>Kesulitan</th>
								<th>Jam Belajar</th>
								<th>Status</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{filteredKelas.map((k) => (
								<tr key={k.id}>
									<td>{k.name}</td>
									<td>{k.level}</td>
									<td>{k.hours}</td>
									<td>
										<span
											className={`badge ${
												k.status === "Active" ? "bg-success" : "bg-danger"
											}`}>
											{k.status}
										</span>
									</td>
									<td>
										<button
											className="btn btn-sm btn-outline-secondary me-2"
											onClick={() => handleEditKelas(k)}>
											Edit
										</button>
										<button
											className="btn btn-sm btn-outline-danger"
											onClick={() => handleDeleteKelas(k.id)}>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default KelasAdmin;
