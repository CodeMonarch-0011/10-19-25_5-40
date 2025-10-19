import "../../styles/home.css";
import image from "/images/Alex Dreymor (1).jpeg";

export function EarlyCareer() {
  return (
    <section className="early-career">
      <span className="early-career-hdr">Early Career</span>

      <div className="early-career-main">
        <div className="early-career-txt">
          Dreymon’s earliest screen work included roles in European television
          and film, and small parts in British productions. His international
          upbringing and training allowed him to shift fluidly between accents
          and performance styles, and directors took note of the intensity he
          brought to physically demanding sequences as well as quieter, internal
          scenes. <br /> <br /> Early television credits and indie films served
          as a proving ground, where Dreymon built a reputation as an actor
          willing to commit physically and emotionally to his parts. This strong
          foundation positioned him to take on the kind of lead role that
          demands both stamina and nuance.
        </div>

        <div className="early-career-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
