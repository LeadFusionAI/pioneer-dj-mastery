import Link from "next/link";
import { lessonLibrary } from "./lib/lessons";

export default function GearPage() {
  return (
    <main className="page-shell inner-page">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark">P</span>
          <div>
            <p className="eyebrow">Mastery path</p>
            <h1>Gear Map</h1>
          </div>
        </div>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/gear">Gear</Link>
          <Link href="/techniques">Techniques</Link>
        </nav>
      </header>

      <section className="page-header-card">
        <p className="eyebrow">Focus hardware</p>
        <h2>Build fluency on the gear you actually own.</h2>
      </section>

      <section className="gear-stack">
        <article className="gear-panel">
          <div>
            <span className="gear-tag">CDJ-3000X</span>
            <h3>Deck control and timing</h3>
          </div>
          <ul>
            <li>Hot cue memory and quick re-entry</li>
            <li>Loop size decisions and bar-based transitions</li>
            <li>Slip, reverse, and phrase control</li>
            <li>Browsing and track prep under pressure</li>
          </ul>
        </article>

        <article className="gear-panel">
          <div>
            <span className="gear-tag">V10 Mixer</span>
            <h3>FX and blend architecture</h3>
          </div>
          <ul>
            <li>Channel volume and EQ shaping</li>
            <li>FX send depth and return timing</li>
            <li>Three-four and bar-based echo movement</li>
            <li>Crossfader contour and transition clean-up</li>
          </ul>
        </article>

        <article className="gear-panel">
          <div>
            <span className="gear-tag">RX2</span>
            <h3>Compact booth power</h3>
          </div>
          <ul>
            <li>Quick loop entry and exit</li>
            <li>Instant performance layering</li>
            <li>Track-specific workflow and phase awareness</li>
            <li>FX control without losing the musical shape</li>
          </ul>
        </article>
      </section>

      <section className="stacked-list">
        {lessonLibrary.map((lesson) => (
          <article key={lesson.title} className="feature-row">
            <div>
              <span className="lesson-pill">{lesson.level}</span>
              <h3>{lesson.title}</h3>
            </div>
            <p>{lesson.summary}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
