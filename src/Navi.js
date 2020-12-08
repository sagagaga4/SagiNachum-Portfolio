import React, { useState, useEffect } from "react";
import "./Navi.css";

function Navi() {
  const [show, handleShow] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(false);
      } else handleShow(true);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navi ${show && "navi__black"}`}>
            <div className="nav__logo">
            <i class="fab fa-stripe-s"></i>

</div>

    </div>
  );
}

export default Navi;
