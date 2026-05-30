import React, { useState } from 'react';

const services = [
  {
    id: 1,
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Tech Consultancy Services',
    desc: 'Transform your business with expert technology advisory. We evaluate your current IT landscape, identify gaps, and architect tailored digital strategies that drive measurable growth. From digital transformation roadmaps to technology stack selection, our consultants bring deep expertise across enterprise systems, cloud platforms, and emerging technologies to help you make confident, future-proof decisions.',
    color: '#6c63ff',
    bg: 'linear-gradient(135deg, #f0effe 0%, #e8e5ff 100%)',
  },
  {
    id: 2,
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
      </svg>
    ),
    title: 'Website Development',
    desc: 'We design and build high-performance websites that make a lasting first impression. From sleek corporate portals to feature-rich e-commerce platforms, our full-stack team delivers responsive, SEO-optimized websites using modern frameworks like React, Next.js, and Node.js. Every pixel is crafted for speed, accessibility, and conversion — ensuring your digital presence stands out in a competitive market.',
    color: '#0ea5e9',
    bg: 'linear-gradient(135deg, #e0f4ff 0%, #cceeff 100%)',
  },
  {
    id: 3,
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
      </svg>
    ),
    title: 'App Development',
    desc: 'Bring your app idea to life with our end-to-end mobile and web application development services. We build native iOS & Android apps, cross-platform solutions using Flutter and React Native, and progressive web apps (PWAs) that deliver seamless user experiences. From intuitive UI/UX design to robust backend APIs, we handle every stage of the development lifecycle — on time and within budget.',
    color: '#10b981',
    bg: 'linear-gradient(135deg, #e0faf3 0%, #ccf5e8 100%)',
  },
  {
    id: 4,
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/>
      </svg>
    ),
    title: 'Hardware & IoT Products',
    desc: 'Bridge the physical and digital worlds with our custom IoT and hardware solutions. We design and develop smart devices, embedded systems, and connected products tailored for industries including manufacturing, healthcare, agriculture, and smart homes. Our team handles everything from circuit design and firmware development to cloud integration and real-time data dashboards — delivering intelligent, scalable IoT ecosystems.',
    color: '#f59e0b',
    bg: 'linear-gradient(135deg, #fff8e6 0%, #ffefc2 100%)',
  },
  {
    id: 5,
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    title: 'Courses',
    desc: 'Accelerate your career with our industry-aligned training programs designed by experienced professionals. We offer hands-on courses in Full Stack Web Development, Agentical AI Development, Ethical Hacking & Cyber Security, Data Science, and more. Our curriculum blends theory with real-world projects, live coding sessions, and mentorship — equipping students with job-ready skills that employers actively seek.',
    color: '#8b5cf6',
    bg: 'linear-gradient(135deg, #f3eeff 0%, #e8deff 100%)',
  },
  {
    id: 6,
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Internship Program',
    desc: 'Gain real-world experience through our structured internship program built for aspiring professionals. Interns work on live client projects, collaborate with experienced developers and designers, and receive one-on-one mentorship throughout their tenure. With dedicated portfolio-building sessions, industry networking opportunities, and a recognized certification upon completion, our program is a proven launchpad for a successful tech career.',
    color: '#ec4899',
    bg: 'linear-gradient(135deg, #fff0f8 0%, #ffd6ee 100%)',
  },
  {
    id: 7,
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Placement Support',
    desc: 'We go beyond training — we ensure you land the right job. Our dedicated placement team provides resume crafting, mock interviews, aptitude coaching, and direct referrals to our extensive hiring partner network. With tie-ups across IT companies, startups, and MNCs, we actively match candidates to roles that align with their skills and ambitions. Our high placement success rate is a testament to our commitment to your career growth.',
    color: '#14b8a6',
    bg: 'linear-gradient(135deg, #e0faf8 0%, #ccf5f2 100%)',
  },
];

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="sv-root" id="services">
      {/* Header */}
      <div className="sv-header">
        <span className="sv-eyebrow">What We Offer</span>
        <h2 className="sv-title">Our Services</h2>
        <p className="sv-subtitle">
          End-to-end technology and career solutions designed to accelerate
          your growth — from consultation to deployment to placement.
        </p>
        <div className="sv-divider" />
      </div>

      {/* Grid */}
      <div className="sv-grid">
        {services?.map((s) => (
          <div
            key={s?.id}
            className={`sv-card ${hovered === s.id ? 'sv-card-hovered' : ''}`}
            style={{ '--card-color': s.color, '--card-bg': s.bg }}
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="sv-card-bar" />

            <div className="sv-card-head">
              <div className="sv-icon-wrap">
                {s?.icon}
              </div>
              <h3 className="sv-card-title">{s?.title}</h3>
            </div>

            {/* description */}
            <p className="sv-card-desc">{s?.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}