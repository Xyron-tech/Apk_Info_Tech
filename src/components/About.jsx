

import director1 from "../assets/director1.webp";
import director2 from "../assets/director2.webp";

import ceo from "../assets/ceo.webp";
import coo from "../assets/COO.webp";
import cto from "../assets/CTO.webp";

import cfo from "../assets/CFO.webp";
import cmo from "../assets/CMO.webp";
import cmo2 from "../assets/CMO2.webp";

const Card = ({ image, name, designation, content }) => (
  <div className="card">

    <div className="card-top-line"></div>

    <img src={image} alt={name} />

    <h3>{name}</h3>

    <div className="quote">
      {content}
    </div>

    <span className="company-badge">
      {designation}
    </span>

  </div>
);

export default function About() {
  return (
    <div className="about-page">

      {/* DIRECTORS */}
      <section className="overlay-section s1">

        <h2>
          Our <span>Directors</span>
        </h2>

        <div className="grid-2">

          <Card
            image={director1}
            name="AMBIKA A"
            designation="DIRECTOR"
            content="Steering the company with vision and strategic leadership while driving innovation and long-term business growth."
          />

          <Card
            image={director2}
            name="ZIYAD ZAHIR HUSSAN"
            designation="DIRECTOR"
            content="Guiding organizational growth and building sustainable success through strong leadership and management."
          />

        </div>

      </section>

      {/* CEO */}
      <section className="overlay-section s2">

        <h2>
          Our <span>Chief Executive</span>
        </h2>

        <div className="grid-center">

          <div className="single-card">

            <Card
              image={ceo}
              name="DHAYANITHI ALAGESAN"
              designation="CEO"
              content="Driving the company vision, culture, and long-term success through innovation and strategic decision making."
            />

          </div>

        </div>

      </section>

      {/* LEADERSHIP TEAM */}
      <section className="overlay-section s3">

        <h2>
          Our <span>Leadership Team</span>
        </h2>

        <div className="grid-3">

          <Card
            image={coo}
            name="YASIN S"
            designation="COO"
            content="Streamlining operations and ensuring organizational efficiency to support growth and performance."
          />

          <Card
            image={cto}
            name="MAGESWARAN B"
            designation="CTO"
            content="Driving innovation and technical excellence while building scalable technology solutions for the future."
          />

          <Card
            image={cfo}
            name="KAMESHVARAN M"
            designation="CFO"
            content="Managing financial strategy and ensuring sustainable growth through smart planning and fiscal discipline."
          />

        </div>

      </section>

      {/* MARKETING TEAM */}
      <section className="overlay-section s4">

        <h2>
          Our <span>Marketing Team</span>
        </h2>

        <div className="grid-2">

          <Card
            image={cmo}
            name="ATTRAMBAKAM ZIYAM KUMAR"
            designation="CMO"
            content="Building brand presence and creating impactful marketing strategies that connect with the right audience."
          />

          <Card
            image={cmo2}
            name="SUNIL"
            designation="CMO"
            content="Driving digital campaigns and audience engagement to strengthen brand growth and visibility."
          />

        </div>

      </section>

      {/* VALUES */}
      <section className="overlay-section values-section s5">

        <h2>
          Our <span>Core Values</span>
        </h2>

        <div className="values-grid">

          <div className="value-card">
            <h3>Innovation</h3>
            <p>Creating solutions that inspire growth and progress.</p>
          </div>

          <div className="value-card">
            <h3>Integrity</h3>
            <p>Building trust through honesty and transparency.</p>
          </div>

          <div className="value-card">
            <h3>Collaboration</h3>
            <p>Achieving success together as one strong team.</p>
          </div>

          <div className="value-card">
            <h3>Excellence</h3>
            <p>Delivering quality and value in every project.</p>
          </div>

        </div>

      </section>

    </div>
  );
}