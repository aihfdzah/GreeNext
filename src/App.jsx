import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Kelas from "./pages/Kelas";
import Tentang from "./pages/Tentang";
import { BrowserRouter, Router, Route } from "react-dom";

const App = () =>
	//   {
	//   return (
	//     <div>
	//       <Navbar />
	//       <Kelas />
	//       <Tentang />
	//       <Footer />
	//     </div>
	//   );
	// };

	function App() {
		return (
			<BrowserRouter>
				<Router>
          <Route path=/>
          <Route path="/register " element={<Register/>}/>
					<Route path="/kelas" element={<Kelas />} />
					<Route path="/tentang" element={<Tentang />} />
				</Router>
			</BrowserRouter>
		);
	};

export default App;
