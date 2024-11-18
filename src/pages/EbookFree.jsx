import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EbookFree = () => {
    return (
        <> <NavbarWeb />
        <div class="container">
            <div class="title">Pemuliaan Tanaman Modern</div>
            
            <div class="cover">
                <img src="./inovasi agribisnis.jpg" alt="Book Cover"/>
                <div class="navigation">
                    <span class="nav-icon">&#8592;</span>
                    <span class="nav-icon">&#8594;</span>
                </div>
            </div>

            <div class="authors">
                Lestari Irene Purba, Badariah, Hari Gunawan, Dewi Andriani,
                Maghfiroh Jamil, Indriani Husain, Silva Peniata Sari,
                Maysari Yamin, Jumiarah, Muhaiman Lubis
            </div>

            <div class="pagination">1 of 189</div>
        </div>

        </>
    );
};

export default EbookFree;