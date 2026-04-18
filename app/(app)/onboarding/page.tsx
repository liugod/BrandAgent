import { AppShell } from "@/components/layout/app-shell";
import { onboardingSteps } from "@/lib/mock-data";

export default function OnboardingPage() {
  return (
    <AppShell
      title="Brand Onboarding"
      description="A guided setup to lock the brand profile before planning content."
    >
      <section className="split-grid">
        <article className="panel">
          <div className="panel-heading">
            <h2>Setup flow</h2>
          </div>
          <ol className="step-list">
            {onboardingSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <div className="form-grid">
            <label>
              Brand name
              <input defaultValue="Northstar Beauty" />
            </label>
            <label>
              Positioning
              <textarea defaultValue="Functional beauty products for busy urban professionals." />
            </label>
            <label>
              Tone
              <textarea defaultValue="Calm, informed, direct, and never overclaiming." />
            </label>
            <label>
              Forbidden directions
              <textarea defaultValue="Do not sound like hard-sell miracle skincare." />
            </label>
          </div>
        </article>

        <article className="panel panel-accent">
          <div className="panel-heading">
            <h2>Generated draft</h2>
          </div>
          <ul className="stack-list">
            <li>Core claim: efficient routines with credible ingredients</li>
            <li>Voice tags: clear, modern, trusted, grounded</li>
            <li>Content pillars: routine tips, proof stories, launch updates</li>
            <li>Guardrail: no miracle claims, no panic selling</li>
          </ul>
        </article>
      </section>
    </AppShell>
  );
}
