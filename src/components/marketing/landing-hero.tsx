import React from "react";
import Link from "next/link";

export function LandingHero() {
  return (
    <section className="hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">Brand content operations system</p>
        <h1>Turn scattered source files into daily ready-to-download campaigns.</h1>
        <p className="hero-text">
          Initialize the brand once, keep uploading products, campaigns, and
          media, then let the system classify, plan, and package content by
          calendar day.
        </p>
        <div className="hero-actions">
          <Link href="/workspace" className="button button-primary">
            Open workspace
          </Link>
          <Link href="/onboarding" className="button button-secondary">
            Start onboarding
          </Link>
        </div>
      </div>

      <div className="hero-panel">
        <div className="panel-tag">Today in calendar</div>
        <h2>Friday / Customer case study</h2>
        <ul className="stack-list">
          <li>Platform: Video Account</li>
          <li>Goal: Social proof and conversion support</li>
          <li>Package: Script, poster copy, CTA, download bundle</li>
          <li>Missing asset: one new user quote card</li>
        </ul>
      </div>
    </section>
  );
}
