import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavbarWeb from "../components/NavbarWeb";
function Home() {
	return (
		<>
			<Navbar />
			<NavbarWeb />
			<Dashboard />
			<Footer />
		</>
	);
}

export default Home;
