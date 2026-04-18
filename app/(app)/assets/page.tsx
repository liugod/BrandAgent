import { AppShell } from "@/components/layout/app-shell";
import { StatusPill } from "@/components/ui/status-pill";
import { assetTabs } from "@/lib/mock-data";

export default function AssetsPage() {
  return (
    <AppShell
      title="Asset Center"
      description="A structured knowledge layer for brand, products, campaigns, media, and pending confirmations."
    >
      <section className="card-grid">
        {assetTabs.map((tab, index) => (
          <article key={tab.title} className="card">
            <div className="panel-heading">
              <h2>{tab.title}</h2>
              <StatusPill tone={index === 4 ? "warning" : "neutral"}>
                {index === 4 ? "Review queue" : "Library"}
              </StatusPill>
            </div>
            <p>{tab.description}</p>
          </article>
        ))}
      </section>
    </AppShell>
  );
}
