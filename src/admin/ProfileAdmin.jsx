import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Admin.css";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";

function ProfileAdmin() {
	const [sidebarOpen, setSidebarOpen] = useState(true);
	const [activeItem, setActiveItem] = useState("profile");
	const [loading, setLoading] = useState(true);
	const [profile, setProfile] = useState({
		name: "Admin Name",
		email: "admin@example.com",
		profilePicture: "https://via.placeholder.com/150",
	});

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

	const handleProfileChange = (e) => {
		const { name, value } = e.target;
		setProfile((prevProfile) => ({
			...prevProfile,
			[name]: value,
		}));
	};

	const handleProfilePictureChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setProfile((prevProfile) => ({
					...prevProfile,
					profilePicture: reader.result,
				}));
			};
			reader.readAsDataURL(file);
		}
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
			<div className="container-fluid">
			<header
					className="d-flex justify-content-between align-items-center py-3 px-4 shadow-sm"
					style={{ backgroundColor: "#f5f2ed" }}>
					<h5 className="mb-0">Profile Admin</h5>
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
				<div className="row justify-content-center">
					<div className="col-md-8 col-lg-6">
						<div className="card border-0 shadow-lg">
							<div className="card-body p-5">
								<div className="text-center mb-4">
									<div className="position-relative d-inline-block">
										<img
											src={profile.profilePicture}
											alt="Profile Preview"
											className="rounded-circle shadow mb-3"
											style={{
												width: "150px",
												height: "150px",
												objectFit: "cover",
											}}
										/>
										<label
											htmlFor="profilePicture"
											className="btn btn-primary btn-sm position-absolute bottom-0 end-0 rounded-circle"
											style={{ padding: "8px 12px" }}>
											<i className="fa fa-camera" style={{backgroundColor:""}}></i>
											<input
												type="file"
												className="d-none"
												id="profilePicture"
												onChange={handleProfilePictureChange}
											/>
										</label>
									</div>
									<h4 className="mt-3 mb-1">{profile.name}</h4>
									<p className="text-muted">{profile.email}</p>
								</div>

								<div className="mb-3">
									<label htmlFor="name" className="form-label">
										Name
									</label>
									<div className="input-group">
										<span className="input-group-text">
											<i className="fa fa-user"></i>
										</span>
										<input
											type="text"
											className="form-control"
											id="name"
											name="name"
											value={profile.name}
											onChange={handleProfileChange}
											placeholder="Enter your full name"
										/>
									</div>
								</div>

								<div className="mb-3">
									<label htmlFor="email" className="form-label">
										Email Address
									</label>
									<div className="input-group">
										<span className="input-group-text">
											<i className="fa fa-envelope"></i>
										</span>
										<input
											type="email"
											className="form-control"
											id="email"
											name="email"
											value={profile.email}
											onChange={handleProfileChange}
											placeholder="Enter your email address"
										/>
									</div>
								</div>

								<div className="mb-3">
									<label htmlFor="phone" className="form-label">
										Phone Number
									</label>
									<div className="input-group">
										<span className="input-group-text">
											<i className="fa fa-phone"></i>
										</span>
										<input
											type="tel"
											className="form-control"
											id="phone"
											name="phone"
											placeholder="Enter your phone number"
										/>
									</div>
								</div>

								<div className="d-grid gap-2">
									<button
										className="btn btn-primary btn-lg"
										onClick={() => alert("Profile Updated!")}>
										Update Profile
									</button>
									<button
										className="btn btn-outline-secondary"
										onClick={() => alert("Password Reset Request")}>
										Reset Password
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileAdmin;
