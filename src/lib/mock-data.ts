import type { CalendarItem, WorkspaceChecklistItem } from "@/lib/domain";
import { buildWorkspaceChecklist } from "@/lib/domain";

export const navItems = [
  { href: "/workspace", label: "Workspace" },
  { href: "/onboarding", label: "Onboarding" },
  { href: "/ingest", label: "Ingest" },
  { href: "/assets", label: "Assets" },
  { href: "/calendar", label: "Calendar" },
  { href: "/settings", label: "Settings" }
];

export const dashboardMetrics = [
  { label: "Pending confirmations", value: "12", tone: "warning" },
  { label: "Ready content packages", value: "08", tone: "success" },
  { label: "Campaigns this month", value: "03", tone: "neutral" }
];

export const recentUploads = [
  {
    title: "Spring launch selling points",
    type: "Product brief",
    status: "Suggested for product asset"
  },
  {
    title: "Customer feedback screenshots",
    type: "Image pack",
    status: "Auto-routed to media library"
  },
  {
    title: "May promo plan",
    type: "Campaign doc",
    status: "Needs confirmation"
  }
];

export const calendarItems: CalendarItem[] = [
  {
    id: "mon",
    date: "Mon",
    theme: "Founder story",
    platform: "Xiaohongshu",
    objective: "Brand trust",
    status: "approved"
  },
  {
    id: "tue",
    date: "Tue",
    theme: "Usage walkthrough",
    platform: "Douyin",
    objective: "Education",
    status: "generated"
  },
  {
    id: "wed",
    date: "Wed",
    theme: "Launch teaser",
    platform: "WeChat",
    objective: "Campaign warm-up",
    status: "waiting_assets"
  },
  {
    id: "thu",
    date: "Thu",
    theme: "FAQ carousel",
    platform: "Xiaohongshu",
    objective: "Conversion",
    status: "ready"
  },
  {
    id: "fri",
    date: "Fri",
    theme: "Customer case study",
    platform: "Video Account",
    objective: "Social proof",
    status: "draft"
  }
];

export const checklist: WorkspaceChecklistItem[] = buildWorkspaceChecklist({
  brandReady: true,
  platformCount: 3,
  pendingAssets: 12
});

export const onboardingSteps = [
  "Brand basics",
  "Voice and boundaries",
  "Products and services",
  "Platform preferences",
  "Visual references"
];

export const assetTabs = [
  {
    title: "Brand assets",
    description: "Positioning, voice, forbidden directions, and messaging rules."
  },
  {
    title: "Product assets",
    description: "Selling points, use cases, FAQ, benefits, and proof snippets."
  },
  {
    title: "Campaign assets",
    description: "Launches, promotions, milestones, and required material gaps."
  },
  {
    title: "Media assets",
    description: "Images, videos, UGC, reviews, and historical content."
  },
  {
    title: "Pending confirmation",
    description: "Low confidence items waiting for user approval."
  }
];
