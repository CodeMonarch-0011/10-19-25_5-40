import "../../styles/home.css";
import { ContactContextFunction } from "../../context/contact.jsx";

export function Philanthropy() {
  const { openContactPopup } = ContactContextFunction();

  return (
    <section className="philanthropy">
      <span className="philanthropy-hdr">Philanthropy & Advocacy</span>
      <div className="philanthropy-txt">
        While maintaining privacy, Dreymon supports causes aligned with cultural
        and historical preservation and has contributed time and resources to
        charitable efforts connected to creative education and community arts
        programs. His public profile has enabled him to raise awareness for
        training programs that provide young performers with access to physical
        and theatrical instruction.
      </div>
      <button onClick={openContactPopup}>Get in Touch</button>
    </section>
  );
}
