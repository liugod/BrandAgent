export type AssetType =
  | "brand"
  | "product"
  | "campaign"
  | "media"
  | "idea"
  | "history";

export type AssetBucket = "active" | "pending_confirmation";

export type CalendarStatus =
  | "draft"
  | "waiting_assets"
  | "ready"
  | "generated"
  | "approved"
  | "published";

export type CalendarItem = {
  id: string;
  date: string;
  theme: string;
  platform: string;
  objective: string;
  status: CalendarStatus;
};

export type WorkspaceChecklistItem = {
  id: string;
  label: string;
  done: boolean;
};

type ResolveAssetBucketInput = {
  detectedType: AssetType;
  confidence: number;
  touchesBrandCore: boolean;
};

export function resolveAssetBucket(
  input: ResolveAssetBucketInput
): { bucket: AssetBucket; requiresConfirmation: boolean } {
  if (input.touchesBrandCore) {
    return {
      bucket: "pending_confirmation",
      requiresConfirmation: true
    };
  }

  if (input.confidence < 0.8) {
    return {
      bucket: "pending_confirmation",
      requiresConfirmation: true
    };
  }

  return {
    bucket: "active",
    requiresConfirmation: false
  };
}

export function summarizeCalendarHealth(items: CalendarItem[]) {
  return items.reduce(
    (summary, item) => {
      if (item.status === "generated" || item.status === "approved") {
        summary.generatedCount += 1;
      }

      if (item.status === "waiting_assets") {
        summary.waitingAssetsCount += 1;
      }

      if (item.status === "draft" || item.status === "ready") {
        summary.needsReviewCount += 1;
      }

      return summary;
    },
    {
      generatedCount: 0,
      waitingAssetsCount: 0,
      needsReviewCount: 0
    }
  );
}

export function buildWorkspaceChecklist(input: {
  brandReady: boolean;
  platformCount: number;
  pendingAssets: number;
}): WorkspaceChecklistItem[] {
  return [
    {
      id: "brand-profile",
      label: "Complete the brand profile",
      done: input.brandReady
    },
    {
      id: "platforms",
      label: "Set at least one target platform",
      done: input.platformCount > 0
    },
    {
      id: "pending-assets",
      label: "Review pending assets",
      done: input.pendingAssets === 0
    }
  ];
}
