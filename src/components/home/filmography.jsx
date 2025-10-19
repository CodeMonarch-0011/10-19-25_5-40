import { Data } from "../../static-contents/filmography";
import "../../styles/home.css";
import image from "/images/Alex Dreymor (2).jpeg";

function FilmographyCard({ topic, content }) {
  return (
    <div className="filmography-card">
      <div className="pointer" />
      <div className="filmography-card-topic">{topic}</div>
      <div className="filmography-card-content">{content}</div>
    </div>
  );
}

export function Filmography() {
  return (
    <section className="filmography" id="filmography">
      <span className="filmography-hdr">
        Selected Filmography & Television Highlights
      </span>

      <div className="filmography-main">
        <div className="filmography-grid">
          {Data.map((dt, i) => (
            <FilmographyCard key={i} topic={dt.topic} content={dt.content} />
          ))}
        </div>

        <div className="filmography-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
