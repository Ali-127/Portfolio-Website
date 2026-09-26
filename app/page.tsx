import Image from "next/image";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaRedditAlien,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";
import ProjectsCarousel from "./projects-carousel";

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

      <section
        className="relative overflow-hidden px-6 py-20 sm:px-10 sm:py-28 lg:px-20 lg:py-40"
        aria-labelledby="projects-title"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl sm:mb-16">
            <p className="mb-5 font-mono text-[0.7rem] leading-relaxed tracking-[0.16em] text-accent uppercase sm:mb-8">
              03 / Selected work
            </p>
            <h2
              id="projects-title"
              className="max-w-[12ch] text-[clamp(3rem,5.4vw,6rem)] leading-[0.96] font-normal tracking-[-0.04em] text-paper"
            >
              Projects made
              <span className="block text-muted">to be useful.</span>
            </h2>
          </div>

          <article className="grid items-center gap-8 border-t border-paper/20 py-8 sm:gap-12 sm:py-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:gap-16">
            <ProjectsCarousel />
            <div className="max-w-xl">
              <p className="mb-4 font-mono text-xs tracking-[0.14em] text-accent uppercase">
                React · Supabase · Reservation flow
              </p>
              <h3 className="text-3xl font-normal tracking-[-0.03em] text-paper sm:text-4xl">
                The Wild Oasis website
              </h3>
              <p className="mt-5 text-base leading-relaxed text-[#c4cbbf] sm:text-lg">
                A cabin reservation experience built while following Jonas
                Schmedtmann’s React course. Guests can explore cabins and
                nightly prices, choose reservation dates, create an account, and
                update their profile information.
              </p>
              <p className="mt-6 font-mono text-xs tracking-[0.12em] text-muted uppercase">
                Practice project · React course
              </p>
            </div>
          </article>

          <article className="grid items-center gap-8 border-t border-paper/20 py-8 sm:gap-12 sm:py-12 lg:grid-cols-[minmax(18rem,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
            <div className="order-2 max-w-xl lg:order-1">
              <p className="mb-4 font-mono text-xs tracking-[0.14em] text-accent uppercase">
                Django REST Framework · PostgreSQL · JWT
              </p>
              <h3 className="text-3xl font-normal tracking-[-0.03em] text-paper sm:text-4xl">
                Taskflow API
              </h3>
              <p className="mt-5 text-base leading-relaxed text-[#c4cbbf] sm:text-lg">
                A professional REST API for project and task management, built
                independently with Django REST Framework and PostgreSQL. It
                includes JWT authentication, advanced filtering, automatically
                generated API documentation, and comprehensive test coverage.
              </p>
              <p className="mt-6 font-mono text-xs tracking-[0.12em] text-muted uppercase">
                Independent project · Backend API
              </p>
            </div>
            <div className="relative order-1 overflow-hidden border border-paper/20 bg-[#151d18] p-5 sm:p-8 lg:order-2">
              <div className="mb-8 flex items-center gap-2 border-b border-paper/15 pb-4">
                <span className="size-2 rounded-full bg-[#e8b85b]" />
                <span className="size-2 rounded-full bg-[#a7afa1]/70" />
                <span className="size-2 rounded-full bg-[#a7afa1]/40" />
                <span className="ml-auto font-mono text-[0.65rem] tracking-[0.12em] text-muted uppercase">
                  taskflow / api
                </span>
              </div>
              <div className="space-y-5 font-mono text-xs leading-relaxed sm:text-sm">
                <p className="text-muted">{"// project workspace"}</p>
                <p>
                  <span className="text-accent">GET</span>
                  <span className="ml-3 text-paper">
                    /api/projects/?status=active
                  </span>
                </p>
                <p className="pl-4 text-muted">
                  200 OK <span className="text-paper">· 12 projects</span>
                </p>
                <div className="h-px bg-paper/15" />
                <p>
                  <span className="text-[#9bc58b]">POST</span>
                  <span className="ml-3 text-paper">/api/tasks/</span>
                </p>
                <p className="pl-4 text-muted">
                  Authorization:{" "}
                  <span className="text-paper">Bearer ········</span>
                </p>
                <p className="pl-4 text-muted">
                  201 Created{" "}
                  <span className="text-paper">· task assigned</span>
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["JWT AUTH", "FILTERING", "API DOCS", "TESTED"].map(
                  (feature) => (
                    <span
                      key={feature}
                      className="border border-paper/20 px-2.5 py-1.5 font-mono text-[0.6rem] tracking-[0.1em] text-muted"
                    >
                      {feature}
                    </span>
                  ),
                )}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden px-6 py-24 sm:px-10 sm:py-32 lg:px-20 lg:py-40"
        aria-labelledby="contact-title"
      >
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-5 font-mono text-[0.7rem] leading-relaxed tracking-[0.16em] text-accent uppercase sm:mb-8">
            04 / Contact
          </p>
          <h2
            id="contact-title"
            className="text-[clamp(3rem,5.4vw,6rem)] leading-[0.96] font-normal tracking-[-0.04em] text-paper"
          >
            Let&apos;s connect.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[#c4cbbf] sm:mt-7 sm:text-lg">
            Find me around the web or send a note. I&apos;m always glad to talk
            about thoughtful software and interesting problems.
          </p>

          <div className="relative mx-auto mt-10 aspect-square w-full max-w-[38rem] sm:mt-14">
            <div
              className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,#e8b85b1f_0%,#27372c66_38%,transparent_72%)] blur-2xl"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[37%] origin-left rotate-0 bg-gradient-to-r from-accent/70 to-paper/10 animate-[connector-glow_3.2s_ease-in-out_infinite] motion-reduce:animate-none"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[37%] origin-left rotate-[51deg] bg-gradient-to-r from-accent/70 to-paper/10 animate-[connector-glow_3.2s_0.3s_ease-in-out_infinite] motion-reduce:animate-none"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[37%] origin-left rotate-[103deg] bg-gradient-to-r from-accent/70 to-paper/10 animate-[connector-glow_3.2s_0.6s_ease-in-out_infinite] motion-reduce:animate-none"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[37%] origin-left rotate-[154deg] bg-gradient-to-r from-accent/70 to-paper/10 animate-[connector-glow_3.2s_0.9s_ease-in-out_infinite] motion-reduce:animate-none"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[37%] origin-left rotate-[206deg] bg-gradient-to-r from-accent/70 to-paper/10 animate-[connector-glow_3.2s_1.2s_ease-in-out_infinite] motion-reduce:animate-none"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[37%] origin-left rotate-[257deg] bg-gradient-to-r from-accent/70 to-paper/10 animate-[connector-glow_3.2s_1.5s_ease-in-out_infinite] motion-reduce:animate-none"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[37%] origin-left rotate-[309deg] bg-gradient-to-r from-accent/70 to-paper/10 animate-[connector-glow_3.2s_1.8s_ease-in-out_infinite] motion-reduce:animate-none"
              aria-hidden="true"
            />

            <div className="absolute left-1/2 top-1/2 z-10 size-[min(42vw,15rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-paper/35 bg-ink p-2 shadow-[0_0_3rem_#e8b85b22] sm:size-[17rem]">
              <Image
                src="/profile.jpg"
                alt="Portrait of the portfolio owner"
                width={420}
                height={420}
                className="size-full rounded-full object-cover"
              />
            </div>

            <a
              href="#contact"
              aria-label="Reddit profile link, add your URL"
              className="group absolute left-[48%] top-[2%] z-20 flex size-12 -translate-x-1/2 flex-col items-center justify-center gap-1 text-accent animate-[social-float_4s_ease-in-out_infinite] motion-reduce:animate-none sm:size-14"
            >
              <FaRedditAlien className="size-6 transition-transform group-hover:scale-125 sm:size-7" />
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.12em] text-paper">
                Reddit
              </span>
            </a>
            <a
              href="#contact"
              aria-label="GitHub profile link, add your URL"
              className="group absolute right-[5%] top-[18%] z-20 flex size-12 flex-col items-center justify-center gap-1 text-accent animate-[social-float_4.2s_0.25s_ease-in-out_infinite] motion-reduce:animate-none sm:size-14"
            >
              <FaGithub className="size-6 transition-transform group-hover:scale-125 sm:size-7" />
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.12em] text-paper">
                GitHub
              </span>
            </a>
            <a
              href="#contact"
              aria-label="Telegram profile link, add your URL"
              className="group absolute right-[1%] top-[61%] z-20 flex size-12 flex-col items-center justify-center gap-1 text-accent animate-[social-float_3.8s_0.5s_ease-in-out_infinite] motion-reduce:animate-none sm:size-14"
            >
              <FaTelegram className="size-6 transition-transform group-hover:scale-125 sm:size-7" />
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.12em] text-paper">
                Telegram
              </span>
            </a>
            <a
              href="#contact"
              aria-label="Instagram profile link, add your URL"
              className="group absolute bottom-[2%] right-[22%] z-20 flex size-12 flex-col items-center justify-center gap-1 text-accent animate-[social-float_4.4s_0.75s_ease-in-out_infinite] motion-reduce:animate-none sm:size-14"
            >
              <FaInstagram className="size-6 transition-transform group-hover:scale-125 sm:size-7" />
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.12em] text-paper">
                Instagram
              </span>
            </a>
            <a
              href="#contact"
              aria-label="X profile link, add your URL"
              className="group absolute bottom-[2%] left-[21%] z-20 flex size-12 flex-col items-center justify-center gap-1 text-accent animate-[social-float_4s_1s_ease-in-out_infinite] motion-reduce:animate-none sm:size-14"
            >
              <FaXTwitter className="size-6 transition-transform group-hover:scale-125 sm:size-7" />
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.12em] text-paper">
                X
              </span>
            </a>
            <a
              href="#contact"
              aria-label="LinkedIn profile link, add your URL"
              className="group absolute left-[1%] top-[61%] z-20 flex size-12 flex-col items-center justify-center gap-1 text-accent animate-[social-float_4.3s_1.25s_ease-in-out_infinite] motion-reduce:animate-none sm:size-14"
            >
              <FaLinkedinIn className="size-6 transition-transform group-hover:scale-125 sm:size-7" />
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.12em] text-paper">
                LinkedIn
              </span>
            </a>
            <a
              href="#contact"
              aria-label="Email link, add your address"
              className="group absolute left-[5%] top-[18%] z-20 flex size-12 flex-col items-center justify-center gap-1 text-accent animate-[social-float_3.9s_1.5s_ease-in-out_infinite] motion-reduce:animate-none sm:size-14"
            >
              <FaEnvelope className="size-6 transition-transform group-hover:scale-125 sm:size-7" />
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.12em] text-paper">
                Email
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
