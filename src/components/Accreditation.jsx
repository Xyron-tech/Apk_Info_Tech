import React from 'react';
import logo from "../assets/mca-logo.webp";

export default function Accreditation() {
  return (
    <section className="acc-root">
      <div className="acc-header">
        <h2 className="acc-title">Accredited By</h2>
        <p className="acc-subtitle">Recognized and certified by leading organizations</p>
        <div className="acc-divider" />
      </div>

      {/* Single Featured Card */}
      <div className="acc-featured-wrap">
        <div className="acc-featured-card">
          {/* Decorative top bar */}
          <div className="acc-card-topbar" />

          {/* Badge */}
          <div className="acc-official-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Official Recognition
          </div>

          {/* Logo */}
          <div className="acc-logo-wrap">
            <img src={logo} alt="Ministry of Corporate Affairs" className="acc-logo" />
          </div>

          {/* Info */}
          <div className="acc-info">
            <h3 className="acc-org-name">Ministry of Corporate Affairs</h3>
            <p className="acc-org-sub">Government of India</p>
            <p className="acc-org-desc">
              APK Infotech IT Solutions Pvt Ltd is officially registered and recognized
              under the Ministry of Corporate Affairs, Government of India — ensuring
              credibility, transparency, and legal compliance in all operations.
            </p>

            {/* Tags */}
            <div className="acc-tags">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}