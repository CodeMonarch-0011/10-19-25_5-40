import "../../styles/ui.css";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ContactContextFunction } from "../../context/contact.jsx";

export function Footer() {
  const { openContactPopup } = ContactContextFunction();

  return (
    <section className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <span>Alexander Dreymon</span>
          <button onClick={openContactPopup}>Get in Touch</button>
        </div>

        <nav className="footer-nav">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#filmography">Filmograpgy</a>
          <a href="#early-career">Early Career</a>
          <a href="#rise">Rise</a>
          <a href="#legacy">Legacy</a>
          <a href="#film-work">Film Work</a>
          <a href="#personal-life">Personal Life</a>
        </nav>

        <div className="footer-icons">
          <span>
            <BiLogoGmail />
          </span>
          <span>
            <FaXTwitter />
          </span>
          <span>
            <FaFacebookF />
          </span>
        </div>
      </div>

      <div className="copyrights">Copyright 2025 @ All Rights Reserved</div>
    </section>
  );
}
