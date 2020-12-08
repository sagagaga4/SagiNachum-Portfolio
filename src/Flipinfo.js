import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";

const Flipinfo = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
}, []);
return (
    <div>
        <p data-aos="fade-up" class="About-info">"I am a hardworking, dedicated self taught developer with over 2 years of programming experience based on autodidactic studying. Effective team member that will do what it takes to adress company needs"</p>

        <p data-aos="fade-in" class="About-info-simple" style={{fontSize:"60px"}} >"Simple & Bright" solutions driven person</p>




        
    </div>
    );  
};

export default Flipinfo;