type StatusPillProps = {
  children: React.ReactNode;
  tone?: "neutral" | "success" | "warning";
};

export function StatusPill({
  children,
  tone = "neutral"
}: StatusPillProps) {
  return <span className={`status-pill status-${tone}`}>{children}</span>;
}
