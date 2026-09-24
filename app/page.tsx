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

      <section className="skills-section" aria-labelledby="skills-title">
        <div className="skills-intro">
          <p className="section-kicker">02 / Skillset</p>
          <h2 id="skills-title">
            Tools for turning
            <span>ideas into systems.</span>
          </h2>
          <p className="skills-description">
            From fast prototypes to dependable production platforms, these are
            the tools I use to shape products, APIs, and experiences that can
            grow with the people using them.
          </p>
          <div className="skills-rule" aria-hidden="true" />
          <p className="skills-note">A connected stack, from interface to core.</p>
        </div>

        <div className="skill-tree" aria-label="Programming language and framework relationships">
          <div className="skill-branch branch-python">
            <div className="skill-node skill-parent">Python</div>
            <div className="skill-children">
              <div className="skill-connection"><span className="packet" aria-hidden="true" /></div>
              <div className="skill-node">Django</div>
              <div className="skill-connection"><span className="packet" aria-hidden="true" /></div>
              <div className="skill-node">FastAPI</div>
            </div>
          </div>

          <div className="skill-branch branch-javascript">
            <div className="skill-node skill-parent">JavaScript</div>
            <div className="skill-children">
              <div className="skill-connection"><span className="packet" aria-hidden="true" /></div>
              <div className="skill-node">React</div>
              <div className="skill-connection"><span className="packet" aria-hidden="true" /></div>
              <div className="skill-node">Next.js</div>
              <div className="skill-connection"><span className="packet" aria-hidden="true" /></div>
              <div className="skill-node">Node.js</div>
            </div>
          </div>

          <div className="skill-branch branch-systems">
            <div className="skill-node skill-parent">C / C++</div>
            <div className="skill-children">
              <div className="skill-connection"><span className="packet" aria-hidden="true" /></div>
              <div className="skill-node">Systems thinking</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
