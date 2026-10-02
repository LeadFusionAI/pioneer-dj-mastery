import Link from "next/link";

export default function GearPage() {
  return (
    <main className="page-shell inner-page">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark">P</span>
          <div>
            <p className="eyebrow">Pioneer DJ Mastery</p>
            <h1>Gear map</h1>
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
        <h2>Build your performance language around the exact gear you’re using.</h2>
      </section>

      <section className="gear-stack">
        <article className="gear-panel">
          <span className="feature-tag">CDJ-3000X</span>
          <h3>Deck precision</h3>
          <ul>
            <li>Hot cue placement for phrase aware jumps</li>
            <li>Loop entry and exit with bar discipline</li>
            <li>Beat jump and slip logic for quick re-entry</li>
            <li>Waveform reading without staring at the screen</li>
          </ul>
        </article>

        <article className="gear-panel">
          <span className="feature-tag">DJM-V10</span>
          <h3>Blend architecture</h3>
          <ul>
            <li>EQ carving and filter movement</li>
            <li>Send FX return on free channels</li>
            <li>Echo shape and tail control</li>
            <li>Volume riding without losing the groove</li>
          </ul>
        </article>

        <article className="gear-panel">
          <span className="feature-tag">RX2</span>
          <h3>Compact booth flow</h3>
          <ul>
            <li>Fast loop resets and phrase recovery</li>
            <li>Direct use of filters and FX without heavy setup</li>
            <li>Confidence in small-room and live-room transitions</li>
            <li>Strong transitions without overplaying the gear</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
