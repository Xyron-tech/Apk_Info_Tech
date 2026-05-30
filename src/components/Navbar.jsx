import React, { useState, useMemo, useRef, useEffect } from "react";
import { Drawer } from "antd";
import {
  HomeOutlined, InfoCircleOutlined, AppstoreOutlined,
  ProjectOutlined, PhoneOutlined, MenuOutlined,
  TrophyOutlined, SearchOutlined,
} from "@ant-design/icons";
import "../style.css";
import logo from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const ALL_COURSES = [
  { title: 'Full Stack Web Development', category: 'Development' },
  { title: 'Agentic AI with Gen AI',     category: 'AI/ML' },
  { title: 'VLSI Design',                category: 'Hardware' },
  { title: 'Cyber Security',             category: 'Security' },
  { title: 'Robotics and PCB Design',    category: 'Hardware' },
  { title: 'Placement Readiness Program',category: 'Career' },
  { title: 'Graduate Engineering Training (GET)', category: 'Career' },
];

const BADGE_COLORS = {
  Development: { bg: '#3b82f6', text: '#fff' },
  'AI/ML':     { bg: '#8b5cf6', text: '#fff' },
  Hardware:    { bg: '#f59e0b', text: '#fff' },
  Security:    { bg: '#ef4444', text: '#fff' },
  Career:      { bg: '#10b981', text: '#fff' },
};

const Navbar = () => {
  const [open, setOpen]           = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery]         = useState('');
  const navigate  = useNavigate();
  const location  = useLocation();
  const inputRef  = useRef(null);

  const hideSearchOn   = ['/courses', '/course'];
  const showSearchIcon = !hideSearchOn.includes(location.pathname);

  useEffect(() => {
    setShowSearch(false);
    setQuery('');
  }, [location.pathname]);

  useEffect(() => {
    if (showSearch) inputRef.current?.focus();
  }, [showSearch]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return ALL_COURSES.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q)
    );
  }, [query]);

  const goToCourse = (searchQuery) => {
    setShowSearch(false);
    setQuery('');
    navigate('/courses', { state: { search: searchQuery } });
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && query.trim()) goToCourse(query.trim());
    if (e.key === 'Escape') { setShowSearch(false); setQuery(''); }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="APK Info Tech" />
          <div className="logo-text">
            <h2>APK INFOTECH</h2>
            <p>IT SOLUTIONS PVT LTD</p>
          </div>
        </div>

        <div className="navbar-tag">
          <ul className="nav-links">
            <li><a onClick={() => { navigate("/"); setOpen(false); }}>Home</a></li>
            <li><a onClick={() => { navigate("/services"); setOpen(false); }}>Services</a></li>
            <li><a onClick={() => { navigate("/courses"); setOpen(false); }}>Courses</a></li>
            <li><a onClick={() => { navigate("/about"); setOpen(false); }}>About</a></li>
            <li><a onClick={() => { navigate("/achievement"); setOpen(false); }}>Achievements</a></li>
            <li><a onClick={() => { navigate("/contact"); setOpen(false); }}>Contact</a></li>
          </ul>

          {showSearchIcon && (
            <div className="search-toggle" onClick={() => { setShowSearch(s => !s); setQuery(''); }}>
              <SearchOutlined />
            </div>
          )}

          <div className="navbar-right">
            <div className="menu-icon" onClick={() => setOpen(true)}>
              <MenuOutlined />
            </div>
          </div>
        </div>
      </nav>

      {/* ── Smart Search Dropdown ── */}
      {showSearch && showSearchIcon && (
        <div className="search-wrapper">
          <div className="search-container">
            <div className="search-box">
              <SearchOutlined className="search-icon" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search courses... Full Stack, AI, VLSI..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKey}
              />
              <span className="close-icon" onClick={() => { setShowSearch(false); setQuery(''); }}>✕</span>
            </div>

            {query?.trim() && (
              <div className="nb-results">
                {results?.length > 0 ? (
                  <>
                    {results?.map((c, i) => (
                      <div
                        key={i}
                        className="nb-result-item"
                        onClick={() => goToCourse(c.title)}
                      >
                        <SearchOutlined className="nb-result-icon" />
                        <div className="nb-result-info">
                          <span className="nb-result-title">{c.title}</span>
                          <span
                            className="nb-result-cat"
                            style={{
                              background: BADGE_COLORS[c.category]?.bg,
                              color: BADGE_COLORS[c.category]?.text,
                            }}
                          >
                            {c.category}
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="nb-result-footer" onClick={() => goToCourse(query.trim())}>
                      See all results for "<strong>{query}</strong>" →
                    </div>
                  </>
                ) : (
                  <div className="nb-no-result">No courses found for "{query}"</div>
                )}
              </div>
            )}

            {/* Tags — only when no query */}
            {!query?.trim() && (
              <div className="search-tags">
                {['All', 'Dev', 'AI/ML', 'Hardware', 'Security', 'Career'].map(tag => (
                  <span
                    key={tag}
                    className="tag"
                    onClick={() => goToCourse(tag === 'All' ? '' : tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      <Drawer title="APK Info Tech" placement="right" onClose={() => setOpen(false)} open={open}>
        <ul className="mobile-nav-links">
          <li><a onClick={() => { navigate("/"); setOpen(false); }}><HomeOutlined /> Home</a></li>
          <li><a onClick={() => { navigate("/services"); setOpen(false); }}><AppstoreOutlined /> Services</a></li>
          <li><a onClick={() => { navigate("/courses"); setOpen(false); }}><ProjectOutlined /> Courses</a></li>
          <li><a onClick={() => { navigate("/about"); setOpen(false); }}><InfoCircleOutlined /> About</a></li>
          <li><a onClick={() => { navigate("/achievement"); setOpen(false); }}><TrophyOutlined /> Achievements</a></li>
          <li><a onClick={() => { navigate("/contact"); setOpen(false); }}><PhoneOutlined /> Contact</a></li>
        </ul>
      </Drawer>
    </>
  );
};

export default Navbar;