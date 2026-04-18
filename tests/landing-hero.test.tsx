import React from "react";
import { render, screen } from "@testing-library/react";
import { LandingHero } from "@/components/marketing/landing-hero";

describe("LandingHero", () => {
  it("renders core product messaging and primary actions", () => {
    render(<LandingHero />);

    expect(
      screen.getByRole("heading", {
        name: /turn scattered source files into daily ready-to-download campaigns/i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /open workspace/i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /start onboarding/i
      })
    ).toBeInTheDocument();
  });
});
