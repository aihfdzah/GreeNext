import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import NavbarWeb from "../components/NavbarWeb";
import Navbar from "../components/Navbar";
function Home() {
	return (
		<>
			<Navbar/>
			<NavbarWeb />
			<Dashboard />
			<Footer />
		</>
	);
}

export default Home;
