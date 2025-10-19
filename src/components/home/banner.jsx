import "../../styles/home.css";
import image from "/images/Alex Dreymor-2 (1).jpg";
import { ContactContextFunction } from "../../context/contact.jsx";

export function Banner() {
  const { openContactPopup } = ContactContextFunction();

  return (
    <section className="banner" id="home">
      <div className="banner-text">
        <span>
          Welcome to the World of <br />
          Alexander Dreymon
        </span>
        <span>
          Alexander Dreymon is an internationally trained actor, producer, and
          director known for his commanding presence in historical drama and
          action-driven roles. With a background that spans multiple countries
          and classical training on both sides of the Atlantic, Dreymon brings a
          blend of physical intensity and emotional subtlety to his leading
          work. He emerged as a modern face of historical television thanks to a
          career-defining role that married star power to expansive
          storytelling.
        </span>

        <button onClick={openContactPopup}>Get in Touch</button>
      </div>

      <div className="banner-img">
        <img src={image} />
      </div>
    </section>
  );
}
