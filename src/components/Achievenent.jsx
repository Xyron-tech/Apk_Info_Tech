import { useState, useEffect } from "react";
import achivement1 from "../assets/achivement1.webp";
import achivement2 from "../assets/achivement2.webp";
import achivement3 from "../assets/achivement3.webp";
import achivement4 from "../assets/achivement4.webp";
import achivement5 from "../assets/achivement5.webp";
import achivement6 from "../assets/achivement6.webp";
import achivement7 from "../assets/achivement7.webp";
import achivement8 from "../assets/achivement8.webp";
import achivement9 from "../assets/achivement9.webp";
import "./Achievement.css";

/* ─── DATA ─────────────────────────────────────────── */
const section1Cards = [
  { img: achivement2 },
  { img: achivement3 },
  { img: achivement4 },
  { img: achivement5 },
];

const section2Cards = [
  { img: achivement6 },
  { img: achivement7 },
  { img: achivement8 },
  { img: achivement9 },
];

/* ─── CARD ──────────────────────────────────────────── */
const AchCard = ({ img, className }) => (
  <div className={`ach-card ${className || ""}`}>
    <div className="ach-card-img-wrap">
      <img src={img} alt="Achievement" className="ach-card-img" />
    </div>
    <div className="ach-card-body">
      <h4>Achievement</h4>
      <p className="ach-card-text">
        Celebrating growth, learning, teamwork and memorable moments together.
      </p>
      <span className="ach-badge">APK INFOTECH</span>
    </div>
  </div>
);

/* ─── DESKTOP LAYOUT ────────────────────────────────── */
function DesktopLayout() {
  return (
    <div className="ach-scroll-wrapper">

      {/* S1 — Hero: same navy bg as navbar */}
      <section className="ach-section ach-s1">
        <div className="ach-hero-inner">
          <div className="ach-hero-text">
            <h1 className="ach-hero-title">
              Our <span>Achievements</span>
            </h1>
            <div className="ach-divider ach-divider-center" />
            <p className="ach-hero-sub">
              Celebrating milestones and success stories
            </p>
          </div>
          <div className="ach-hero-img-wrap">
            <img src={achivement1} alt="Hero Achievement" />
          </div>
        </div>
      </section>

      {/* S2 — Gallery */}
      <section className="ach-section ach-s2">
        <div className="ach-section-inner">
          {/* Header pinned to top */}
          <div className="ach-section-header">
            <h2>Achievement <span>Gallery</span></h2>
            <div className="ach-header-underline" />
            <p className="ach-section-desc">
              Moments that reflect dedication, creativity and continuous progress.
            </p>
          </div>
          <div className="ach-grid">
            {section1Cards.map((c, i) => (
              <AchCard key={i} img={c.img} />
            ))}
          </div>
        </div>
      </section>

      {/* S3 — Stories */}
      <section className="ach-section ach-s3">
        <div className="ach-section-inner">
          <div className="ach-section-header">
            <h2>Success <span>Stories</span></h2>
            <div className="ach-header-underline" />
            <p className="ach-section-desc">
              Every achievement represents passion, effort and inspiring journeys.
            </p>
          </div>
          <div className="ach-grid">
            {section2Cards.map((c, i) => (
              <AchCard key={i} img={c.img} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

/* ─── MOBILE LAYOUT ─────────────────────────────────── */
function MobileLayout() {
  // Each card gets incrementing z-index for proper stacking
  // Last section cards = position:relative (free scroll)
  let z = 10;

  return (
    <div className="ach-mobile-wrapper">

      {/* ── Hero ── */}
      <div className="ach-mob-hero" style={{ position: "sticky", top: 0, zIndex: z++ }}>
        <div className="ach-mob-hero-text">
          <h1>Our <span>Achievements</span></h1>
          <div className="ach-mob-divider" />
          <p>Celebrating milestones and success stories</p>
        </div>
        <div className="ach-mob-hero-img">
          <img src={achivement1} alt="Hero Achievement" />
        </div>
      </div>

      {/* ── S2 Section label ── */}
      <div
        className="ach-mob-label ach-mob-label-s2"
        style={{ position: "sticky", top: 0, zIndex: z++ }}
      >
        <h2>Achievement <span>Gallery</span></h2>
        <div className="ach-header-underline" />
        <p>Moments that reflect dedication, creativity and continuous progress.</p>
      </div>

      {/* ── S2 Cards — sticky ── */}
      {section1Cards.map((c, i) => (
        <div
          key={`s2-${i}`}
          className="ach-mob-card-wrap ach-mob-bg-s2"
          style={{ position: "sticky", top: 0, zIndex: z++ }}
        >
          <AchCard img={c.img} className="ach-mob-card-item" />
        </div>
      ))}

      {/* ── S3 Section label ── */}
      <div
        className="ach-mob-label ach-mob-label-s3"
        style={{ position: "sticky", top: 0, zIndex: z++ }}
      >
        <h2>Success <span>Stories</span></h2>
        <div className="ach-header-underline" />
        <p>Every achievement represents passion, effort and inspiring journeys.</p>
      </div>

      {/* ── S3 Cards — sticky (overlay effect, same as s2) ── */}
      {section2Cards.map((c, i) => (
        <div
          key={`s3-${i}`}
          className="ach-mob-card-wrap ach-mob-bg-s3"
          style={{ position: "sticky", top: 0, zIndex: z++ }}
        >
          <AchCard img={c.img} className="ach-mob-card-item" />
        </div>
      ))}

    </div>
  );
}

export default function Achievement() {
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth <= 768
  );

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <div className="achievement-page">
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </div>
  );
}