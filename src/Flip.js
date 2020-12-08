import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";

const Flip = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
}, []);
return (

    <div>
    <div data-aos ="flip-right" class="post" >
    <i class="fas fa-laptop-code"></i>
    <div class="post-preview">
    <h3 style={{color:"lightyellow",fontFamily:"fantasy",fontSize: "50px"}}  class="post-title">Front-End</h3>
    <p data-aos ="fade-in" class="post-intro">ReactJS</p>
    <p data-aos ="fade-in" class="post-intro">JavaScript</p>
    <p data-aos ="fade-in" class="post-intro"> Css|Saas</p>
    <p data-aos ="fade-in" class="post-intro">Html5</p>
    <p data-aos ="fade-in" class="post-intro">JSX</p>
    <p data-aos ="fade-in" class="post-intro">ES6</p>
    </div>
    </div>


    <div  data-aos = "flip-right" class="post">
    <i class="fas fa-server"></i>
    <div class="post-preview">
    <h3 style={{color:"lightgoldenrodyellow",fontFamily:"fantasy",fontSize: "50px"}}  class="post-title">Server</h3>
      <p data-aos ="fade-in" class="post-intro">Python</p>
      <p data-aos ="fade-in" class="post-intro">node.js</p>
      <p data-aos ="fade-in" class="post-intro">Powershell</p>
    </div>
    </div>
    

    <div data-aos = "flip-right" class="post" >
    <i class="fab fa-uncharted"></i>
    <div class="post-preview">
    <h3 style={{color:"lightgoldenrodyellow",fontFamily:"fantasy",letterSpacing: "5px" ,fontSize: "50px"}}  class="post-title">Softwares</h3>
    <p data-aos ="fade-in" class="post-intro">SolidEdge</p>
    <p data-aos ="fade-in" class="post-intro">PhotoShop</p>
    <p data-aos ="fade-in" class="post-intro">Ableton</p>
    <p data-aos ="fade-in" class="post-intro">Filmora</p>
    </div>
    </div>
    

  </div>
    );  
};

export default Flip;