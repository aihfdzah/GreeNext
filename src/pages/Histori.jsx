import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "../components/Spinner"; // Pastikan path sesuai dengan lokasi Spinner.js
import { FaDownload, FaEye, FaLinkedin } from "react-icons/fa"; // Tambahkan package react-icons

const Histori = () => {
	const [activeButton, setActiveButton] = useState("histori"); // Set default button 'home' sebagai aktif
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);

	const handleButtonClick = (buttonName, path) => {
		setActiveButton(buttonName);
		navigate(path);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Spinner />;
	}

  // const [activities, setActivities] = useState([
  //   { id: 1, time: "20.11", activity: "Video Katalog Teknologi" },
  //   { id: 2, time: "15.07", activity: "Daftar Webinar" },
  //   { id: 3, time: "14.40", activity: "Ubah Password" },
  //   { id: 4, time: "12.35", activity: "Melanjutkan kelas" },
  //   { id: 5, time: "11.20", activity: "Baca e-book" },
  //   { id: 6, time: "10.00", activity: "Melanjutkan kelas" },
  //   { id: 7, time: "08.15", activity: "Masuk akun" },
  // ]);

  // // Fungsi untuk menghapus aktivitas berdasarkan ID
  // const handleDelete = (id) => {
  //   const updatedActivities = activities.filter((item) => item.id !== id);
  //   setActivities(updatedActivities);
  // };

	return (
		<>
			<Navbar />
			<Container className="mt-5" style={{ marginBottom: "1%" }}>
				<Row
					className="py-3 d-flex text-left"
					style={{
						marginLeft: "-10px",
					}}>
					<Col>
						<h1 style={{ color: "#17412d" }}>Histori</h1>
					</Col>
					<Col className="text-end me-auto">
						<Button
							className={`me-5 w-15 button-custom ${
								activeButton === "home" ? "active" : ""
							}`}
							onClick={() => handleButtonClick("home", "/home")}>
							Home
						</Button>
						<Button
							className={`p-0 me-5 w-15 button-custom ${
								activeButton === "sertifikat" ? "active" : ""
							}`}
							onClick={() => handleButtonClick("sertifikat", "/sertifikat")}>
							Sertifikat
						</Button>
						<Button
							className={`me-5 w-15 button-custom ${
								activeButton === "sumber" ? "active" : ""
							}`}
							onClick={() => handleButtonClick("sumber", "/sumberdaya")}>
							Sumber Daya
						</Button>
						<Button
							className={`me-5 w-15 button-custom ${
								activeButton === "histori" ? "active" : ""
							}`}
							onClick={() => handleButtonClick("histori", "/histori")}>
							Histori
						</Button>
					</Col>
				</Row>
        </Container>

          
              <div className="agenda-section">
                <h2>Hari ini - Selasa, 10 Oktober 2023</h2>
                
                <ul className="histori">
                  <li className="histori">
                    <span className="time">20.11 WIB</span>
                    <span className="activity">Video Katalog Teknologi</span>
                    <a href="#">
                      <i class="fa-solid fa-trash"></i>
                    </a>
                  </li>

                  <li>
                    <span className="time">15.07 WIB</span>
                    <span className="activity">Daftar Webinar</span>
                    <a href="#">
                      <i class="fa-solid fa-trash"></i>
                    </a>
                  </li>

                  <li>
                    <span className="time">14.40 WIB</span>
                    <span className="activity">Ubah Password</span>
                    <a href="#">
                      <i class="fa-solid fa-trash"></i>
                    </a>
                  </li>

                  <li>
                    <span className="time">12.35 WIB</span>
                    <span className="activity">Melanjutkan kelas</span>
                    <a href="#">
                      <i class="fa-solid fa-trash"></i>
                    </a>
                  </li>

                  <li>
                    <span className="time">11.20 WIB</span>
                    <span className="activity">Baca e-book</span>
                    <a href="#">
                      <i class="fa-solid fa-trash"></i>
                    </a>
                  </li>

                  <li>
                    <span className="time">10.00 WIB</span>
                    <span className="activity">Melanjutkan kelas</span>
                    <a href="#">
                      <i class="fa-solid fa-trash"></i>
                    </a>
                  </li>

                  <li>
                    <span className="time">08.15 WIB</span>
                    <span className="activity">Masuk akun</span>
                    <a href="#">
                      <i class="fa-solid fa-trash"></i>
                    </a>
                  </li>
                </ul>

        <div className="agenda-section">
          <h2>Kemarin - Senin, 09 Oktober 2023</h2>
        </div>
      </div>

    <Footer/>
    </>
  )
}

export default Histori;