import { AppShell } from "@/components/layout/app-shell";
import { StatusPill } from "@/components/ui/status-pill";
import {
  calendarItems,
  checklist,
  dashboardMetrics,
  recentUploads
} from "@/lib/mock-data";

export default function WorkspacePage() {
  return (
    <AppShell
      title="Workspace Dashboard"
      description="A command center for what is ready today, what still needs review, and what was uploaded recently."
    >
      <section className="metric-grid">
        {dashboardMetrics.map((metric) => (
          <article key={metric.label} className="metric-card">
            <span className="metric-label">{metric.label}</span>
            <strong className="metric-value">{metric.value}</strong>
            <StatusPill tone={metric.tone as "neutral" | "success" | "warning"}>
              Live
            </StatusPill>
          </article>
        ))}
      </section>

      <section className="dashboard-grid">
        <article className="panel">
          <div className="panel-heading">
            <h2>Today&apos;s suggested package</h2>
            <StatusPill tone="success">Downloadable</StatusPill>
          </div>
          <p className="lead">Customer case study for Video Account</p>
          <ul className="stack-list">
            <li>Objective: social proof</li>
            <li>Assets ready: product proof, user review, poster copy</li>
            <li>Gap: one updated quote visual</li>
          </ul>
        </article>

        <article className="panel">
          <div className="panel-heading">
            <h2>Workspace checklist</h2>
          </div>
          <ul className="stack-list">
            {checklist.map((item) => (
              <li key={item.id}>
                {item.done ? "Done" : "Pending"} - {item.label}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="dashboard-grid">
        <article className="panel">
          <div className="panel-heading">
            <h2>Recent uploads</h2>
          </div>
          <div className="list-panel">
            {recentUploads.map((upload) => (
              <div key={upload.title} className="list-row">
                <div>
                  <strong>{upload.title}</strong>
                  <p>{upload.type}</p>
                </div>
                <StatusPill tone="warning">{upload.status}</StatusPill>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-heading">
            <h2>This week</h2>
          </div>
          <div className="list-panel">
            {calendarItems.slice(0, 3).map((item) => (
              <div key={item.id} className="list-row">
                <div>
                  <strong>
                    {item.date} - {item.theme}
                  </strong>
                  <p>
                    {item.platform} / {item.objective}
                  </p>
                </div>
                <StatusPill>{item.status}</StatusPill>
              </div>
            ))}
          </div>
        </article>
      </section>
    </AppShell>
  );
}
