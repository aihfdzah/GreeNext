import React from "react";

const Footer = () => {
    return (
        <footer className="footer fixed-bottom" >
            <div className="footer-content">

                <div className="footer-logo">
                    <img src="./logo.png" className="logo-footer" alt="FarmEduZ Logo" />
                    <a href="#"><i className='bx bx-globe'></i> Bahasa Indonesia</a>
                </div>

                <div className="collapse-footer-collapse" id="footerFoot">
                    <ul className="footer">
                        <li className="footer-item">
                            <a className="footer-link" href="#dashboard">
                                Dashboard</a>
                        </li>

                        <li className="footer-item">
                            <a className="footer-link" href="#kelas">
                                Kelas</a>
                        </li>
                        
                        <li className="footer-item">
                            <a className="footer-link" href="#sumberdaya">
                                Sumber Daya</a>
                        </li>

                        <li className="footer-item">
                            <a className="footer-link" href="#komunitas">
                                Komunitas</a>
                        </li>

                        <li className="footer-item">
                            <a className="footer-link" href="#tentangkita">
                                Tentang Kita</a>
                        </li>
                    </ul>
                </div>

                <div className="collapse-footer-collapse" id="footerFoot">
                    <div className="down">
                        <ul className="footer">
                        <li className="footer-link">
                            <a href="#">
                                Tentang Kami</a>
                        </li>

                        <li className="footer-link">
                            <a href="#">
                                Hubungi Kami</a>
                        </li>

                        <li className="footer-link">
                            <a href="#">
                                Tentang Privasi</a>
                        </li>
                        </ul>
                    </div>
                </div>

                <div className="collapse-footer-collapse" id="footerFoot">
                    <div className="down">
                        <ul className="footer">
                            <li className="footer-item">
                                <a className="footer-link" href="#">
                                    Bantuan & Dukungan</a>
                            </li>
                            
                            <li className="footer-item">
                                <a className="footer-link" href="#">
                                    Pengaturan Cookie</a>
                            </li>

                            <li className="footer-item">
                                <a className="footer-link" href="#">
                                    Investor</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

