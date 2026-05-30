import director1 from "../assets/director1.webp";
import director2 from "../assets/director2.webp";

import ceo from "../assets/ceo.webp";
import coo from "../assets/COO.webp";
import cto from "../assets/CTO.webp";

import cfo from "../assets/CFO.webp";
import cmo from "../assets/CMO.webp";
import cmo2 from "../assets/CMO2.webp";

const Card = ({ image, name, role, quote, tags }) => (
  <div className="card">

    <div className="card-top-line"></div>

    <img src={image} alt={name} />

    <h3>{name}</h3>

    <p>{role}</p>

    <div className="tag-wrap">
      {tags.map((tag, index) => (
        <span className="tag" key={index}>
          {tag}
        </span>
      ))}
    </div>

    <div className="quote">
      "{quote}"
    </div>

    <span className="company-badge">
      APK INFOTECH
    </span>

  </div>
);

export default function About() {
  return (
    <div className="about-page">


      {/* CEO */}
      <section className="section">

        <h2>
          Chief <span>Executive Officer</span>
        </h2>

        <div className="grid-center">

          <div className="single-card">

            <Card
              image={ceo}
              name="Chief Executive Officer"
              role="Vision & Strategy"
              quote="Transforming ideas into impactful solutions."
              tags={[
                "Vision",
                "Leadership",
                "Growth"
              ]}
            />

          </div>

        </div>

      </section>
      
      {/* DIRECTORS */}
      <section className="section">

        <h2>
          Our <span>Directors</span>
        </h2>

        <div className="grid-2">

          <Card
            image={director1}
            name="Director"
            role="Leadership & Growth"
            quote="Driving innovation and long term growth."
            tags={[
              "Leadership",
              "Strategy",
              "Innovation"
            ]}
          />

          <Card
            image={director2}
            name="Director"
            role="Operations & Management"
            quote="Building strong teams and sustainable success."
            tags={[
              "Operations",
              "Management",
              "Growth"
            ]}
          />

        </div>

      </section>

      {/* LEADERSHIP */}
      <section className="section">

        <h2>
          Leadership <span>Team</span>
        </h2>

        <div className="grid-3">

          <Card
            image={coo}
            name="Chief Operating Officer"
            role="Operations"
            quote="Optimizing performance through operational excellence."
            tags={[
              "Operations",
              "Planning",
              "Execution"
            ]}
          />

          <Card
            image={cto}
            name="Chief Technology Officer"
            role="Technology"
            quote="Building scalable technology for tomorrow."
            tags={[
              "Technology",
              "AI",
              "Development"
            ]}
          />

          <Card
            image={cfo}
            name="Chief Financial Officer"
            role="Finance"
            quote="Ensuring sustainable growth through smart decisions."
            tags={[
              "Finance",
              "Budget",
              "Analytics"
            ]}
          />

        </div>

      </section>

      {/* MARKETING */}
      <section className="section">

        <h2>
          Marketing <span>Team</span>
        </h2>

        <div className="grid-2">

          <Card
            image={cmo}
            name="Marketing Head"
            role="Marketing Strategy"
            quote="Connecting innovation with the right audience."
            tags={[
              "Marketing",
              "Campaigns",
              "Branding"
            ]}
          />

          <Card
            image={cmo2}
            name="Brand Manager"
            role="Brand Development"
            quote="Creating memorable brand experiences."
            tags={[
              "Brand",
              "Content",
              "Growth"
            ]}
          />

        </div>

      </section>

      {/* VALUES */}
      <section className="values-section">

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