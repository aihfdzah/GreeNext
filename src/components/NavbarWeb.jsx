import Profile from "../assets/profile.png";
import { useState } from "react";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

const NavbarWeb = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<img src="./logo2.png" className="logo" alt="logo" />

			<div
				className="collapse navbar-collapse justify-content-center"
				id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item me-5">
						<a className="nav-link" href="/home">
							Dashboard
						</a>
					</li>

					<li className="nav-item me-5">
						<a className="nav-link" href="/kelas">
							Kelas
						</a>
					</li>

					<li className="nav-item me-5">
						<a className="nav-link" href="">
							Sumber Daya
						</a>
					</li>

					<li className="nav-item me-5">
						<a className="nav-link" href="">
							Komunitas
						</a>
					</li>

					<li className="nav-item me-5">
						<a className="nav-link" href="">
							Tentang Kita
						</a>
					</li>
				</ul>

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
							<DropdownItem href="/">Log Out</DropdownItem>
							<DropdownItem href="/profile">Profile</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			</div>
		</nav>
	);
};

export default NavbarWeb;
