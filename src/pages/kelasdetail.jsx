import { useNavigate, useParams } from "react-router-dom"; // Import untuk navigasi
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner"; // Pastikan path sesuai dengan lokasi Spinner.js
import axios from "axios";

const Kelasdetail = () => {
	const {id} = useParams() // get id from kelas
	console.log(id)
	const navigate = useNavigate(); // Hook untuk navigasi
	const [loading, setLoading] = useState(true); // State untuk mengatur loading spinner
	const [courses, setCourses] = useState([]) // state untuk menyimpan course
	const [notFound, setNotFound] = useState(false) // no course state

	useEffect(() => {
		const getCourseData = async (idCourse) => {
			try {
				const response = await axios.get(`http://localhost:5000/api/v1/course/${idCourse}`)	
				if(response.data.data.length === 0 ){
					setNotFound(true);
				} else {
					setCourses(response.data.data)
				}
			} catch (error) {
				console.error('Error Fetch Course Data', error.message)
				console.log(response.data.message);
			} finally {
				setLoading(false)
			}
		}
		getCourseData(id)
	}, []);

	// Jika sedang loading, tampilkan spinner
	// if (loading) {
	// 	return <Spinner />;
	// }
	return (
		<>
			<Navbar />
			<div className="container mt-5">
				{/* Loading state */}
				{loading && (
					<Spinner />
				)}

				{/* Not found state */}
				{!loading && notFound && (
					<div style={{ textAlign: "center", marginTop: "15rem", height:'60vh', marginBottom:'2rem' }}>
						<h3>Kelas tidak ditemukan</h3>
						<a href="/kelas" style={{color:"orange", fontWeight:'medium', textDecoration:'underline'}}>Balik ke halaman kelas</a>
					</div>
				)}

				{/* Course Data	 */}
				{!loading && !notFound && courses.map((course) => (
					<div className="row display-flex flex-wrap-wrap gap-20px" key={course.id}>
						<div className="col-md-8" style={{paddingLeft:"4rem", paddingTop:'1rem'}}>
						<a
							onClick={() => navigate("/kelas")}
							style={{cursor:'pointer', padding:'1rem 0rem', display:'block',}}>
							<i className="fa fa-arrow-left" style={{fontSize:"20px"}}></i> {/* Ikon panah kiri */}
						</a>
							<h1 className="course-title" style={{textTransform:'capitalize'}}>
								{course.name ? course.name : 'Unknown'}
							</h1>
							<p className="course-meta" style={{textTransform:'capitalize'}}>
								{`Kesulitan : ${course.difficulty} | Instruktur : ${course.username}`}
							</p>
							<img
								src={`../${course.image_cover}`}
								id="detailkelas"
								alt="Drone Pertanian"
								className="course-image"
								style={{objectFit:"cover"}}
							/>
							<p className="course-description" style={{marginTop:"2rem", lineHeight:'2.2rem'}}>
								{course.description}
							</p>

							<div className="accordion">
								<h4>Materi Kelas</h4>
								<div className="accordion-item">
									<div className="accordion-header1">
										Minggu 1 - Pengantar Teknologi Drone untuk Pertanian
									</div>
									<div className="accordion-content">
										<p>Pengantar (01:42)</p>
										<p>Apa itu drone pertanian? (01:42)</p>
										<p>
											Penggunaan jenis drone untuk memenuhi pertumbuhan tanaman
											(01:42)
										</p>
										<p>
											Cara memilih drone yang sesuai untuk kebutuhan pertanian
											(01:42)
										</p>
									</div>
								</div>

								<div className="accordion-item">
									<div className="accordion-header">
										Minggu 2 - Teknik Pengoperasian Drone
									</div>
									<div className="accordion-content">
										{/* <p>Detail materi untuk Minggu 2 akan tersedia di sini.</p> */}
									</div>
								</div>

								<div className="accordion-item">
									<div className="accordion-header">
										Minggu 3 - Aplikasi Praktis dan Studi Kasus
									</div>
									<div className="accordion-content">
										{/* <p>Detail materi untuk Minggu 3 akan tersedia di sini.</p> */}
									</div>
								</div>
							</div>
						</div>

						{/* <!-- Course Pricing and Benefits --> */}
						<div className="col-md-4" style={{marginTop:'10rem', paddingRight: "4rem"}}>
							<div className="benefits-card">
								<div className="price">{Number(course.price) > 0 ? (new Intl.NumberFormat('id-ID', {style:'currency', currency:"IDR"}).format(course.price)) : 'Gratis'}</div>
								<a href="/cokartu" className="btn-orange">
									Daftar Kelas
								</a>
								<h5>Benefit yang didapatkan</h5>
								<ul className="benefit-list">
									<li>{course.total_hours} Jam video pembelajaran</li>
									<li>Analisis data pertanian secara efektif</li>
									<li>Sertifikat kompetensi</li>
								</ul>
							</div>
						</div>
					</div>
				))}

				
			</div>
			<Footer />
		</>
	);
};

export default Kelasdetail;
