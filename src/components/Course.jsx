import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const courses = [
  {
    id: 1, title: 'Full Stack Web Development', category: 'Development',
    duration: '4 Months', mode: 'Online / Offline', level: 'Beginner to Advanced',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    topics: ['HTML · CSS · JS', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git & GitHub', 'Deployment'],
    desc: 'Master the MERN stack from scratch. Build production-ready web apps with React, Node.js, MongoDB & Express.',
    badge: { label: 'Development', color: '#3b82f6', bg: '#eff6ff' },
  },
  {
    id: 2, title: 'Agentic AI with Gen AI', category: 'AI/ML',
    duration: '3 Months', mode: 'Online', level: 'Intermediate',
    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=80',
    topics: ['LangChain', 'OpenAI API', 'Agent Frameworks', 'RAG Systems', 'Vector DBs', 'Prompt Engineering', 'Tool Use', 'Deployment'],
    desc: 'Build next-generation autonomous AI agents using LangChain, OpenAI, and multi-agent frameworks.',
    badge: { label: 'AI/ML', color: '#8b5cf6', bg: '#f5f3ff' },
  },
  {
    id: 3, title: 'VLSI Design', category: 'Hardware',
    duration: '4 Months', mode: 'Offline', level: 'Intermediate to Advanced',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
    topics: ['Digital Logic', 'Verilog / VHDL', 'FPGA Design', 'Synthesis', 'Timing Analysis', 'Place & Route', 'Simulation', 'IC Layout'],
    desc: 'Deep-dive into VLSI design. Master Verilog, FPGA prototyping, synthesis flows, and physical design.',
    badge: { label: 'Hardware', color: '#f59e0b', bg: '#fffbeb' },
  },
  {
    id: 4, title: 'Cyber Security', category: 'Security',
    duration: '3 Months', mode: 'Online / Offline', level: 'Beginner to Advanced',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80',
    topics: ['Network Security', 'Kali Linux', 'Penetration Testing', 'OWASP Top 10', 'SOC Basics', 'Malware Analysis', 'Bug Bounty', 'CTF Challenges'],
    desc: 'Hands-on training in ethical hacking, penetration testing, vulnerability assessment, and security hardening.',
    badge: { label: 'Security', color: '#ef4444', bg: '#fef2f2' },
  },
  {
    id: 5, title: 'Robotics and PCB Design', category: 'Hardware',
    duration: '3 Months', mode: 'Offline', level: 'Beginner to Intermediate',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80',
    topics: ['Arduino / Raspberry Pi', 'Sensors & Actuators', 'PCB Schematic', 'Altium / KiCad', 'Motor Control', 'IoT Integration', 'Soldering', 'Prototyping'],
    desc: 'Learn robotics fundamentals, PCB schematic design, layout, and fabrication. Build real robots and custom hardware prototypes.',
    badge: { label: 'Hardware', color: '#f59e0b', bg: '#fffbeb' },
  },
  {
    id: 6, title: 'Placement Readiness Program', category: 'Career',
    duration: '6 Weeks', mode: 'Online / Offline', level: 'All Levels',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80',
    topics: ['Resume Building', 'Mock Interviews', 'Aptitude Training', 'Group Discussion', 'LinkedIn Optimization', 'HR Rounds', 'Soft Skills', 'Job Referrals'],
    desc: 'Expert-led mock interviews, resume reviews, aptitude coaching, and direct referrals to our 100+ hiring partner network.',
    badge: { label: 'Career', color: '#10b981', bg: '#ecfdf5' },
  },
  {
    id: 7, title: 'Graduate Engineering Training (GET)', category: 'Career',
    duration: '2 Months', mode: 'Online / Offline', level: 'Fresh Graduates',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
    topics: ['Core Engineering', 'Industry Exposure', 'Project Work', 'Technical Communication', 'Problem Solving', 'Team Collaboration', 'Domain Specialization', 'Placement Support'],
    desc: 'A bridge program for fresh engineering graduates. Gain domain-specific skills, real project experience, and professional mindset.',
    badge: { label: 'Career', color: '#10b981', bg: '#ecfdf5' },
  },
];

const CATEGORIES = ['All Courses', 'Development', 'AI/ML', 'Hardware', 'Security', 'Career'];

export default function Course() {
  const location   = useLocation();
  const navSearch  = location.state?.search || '';  

  const [query, setQuery]       = useState(navSearch);
  const [inputVal, setInputVal] = useState(navSearch);
  const [activeTab, setActiveTab] = useState('All Courses');

  useEffect(() => {
    if (navSearch) {
      setQuery(navSearch);
      setInputVal(navSearch);
      setActiveTab('All Courses');
    }
  }, [navSearch]);

  const filtered = useMemo(() => {
    return courses?.filter(c => {
      const matchCat = activeTab === 'All Courses' || c.category === activeTab;
      const q = query.toLowerCase();
      const matchQ = !q ||
        c.title.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.topics.some(t => t.toLowerCase().includes(q)) ||
        c.desc.toLowerCase().includes(q) ||
        c.level.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, activeTab]);

  const handleSearch = () => { setQuery(inputVal?.trim()); setActiveTab('All Courses'); };
  const handleKey    = (e) => { if (e.key === 'Enter') handleSearch(); };
  const handleTab    = (tab) => { setActiveTab(tab); setQuery(''); setInputVal(''); };
  const clearSearch  = () => { setQuery(''); setInputVal(''); };

  return (
    <div className="cp-root">

      {/* Search Bar */}
      <div className="cp-search-wrap">
        <div className="cp-search-box">
          <svg className="cp-search-icon" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Search courses by name or keyword..."
            value={inputVal}
            onChange={e => setInputVal(e?.target?.value)}
            onKeyDown={handleKey}
            className="cp-search-input"
          />
          {inputVal && (
            <span className="cp-clear-x" onClick={clearSearch}>✕</span>
          )}
          <button className="cp-search-btn" onClick={handleSearch}>Search</button>
        </div>
        <div className="cp-tabs">
          {CATEGORIES?.map(tab => (
            <button
              key={tab}
              className={`cp-tab ${activeTab === tab && !query ? 'cp-tab-active' : ''}`}
              onClick={() => handleTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Hero */}
      <div className="cp-hero">
        <h1 className="cp-hero-title">Our <span>Courses</span></h1>
        <p className="cp-hero-sub">Industry-relevant programs designed to boost your career trajectory</p>
        <div className="cp-hero-divider" />
      </div>

      {/* Grid */}
      {filtered?.length > 0 ? (
        <div className="cp-grid">
          {filtered?.map(c => (
            <div className="cp-card" key={c?.id}>
              <div className="cp-card-img-wrap">
                <img src={c?.img} alt={c?.title} className="cp-card-img" />
                <span className="cp-card-badge" style={{ background: c.badge.color, color: '#fff' }}>
                  {c?.badge?.label}
                </span>
              </div>
              <div className="cp-card-body">
                <h3 className="cp-card-title">{c?.title}</h3>
                <p className="cp-card-desc">{c?.desc}</p>
                <div className="cp-topics">
                  {c?.topics?.map((t, i) => <span key={i} className="cp-topic">{t}</span>)}
                </div>
                <div className="cp-meta">
                  <span className="cp-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {c?.duration}
                  </span>
                  <span className="cp-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    {c?.mode}
                  </span>
                  <span className="cp-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                    {c?.level}
                  </span>
                </div>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeBUYiR5NKgq5vfsCip66shEFdUvE-uxSR1o5Jouf9WKkVRsw/viewform"
                  target="_blank" rel="noreferrer" className="cp-enroll-btn"
                >
                  Enroll Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="cp-empty">
          <div className="cp-empty-icon">🔍</div>
          <h3>No courses found</h3>
          <p>Try a different keyword or browse all courses</p>
          <button className="cp-search-btn" onClick={() => { clearSearch(); setActiveTab('All Courses'); }}>
            View All Courses
          </button>
        </div>
      )}
    </div>
  );
}