import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <img src="./logo2.png" className="logo" alt="logo"/>


            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-ul">
                    <li className="nav-item">
                        <a className="nav-link" href="#dashboard">
                            Dashboard</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#kelas">
                            Kelas</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#sumberdaya">
                            Sumber Daya</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#komunitas">
                            Komunitas</a>
                    </li>   
                    
                    <li className="nav-item">
                        <a className="nav-link" href="#tentangkita">
                            Tentang Kita</a>
                    </li>
                </ul>

                <div className="masuk">
                    <a href="#" className="masuk-btn">Masuk</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;