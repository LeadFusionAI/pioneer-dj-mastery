import Link from "next/link";
import { notFound } from "next/navigation";
import { techniques } from "../../lib/techniques";

export default function TechniqueDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const technique = techniques.find((item) => item.slug === params.slug);

  if (!technique) {
    notFound();
  }

  return (
    <main className="page-shell inner-page technique-detail">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark">P</span>
          <div>
            <p className="eyebrow">Pioneer DJ Mastery</p>
            <h1>{technique.title}</h1>
          </div>
        </div>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/gear">Gear</Link>
          <Link href="/techniques">Techniques</Link>
        </nav>
      </header>

      <section className="detail-header">
        <div>
          <p className="eyebrow">{technique.level}</p>
          <h2>{technique.summary}</h2>
        </div>
        <span className="time-badge">{technique.time}</span>
      </section>

      <section className="detail-grid">
        <article className="detail-panel">
          <h3>Execution steps</h3>
          <ol>
            {technique.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>

        <article className="detail-panel">
          <h3>What to listen for</h3>
          <ul>
            {technique.listenFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="detail-grid">
        <article className="detail-panel accent">
          <h3>Common mistakes</h3>
          <ul>
            {technique.commonMistakes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="detail-panel accent">
          <h3>Practice drill</h3>
          <p>{technique.practice}</p>
        </article>
      </section>

      <section className="detail-panel full-width">
        <h3>Performance cue</h3>
        <p>{technique.performanceCue}</p>
      </section>
    </main>
  );
}
