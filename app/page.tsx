import Image from 'next/image';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { ClientLogoSection } from '@/components/ui/client-logo-section';
import ContactForm from '@/components/contact/ContactForm';
import SiteHeader from '@/components/header/SiteHeader';
import { BlueFooter } from '@/components/footer/BlueFooter';

export default function Home() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="hero-section">
        <AuroraBackground className="hero-background px-6 sm:px-10 lg:px-16">
          <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center gap-6 text-center px-4 sm:px-0">
            <Image src="/bridge-ai-logo.png" alt="Bridge AI logo" width={200} height={200} className="mb-2" />
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Bridge AI</p>
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl md:text-7xl">
              Intelligent learning for every SEN classroom.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              The 3i Learning System combines assessment, therapy planning, emotion monitoring, and progress reporting in one connected platform.
            </p>
            <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="#contact" className="button button-primary px-8 py-4 text-base font-semibold">Request a demo</a>
              <a href="#features" className="button button-secondary px-8 py-4 text-base font-semibold">Explore the solution</a>
            </div>
          </div>
        </AuroraBackground>
      </section>

      <ClientLogoSection />

      <section id="features" className="section section-dark">
        <div className="content-grid">
          <div>
            <p className="section-label">Why Bridge AI</p>
            <h2>Designed for schools, hospitals and NGOs working with SEN learners.</h2>
            <p className="section-copy">
              The Bridge AI platform combines therapist expertise with machine intelligence to create a cohesive workflow for assessment,
              planning, therapy, monitoring and reporting.
            </p>
          </div>
          <div className="feature-list">
            <article className="feature-card">
              <h3>One-stop intervention suite</h3>
              <p>From evaluation to IEPs, therapy sessions and progress reports—all in a single platform.</p>
            </article>
            <article className="feature-card">
              <h3>AI + IoT insights</h3>
              <p>AI suggests training targets while environmental sensors help maintain optimal learning conditions.</p>
            </article>
            <article className="feature-card">
              <h3>Cross-disciplinary collaboration</h3>
              <p>Supports ABA therapists, occupational therapists, speech therapists, physiotherapists and special educators.</p>
            </article>
            <article className="feature-card">
              <h3>Proven adoption</h3>
              <p>Trusted by schools, hospitals and NGOs in Hong Kong for special education and therapeutic programs.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="content-grid">
          <div className="case-study-panel">
            <p className="section-label">The 3i Learning System</p>
            <h2>AI-powered classroom experiences for SEN learners.</h2>
            <p>
              The 3i Learning System helps therapists select appropriate training goals, monitor student performance,
              track emotional state, and generate detailed progress reports automatically.
            </p>
            <div className="case-study-metrics">
              <div>
                <strong>1</strong>
                <span>Unified therapy platform</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Multi-professional workflow coverage</span>
              </div>
              <div>
                <strong>Lenovo</strong>
                <span>AI Hub partnership for intelligent learning spaces</span>
              </div>
            </div>
          </div>
          <div className="visual-grid">
            <div className="visual-card">
              <h3>Assessment</h3>
              <p>Smart evaluation tools with AI recommendations for individualized learning plans.</p>
            </div>
            <div className="visual-card">
              <h3>Therapy</h3>
              <p>Guided session delivery for ABA, OT, speech and physiotherapy.</p>
            </div>
            <div className="visual-card">
              <h3>Monitoring</h3>
              <p>Emotion and environment analytics help sustain an optimal learning space.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-quote">
        <div className="quote-panel">
          <p>Bridge AI makes SEN education more accessible, efficient, and future-ready by combining compassion with intelligent technology.</p>
          <span>— Bridge AI</span>
        </div>
      </section>

      <section className="section section-dark" id="contact">
        <div className="contact-form-shell">
          <div className="contact-form-panel">
            <div>
              <p className="section-label">Fill the form. It's easy.</p>
              <h4 className="text-white">Get in touch with the Bridge AI team.</h4>
              <p>
                Tell us about your organisation, SEN goals, and current challenges. Our team will respond with a tailored demo and next-step support.
              </p>
            </div>
            <ContactForm />
          </div>
          <div className="contact-side-panel">
            <div className="contact-side-copy">
              <h4>Request Demo?</h4>
              <label className="demo-checkbox">
                <input type="checkbox" name="requestDemo" />
                <span>Request a demo to explore Bridge AI</span>
              </label>
              <br />
              <div className="demo-dates">
                <label>
                  Preferred Date 1
                  <input type="date" name="demoDate1" />
                </label>
                <label>
                  Preferred Date 2
                  <input type="date" name="demoDate2" />
                </label>
              </div>
              <div className="demo-address">
                <p><strong>Demo at Lenovo AI Hub</strong></p>
                <p>16 Station Lane, Hung Hom</p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* 
      <footer className="footer-bar">
        <div className="footer-inner">
          <p>Bridge AI • Established 2019 • Intelligent support for special education needs</p>
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#features">Features</a>
            <a href="#contact">Demo</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </footer> */}
      <BlueFooter />
    </main>
  );
}
