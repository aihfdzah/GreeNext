import "../Styles/Kelas.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import MiniSpinner from "../components/MiniSpinner";
import { Link } from "react-router-dom";

const Kelas = () => {
	const [courses, setCourses] = useState([]) // State untuk simpan courses
	const [loading, setLoading] = useState(false); // State untuk loading
	const [searchLoading, setSearchLoading] = useState(false); // State untuk loading
	const [error, setError] = useState(null); // State untuk error
	const [search, setSearch] = useState('') // state untuk search	

	const truncate = (str, maxLength) => {
		return str.length > maxLength ? str.slice(0, maxLength) + "... " : str;
	};

	const handleSearchChange = (e) => {
		setSearch(e.target.value);
		setSearchLoading(true);

		// timeout for loading
		const timer = setTimeout(() => {
			setSearchLoading(false)
		},300)

		return () => clearTimeout(timer)
	};

	const filteredCourse = courses.filter(
		(course) =>
			course.name.toLowerCase().includes(search.toLowerCase()) ||
			course.description.toLowerCase().includes(search.toLowerCase()) ||
			course.difficulty.toLowerCase().includes(search.toLowerCase()) ||
			course.total_hours.toLowerCase().includes(search.toLowerCase())
	);

	useEffect(() => {
		const getCourse = async() => {
			setLoading(true)
			setError(null)
			try {
				const response = await axios.get('https://greenext-server-production.up.railway.app/api/v1/course/')
				setCourses(response.data.data)
			} catch (error) {
				console.error("Error Request getCourse", error.message)
				// console.log(response.data.message)
			} finally {
				setLoading(false)
			}
		}
		getCourse()
	}, [])

	if (loading) {
		return <Spinner />;
	}

	if (error) {
		return <div>{error}</div>; // Show error message
	}

	return (
		<>
			<div className="container-kelas mt-5" style={{ marginBottom:"2rem", maxWidth:"1440px", margin:"auto" }}>
				<div
					className="d-flex align-items-center justify-content-center py-2 border-bottom"
					style={{ margin:"4rem 0rem" }}>
					{/* Search Bar */}
					<div
						className="py-3 mx-3 flex-grow-1"
						style={{ maxWidth: "100%", position: "relative", width: "100%" }}>
						<i
							className="fa-solid fa-magnifying-glass"
							style={{
								color: "#ef7a53",
								position: "absolute",
								left: "15px",
								top: "50%",
								transform: "translateY(-50%)",
							}}></i>
						<input
							type="text"
							className="form-control bg-transparent"
							style={{
								borderColor: "#ef7a53",
								borderRadius: "20px",
								paddingLeft: "40px",
								paddingTop: "0.625rem",
								paddingBottom: "0.625rem"
							}}
							placeholder="Cari Kursus..."
							onChange={handleSearchChange}
						/>
					</div>

					{/* Icon Group */}
					<div className="d-flex align-items-center">
						<i
							className="fa-regular fa-heart mx-2"
							style={{
								fontSize: "20px",
								cursor: "pointer",
								color: "#ef7a53",
							}}></i>
						<i
							className="fa-solid fa-cart-shopping mx-2"
							style={{
								fontSize: "20px",
								cursor: "pointer",
								color: "#ef7a53",
							}}></i>
					</div>
				</div>

				{/* -------------- Layout Konten Utama -------- */}
				<div className="main-content mb-5" style={{gap:"4rem"}}>
					{/* ---------- Sidebar Filter --> */}
					<div className="filter">
						<select>
							<option>Jenis Teknologi</option>
							<option>IoT</option>
							<option>Big Data</option>
							<option>Agroekologi</option>
						</select>
						<select>
							<option>Tingkat Kesulitan</option>
							<option>Pemula</option>
							<option>Menengah</option>
							<option>Lanjut</option>
						</select>
						<select>
							<option>Pelatihan</option>
							<option>Gratis</option>
							<option>Berbayar</option>
						</select>
						<select>
							<option>Harga</option>
							<option>Promo</option>
							<option>Terpopuler</option>
						</select>
						<select>
							<option>Sertifikasi</option>
							<option>Terbaru</option>
							<option>Terpopuler</option>
						</select>
					</div>

					{/* ---------------- Daftar Kursus ------------- */}
					<div className="daftar-kursus display-flex flex-direction-column" style={{width:"100%"}}>
						{/* Query course from database */}
						{searchLoading ? (<div style={{margin:'auto', display:"flex", justifyContent:"center", alignContent:'start'}}><MiniSpinner /></div>) : filteredCourse.length > 0 ? (filteredCourse.map((course) => (
							<div
								key={course.id}
								className="course-item-horizontal  border-0 border-bottom"
								style={{ borderBottomColor: " #17412d", minWidth:"100%"}}>
								<div className="konten-course-horizontal">
									<p className="title-course">{course.name}</p>
									<p className="deskripsi-course">
										{truncate(course.description, 120)}
										<Link to={`${course.id}`} className="next">
											Detail
										</Link>
									</p>
									<div className="tag-course">
										<span style={{textTransform:'capitalize', }}>{course.difficulty}</span>
										<span>{course.total_hours} Jam</span>
										<span>{Number(course.price) > 0 ? (new Intl.NumberFormat('id-ID', {style:'currency', currency:"IDR"}).format(course.price)) : 'Gratis'}</span>
									</div>
								</div>
								<div className="image-button-container">
									<img src={course.image_cover ? `../${course.image_cover}` : "../foto2.jpg"} alt="Course" className="course-image" />
									<Link 
										to={`${course.id}`}
										className="button-daftar"
										style={{
											borderRadius: "20px",
											width: "200px",
											marginTop: "10px",
										}}>
										Daftar Sekarang
									</Link>
								</div>
							</div>
						))) : (
							<div
								style={{
									margin:'auto',
									textAlign:'center',
									padding:'20px',
									color:'#555'
								}}
							>
								<i 
								className="fa-solid fa-triangle-exclamation"
								style={{fontSize:'80px', marginBottom:'1.5rem'}}></i>
								<h3>Kelas tidak ditemukan</h3>
								<p>Coba cari dengan kata kunci lain!</p>
							</div>
						)}
						

						{/* Tambahkan lebih banyak course-item-horizontal serupa */}
					</div>
				</div>

				<div className="pagination">
					<a href="#" className="prev">
						← Sebelumnya
					</a>
					<span className="page-numbers">
						<a href="#" className="page active">
							1
						</a>
						<a href="#" className="page">
							2
						</a>
						<a href="#" className="page">
							3
						</a>
						{/* <span className="dots">...</span> */}
						<a href="#" className="page">
							4
						</a>
						<a href="#" className="page">
							5
						</a>
					</span>
					<a href="#" className="next">
						Selanjutnya →
					</a>
				</div>
			</div>
		</>
	);
};

export default Kelas;
