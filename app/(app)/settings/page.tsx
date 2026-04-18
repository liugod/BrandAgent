import { AppShell } from "@/components/layout/app-shell";

export default function SettingsPage() {
  return (
    <AppShell
      title="Workspace Settings"
      description="Workspace controls for roles, platforms, exports, and guarded automation."
    >
      <section className="card-grid">
        <article className="card">
          <h2>Brand space</h2>
          <p>Northstar Beauty / Asia-Shanghai / active workspace</p>
        </article>
        <article className="card">
          <h2>Roles</h2>
          <p>Owner, Admin, Editor, Viewer. Only Owner and Admin can update brand core rules.</p>
        </article>
        <article className="card">
          <h2>Platform preferences</h2>
          <p>Xiaohongshu, Douyin, WeChat, Video Account</p>
        </article>
        <article className="card">
          <h2>Automation</h2>
          <p>Weekly planning every Monday, package generation on demand, exports kept local-first.</p>
        </article>
      </section>
    </AppShell>
  );
}
