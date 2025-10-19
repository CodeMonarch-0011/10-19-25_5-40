import "../../styles/home.css";
import { Data } from "../../static-contents/film-work";

function FilmWorkListCard({ hdr, cnt }) {
  return (
    <div className="film-work-list-card">
      <div className="film-work-list-card-hdr">
        <div className="pointer" aria-hidden />
        <span>{hdr}</span>
      </div>

      <div className="film-work-list-card-txt">{cnt}</div>
    </div>
  );
}

export function FilmWork() {
  return (
    <section className="film-work" id="film-work">
      <span className="film-work-hdr">Film, Stage, and Other Work</span>
      <div className="film-work-txt">
        Dreymon’s background in theatre and classical training remains a
        touchstone of his work. Stage experiences in Europe helped him build
        vocal and physical technique, while screen roles allowed him to
        translate those fundamentals into cinematic storytelling.
      </div>

      <div className="film-work-cnt">
        <div className="film-work-list">
          {Data.map((dt, i) => (
            <FilmWorkListCard key={i} hdr={dt.hdr} cnt={dt.content} />
          ))}
        </div>
      </div>
    </section>
  );
}
