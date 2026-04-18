import { AppShell } from "@/components/layout/app-shell";
import { StatusPill } from "@/components/ui/status-pill";

export default function PackageDetailPage() {
  return (
    <AppShell
      title="Content Package Detail"
      description="A delivery-ready content bundle for one calendar item."
    >
      <section className="split-grid">
        <article className="panel">
          <div className="panel-heading">
            <h2>Package body</h2>
            <StatusPill tone="success">Version 3</StatusPill>
          </div>
          <div className="content-block">
            <h3>Title candidates</h3>
            <ul className="stack-list">
              <li>What changed after 14 days of consistent use</li>
              <li>A calmer routine that still gets results</li>
              <li>The customer story we keep getting asked about</li>
            </ul>
          </div>
          <div className="content-block">
            <h3>Body</h3>
            <p>
              Start with the before state, describe the routine shift, then
              anchor the story in one product benefit and one observed result.
            </p>
          </div>
          <div className="content-block">
            <h3>Poster copy</h3>
            <p>Less noise. More consistency. Skin that feels predictable again.</p>
          </div>
          <div className="content-block">
            <h3>Video script</h3>
            <p>
              Hook with the problem, cut to the routine, show one proof point,
              then end with a low-pressure CTA.
            </p>
          </div>
        </article>

        <article className="panel panel-accent">
          <div className="panel-heading">
            <h2>Export and traceability</h2>
          </div>
          <ul className="stack-list">
            <li>Formats: md, docx, pdf, txt</li>
            <li>Referenced assets: product proof, review screenshot, CTA rule</li>
            <li>Platform variants: Xiaohongshu, WeChat, Video Account</li>
            <li>Generation task: content-package-demo-v3</li>
          </ul>
        </article>
      </section>
    </AppShell>
  );
}
