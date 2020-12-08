import React from "react";
import "nes.css/css/nes.min.css";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navi from './Navi';
import Background from "./Background";
import Flip from "./Flip";
import Flipinfo from "./Flipinfo";
import Flipinfo2 from "./Flipinfo2";
import Flipinfoproj from "./Flipinfoproj";
import Footer from "./Footer";




function App() {
  return (

    <div className="App">

      <Navi/>
      <Background></Background>
      <style>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Zilla+Slab+Highlight&display=swap');
      </style>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
      </style>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap'); 
      </style>
      </style>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
      </style>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap');
      </style>
      <h1>Sagi Nachum</h1>
      <style>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap');
      </style>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
      </style>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Limelight&display=swap');
      </style>
      </style>
      <h2>Front End Developer</h2>
      <style>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
      </style>     
      </style>
      <section class="yes">
        <i class="fab fa-react"></i>
        <i class="fab fa-python"></i>
        <i class="fab fa-html5"></i>
        <i class="fab fa-css3-alt"></i>
        <i class="fab fa-js-square"></i>
      </section>
        <div>
          <section class="icon-list">
            <a href="https://www.linkedin.com/in/sagi-nachum-6040911b2/" className="Linkedin">
            <i class="fab fa-linkedin"  style={{color:" rgb(206, 31, 31)"}}></i></a>
            <a href="https://github.com/sagagaga4" className="Git">
            <i class="fab fa-github-square" style={{color:" rgb(206, 31, 31)"}}></i>
            </a>
          </section>
        </div>
        <div>
          
        <section class="s1">
          <div class="main-container"> 
            <h3 style={{fontFamily:"Luckiest Guy",letterSpacing:"3px",fontSize: "50px",textAlign: "#d6d6d",color:"whitesmoke"}}>My Skills</h3>
        <div class="post-wrapper">

<Flip></Flip>

          </div>
        </div>
        </section>
        <div class="About">
            <i class="fas fa-bolt"></i>
                <div class="about-preview">
                <h3 style={{fontFamily:"Luckiest Guy",letterSpacing:"3px",fontSize: "50px",textAlign: "#d6d6d",color:"whitesmoke"}}  class="post-title">About me</h3>
                <p class="About-info-line" style={{fontSize:"30px"}}>Hey everyone!</p>

                <Flipinfo></Flipinfo>

                <h3 style={{marginTop:"270px",fontFamily:"Luckiest Guy",letterSpacing:"3px",fontSize: "50px",textAlign: "#d6d6d",color:"whitesmoke"}}  class="post-title">Work experience</h3>
                <p class="About-info-line" style={{fontSize:"30px"}}>IDF - Vehicle Accessories Designer</p>
                
                <Flipinfo2></Flipinfo2>
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap');
                </style>
                <Flipinfoproj></Flipinfoproj>
                <a href="Sagi-Nachum-CV.pdf" download="Sagi-Nachum-CV.pdf" >
                <button className="banner__button" > Download CV</button>
                </a>
                <Footer />

              </div>
            </div>
          </div>   
        </div>
      );
    };

export default App;
