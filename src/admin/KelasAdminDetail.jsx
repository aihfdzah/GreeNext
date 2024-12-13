import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Admin.css";
import { useState } from "react";

function KelasAdminDetail() {
	// Menambahkan state untuk sidebar
	const [sidebarOpen, setSidebarOpen] = useState(true);
	const [formData, setFormData] = useState({
		name: "",
		description: "",
		level: "Mudah",
		price: "",
		status: "Active",
		cover: null,
		pdf: null,
	});

	const [activeItem, setActiveItem] = useState("kelasadmin"); // Menyimpan item yang aktif

	// Fungsi untuk mengubah item yang aktif
	const handleMenuClick = (item) => {
		setActiveItem(item);
	};

	// Fungsi untuk toggle sidebar
	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	const handleChange = (e) => {
		const { name, value, files } = e.target;
		setFormData({ ...formData, [name]: files ? files[0] : value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add logic here to handle the form data, e.g., send to an API or handle locally
		console.log(formData); // Output form data for now
	};

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
						<li className="mb-3">
							<a
								href="#"
								className={`text-white text-decoration-none d-flex align-items-center sidebar-link ${
									activeItem === "groupchat" ? "active" : ""
								}`}
								onClick={() => handleMenuClick("groupchat")}>
								<i className="fa fa-comments me-2"></i> Group Chats
							</a>
						</li>
						<li>
							<a
								href="#"
								className={`text-white text-decoration-none d-flex align-items-center sidebar-link ${
									activeItem === "logout" ? "active" : ""
								}`}
								onClick={() => handleMenuClick("logout")}>
								<i className="fa fa-sign-out me-2"></i> Logout
							</a>
						</li>
					</ul>
				</nav>
			)}

			<div className="content-admin flex-grow-1">
				<header
					className="d-flex justify-content-between align-items-center py-3 px-4 shadow-sm"
					style={{ backgroundColor: "#f5f2ed" }}>
					<h5 className="mb-0">Kelas Detail</h5>
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
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label className="form-label">Nama Kelas</label>
							<input
								type="text"
								className="form-control"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="mb-3">
							<label className="form-label">Deskripsi Kelas</label>
							<textarea
								className="form-control"
								name="description"
								value={formData.description}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="mb-3">
							<label className="form-label">Kesulitan</label>
							<select
								className="form-select"
								name="level"
								value={formData.level}
								onChange={handleChange}
								required>
								<option value="Mudah">Mudah</option>
								<option value="Menengah">Menengah</option>
								<option value="Sulit">Sulit</option>
							</select>
						</div>
						<div className="mb-3">
							<label className="form-label">Harga</label>
							<input
								type="number"
								className="form-control"
								name="price"
								value={formData.price}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="mb-3">
							<label className="form-label">Status</label>
							<select
								className="form-select"
								name="status"
								value={formData.status}
								onChange={handleChange}
								required>
								<option value="Active">Active</option>
								<option value="Inactive">Inactive</option>
							</select>
						</div>
						<div className="mb-3">
							<label className="form-label">Cover Kelas</label>
							<input
								type="file"
								className="form-control"
								name="cover"
								onChange={handleChange}
								accept="image/*"
							/>
						</div>
						<div className="mb-3">
							<label className="form-label">Materi PDF</label>
							<input
								type="file"
								className="form-control"
								name="pdf"
								onChange={handleChange}
								accept=".pdf"
							/>
						</div>
						<div className="mb-3">
							<button type="submit" className="btn btn-primary">
								Simpan Kelas
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default KelasAdminDetail;
