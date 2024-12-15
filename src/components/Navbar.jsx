import Profile from "../assets/profile.png";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

const Navbar = () => {
	const navigate = useNavigate();
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

	const location = useLocation();
	
	const logoutUser = async () => {
		try {
			const response = axios.post('http://localhost:5000/api/v1/auth/logout', {},{
				withCredentials:true // include cookie.
			})
	
			if((await response).status == 200){
				console.log(response.data);
				alert('Logout successfully!')
				navigate('/login')
				console.log('masuk sini kah?')
			}
			
		} catch (error) {
			console.error('Log Out Error!', error.message)
			alert("Failed to logout")
		}
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<div className="nav-wrapper">
				<img src="./logo2.png" className="logo" alt="logo" />
				<div
					className="collapse navbar-collapse justify-content-center"
					id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item me-5">
							<a
								className={`nav-link ${
									location.pathname === "/dashboard" ? "active-link" : ""
								}`}
								href="/dashboard">
								Dashboard
							</a>
						</li>

						<li className="nav-item me-5">
							<a
								className={`nav-link ${
									location.pathname === "/kelas" ? "active-link" : ""
								}`}
								href="/kelas">
								Kelas
							</a>
						</li>

						<li className="nav-item me-5">
							<a
								className={`nav-link ${
									location.pathname === "/sumberdaya" ? "active-link" : ""
								}`}
								href="/sumberdaya">
								Sumber Daya
							</a>
						</li>

						<li className="nav-item me-5">
							<a
								className={`nav-link ${
									location.pathname === "/tentang" ? "active-link" : ""
								}`}
								href="/tentang">
								Tentang Kita
							</a>
						</li>
					</ul>

				</div>
					<div className="profile">
						<Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
							<DropdownToggle
								className="profile-btn d-flex align-items-center"
								style={{
									backgroundColor: "#17412d",
									border: "none",
									marginLeft: "4px",
								}}
								caret>
								<img
									src={Profile}
									alt="Profile"
									className="rounded-circle me-2"
									style={{ width: "30px", height: "30px" }}
								/>
								Profile
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem onClick={logoutUser}>Log Out</DropdownItem>
								<DropdownItem href="/profile">Profile</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
			</div>
		</nav>
	);
};

export default Navbar;
