import React, { useState, useEffect, useRef } from 'react';

const launchData = [
  {
    tag: 'Client Services', tagIcon: 'handshake',
    title: 'Corporate Staffing & Recruitment',
    desc: 'End-to-end HR solutions for startups to enterprises. We source, screen, and place the right candidates fast.',
    topics: ['Talent Sourcing', 'Resume Screening', 'Interview Coordination', 'Onboarding Support', 'Contract Staffing', 'Permanent Placement'],
    duration: 'Ongoing', mode: 'On-Demand',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
  },
  {
    tag: '', tagIcon: 'graduation-cap',
    title: 'Live Internship Program',
    desc: 'Work on real industry projects, get mentored by professionals, and earn a certificate recognized by top companies.',
    topics: ['Live Projects', '1:1 Mentorship', 'Industry Certificate', 'Portfolio Building', 'Networking', 'Job Referrals'],
    duration: '1–3 Months', mode: 'Hybrid',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80',
  },
  {
    tag: 'Full Stack', tagIcon: 'code',
    title: 'Full Stack Web Development',
    desc: 'Master the MERN stack from scratch. Build production-ready apps with React, Node.js, MongoDB & Express.',
    topics: ['HTML · CSS · JS', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Deployment', 'Git & GitHub'],
    duration: '4 Months', mode: 'Online / Offline',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
  },
  {
    tag: 'Agentical AI', tagIcon: 'brain',
    title: 'Agentical AI Development',
    desc: 'Build the next generation of autonomous AI agents using LangChain, OpenAI, and multi-agent frameworks.',
    topics: ['LangChain', 'OpenAI API', 'Agent Frameworks', 'RAG Systems', 'Vector DBs', 'Tool Use', 'Prompt Engineering', 'Deployment'],
    duration: '3 Months', mode: 'Online',
    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=80',
  },
  {
    tag: 'Cyber Security', tagIcon: 'shield',
    title: 'Ethical Hacking & Cyber Security',
    desc: 'Protect systems and networks. Learn penetration testing, vulnerability assessment, and security hardening.',
    topics: ['Network Security', 'Kali Linux', 'Pen Testing', 'OWASP Top 10', 'SOC Basics', 'Malware Analysis', 'Bug Bounty', 'CTF Challenges'],
    duration: '3 Months', mode: 'Online / Offline',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80',
  },
];

const tagColors = {
  'Full Stack':       { bg: '#EEEDFE', color: '#3C3489' },
  'Agentical AI':    { bg: '#FAEEDA', color: '#633806' },
  'Cyber Security':  { bg: '#E1F5EE', color: '#085041' },
  'Client Services': { bg: '#FAECE7', color: '#712B13' },
};

function getTagStyle(tag) {
  return tagColors[tag] || { bg: '#F1EFE8', color: '#444441' };
}

function getOffset(idx, current, total) {
  const raw  = idx - current;
  const half = Math.floor(total / 2);
  if (raw >  half) return raw - total;
  if (raw < -half) return raw + total;
  return raw;
}

const STEP = 420;

/* ── PosterCard ── */
function PosterCard({ item, offset, onClick }) {
  const abs   = Math.abs(offset);
  const scale = abs === 0 ? 1 : abs === 1 ? 0.78 : 0.62;
  const tx    = offset * STEP;
  const tz    = abs === 0 ? 0 : abs === 1 ? -100 : -200;
  const ry    = offset === 0 ? 0 : offset > 0 ? -30 * Math.min(abs, 1.5) : 30 * Math.min(abs, 1.5);
  const op    = abs === 0 ? 1 : abs === 1 ? 0.72 : 0.4;
  const zi    = 10 - abs;
  if (abs > 2) return null;

  return (
    <div
      className={`cs-card-wrapper ${offset === 0 ? 'cs-active' : ''}`}
      style={{
        transform: `translateX(${tx}px) translateZ(${tz}px) scale(${scale}) rotateY(${ry}deg)`,
        opacity: op, zIndex: zi,
        cursor: offset !== 0 ? 'pointer' : 'default',
        filter: offset !== 0 ? 'brightness(0.65)' : 'none',
      }}
      onClick={() => offset !== 0 && onClick()}
    >
      <div className="cs-card cs-poster-card">
        <img src={item?.img} alt="poster" className="cs-poster-img" />
        {item?.link && (
          <a href={item.link} target="_blank" rel="noreferrer"
            className="cs-poster-btn" onClick={e => e.stopPropagation()}>
            Apply Now →
          </a>
        )}
      </div>
    </div>
  );
}

/* ── CourseCard ── */
function CourseCard({ item, offset, onClick }) {
  const abs   = Math.abs(offset);
  const scale = abs === 0 ? 1 : abs === 1 ? 0.78 : 0.62;
  const tx    = offset * STEP;
  const tz    = abs === 0 ? 0 : abs === 1 ? -100 : -200;
  const ry    = offset === 0 ? 0 : offset > 0 ? -30 * Math.min(abs, 1.5) : 30 * Math.min(abs, 1.5);
  const op    = abs === 0 ? 1 : abs === 1 ? 0.72 : 0.4;
  const zi    = 10 - abs;
  if (abs > 2) return null;

  const tagStyle = getTagStyle(item.tag);

  return (
    <div
      className={`cs-card-wrapper ${offset === 0 ? 'cs-active' : ''}`}
      style={{
        transform: `translateX(${tx}px) translateZ(${tz}px) scale(${scale}) rotateY(${ry}deg)`,
        opacity: op, zIndex: zi,
        cursor: offset !== 0 ? 'pointer' : 'default',
        filter: offset !== 0 ? 'brightness(0.65)' : 'none',
      }}
      onClick={() => offset !== 0 && onClick()}
    >
      <div className="cs-card">
        <div className="cs-card-img-wrap">
          <img src={item?.img} alt={item.title} className="cs-card-img" />
          <div className="cs-img-overlay" />
        </div>
        <div className="cs-card-body">
          {item?.tag && (
            <span className="cs-badge" style={{ background: tagStyle.bg, color: tagStyle.color }}>
              {item?.tag}
            </span>
          )}
          <h3 className="cs-card-title">{item.title}</h3>
          <p className="cs-card-desc">{item.desc}</p>
          <div className="cs-topics">
            {item?.topics?.map((t, i) => (
              <span key={i} className="cs-topic">{t}</span>
            ))}
          </div>
          <div className="cs-meta">
            {item?.duration && (
              <span className="cs-meta-item cs-meta-duration">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                {item?.duration}
              </span>
            )}
            {item?.mode && (
              <span className="cs-meta-item cs-meta-mode">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                {item?.mode}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main Slider ── */
export default function CourseSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused]   = useState(false);
  const touchStartX = useRef(null);
  const total = launchData.length;

  const goTo = (idx) => setCurrent((idx + total) % total);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  /* keyboard navigation */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  /* ✅ single auto-play — 3.5s, pauses on hover */
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % total);
    }, 3500);
    return () => clearInterval(timer);
  }, [paused, total]);

  /* touch swipe */
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <section className="cs-root">
         <h2 className="cs-heading">Featured Programs</h2>
      <p className="cs-subtitle">Explore our latest programs and initiatives</p>
      <div className="cs-divider" />

      <div
        className="cs-stage"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {launchData?.map((item, i) => {
          const offset   = getOffset(i, current, total);
          const isPoster = !!item.link;
          return isPoster
            ? <PosterCard key={i} item={item} offset={offset} onClick={() => goTo(i)} />
            : <CourseCard key={i} item={item} offset={offset} onClick={() => goTo(i)} />;
        })}
      </div>

      <div className="cs-nav-btns">
        <button className="cs-nav-btn" onClick={prev} aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button className="cs-nav-btn" onClick={next} aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>

      <div className="cs-dots" role="tablist">
        {launchData?.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            className={`cs-dot ${i === current ? 'cs-dot-active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}