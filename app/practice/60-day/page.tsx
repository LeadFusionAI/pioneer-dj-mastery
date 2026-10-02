import Link from "next/link";

const sixtyDayPhases = [
  {
    phase: 1,
    title: "Precision Foundations",
    days: "Days 1–15",
    focus: "Hot Cues, Loops, Filters, Clean Blending, Slip Mode basics",
    dailyLength: "25–30 min",
    goals: [
      "Master hot cue placement for phrase-aware jumps",
      "Build muscle memory with 4-beat and 8-beat loops",
      "Learn filter and EQ blending without relying on effects",
      "Understand slip mode as a creative tool, not just a safety net",
    ],
  },
  {
    phase: 2,
    title: "Effects Language & Phrasing",
    days: "Days 16–30",
    focus: "Beat FX, Send FX, Frequency selection, Phrase-aware effects, Key tools",
    dailyLength: "25–30 min",
    goals: [
      "Build fluency with echo, delay, reverb, and rhythmic effects",
      "Learn to use FX as a musical punctuation mark, not a blanket wash",
      "Practice phrase swapping between tracks",
      "Develop key awareness and harmonic movement",
    ],
  },
  {
    phase: 3,
    title: "Creative Performance & Stems",
    days: "Days 31–45",
    focus: "Stem isolation, advanced phrase work, multi-layer performance, tension & release",
    dailyLength: "25–30 min",
    goals: [
      "Learn to layer stems independently for creative remixing",
      "Build complex tension and release arcs over multiple tracks",
      "Practice three-source layering (CDJ + CDJ + laptop)",
      "Develop confidence in live edits and on-the-fly adjustments",
    ],
  },
  {
    phase: 4,
    title: "Performance Integration",
    days: "Days 46–60",
    focus: "Full sets, recovery, personal style, consistency under pressure",
    dailyLength: "25–30 min",
    goals: [
      "Play continuous 20–30 minute sets with confidence",
      "Develop personal signature moves and transitions",
      "Learn emergency recovery drills for mistakes",
      "Build the mindset of a professional DJ",
    ],
  },
];

export default function SixtyDayPlan() {
  return (
    <main className="page-shell inner-page">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark">P</span>
          <div>
            <p className="eyebrow">Pioneer DJ Mastery</p>
            <h1>60-Day Progression</h1>
          </div>
        </div>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/gear">Gear</Link>
          <Link href="/techniques">Techniques</Link>
        </nav>
      </header>

      <section className="page-header-card">
        <p className="eyebrow">Structured learning path</p>
        <h2>From foundations to performance mastery in two months.</h2>
      </section>

      <section className="sixty-day-grid">
        {sixtyDayPhases.map((phase) => (
          <article key={phase.phase} className="phase-card">
            <div className="phase-header">
              <span className="phase-number">Phase {phase.phase}</span>
              <span className="phase-days">{phase.days}</span>
            </div>
            <h3>{phase.title}</h3>
            <p className="phase-focus">
              <strong>Focus:</strong> {phase.focus}
            </p>
            <p className="phase-meta">
              <strong>Daily sessions:</strong> {phase.dailyLength}
            </p>
            <div className="phase-goals">
              <p style={{ fontWeight: 600, marginBottom: "0.75rem", fontSize: "0.9rem" }}>Goals</p>
              <ul>
                {phase.goals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="detail-panel full-width">
        <h3>How to use this plan</h3>
        <ol>
          <li>
            <strong>Daily Session Structure:</strong> Each day has a 3–4 min warm-up, 15–18 min core drill, 5–7 min
            creative application, and 1 min reflection.
          </li>
          <li>
            <strong>Use the same tracks for 2–3 days</strong> when learning a new move. This builds muscle memory
            faster than switching tracks every session.
          </li>
          <li>
            <strong>Record short practice clips weekly.</strong> You'll hear your progress objectively and spot
            improvements you might miss in real-time.
          </li>
          <li>
            <strong>Do not skip phases.</strong> Foundations (Phase 1) builds the timing and feel that makes Phase 2
            FX work. Skip foundations and your effects will feel disconnected from the groove.
          </li>
          <li>
            <strong>At the end of each phase,</strong> play a checkpoint mix (10–15 min) using only that phase's
            techniques. This is your progress check.
          </li>
        </ol>
      </section>

      <section className="detail-panel full-width accent">
        <h3>Success metric</h3>
        <p>
          After 60 days, you should be able to:
          <ul style={{ marginTop: "1rem" }}>
            <li>Play a clean 30-minute set with intentional transitions and zero technical hiccups.</li>
            <li>Use loops, filters, and FX as musical storytelling tools, not as tricks.</li>
            <li>Recover from mistakes in under 8 beats without the crowd noticing.</li>
            <li>Handle both bedroom practice and live booth performance with confidence.</li>
          </ul>
        </p>
      </section>
    </main>
  );
}
