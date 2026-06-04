export function BlueFooter() {
  return (
    <footer className="w-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-sky-700 to-sky-900 text-white">
      <div className="absolute inset-x-0 -top-20 h-36 overflow-hidden">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="rgba(255,255,255,0.18)"
            d="M0,128L48,144C96,160,192,192,288,208C384,224,480,224,576,192C672,160,768,96,864,80C960,64,1056,96,1152,122.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <path
            fill="rgba(255,255,255,0.12)"
            d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,197.3C672,192,768,160,864,138.7C960,117,1056,107,1152,117.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <path
            fill="rgba(255,255,255,0.08)"
            d="M0,256L48,245.3C96,235,192,213,288,192C384,171,480,149,576,138.7C672,128,768,128,864,138.7C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
        <div className="mb-10 flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://www.facebook.com/bridgeaihk"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/10"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.3c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9H17l-.4 3h-2.2v7A10 10 0 0022 12z" />
            </svg>
          </a>
          <a
            href="https://hk.linkedin.com/company/bridgeai"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/10"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM2 21h6V9H2v12zm7-12h5.5v1.7h.1c.8-1.4 2.7-2.8 5.6-2.8 6 0 7.1 4 7.1 9.1V21h-6v-8c0-1.9 0-4.4-2.7-4.4-2.7 0-3.2 2.2-3.2 4.3V21H9V9z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/bridge_ai_hk"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/10"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm8 1.5a1 1 0 110 2 1 1 0 010-2zm-5 1A5 5 0 007 6.5a5 5 0 00-5 5c0 2.76 2.24 5 5 5s5-2.24 5-5a5 5 0 00-5-5zm0 2a3 3 0 110 6 3 3 0 010-6z" />
            </svg>
          </a>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-8 text-sm font-medium uppercase tracking-[0.22em] text-white/80">
          <a href="#" className="transition hover:text-white">Home</a>
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>

        <p className="max-w-2xl text-center text-sm text-white/60">
          ©2026 Bridge AI Limited | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}