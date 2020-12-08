import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";

const Flipinfo2 = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
}, []);
return (
    <div>
        <p data-aos="fade-up" class="About-info">"Redesign of supporting structures for electronic and control devices and reducing their manufacturing costs by 80%" (Together with maintaining their original performances)</p>
        <p data-aos="fade-in" class="About-info">"Redesign of cameras and sensors holders in autonomus cars" (Acheiving significant reduction of manufacturing costs and weight)</p>

        
    </div>
    );  
};

export default Flipinfo2;