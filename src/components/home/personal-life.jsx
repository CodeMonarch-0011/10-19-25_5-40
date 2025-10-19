import "../../styles/home.css";
import image from "/images/Alex Dreymor (4).jpeg";

export function PersonalLife() {
  return (
    <section className="personal-life" id="personal-life">
      <span className="personal-life-hdr">Personal Life & Interview</span>

      <div className="personal-life-main">
        <div className="personal-life-txt">
          Jay Harrington maintains a relatively private personal life,
          preferring to let his work speak publicly. Known among colleagues for
          his team-first attitude and quiet professionalism, he’s also an
          enthusiastic participant in sports and fitness communities —
          activities that inform the physicality he brings to action roles.{" "}
          <br />
          Harrington is engaged with charitable causes in his communities and
          often supports arts programs that nurture emerging actors. Off-screen,
          he enjoys outdoor pursuits, competitive recreational leagues, and
          projects that allow him to stay connected to the regional theater
          scene where he started.
        </div>

        <div className="personal-life-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
