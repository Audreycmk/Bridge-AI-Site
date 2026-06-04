"use client";

import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        /* Apple Liquid Glass Effect & Layout Utilities */
        .glass-header {
          position: fixed;
          top: 0;
          left: 0;
          padding: 2.5rem 2rem;
          width: 100%;
          z-index: 1000;
          /* Translucent white with heavy blur */
          background-color: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px) brightness(1);
          -webkit-backdrop-filter: blur(10px) brightness(1);
          border-bottom: 3px solid rgba(0, 0, 0, 0.05);
        }

        @media (max-width: 720px) {
          .site-nav, .desktop-only-cta {
            display: none !important;
          }
        }
        
        @media (min-width: 721px) {
          .mobile-menu-toggle {
            display: none !important;
          }
        }
      `}} />

      {/* Single full-width header with Liquid Glass effect */}
      <header className={`glass-header h-16 flex items-center justify-between px-6 w-full transition-opacity duration-300 ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        
        {/* Left: Brand */}
        <a href="#" className="brand-link font-semibold text-lg tracking-tight">
          Bridge AI
        </a>

        {/* Center: Nav (Desktop) */}
        <nav className="site-nav flex items-center gap-8 text-sm font-medium text-slate-600" aria-label="Primary navigation">
          <a href="#features" className="hover:text-black transition-colors">Features</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </nav>

        {/* Right: Actions / Hamburger */}
        <div className="header-actions flex items-center">
          <a href="#contact" className="button button-primary header-cta desktop-only-cta text-sm px-4 py-2 bg-black text-white rounded-full transition hover:bg-slate-800">
            Book demo
          </a>

          <button
            type="button"
            className="mobile-menu-toggle p-2"
            aria-label="Open navigation menu"
            onClick={() => setOpen(true)}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="#000" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Same justify-between logic for header) */}
      <div className={`mobile-menu-backdrop ${open ? "open" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`mobile-menu-panel ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-header flex items-center justify-between px-6 py-4 border-bottom border-slate-100">
          <a href="#" className="brand-link font-semibold">
            Bridge AI
          </a>
          <button type="button" className="mobile-menu-close p-2" onClick={() => setOpen(false)}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6 6 18M6 6l12 12" stroke="#000" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="mobile-menu-links flex flex-col gap-4 p-6">
          <a href="#features" className="text-xl font-medium" onClick={() => setOpen(false)}>Features</a>
          <a href="#contact" className="text-xl font-medium" onClick={() => setOpen(false)}>Contact</a>
          <a href="#contact" className="button button-primary mt-4 py-3 bg-black text-white text-center rounded-xl" onClick={() => setOpen(false)}>
            Book demo
          </a>
        </nav>
      </aside>
    </>
  );
}