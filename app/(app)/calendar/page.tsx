import { AppShell } from "@/components/layout/app-shell";
import { StatusPill } from "@/components/ui/status-pill";
import { summarizeCalendarHealth } from "@/lib/domain";
import { calendarItems } from "@/lib/mock-data";

export default function CalendarPage() {
  const summary = summarizeCalendarHealth(calendarItems);

  return (
    <AppShell
      title="Content Calendar"
      description="The main operating surface for planned content, blockers, and ready-to-download packages."
    >
      <section className="metric-grid">
        <article className="metric-card">
          <span className="metric-label">Generated or approved</span>
          <strong className="metric-value">{summary.generatedCount}</strong>
        </article>
        <article className="metric-card">
          <span className="metric-label">Waiting for assets</span>
          <strong className="metric-value">{summary.waitingAssetsCount}</strong>
        </article>
        <article className="metric-card">
          <span className="metric-label">Needs review</span>
          <strong className="metric-value">{summary.needsReviewCount}</strong>
        </article>
      </section>

      <section className="calendar-grid">
        {calendarItems.map((item) => (
          <article key={item.id} className="calendar-card">
            <div className="panel-heading">
              <strong>{item.date}</strong>
              <StatusPill>{item.status}</StatusPill>
            </div>
            <h2>{item.theme}</h2>
            <p>{item.platform}</p>
            <p>{item.objective}</p>
          </article>
        ))}
      </section>
    </AppShell>
  );
}
