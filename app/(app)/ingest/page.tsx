import { AppShell } from "@/components/layout/app-shell";
import { StatusPill } from "@/components/ui/status-pill";
import { recentUploads } from "@/lib/mock-data";

export default function IngestPage() {
  return (
    <AppShell
      title="Source Ingestion"
      description="A dropbox-style page for files, pasted text, URLs, and campaign inputs."
    >
      <section className="dropzone">
        <p className="eyebrow">Fast intake</p>
        <h2>Drop files, paste text, or add document links.</h2>
        <p>
          The system will parse type hints, confidence, tags, and whether the
          item should enter the active library or pending confirmation queue.
        </p>
      </section>

      <section className="dashboard-grid">
        <article className="panel">
          <div className="panel-heading">
            <h2>Incoming items</h2>
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
            <h2>Recognition feedback</h2>
          </div>
          <ul className="stack-list">
            <li>Detected type: campaign</li>
            <li>Suggested target: May product launch</li>
            <li>Confidence: 0.74</li>
            <li>Action: send to pending confirmation</li>
          </ul>
        </article>
      </section>
    </AppShell>
  );
}
