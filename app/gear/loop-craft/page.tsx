"use client";

import Link from "next/link";

const loopSteps = [
  {
    num: 1,
    title: "Press LOOP IN",
    detail:
      "On the first beat of your intended loop. The yellow indicator shows you've marked the start point.",
  },
  {
    num: 2,
    title: "Press LOOP OUT",
    detail:
      "At the end of your phrase. The loop is now active and repeating. Watch the waveform.",
  },
  {
    num: 3,
    title: "Use LOOP ADJUST",
    detail:
      "Fine-tune the loop boundaries if needed. Keep the groove locked in by using Quantize if it's ON.",
  },
  {
    num: 4,
    title: "Press RELOOP/EXIT",
    detail:
      "To leave the loop on the next phrase. The track continues where it would have been in real time.",
  },
];

const commonMistakes = [
  "Pressing LOOP IN off-beat, causing the loop to start misaligned.",
  "Making loops too short (1-2 beats) when you should use a full phrase (8-16 beats).",
  "Forgetting to disengage Slip Mode before trying to loop normally.",
  "Exiting the loop too early, mid-phrase, instead of waiting for the phrase boundary.",
];

export default function LoopCraftPage() {
  return (
    <main className="page-shell inner-page">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark">P</span>
          <div>
            <p className="eyebrow">Pioneer DJ Mastery</p>
            <h1>Build and Exit a Loop</h1>
          </div>
        </div>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/gear">Gear</Link>
          <Link href="/techniques">Techniques</Link>
        </nav>
      </header>

      <section className="page-header-card">
        <p className="eyebrow">Foundation skill</p>
        <h2>Master precise loop control on the CDJ-3000X.</h2>
      </section>

      <section className="detail-grid">
        <article className="detail-panel">
          <h3>Step-by-step execution</h3>
          {loopSteps.map((step) => (
            <div key={step.num} className="step-block">
              <div className="step-number">{step.num}</div>
              <div>
                <h4>{step.title}</h4>
                <p>{step.detail}</p>
              </div>
            </div>
          ))}
        </article>

        <article className="detail-panel">
          <h3>What to listen for</h3>
          <ul>
            <li>The loop should land cleanly on the beat without a "jump" or "stutter."</li>
            <li>The kick and bass should remain locked in while the loop cycles.</li>
            <li>When you exit, you should hear the track resume playing from where it naturally would have been.</li>
            <li>The transition in and out should feel invisible to the dancefloor.</li>
          </ul>
        </article>
      </section>

      <section className="detail-grid">
        <article className="detail-panel accent">
          <h3>Common mistakes</h3>
          <ul>
            {commonMistakes.map((mistake) => (
              <li key={mistake}>{mistake}</li>
            ))}
          </ul>
        </article>

        <article className="detail-panel accent">
          <h3>Practice drill</h3>
          <p>
            <strong>Time:</strong> 10 minutes
          </p>
          <ol>
            <li>Load one track with a clear 8-bar phrase.</li>
            <li>Set a loop at the phrase start and exit at the phrase end, 5 times in a row.</li>
            <li>Do it again without looking at the waveform—use your ears only.</li>
            <li>Repeat with a different track and a 16-bar phrase.</li>
            <li>Record yourself and listen back for any "glitches" or timing problems.</li>
          </ol>
        </article>
      </section>

      <section className="detail-panel full-width">
        <h3>Performance cue</h3>
        <p>
          Looping is not just a technical tool—it's a musical statement. A clean loop entry and exit signals to the
          crowd that you are in control and the transition is intentional. A sloppy loop entry sounds accidental and
          unprofessional. Practice until loop control feels as natural as breathing.
        </p>
      </section>
    </main>
  );
}
