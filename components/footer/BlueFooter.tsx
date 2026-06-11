"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function BlueFooter() {
  return (
    <AuroraBackground className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-gradient-to-br from-slate-900 via-sky-800 to-sky-950 text-white min-h-[400px] py-16 px-8 flex items-center justify-center">
      
      {/* Wave Decorative Overlay */}
      {/* <div className="absolute inset-x-0 -top-20 h-36 overflow-hidden pointer-events-none z-10">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="rgba(255,255,255,0.08)"
            d="M0,128L48,144C96,160,192,192,288,208C384,224,480,224,576,192C672,160,768,96,864,80C960,64,1056,96,1152,122.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,532,320L0,320Z"
          />
        </svg>
      </div> */}
<div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white via-white/40 to-transparent dark:from-zinc-950 dark:via-zinc-950/40 pointer-events-none z-30 backdrop-blur-[4px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0))]" />

      {/* --- MAIN FOOTER WRAPPER CONTAINING AURORA ANIMATION --- */}
      {/* Footer Content Wrapper */}
      
      <div className="relative z-20 max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
           {/* <Image src="/bridge-ai-logo.png" alt="Bridge AI logo" width={40} height={40} className="mb-2" /> */}
          <h3 className="text-3xl font-bold tracking-wide mb-8">Bridge AI</h3>
          <p className="text-xs text-slate-300 max-w-md tracking-wider">
            ©2026 Bridge AI Limited | All Rights Reserved
          </p>
        </div>

        {/* Navigation & Social Row */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <nav className="flex gap-6 text-sm font-medium text-slate-200" aria-label="Footer navigation">
            <a href="#features" className="hover:text-white transition tracking-widest">FEATURES</a>
            <a href="#contact" className="hover:text-white transition tracking-widest">DEMO</a>
            <a href="#contact" className="hover:text-white transition tracking-widest">CONTACT</a>
          </nav>

          {/* Social Links Container */}
          <div className="flex gap-4">
            {/* NEWLY ADDED: Facebook Icon */}
            <a
              href="https://www.facebook.com/bridgeai" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/20 hover:scale-105 shadow-sm"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/20 hover:scale-105 shadow-sm"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/bridge_ai_hk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/20 hover:scale-105 shadow-sm"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </AuroraBackground> 
  );
}