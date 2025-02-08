import React from "react";
import "./Footer.css";
import instaLogo from "./../../img/icons/ic-instagram.svg";
import whatsAppLogo from "./../../img/icons/ic-whatsapp.svg";

function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__header">
          <h2 className="title-2">Contact</h2>
        </div>

        <div className="info-blocks">
          <div className="block1__3">
            <span className="label">Phone</span>
            <p className="text">+49 999 999 99 99</p>
          </div>

          <div className="block2__4">
            <span className="label">Socials</span>
            <div className="icons">
              <img src={instaLogo} alt="Instagram Logo" />
              <img src={whatsAppLogo} alt="WhatsApp Logo" />
            </div>
          </div>

          <div className="block1__3">
            <span className="label">Address</span>
            <p className="text">
              {" "}
              Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
            </p>
          </div>

          <div className="block2__4">
            <span className="label">Working Hours</span>
            <p className="text">24 hours a day</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
