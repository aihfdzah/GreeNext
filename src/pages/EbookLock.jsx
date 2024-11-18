import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EbookLock = () => {
    return (
        <> <NavbarWeb />
        <div class="container">
    <div class="title">Pemuliaan Tanaman Modern</div>
    
    <div class="cover">
        <img src="./manajemen agriondustri.jpg" alt="Book Cover"/>
        <div class="overlay">
            <div class="lock-icon">&#128274;</div>
            <div class="message">Anda harus membeli e-book terlebih dahulu untuk membaca!</div>
            <a href="#" class="button">Beli Sekarang!</a>
        </div>
        <div class="navigation">
            <span class="nav-icon">&#8592;</span>
            <span class="nav-icon">&#8594;</span>
        </div>
    </div>

    <div class="pagination">1 of 199</div>
</div>


        </>
    );
};

export default EbookLock;