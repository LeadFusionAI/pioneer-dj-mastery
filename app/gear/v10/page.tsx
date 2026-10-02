"use client";

import { useState } from "react";
import Link from "next/link";

const v10Sections = [
  {
    id: "channel-strip",
    name: "Channel Strip",
    description: "Per-channel input, trim, and EQ control.",
    controls: [
      "Input selector (XLR/RCA)",
      "Trim knob (0-40dB gain)",
      "4-band EQ (HI, HI-MID, LOW-MID, LOW)",
      "Channel fader",
    ],
  },
  {
    id: "filter-send",
    name: "Filter + Send",
    description: "HPF/LPF filter and FX send routing.",
    controls: [
      "LPF (Low-pass filter)",
      "HPF (High-pass filter)",
      "Resonance knob",
      "Send level (parallel FX path)",
    ],
  },
  {
    id: "beat-fx",
    name: "Beat FX",
    description: "Real-time effect processing with X-Pad.",
    controls: [
      "Beat FX assign button",
      "X-Pad (2D control surface)",
      "FX frequency select (LOW/MID/HI)",
      "Time/size control",
    ],
  },
  {
    id: "master",
    name: "Master Control",
    description: "Master output, isolator, and monitoring.",
    controls: [
      "Master level fader",
      "Master isolator (HI/MID/LOW)",
      "Headphone level",
      "Booth/main output",
    ],
  },
];

export default function V10ControlMap() {
  const [selectedSection, setSelectedSection] = useState("channel-strip");
  const section = v10Sections.find((s) => s.id === selectedSection);

  return (
    <main className="page-shell inner-page">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark">P</span>
          <div>
            <p className="eyebrow">Pioneer DJ Mastery</p>
            <h1>V10 Control Map</h1>
          </div>
        </div>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/gear">Gear</Link>
          <Link href="/techniques">Techniques</Link>
        </nav>
      </header>

      <section className="page-header-card">
        <p className="eyebrow">Gear reference</p>
        <h2>Master the DJM-V10 mixer architecture and control flow.</h2>
      </section>

      <section className="control-map-grid">
        <div className="control-diagram">
          <div className="diagram-placeholder">
            <p>V10 Mixer Visual Reference</p>
            <p style={{ fontSize: "0.85rem", marginTop: "0.5rem", color: "#999" }}>
              (Add your V10 gear image or diagram here)
            </p>
          </div>
        </div>

        <div className="control-panel">
          <h3>Control zones</h3>
          <div className="zone-buttons">
            {v10Sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setSelectedSection(sec.id)}
                className={`zone-btn ${selectedSection === sec.id ? "active" : ""}`}
              >
                {sec.name}
              </button>
            ))}
          </div>

          {section && (
            <div className="zone-details">
              <h4>{section.name}</h4>
              <p>{section.description}</p>
              <ul>
                {section.controls.map((control) => (
                  <li key={control}>{control}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="detail-panel full-width">
        <h3>V10 signal path</h3>
        <div className="signal-flow">
          <div className="flow-box">Input</div>
          <div className="flow-arrow">→</div>
          <div className="flow-box">Trim / EQ</div>
          <div className="flow-arrow">→</div>
          <div className="flow-box">Filter</div>
          <div className="flow-arrow">→</div>
          <div className="flow-box">Fader</div>
          <div className="flow-arrow">→</div>
          <div className="flow-box">Master</div>
        </div>
        <p style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "#666" }}>
          <strong>Key insight:</strong> The V10 is serial until the fader. After the fader, Beat FX and Send FX are
          parallel paths that return to master. This means you can kill the channel with the fader and still hear
          the effect tail.
        </p>
      </section>
    </main>
  );
}
