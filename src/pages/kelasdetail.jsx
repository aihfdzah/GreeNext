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
	const [modules, setModules] = useState([])
	const [moduleContents, setModuleContents] = useState([])

	useEffect(() => {
		const fetchCourseDetails = async (idCourse) => {
			try {
				const [courseResponse, moduleResponse, contentResponse] = await Promise.all([
					axios.get(`https://greenext-server-production.up.railway.app/api/v1/course/${idCourse}`, {withCredentials:true}),
					axios.get(`https://greenext-server-production.up.railway.app/api/v1/course/module/${idCourse}`, {withCredentials:true}),
					axios.get(`https://greenext-server-production.up.railway.app/api/v1/course/module/${idCourse}/content`, {withCredentials:true})
				])
				// const response = await axios.get(`http://localhost:5000/api/v1/course/${idCourse}`, {withCredentials:true})	
				if(courseResponse.data.data.length === 0 ){
					setNotFound(true);
				} else {
					setCourses(courseResponse.data.data)
					setModules(moduleResponse.data.data)
				}
				 // Organize contents by module ID
				const organizedContents = contentResponse.data.data.reduce((acc, content) => {
          acc[content.id_module] = acc[content.id_module] || [];
          acc[content.id_module].push(content);
          return acc;
        }, {});
        setModuleContents(organizedContents);
				// const moduleResponse = await axios.get(`http://localhost:5000/api/v1/course/module/${idCourse}`, {withCredentials:true})
			} catch (error) {
				console.error('Error Fetch Course Data', error.message)
				// console.log(response.data.message);
			} finally {
				setLoading(false)
			}
		}
		fetchCourseDetails(id)
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
						<div className="col-md-8" style={{paddingLeft:"4rem", paddingTop:'1rem', paddingBottom:"4rem"}}>
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
							<h4 className="mb-4">Materi Kelas</h4>
							{modules.length > 0 ? (
								modules.map((module) => (
										<div className="accordion-item">
											<div className="accordion-header">
												{`Modul ${module.module_number} - ${module.module_description}`}
											</div>
											<div className="content" style={{textAlign:'left', padding:"0rem 1rem"}}>
												{moduleContents[module.id] && moduleContents[module.id].length > 0 ? (
													<ol style={{display:'flex', flexDirection:"column", gap:".5rem"}}>
														{moduleContents[module.id].map((content) => (
															<li key={content.id}>{content.title}</li>
														))}
													</ol>
													) : (<p>No content available for this module.</p>)
													}
											</div>
										</div>
						))) : (<p>Materi kelas belum tersedia{console.log(modules)}</p>)}
							</div>
						</div>

						{/* <!-- Course Pricing and Benefits --> */}
						<div className="col-md-4" style={{marginTop:'10rem', paddingRight: "4rem"}}>
							<div className="benefits-card">
								<div className="price">{Number(course.price) > 0 ? (new Intl.NumberFormat('id-ID', {style:'currency', currency:"IDR"}).format(course.price)) : 'Gratis'}</div>
								<a href={`/course-learn-phase/${courses[0].id}/${modules[0].id}`} className="btn-orange" style={{cursor:"pointer"}} onClick={() => {
									alert('Berhasil mendaftar kelas. Anda sudah bisa mengakses kelas!')
								}}>
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
