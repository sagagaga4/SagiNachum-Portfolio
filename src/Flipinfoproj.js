import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";

const Flipinfoproj = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
}, []);
return (
    <div>
        <p class="About-info-line" style={{fontSize:"30px"}}>Coding-Projects</p><p  data-aos="fade-in"  class="About-info-project">Netflix-Clone - (Firebase axios, TMDB) using React.js </p>
        <section class="icon-list">
        <a href="https://github.com/sagagaga4/Netflix-Clone" className="Git">
        <i data-aos="fade-in" class="fab fa-github" style={{fontSize:"80px",color:"white",marginTop:"40px"}}></i>
        </a>
        </section>

        <p data-aos="fade-in"  class="About-info-project">Instagram-Like-Bot - (Selenium, bs4) using Python</p>
        <section class="icon-list">
        <a href="https://github.com/sagagaga4/Instagram-like-bot" className="Git">
        <i data-aos="fade-in" class="fab fa-github" style={{fontSize:"80px",color:"white",marginTop:"40px"}}></i>
        </a>
        </section>

        <p data-aos="fade-in"  class="About-info-project">Bitcoin-Price-Scraping (requests, bs4) using Python - </p>
        <section class="icon-list">
        <a href="https://github.com/sagagaga4/Real-time-Bitcoin-price-scraping" className="Git">
        <i data-aos="fade-in" class="fab fa-github" style={{fontSize:"80px",color:"white",marginTop:"40px"}}></i>
        </a>
        </section>
    </div>
    );  
};

export default Flipinfoproj;