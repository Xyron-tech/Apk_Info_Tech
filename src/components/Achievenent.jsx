import achivement1 from "../assets/achivement1.webp";
import achivement2 from "../assets/achivement2.webp";
import achivement3 from "../assets/achivement3.webp";
import achivement4 from "../assets/achivement4.webp";
import achivement5 from "../assets/achivement5.webp";
import achivement6 from "../assets/achivement6.webp";
import achivement7 from "../assets/achivement7.webp";
import achivement8 from "../assets/achivement8.webp";
import achivement9 from "../assets/achivement9.webp";

const section1 = [achivement2, achivement3, achivement4, achivement5];
const section2 = [achivement6, achivement7, achivement8, achivement9];

const Card = ({ img }) => (
  <div className="ach-card">
    <div className="ach-card-img-wrap">
      <img src={img} alt="Achievement" className="ach-card-img" />
    </div>

    <div className="ach-card-body">
      <h4>Achievement</h4>
      <p className="ach-text">
        Celebrating growth, learning, teamwork and memorable moments together.
      </p>
      <span className="ach-badge">APK INFOTECH</span>
    </div>
  </div>
);

export default function Achievement() {
  return (
    <div className="achievement-page">

      {/* HERO SECTION (UPDATED) */}
      <section className="achievenment-hero-section">

        <div className="hero-content">

          <div className="title-box">
            <h1 className="title">
              Our <span>Achievements</span>
            </h1>

            <div className="sec-divider"></div>

            <p className="title-sub">
              Celebrating milestones and success stories
            </p>
          </div>

        </div>

        <div className="hero-img-wrap">
          <img src={achivement1} alt="Hero Achievement" />
        </div>

      </section>

      {/* SECTION 1 */}
      <section className="ach-section">
        <div className="glass-bg">

          <div className="section-header">
            <h2>Achievement <span>Gallery</span></h2>
            <div className="sec-divider"></div>
            <p className="section-text">
              Moments that reflect dedication, creativity and continuous progress.
            </p>
          </div>

          <div className="ach-grid">
            {section1.map((img, index) => (
              <Card key={index} img={img} />
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 2 (UNCHANGED) */}
      <section className="ach-section">
        <div className="glass-bg">

          <div className="section-header">
            <h2>Success <span>Stories</span></h2>
            <div className="sec-divider"></div>
            <p className="section-text">
              Every achievement represents passion, effort and inspiring journeys.
            </p>
          </div>

          <div className="ach-grid">
            {section2.map((img, index) => (
              <Card key={index} img={img} />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}