import Link from "next/link";
import { LandingHero } from "@/components/marketing/landing-hero";

const pillars = [
  {
    title: "Upload once, organize continuously",
    body: "Collect raw text, docs, visuals, and campaign ideas in a single dropbox with classification feedback."
  },
  {
    title: "Protect the brand core",
    body: "System suggestions never auto-overwrite confirmed positioning, tone, or forbidden messaging."
  },
  {
    title: "Operate from the calendar",
    body: "The product centers on what to publish today, what is blocked, and what can already be downloaded."
  }
];

const surfaces = [
  "Workspace dashboard",
  "Brand onboarding",
  "Source ingestion",
  "Asset center",
  "Content calendar",
  "Package detail"
];

export default function HomePage() {
  return (
    <div className="marketing-page">
      <header className="marketing-header">
        <Link href="/" className="brand-lockup">
          BrandAgent
        </Link>
        <nav className="top-nav">
          <Link href="/workspace">Workspace</Link>
          <Link href="/calendar">Calendar</Link>
          <Link href="/assets">Assets</Link>
        </nav>
      </header>

      <LandingHero />

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Value pillars</p>
          <h2>Built for teams that need output stability, not another empty dashboard.</h2>
        </div>
        <div className="card-grid">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="card">
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section accent-section">
        <div className="section-heading">
          <p className="eyebrow">Core surfaces</p>
          <h2>Six routes scaffold the SaaS shell for design, API work, and demos.</h2>
        </div>
        <div className="list-panel">
          {surfaces.map((surface) => (
            <div key={surface} className="list-row">
              <span>{surface}</span>
              <span>Ready</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
