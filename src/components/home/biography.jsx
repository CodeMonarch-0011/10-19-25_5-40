import "../../styles/home.css";
import image from "/images/Alex Dreymor (3).jpeg";

export function Biography() {
  return (
    <section className="biography" id="about">
      <span className="biography-hdr">Biography</span>

      <div className="biography-main">
        <div className="biography-txt">
          Alexander Dreymon (born Alexander Doetsch) was born on February 7,
          1983, in Munich, Germany. Raised across Europe and exposed to several
          languages and cultures, Dreymon developed a cosmopolitan sensibility
          from an early age. He pursued formal training at prestigious acting
          institutions — the kind of rigorous preparation that underpins his
          controlled, disciplined performances. <br />
          Before his breakout on television, Dreymon cultivated stage experience
          in European theaters and trained extensively in physical performance
          disciplines, including stage combat, horsemanship, and movement —
          skills that later lent authenticity to his roles in period pieces and
          action sequences.
        </div>

        <div className="biography-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
