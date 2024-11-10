

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <img src="./logo2.png" className="logo" alt="logo"/>


            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item me-5">
                        <a className="nav-link" href="#dashboard">
                            Dashboard</a>
                    </li>

                    <li className="nav-item me-5">
                        <a className="nav-link" href="kelas.jsx">
                            Kelas</a>
                    </li>

                    <li className="nav-item me-5">
                        <a className="nav-link" href="#sumberdaya">
                            Sumber Daya</a>
                    </li>

                    <li className="nav-item me-5">
                        <a className="nav-link" href="#komunitas">
                            Komunitas</a>
                    </li>   
                    
                    <li className="nav-item me-5">
                        <a className="nav-link" href="tentang.jsx">
                            Tentang Kita</a>
                    </li>
                </ul>

                <div className="masuk">
                    <a className="masuk-btn" href="/login">
                        Masuk</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;