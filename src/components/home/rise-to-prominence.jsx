import "../../styles/home.css";
import { Data } from "../../static-contents/rise-to-prominence";

function RiseToProminenceCard({ hdr, content }) {
  return (
    <div className="rise-to-prominence-card">
      <div>
        <div className="pointer" />
        <div>{hdr}</div>
      </div>
      <div>{content}z</div>
    </div>
  );
}

export function RiseToProminence() {
  return (
    <section className="rise-to-prominence">
      <span className="rise-to-prominence-hdr">Rise to Prominence</span>

      <div className="rise-to-prominence-txt">
        Alexander Dreymon’s rise to widespread recognition came with a
        high-profile casting that required both dramatic magnetism and rugged
        physicality.
      </div>

      <div className="rise-to-prominence-list">
        {Data.map((dt, i) => (
          <RiseToProminenceCard key={i} hdr={dt.hdr} content={dt.content} />
        ))}
      </div>
    </section>
  );
}
