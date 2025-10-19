import "../../styles/home.css";
import { ContactContextFunction } from "../../context/contact.jsx";

export function LookingAhead() {
  const { openContactPopup } = ContactContextFunction();

  return (
    <section className="looking-ahead">
      <span className="looking-ahead-hdr">Looking Ahead</span>
      <div className="looking-ahead-txt">
        As Dreymon continues to expand his creative reach, the natural next
        steps include more producing and directing on projects with historical
        scale, plus selective acting roles that allow him to explore new genres.
        His background and disciplined approach make him well suited to
        shepherding adaptations, original period dramas, or high-concept
        thrillers that mix physical storytelling with emotional complexity.
        Whether leading another serialized epic or stepping behind the camera to
        shape the next generation of stories, Alexander Dreymon’s trajectory
        points to a long and influential career in international film and
        television
      </div>
      <button onClick={openContactPopup}>Get in Touch</button>
    </section>
  );
}
