import Link from "next/link";

export default function TechniquesPage() {
  return (
    <main className="page-shell inner-page">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark">P</span>
          <div>
            <p className="eyebrow">Technique lab</p>
            <h1>Advanced skills</h1>
          </div>
        </div>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/gear">Gear</Link>
          <Link href="/techniques">Techniques</Link>
        </nav>
      </header>

      <section className="page-header-card">
        <p className="eyebrow">High production quality learning</p>
        <h2>Real DJ movements with timing, texture, and control.</h2>
      </section>

      <section className="practice-list">
        <div className="technique-block">
          <h3>3/4 Echo Lift</h3>
          <p>Drop the track volume slightly, shape the echo, and bring the return back into the mix with a controlled musical lift.</p>
          <ol>
            <li>Set the loop or bar length to 3/4 phrase.</li>
            <li>Reduce the channel volume and maintain a stable groove.</li>
            <li>Increase the echo send to roughly 75% while preserving the main mix.</li>
            <li>Bring the volume back in and ride the shape with the EQ.</li>
          </ol>
        </div>

        <div className="technique-block">
          <h3>75% Echo blend</h3>
          <p>Use the mixer FX send to float the atmosphere while preserving enough structure so the transition never collapses.</p>
          <ol>
            <li>Set an echo tail that feels natural to the track.</li>
            <li>Bring the return level to about 75%.</li>
            <li>Keep the master volume stable while the echo sits behind the vocal or lead.</li>
            <li>Ride the fader to make the transition smooth instead of abrupt.</li>
          </ol>
        </div>

        <div className="technique-block">
          <h3>2-loop bar recovery</h3>
          <p>Take the energy down, then re-enter with a controlled loop bar that feels intentional and not rushed.</p>
          <ol>
            <li>Reduce volume and pull the echo deeper into the mix.</li>
            <li>Count the bar into a two-loop phrase for the re-entry.</li>
            <li>Bring the echo level back up carefully.</li>
            <li>Return the volume to full only after the phrase is stable.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
