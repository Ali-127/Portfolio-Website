import Image from "next/image";

export default function Home() {
  return (
    <main className="hero-shell">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content">
        <section className="hero-copy" aria-labelledby="hero-title">
          <p className="hero-kicker">Software engineer · Building for the web</p>
          <h1 id="hero-title">
            Thoughtful software,
            <span> made tangible.</span>
          </h1>
          <p className="hero-description">
            I turn complex ideas into clear, useful digital experiences with
            code that is considered from the first interaction to the last.
          </p>
          <div className="hero-rule" aria-hidden="true" />
          <p className="hero-note">Currently open to interesting problems.</p>
        </section>

        <section className="hero-portrait" aria-label="Profile photo">
          <div className="portrait-orbit portrait-orbit-one" aria-hidden="true" />
          <div className="portrait-orbit portrait-orbit-two" aria-hidden="true" />
          <div className="portrait-glow" aria-hidden="true" />
          <div className="portrait-frame">
            <Image
              className="portrait-image"
              src="/profile.jpg"
              width={420}
              height={420}
              alt="Portrait of the portfolio owner"
              priority
            />
          </div>
          <span className="portrait-label">01 / Hello</span>
        </section>
      </div>
    </main>
  );
}
