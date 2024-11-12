import NavbarWeb from "../components/NavbarWeb";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import { Navbar } from "reactstrap";
function HalamanProfile() {
	return (
		<>
			<Navbar/>
			<NavbarWeb />
			<Profile />
			<Footer />
		</>
	);
}

export default HalamanProfile;
