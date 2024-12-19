import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function CourseLearnPhase() {
  const { id, id_module } = useParams(); // Get id from the route params
  console.log(id, id_module);
  const navigate = useNavigate(); // Hook for navigation
  const [loading, setLoading] = useState(true); // State for loading spinner
  const [courses, setCourses] = useState([]); // State for storing course
  const [notFound, setNotFound] = useState(false); // No course state
  const [modules, setModules] = useState([]);
  const [moduleContents, setModuleContents] = useState([]);
  const [singleModule,setSingleModule] = useState([])

  // Function to convert YouTube link to embed format
  const getEmbedUrl = (url) => {
    const videoIdMatch = url.match(/v=([a-zA-Z0-9_-]+)/);
    if (videoIdMatch && videoIdMatch[1]) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    return url; // Return as is if it's already in embed format
  };

  useEffect(() => {
    const fetchCourseDetails = async (idCourse, idModule) => {
      try {
        const [singleModuleResponse, courseResponse, moduleResponse, contentResponse] = await Promise.all([
          axios.get(`https://greenext-server-production.up.railway.app/api/v1/course/module/${idCourse}/content/${idModule}`),
          axios.get(`https://greenext-server-production.up.railway.app/api/v1/course/${idCourse}`, { withCredentials: true }),
          axios.get(`https://greenext-server-production.up.railway.app/api/v1/course/module/${idCourse}`, { withCredentials: true }),
          axios.get(`https://greenext-server-production.up.railway.app/api/v1/course/module/${idCourse}/content`, { withCredentials: true }),
        ]);

        if (courseResponse.data.data.length === 0) {
          setNotFound(true);
        } else {
          setCourses(courseResponse.data.data);
          setModules(moduleResponse.data.data);
          setSingleModule(singleModuleResponse.data.data)
        }

        // Organize contents by module ID
        const organizedContents = contentResponse.data.data.reduce((acc, content) => {
          acc[content.id_module] = acc[content.id_module] || [];
          acc[content.id_module].push(content);
          return acc;
        }, {});
        setModuleContents(organizedContents);
      } catch (error) {
        console.error("Error Fetch Course Data", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails(id, id_module);
  }, [id, id_module]);

  return (
    <>
      <Navbar />
      <main style={{ marginTop: "4rem" }}>
        <div className="container" style={{display:'flex', justifyContent:"space-between", gap:"2rem"}}>
          {/* Loading state */}
          {loading && <Spinner />}

          {/* Not found state */}
          {!loading && notFound && (
            <div style={{ textAlign: "center", marginTop: "15rem", height: "60vh", marginBottom: "2rem" }}>
              <h3>Kelas tidak ditemukan</h3>
              <a href="/kelas" style={{ color: "orange", fontWeight: "medium", textDecoration: "underline" }}>
                Balik ke halaman kelas
              </a>
            </div>
          )}

          {/* Course Details */}
          {!loading &&
            !notFound &&
            singleModule.map((module) => (
              <div className="course-wrapper" key={module.id} style={{maxWidth:'900px'}}>
                <a
                  onClick={() => navigate(-1)} // Navigate back
                  style={{ cursor: "pointer", padding: "1rem 0rem", display: "block" }}
                >
                  <i className="fa fa-arrow-left" style={{ fontSize: "20px" }}></i> {/* Back Icon */}
                </a>
                {console.log(singleModule)}
                <h1 style={{margin:"0.5rem 0rem"}}>{module.module_description}</h1>

                {/* Modules and Contents */}
                {singleModule.map((module, index) => (
                  <div key={module.id} style={{ marginBottom: "2rem" }}>
                    <p>{`Modul ${index + 1} - ${module.module_description}`}</p>

                    {/* Module Contents */}
                    {moduleContents[id_module]?.map((content) => (
                      <div key={content.id[id_module]}>
                        <iframe
                          width="750"
                          height="400"
                          src={getEmbedUrl(content.video)}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                        <h1 style={{marginTop:'1.5rem',textTransform:"capitalize"}}>{content.title}</h1>
                        <p style={{lineHeight:"2rem", textAlign:"justify"}}>{content.text}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

            ))}
          <div className="navigation-course" style={{width:"100%", paddingTop:"4rem"}}>
            {courses.map((course) => (<h1 style={{fontSize:"18px"}}>{course.name}</h1>))}
            {modules.map((module) => (
              <div className="navigation-course-item" style={{padding:'1rem', border:"1px solid #cacaca", marginBottom:"1rem", borderRadius:'8px', cursor:"pointer"}}>
                <Link to={`/course-learn-phase/${courses[0].id}/${module.id}`} key={module.id} style={{cursor:'pointer'}}>
                  {`Modul ${module.module_number} - ${module.module_description}`}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CourseLearnPhase;
