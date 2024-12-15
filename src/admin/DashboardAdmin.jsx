import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Admin.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

function DashboardAdmin() {
	const [stats] = useState({
		users: 120,
		classes: 45,
		admins: 10,
		webinars: 25,
		ebooks: 60,
	});
	const [sidebarOpen, setSidebarOpen] = useState(true);
	const [activeItem, setActiveItem] = useState("dashboard");
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Spinner />;
	}

	const handleMenuClick = (item) => {
		setActiveItem(item);
	};

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	const handleCardClick = (route) => {
		navigate(route);
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
			<div className="content-admin flex-grow-1 ">
				<header
					className="d-flex justify-content-between align-items-center py-3 px-4 shadow-sm"
					style={{ backgroundColor: "#f5f2ed" }}>
					<h5 className="mb-0">Dashboard</h5>
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

				<div className="container-admin px-3">
					<div className="row g-4 " style={{ marginTop: "-150px" }}>
						<div className="col-md-4">
							<div
								className="card bg-transparent border border-warning shadow "
								style={{ color: "#ef7a53", cursor: "pointer" }}
								onClick={() => handleCardClick("/user")}>
								<div className="card-body text-center">
									<i className="fa fa-users fa-2x mb-2"></i>
									<h6 className="card-title">Pengguna</h6>
									<h2>{stats.users}</h2>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div
								className="card bg-transparent border border-warning shadow"
								style={{ color: "#ef7a53", cursor: "pointer" }}
								onClick={() => handleCardClick("/kelasadmin")}>
								<div className="card-body text-center">
									<i className="fa fa-folder-open fa-2x mb-2"></i>
									<h6 className="card-title">Kelas</h6>
									<h2>{stats.classes}</h2>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div
								className="card bg-transparent border border-warning shadow"
								style={{ color: "#ef7a53", cursor: "pointer" }}
								onClick={() => handleCardClick("/admin")}>
								<div className="card-body text-center">
									<i className="fa fa-cogs fa-2x mb-2"></i>
									<h6 className="card-title">Admin</h6>
									<h2>{stats.admins}</h2>
								</div>
							</div>
						</div>
						<div className="col-md-4 mt-5">
							<div
								className="card bg-transparent border border-warning shadow"
								style={{ color: "#ef7a53", cursor: "pointer" }}
								onClick={() => handleCardClick("/webinar")}>
								<div className="card-body text-center">
									<i className="fa fa-tasks fa-2x mb-2"></i>
									<h6 className="card-title">Webinar</h6>
									<h2>{stats.webinars}</h2>
								</div>
							</div>
						</div>
						<div className="col-md-4 mt-5">
							<div
								className="card bg-transparent border border-warning shadow"
								style={{ color: "#ef7a53", cursor: "pointer" }}
								onClick={() => handleCardClick("/ebook")}>
								<div className="card-body text-center">
									<i className="fa fa-book fa-2x mb-2"></i>
									<h6 className="card-title">Ebook</h6>
									<h2>{stats.ebooks}</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardAdmin;
