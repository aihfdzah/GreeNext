import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom"; // Untuk navigasi
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner"; // Pastikan path sesuai dengan lokasi Spinner.js
import axios from "axios";
const KatalogTeknoDetail = () => {
	const {id} = useParams() // get id from kelas
	const navigate = useNavigate(); // Hook untuk navigasi
	const [loading, setLoading] = useState(true); // State untuk mengatur loading spinner
	const [items, setItems] = useState([])

	useEffect(() => {
		const fetchCatalogDetails = async (idCatalog) => {
			try {
				setLoading(true)
				const response = await axios.get(`https://greenext-server-production.up.railway.app/api/v1/tech-catalog/${id}`)
				setItems(response.data.data)
				console.log(response.data.data)
			} catch (error) {
				console.error("Error fetch catalog data", error.message)
			} finally {
				setLoading(false)
			}
		}
		fetchCatalogDetails(id)
	}, []);

	const getEmbedUrl = (url) => {
    // Check if the URL is a standard YouTube watch URL
    const videoIdMatch = url.match(/v=([a-zA-Z0-9_-]+)/);
    if (videoIdMatch && videoIdMatch[1]) {
        return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    // If URL is already in embed format or invalid, return it as is
    return url;
};

	// Jika sedang loading, tampilkan spinner
	if (loading) {
		return <Spinner />;
	}
	return (
		<>
			<Navbar />
			<div className="container" style={{marginTop:"70px"}}>
				{/* Tombol Kembali */}
				<div className="mb-3">
					<a
						onClick={() => navigate("/katalogteknologi")}
						style={{cursor:'pointer', padding:'1rem 0rem', display:'block',}}>
						<i className="fa fa-arrow-left" style={{fontSize:'20px'}}></i> {/* Ikon Back */}
					</a>
				</div>
				{items.map((item) => (
					<div className="text-room">
						<h1
							style={{
								fontSize: "2rem",
								fontWeight: "bold",
								textTransform:"capitalize"
							}}>
							{item.name}
						</h1>
						<div className="headerr" style={{display:'flex', alignContent:'center', gap:'4rem', margin:'2.5rem 0rem'}}>
							{console.log(item.video)}
							<iframe
								width="750"
								height="400"
								src={getEmbedUrl(item.video)}
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerpolicy="strict-origin-when-cross-origin"
								allowfullscreen></iframe>
								<img src={`../${item.image}`} alt={item.name} style={{maxWidth:'400px', maxHeight:'600px', objectFit:'cover'}}/>
						</div>

						<div className="text" style={{lineHeight:'2.5rem', textAlign:'justify', marginBottom:'4rem'}}>
							<p>
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>

			<Footer />
		</>
	);
};

export default KatalogTeknoDetail;
