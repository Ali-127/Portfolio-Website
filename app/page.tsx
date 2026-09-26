import Image from "next/image";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-ink text-paper font-serif bg-[radial-gradient(ellipse_at_75%_23%,#27372c_0%,transparent_34rem),radial-gradient(ellipse_at_27%_75%,#27372c_0%,transparent_36rem)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-50 bg-[linear-gradient(#dfe7d914_1px,transparent_1px),linear-gradient(90deg,#dfe7d914_1px,transparent_1px)] bg-size-[5rem_5rem] mask-[linear-gradient(90deg,black,transparent_80%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-4 px-6 py-16 sm:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,1fr)] lg:gap-24 lg:px-20 lg:py-28">
        <section
          className="relative z-10 order-2 max-w-xl sm:order-1"
          aria-labelledby="hero-title"
        >
          <p className="mb-5 animate-[rise-in_0.8s_0.1s_both] font-mono text-[0.7rem] leading-relaxed tracking-[0.16em] text-accent uppercase motion-reduce:animate-none sm:mb-8">
            Software engineer · Building for the web
          </p>
          <h1
            id="hero-title"
            className="mb-0 max-w-[12ch] animate-[rise-in_0.9s_0.2s_both] text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.94] font-normal tracking-[-0.04em] text-paper motion-reduce:animate-none"
          >
            Thoughtful software,
            <span className="block text-muted"> made tangible.</span>
          </h1>
          <p className="mt-7 max-w-lg animate-[rise-in_0.9s_0.35s_both] text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed text-[#c4cbbf] motion-reduce:animate-none sm:mt-10">
            I turn complex ideas into clear, useful digital experiences with
            code that is considered from the first interaction to the last.
          </p>
          <div
            className="my-8 h-px w-16 origin-left animate-[grow-in_0.9s_0.55s_both] bg-accent motion-reduce:animate-none sm:my-12"
            aria-hidden="true"
          />
          <p className="animate-[rise-in_0.8s_0.65s_both] font-mono text-[0.7rem] leading-relaxed tracking-[0.16em] text-muted uppercase motion-reduce:animate-none">
            Currently open to interesting problems.
          </p>
        </section>

        <section
          className="relative order-1 flex min-h-80 items-center justify-center sm:order-2 sm:min-h-96 lg:min-h-128"
          aria-label="Profile photo"
        >
          <div
            className="absolute h-[105%] w-[72%] rounded-full border border-t-transparent border-r-accent/60 border-b-accent/60 border-l-transparent opacity-55 animate-[orbit-reverse_18s_linear_infinite] motion-reduce:animate-none sm:h-[110%] sm:w-[63%]"
            aria-hidden="true"
          />
          <div
            className="absolute h-[105%] w-[72%] rotate-32 rounded-full border border-t-accent/60 border-r-transparent border-b-transparent border-l-accent/60 animate-[orbit_14s_linear_infinite] motion-reduce:animate-none sm:h-[110%] sm:w-[63%]"
            aria-hidden="true"
          />
          <div
            className="absolute h-48 w-48 rounded-full bg-accent/20 blur-[5rem]"
            aria-hidden="true"
          />
          <div className="relative z-10 rotate-[-4deg] rounded-full border border-paper/40 p-3 animate-[portrait-in_1.1s_0.15s_both] motion-reduce:animate-none">
            <Image
              className="block size-[min(62vw,18rem)] rounded-full object-cover sm:size-[clamp(16rem,31vw,26rem)]"
              src="/profile.jpg"
              width={420}
              height={420}
              alt="Portrait of the portfolio owner"
              priority
            />
          </div>
          <span className="absolute right-[5%] bottom-[3%] font-mono text-[0.7rem] leading-relaxed tracking-[0.16em] text-muted uppercase sm:right-[2%] sm:bottom-[7%] sm:-rotate-90">
            01 / Hello
          </span>
        </section>
      </div>

      <section
        className="relative grid min-h-screen grid-cols-1 items-center gap-16 overflow-hidden px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[minmax(0,0.8fr)_minmax(34rem,1.2fr)] lg:gap-32 lg:px-20 lg:py-40"
        aria-labelledby="skills-title"
      >
        <div className="relative z-10 max-w-xl">
          <p className="mb-5 font-mono text-[0.7rem] leading-relaxed tracking-[0.16em] text-accent uppercase sm:mb-8">
            02 / Skillset
          </p>
          <h2
            id="skills-title"
            className="m-0 max-w-[10ch] text-[clamp(3rem,5.4vw,6rem)] leading-[0.96] font-normal tracking-[-0.04em] text-paper"
          >
            Tools for turning
            <span className="block text-muted">ideas into systems.</span>
          </h2>
          <p className="mt-7 max-w-116 text-[clamp(1rem,1.5vw,1.2rem)] leading-relaxed text-[#c4cbbf] sm:mt-10">
            From fast prototypes to dependable production platforms, these are
            the tools I use to shape products, APIs, and experiences that can
            grow with the people using them.
          </p>
          <div
            className="my-8 h-px w-16 bg-accent sm:my-12"
            aria-hidden="true"
          />
          <p className="font-mono text-[0.7rem] leading-relaxed tracking-[0.16em] text-muted uppercase">
            A connected stack, from interface to core.
          </p>
        </div>

        <div
          className="relative z-10 flex min-w-0 max-w-3xl flex-col gap-5"
          aria-label="Programming language and framework relationships"
        >
          <div className="grid grid-cols-[minmax(6rem,0.8fr)_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[minmax(8rem,0.55fr)_minmax(0,1fr)] sm:gap-8">
            <div className="flex min-h-12 items-center justify-center rounded-full border border-accent/60 bg-accent/5 px-2 py-3 text-center text-sm text-accent sm:text-lg">
              Python
            </div>
            <div className="grid grid-cols-[minmax(1.5rem,0.6fr)_minmax(7rem,1.8fr)] items-center gap-2.5">
              <div className="relative h-px bg-paper/35 after:absolute after:top-[-0.2rem] after:right-0 after:size-[0.4rem] after:-rotate-45 after:border-r after:border-b after:border-paper/35 after:content-['']">
                <span
                  className="absolute top-[-0.15rem] left-0 size-[0.35rem] animate-[packet-flow_2.6s_ease-in-out_infinite] rounded-full bg-accent shadow-[0_0_0.7rem_var(--color-accent)] motion-reduce:animate-none"
                  aria-hidden="true"
                />
              </div>
              <div className="flex min-h-12 items-center justify-center rounded-full border border-paper/25 px-2 py-3 text-center text-xs text-paper transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/5 sm:text-base">
                Django
              </div>
              <div className="relative h-px bg-paper/35 after:absolute after:top-[-0.2rem] after:right-0 after:size-[0.4rem] after:-rotate-45 after:border-r after:border-b after:border-paper/35 after:content-['']">
                <span
                  className="absolute top-[-0.15rem] left-0 size-[0.35rem] animate-[packet-flow_2.6s_0.65s_ease-in-out_infinite] rounded-full bg-accent shadow-[0_0_0.7rem_var(--color-accent)] motion-reduce:animate-none"
                  aria-hidden="true"
                />
              </div>
              <div className="flex min-h-12 items-center justify-center rounded-full border border-paper/25 px-2 py-3 text-center text-xs text-paper transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/5 sm:text-base">
                FastAPI
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[minmax(6rem,0.8fr)_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[minmax(8rem,0.55fr)_minmax(0,1fr)] sm:gap-8">
            <div className="flex min-h-12 items-center justify-center rounded-full border border-accent/60 bg-accent/5 px-2 py-3 text-center text-sm text-accent sm:text-lg">
              JavaScript
            </div>
            <div className="grid grid-cols-[minmax(1.5rem,0.6fr)_minmax(7rem,1.8fr)] items-center gap-2.5">
              <div className="relative h-px bg-paper/35 after:absolute after:top-[-0.2rem] after:right-0 after:size-[0.4rem] after:-rotate-45 after:border-r after:border-b after:border-paper/35 after:content-['']">
                <span
                  className="absolute top-[-0.15rem] left-0 size-[0.35rem] animate-[packet-flow_2.6s_0.45s_ease-in-out_infinite] rounded-full bg-accent shadow-[0_0_0.7rem_var(--color-accent)] motion-reduce:animate-none"
                  aria-hidden="true"
                />
              </div>
              <div className="flex min-h-12 items-center justify-center rounded-full border border-paper/25 px-2 py-3 text-center text-xs text-paper transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/5 sm:text-base">
                React
              </div>
              <div className="relative h-px bg-paper/35 after:absolute after:top-[-0.2rem] after:right-0 after:size-[0.4rem] after:-rotate-45 after:border-r after:border-b after:border-paper/35 after:content-['']">
                <span
                  className="absolute top-[-0.15rem] left-0 size-[0.35rem] animate-[packet-flow_2.6s_0.9s_ease-in-out_infinite] rounded-full bg-accent shadow-[0_0_0.7rem_var(--color-accent)] motion-reduce:animate-none"
                  aria-hidden="true"
                />
              </div>
              <div className="flex min-h-12 items-center justify-center rounded-full border border-paper/25 px-2 py-3 text-center text-xs text-paper transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/5 sm:text-base">
                Next.js
              </div>
              <div className="relative h-px bg-paper/35 after:absolute after:top-[-0.2rem] after:right-0 after:size-[0.4rem] after:-rotate-45 after:border-r after:border-b after:border-paper/35 after:content-['']">
                <span
                  className="absolute top-[-0.15rem] left-0 size-[0.35rem] animate-[packet-flow_2.6s_1.35s_ease-in-out_infinite] rounded-full bg-accent shadow-[0_0_0.7rem_var(--color-accent)] motion-reduce:animate-none"
                  aria-hidden="true"
                />
              </div>
              <div className="flex min-h-12 items-center justify-center rounded-full border border-paper/25 px-2 py-3 text-center text-xs text-paper transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/5 sm:text-base">
                Node.js
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[minmax(6rem,0.8fr)_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[minmax(8rem,0.55fr)_minmax(0,1fr)] sm:gap-8">
            <div className="flex min-h-12 items-center justify-center rounded-full border border-accent/60 bg-accent/5 px-2 py-3 text-center text-sm text-accent sm:text-lg">
              C / C++
            </div>
            <div className="grid grid-cols-[minmax(1.5rem,0.6fr)_minmax(7rem,1.8fr)] items-center gap-2.5">
              <div className="relative h-px bg-paper/35 after:absolute after:top-[-0.2rem] after:right-0 after:size-[0.4rem] after:-rotate-45 after:border-r after:border-b after:border-paper/35 after:content-['']">
                <span
                  className="absolute top-[-0.15rem] left-0 size-[0.35rem] animate-[packet-flow_2.6s_1.8s_ease-in-out_infinite] rounded-full bg-accent shadow-[0_0_0.7rem_var(--color-accent)] motion-reduce:animate-none"
                  aria-hidden="true"
                />
              </div>
              <div className="flex min-h-12 items-center justify-center rounded-full border border-paper/25 px-2 py-3 text-center text-xs text-paper transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/5 sm:text-base">
                Systems thinking
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
