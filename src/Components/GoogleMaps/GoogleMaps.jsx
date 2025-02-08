import React from "react";
import "./GoogleMaps.css";
function GoogleMaps() {
  return (
    <div className="container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2656.0725438611585!2d13.370452492011289!3d52.50793360001173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0xb0d57110b48ab0b6!2sLinkstra%C3%9Fe%202%2F8%20%20OG%2C%2010%2C%2010785%20Berlin!5e1!3m2!1sde!2sde!4v1738157715622!5m2!1sde!2sde"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen =""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default GoogleMaps;
