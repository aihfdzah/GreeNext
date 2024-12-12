import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Admin.css";
import { useState } from "react";

function Admin() {
	const [admins, setAdmins] = useState([
		{
			id: 1,
			name: "George Lindseth",
			mobile: "+44 315 29 62",
			email: "george@admin.com",
			status: "Active",
		},
		{
			id: 2,
			name: "Erik Dyer",
			mobile: "+21 345 46 25",
			email: "erik@admin.com",
			status: "Active",
		},
		{
			id: 3,
			name: "Michael Campbell",
			mobile: "+17 364 72 53",
			email: "michael@admin.com",
			status: "Inactive",
		},
	]);

	const [searchTerm, setSearchTerm] = useState("");
	const [sidebarOpen, setSidebarOpen] = useState(true);
	const [currentAdmin, setCurrentAdmin] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [activeItem, setActiveItem] = useState("admin"); // Menyimpan item yang aktif

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	// Fungsi untuk mengubah item yang aktif
	const handleMenuClick = (item) => {
		setActiveItem(item);
	};

	const handleAddNew = () => {
		setCurrentAdmin(null);
		setShowModal(true);
	};

	const handleEditAdmin = (admin) => {
		setCurrentAdmin(admin);
		setShowModal(true);
	};

	const handleDeleteAdmin = (adminId) => {
		setAdmins(admins.filter((admin) => admin.id !== adminId));
	};

	const handleSaveAdmin = (admin) => {
		if (admin.id) {
			setAdmins(admins.map((a) => (a.id === admin.id ? admin : a)));
		} else {
			const newAdmin = { ...admin, id: Date.now() };
			setAdmins([...admins, newAdmin]);
		}
		setShowModal(false);
	};

	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
	};

	const filteredAdmins = admins.filter((admin) =>
		admin.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleImport = () => {
		alert("Import functionality to be implemented.");
	};

	const handleExport = () => {
		alert("Export functionality to be implemented.");
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
					<h5 className="mb-0">Admin</h5>
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
							Tambah Admin
						</button>
						<div className="d-flex">
							<button
								className="btn btn-outline-secondary me-2"
								onClick={handleImport}>
								Import Admin
							</button>
							<button
								className="btn btn-outline-secondary"
								onClick={handleExport}>
								Export Admin
							</button>
						</div>
					</div>

					<div className="mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="Cari admin..."
							value={searchTerm}
							onChange={handleSearch}
						/>
					</div>

					<table className="table table-striped">
						<thead>
							<tr>
								<th>Nama Admin</th>
								<th>Telepon</th>
								<th>Email</th>
								<th>Status</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{filteredAdmins.map((admin) => (
								<tr key={admin.id}>
									<td>{admin.name}</td>
									<td>{admin.mobile}</td>
									<td>{admin.email}</td>
									<td>
										<span
											className={`badge ${
												admin.status === "Active" ? "bg-success" : "bg-danger"
											}`}>
											{admin.status}
										</span>
									</td>
									<td>
										<button
											className="btn btn-sm btn-outline-secondary me-2"
											onClick={() => handleEditAdmin(admin)}>
											Edit
										</button>
										<button
											className="btn btn-sm btn-outline-danger"
											onClick={() => handleDeleteAdmin(admin.id)}>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{showModal && (
					<AdminModal
						admin={currentAdmin}
						onSave={handleSaveAdmin}
						onClose={() => setShowModal(false)}
					/>
				)}
			</div>
		</div>
	);
}

function AdminModal({ admin, onSave, onClose }) {
	const [formData, setFormData] = useState(
		admin || { name: "", mobile: "", email: "", status: "Active" }
	);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSave(formData);
	};

	return (
		<div
			className="modal d-block"
			style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">
							{admin ? "Edit Admin" : "Menambah Admin"}
						</h5>
						<button className="btn-close" onClick={onClose}></button>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="modal-body">
							<div className="mb-3">
								<label className="form-label">Nama Admin</label>
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
								<label className="form-label">Telepon</label>
								<input
									type="text"
									className="form-control"
									name="mobile"
									value={formData.mobile}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Email</label>
								<input
									type="email"
									className="form-control"
									name="email"
									value={formData.email}
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
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								onClick={onClose}>
								Close
							</button>
							<button type="submit" className="btn btn-primary">
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Admin;
