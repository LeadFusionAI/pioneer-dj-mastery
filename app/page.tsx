import Link from "next/link";
import { techniques } from "./lib/techniques";

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark">P</span>
          <div>
            <p className="eyebrow">Pioneer DJ Mastery</p>
            <h1>Technique Lab</h1>
          </div>
        </div>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/gear">Gear</Link>
          <Link href="/techniques">Techniques</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="tag">Built for real performance, not beginner basics</p>
          <h2>Make your Pioneer setup feel musical, intentional, and confident.</h2>
          <p className="subtext">
            This platform focuses on the moves that turn a bedroom setup into a club-ready
            performance flow: loop control, echo shape, phrase-aware transitions, filter rides,
            and clean recovery at the exact moment the mix needs it.
          </p>
          <div className="cta-row">
            <Link href="/techniques" className="primary-btn">
              Explore drills
            </Link>
            <Link href="/gear" className="secondary-btn">
              Gear map
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="mini-stats">
            <div>
              <strong>3</strong>
              <span>Pioneer systems</span>
            </div>
            <div>
              <strong>12+</strong>
              <span>advanced moves</span>
            </div>
            <div>
              <strong>60</strong>
              <span>days of flow</span>
            </div>
          </div>
          <div className="hero-visual" />
        </div>
      </section>

      <section className="feature-grid">
        <article className="feature-card highlight">
          <span className="feature-tag">CDJ-3000X</span>
          <h3>Deck control</h3>
          <p>Looping, hot cues, beat jumps, and phrase-aware movement that stays musical.</p>
        </article>
        <article className="feature-card">
          <span className="feature-tag">V10</span>
          <h3>Mixer flow</h3>
          <p>Filter rides, EQ sculpting, send FX, and clean channel returns that hold the energy.</p>
        </article>
        <article className="feature-card">
          <span className="feature-tag">RX2</span>
          <h3>All-in-one control</h3>
          <p>Compact transitions, fast loops, and reliable build/re-entry moments under pressure.</p>
        </article>
      </section>

      <section className="technique-section">
        <div className="section-heading">
          <p className="eyebrow">Featured technique stack</p>
          <h3>Moves that make your transitions feel intentional.</h3>
        </div>

        <div className="technique-list">
          {techniques.slice(0, 4).map((technique) => (
            <article key={technique.slug} className="technique-card">
              <div className="technique-meta">
                <span className="technique-level">{technique.level}</span>
                <span className="technique-time">{technique.time}</span>
              </div>
              <h4>{technique.title}</h4>
              <p>{technique.summary}</p>
              <ul>
                {technique.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link href={`/techniques/${technique.slug}`} className="inline-link">
                Open lesson →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
