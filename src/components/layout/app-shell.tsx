import Link from "next/link";
import { navItems } from "@/lib/mock-data";

type AppShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function AppShell({ title, description, children }: AppShellProps) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div>
            <p className="eyebrow">BrandAgent</p>
            <h2>Operations cockpit</h2>
          </div>
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="sidebar-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="app-main">
        <header className="page-header">
          <div>
            <p className="eyebrow">Workspace view</p>
            <h1>{title}</h1>
          </div>
          <p className="page-description">{description}</p>
        </header>
        {children}
      </main>
    </div>
  );
}
