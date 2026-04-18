import {
  buildWorkspaceChecklist,
  resolveAssetBucket,
  summarizeCalendarHealth
} from "@/lib/domain";

describe("resolveAssetBucket", () => {
  it("requires confirmation when a suggestion touches brand core", () => {
    expect(
      resolveAssetBucket({
        detectedType: "brand",
        confidence: 0.98,
        touchesBrandCore: true
      })
    ).toEqual({
      bucket: "pending_confirmation",
      requiresConfirmation: true
    });
  });

  it("routes low confidence items to pending confirmation", () => {
    expect(
      resolveAssetBucket({
        detectedType: "product",
        confidence: 0.42,
        touchesBrandCore: false
      })
    ).toEqual({
      bucket: "pending_confirmation",
      requiresConfirmation: true
    });
  });

  it("activates high confidence media assets", () => {
    expect(
      resolveAssetBucket({
        detectedType: "media",
        confidence: 0.92,
        touchesBrandCore: false
      })
    ).toEqual({
      bucket: "active",
      requiresConfirmation: false
    });
  });
});

describe("summarizeCalendarHealth", () => {
  it("counts generated, waiting, and review states correctly", () => {
    expect(
      summarizeCalendarHealth([
        {
          id: "1",
          date: "Mon",
          theme: "A",
          platform: "XHS",
          objective: "Trust",
          status: "generated"
        },
        {
          id: "2",
          date: "Tue",
          theme: "B",
          platform: "XHS",
          objective: "Trust",
          status: "waiting_assets"
        },
        {
          id: "3",
          date: "Wed",
          theme: "C",
          platform: "XHS",
          objective: "Trust",
          status: "approved"
        },
        {
          id: "4",
          date: "Thu",
          theme: "D",
          platform: "XHS",
          objective: "Trust",
          status: "draft"
        }
      ])
    ).toEqual({
      generatedCount: 2,
      waitingAssetsCount: 1,
      needsReviewCount: 1
    });
  });
});

describe("buildWorkspaceChecklist", () => {
  it("includes a pending onboarding task when the brand is not ready", () => {
    const checklist = buildWorkspaceChecklist({
      brandReady: false,
      platformCount: 1,
      pendingAssets: 0
    });

    expect(checklist[0]).toEqual({
      id: "brand-profile",
      label: "Complete the brand profile",
      done: false
    });
  });
});
