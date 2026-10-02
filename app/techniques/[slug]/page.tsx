import Link from "next/link";
import { techniques } from "../lib/techniques";

export default function TechniquesPage() {
  return (
    <main className="page-shell inner-page">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark">P</span>
          <div>
            <p className="eyebrow">Pioneer DJ Mastery</p>
            <h1>Technique library</h1>
          </div>
        </div>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/gear">Gear</Link>
          <Link href="/techniques">Techniques</Link>
        </nav>
      </header>

      <section className="page-header-card">
        <p className="eyebrow">Performance-focused learning</p>
        <h2>Advanced moves for music, not mechanical tricks.</h2>
      </section>

      <section className="stacked-techniques">
        {techniques.map((technique) => (
          <article key={technique.slug} className="course-row">
            <div className="course-row-header">
              <span className="technique-level">{technique.level}</span>
              <h3>{technique.title}</h3>
            </div>
            <p>{technique.summary}</p>
            <div className="row-foot">
              <span>{technique.time}</span>
              <Link href={`/techniques/${technique.slug}`} className="inline-link">
                Open lesson
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
