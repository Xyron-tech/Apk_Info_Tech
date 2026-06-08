import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";

import director1 from "../assets/director1.webp";
import director2 from "../assets/director2.webp";
import ceo    from "../assets/ceo.webp";
import coo    from "../assets/COO.webp";
import cto    from "../assets/CTO.webp";
import cfo    from "../assets/CFO.webp";
import cmo    from "../assets/CMO.webp";
import cmo2   from "../assets/CMO2.webp";

gsap.registerPlugin(ScrollTrigger);

/* ── Data ── */
const SECTIONS = [
  {
    id: "s1", title: "Our", highlight: "Directors",
    sub: "The founding pillars of APK INFOTECH",
    cols: "cols-2",
    members: [
      { img: director1, name: "AMBIKA A",           role: "Steering the company with vision and strategic leadership", badge: "DIRECTOR", id: "dir1" },
      { img: director2, name: "ZIYAD ZAHIR HUSSAN", role: "Guiding growth and sustainable business excellence",        badge: "DIRECTOR", id: "dir2" },
    ],
  },
  {
    id: "s2", title: "Our", highlight: "Chief Executive",
    sub: "Leading APK INFOTECH with purpose and passion",
    cols: "cols-1",
    members: [
      { img: ceo, name: "DHAYANITHI ALAGESAN", role: "Driving the company's vision, culture, and long-term success", badge: "CEO", id: "ceo" },
    ],
  },
  {
    id: "s3", title: "Our", highlight: "Leadership Team",
    sub: "Operations, Technology & Finance — the core pillars driving APK INFOTECH",
    cols: "cols-3", wide: true,
    members: [
      { img: coo, name: "YASIN S",       role: "Streamlining operations for peak performance and growth",          badge: "COO", id: "coo" },
      { img: cto, name: "MAGESWARAN B",  role: "Driving innovation and technical excellence across every product", badge: "CTO", id: "cto" },
      { img: cfo, name: "KAMESHVARAN M", role: "Managing financial strategy and ensuring fiscal resilience",        badge: "CFO", id: "cfo" },
    ],
  },
  {
    id: "s4", title: "Our", highlight: "Marketing Team",
    sub: "Building our brand presence and community",
    cols: "cols-2", free: true,
    members: [
      { img: cmo,  name: "ATTRAMBAKAM ZIYAM KUMAR", role: "Building brand presence and crafting growth strategies that connect", badge: "CMO", id: "cmo1" },
      { img: cmo2, name: "SUNIL",                   role: "Driving digital campaigns and audience engagement at scale",          badge: "CMO", id: "cmo2" },
    ],
  },
];

const ALL_CARDS = SECTIONS.flatMap((s) =>
  s.members.map((m) => ({ ...m, sectionFree: !!s.free, sectionId: s.id }))
);

/* ── Sub-components ── */
function SectionHeader({ title, highlight, sub }) {
  return (
    <div className="ab-section-header">
      <h2>{title} <span>{highlight}</span></h2>
      {sub && <p>{sub}</p>}
      <div className="ab-divider" />
    </div>
  );
}

function TeamCard({ img, name, role, badge, id }) {
  return (
    <div className="ab-team-card" id={`card-${id}`}>
      <div className="ab-card-img-wrap">
        <img src={img} alt={name} className="ab-card-img" />
      </div>
      <div className="ab-card-body">
        <div className="ab-card-name">{name}</div>
        <div className="ab-card-role">{role}</div>
        <span className="ab-badge">{badge}</span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   DESKTOP LAYOUT (769px+)
   CSS `position:sticky` handles the overlay stacking.
   GSAP is used ONLY for entrance animations — no pin.
══════════════════════════════════════════════ */
function DesktopLayout() {
  useEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());

    /* S1 — page load animations */
    gsap.from("#hdr-s1",    { y: -30, opacity: 0, duration: 1.0, ease: "power2.out", delay: 0.1 });
    gsap.from("#card-dir1", { x: -80, opacity: 0, duration: 1.8, ease: "power3.out", delay: 0.25 });
    gsap.from("#card-dir2", { x:  80, opacity: 0, duration: 1.8, ease: "power3.out", delay: 0.45 });
    gsap.from("#sec-s1 .ab-badge", { y: 10, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.7 });

    /* S2–S4 — scroll-triggered entrance animations */
    [
      { s: "s2", cards: ["card-ceo"],                       layout: "single" },
      { s: "s3", cards: ["card-coo","card-cto","card-cfo"], layout: "triple" },
      { s: "s4", cards: ["card-cmo1","card-cmo2"],          layout: "double" },
    ].forEach(({ s, cards, layout }) => {
      const trigger = `#sec-${s}`;

      gsap.from(`#hdr-${s}`, {
        y: -30, opacity: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger, start: "top 85%" },
      });

      if (layout === "single") {
        gsap.from(`#${cards[0]}`, {
          y: 60, opacity: 0, duration: 1.4, ease: "power3.out",
          scrollTrigger: { trigger, start: "top 80%" },
        });
      } else {
        cards.forEach((c, i) => {
          const x = i === 0 ? -80 : i === cards.length - 1 ? 80 : 0;
          gsap.from(`#${c}`, {
            x, opacity: 0, duration: 1.8, ease: "power3.out",
            scrollTrigger: { trigger, start: "top 80%" },
            delay: i * 0.18,
          });
        });
      }

      gsap.from(`${trigger} .ab-badge`, {
        y: 10, opacity: 0, duration: 0.4, stagger: 0.1,
        scrollTrigger: { trigger, start: "top 70%" },
        delay: 0.3,
      });
    });

    /* Subtle scale-down as next section overlays */
    [
      { cards: ["#card-dir1","#card-dir2"],           trigger: "#sec-s2" },
      { cards: ["#card-ceo"],                         trigger: "#sec-s3" },
      { cards: ["#card-coo","#card-cto","#card-cfo"], trigger: "#sec-s4" },
    ].forEach(({ cards, trigger }) => {
      gsap.to(cards, {
        scale: 0.92,
        scrollTrigger: { trigger, start: "top 60%", end: "top 20%", scrub: 1.5 },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="ab-scroll-wrapper">
      {SECTIONS.map((sec) => (
        <section
          key={sec.id}
          id={`sec-${sec.id}`}
          className={`ab-team-section ab-${sec.id}`}
        >
          <div className={`ab-inner${sec.wide ? " ab-inner-wide" : ""}`}>
            <div id={`hdr-${sec.id}`}>
              <SectionHeader title={sec.title} highlight={sec.highlight} sub={sec.sub} />
            </div>
            <div className={`ab-grid ab-${sec.cols}`}>
              {sec.members.map((m) => <TeamCard key={m.id} {...m} />)}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════
   MOBILE LAYOUT (≤768px)
   CSS `position:sticky` per card.
   GSAP for entrance animations only — no pin.
══════════════════════════════════════════════ */
function MobileLayout() {
  useEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());

    gsap.utils.toArray(".ab-mob-card:not(.ab-mob-free)").forEach((card) => {
      gsap.fromTo(card,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 92%", toggleActions: "play none none none" },
        }
      );
    });

    gsap.utils.toArray(".ab-mob-free").forEach((card) => {
      gsap.fromTo(card,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.5, ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none none" },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="ab-mob-wrapper">
      {ALL_CARDS.map((card, i) => {
        const isFree       = card.sectionFree;
        const isFreeLast   = isFree && i === ALL_CARDS.length - 1;
        const sec          = SECTIONS.find((s) => s.id === card.sectionId);
        const isFirstInSec = sec.members[0].id === card.id;

        let cls = "ab-mob-card";
        if (isFree)     cls += " ab-mob-free";
        if (isFreeLast) cls += " ab-mob-free-last";

        return (
          <div key={card.id} className={cls} style={{ zIndex: 10 + i * 10 }}>
            {isFirstInSec && (
              <div className={`ab-mob-sec-label${i === 0 ? " first" : ""}`}>
                <h2>{sec.title} <span>{sec.highlight}</span></h2>
                <div className="ab-divider" />
              </div>
            )}
            <div className="ab-mob-card-inner">
              <div className="ab-card-img-wrap">
                <img src={card.img} alt={card.name} className="ab-card-img" />
              </div>
              <div className="ab-card-body">
                <div className="ab-card-name">{card.name}</div>
                <div className="ab-card-role">{card.role}</div>
                <span className="ab-badge">{card.badge}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── Root ── */
export default function About() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
}