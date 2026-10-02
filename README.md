"use client";

import { useState } from "react";

const sectionMap = [
  {
    name: "Deck section",
    label: "Decks",
    details:
      "Use the CDJ deck controls to lock in cue points, loop sizing, and phrase-aware transitions before the mixer takes over.",
  },
  {
    name: "FX section",
    label: "FX",
    details:
      "The echo, delay, and loop tools are where the shape lives. The difference between a clean set and a messy one is timing here.",
  },
  {
    name: "Mixer section",
    label: "Mixer",
    details:
      "This is the emotional control center. Volume, EQ, sends, and return levels all give the transition its final character.",
  },
  {
    name: "Loop zone",
    label: "Loop",
    details:
      "Looping is not just technical. It is a musical decision point used to create tension, release, and re-entry.",
  },
];

export default function ControllerDiagram() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="diagram-wrap">
      <div className="controller-surface">
        <div className="deck left" onClick={() => setSelected(0)}>
          <span>Deck 1</span>
        </div>
        <div className="deck right" onClick={() => setSelected(0)}>
          <span>Deck 2</span>
        </div>
        <div className="fx-box" onClick={() => setSelected(1)}>
          <span>FX</span>
        </div>
        <div className="mixer-box" onClick={() => setSelected(2)}>
          <span>Mixer</span>
        </div>
        <div className="loop-box" onClick={() => setSelected(3)}>
          <span>Loop</span>
        </div>
      </div>

      <div className="diagram-details">
        <p className="diagram-label">Selected zone</p>
        <h4>{sectionMap[selected].label}</h4>
        <p>{sectionMap[selected].details}</p>
      </div>
    </div>
  );
}
