import { SiteLayout } from "components/SiteLayout";

const experience = [
  {
    date: "Now",
    title: "Building indie games",
    note: "Small systems, toy-like worlds, readable feedback, and better game feel one loop at a time.",
  },
  {
    date: "2022 — now",
    title: "Staff Frontend Developer at TXOne Networks",
    note: "Still shipping product work, but game development has become the main creative direction.",
  },
  {
    date: "2017 — 2022",
    title: "Shopee, fintech, product systems",
    note: "A long stretch of design, frontend, experiments, systems, and learning how products actually hold together.",
  },
  {
    date: "2010 — 2017",
    title: "Early web and product years",
    note: "A mixed education across commerce, platforms, service design, and building things that had to work in the real world.",
  },
  {
    date: "2010 — 2017",
    title: "Before that",
    note: "Curious about interfaces, making on the internet, and how small details change how something feels.",
  },
];

export default function About() {
  return (
    <SiteLayout
      title="About — Ken Huang"
      description="An indie game developer with a product designer's eye for systems, clarity, and playful details that actually belong."
    >
      <div className="bg-[#f7f1e8] text-[#1d2636]">
        <section className="relative overflow-hidden px-6 pb-18 pt-28 md:px-8 lg:px-10 lg:pb-20 lg:pt-32">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(rgba(31,58,95,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(31,58,95,0.05) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="overflow-hidden rounded-[2rem] bg-[#fffdf8] p-4 shadow-[0_24px_80px_rgba(61,49,38,0.12)]">
              <img
                src="/images/about/kenhuang_portrait.png"
                alt="Ken Huang portrait"
                className="w-full rounded-[1.6rem] object-cover"
              />
            </div>

            <div className="max-w-3xl">
              <p
                className="text-[10px] uppercase tracking-[0.22em] text-[#8f7d6f]"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
              >
                About
              </p>
              <h1
                className="mt-4 text-[clamp(3rem,6vw,5.6rem)] leading-[0.94] tracking-[-0.05em]"
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
              >
                Making games now,
                <br />
                after a long time
                <br />
                on the web.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6675]">
                I&apos;m Ken, based in Taipei. I spent years in product design and frontend, and somewhere along the way
                I started caring more and more about games.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[#5f6675]">
                That older work still shapes how I build: clear systems, good pacing, and playful details that earn
                their place.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-18 md:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <p
              className="text-[10px] uppercase tracking-[0.22em] text-[#8f7d6f]"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              Timeline
            </p>
            <div className="mt-8 space-y-6">
              {experience.map((item, index) => (
                <div key={`${item.date}-${item.title}`} className="grid gap-3 border-t border-[#ddd1c4] pt-6 md:grid-cols-[120px_1fr] md:gap-8">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#8b8178]">{item.date}</p>
                  <div>
                    <p className="text-[1.45rem] leading-tight text-[#1d2636]" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>
                      {item.title}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5f6675]">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 border-t border-[#ddd1c4] pt-6 text-sm leading-7 text-[#5f6675]">
              50+ mentees, 20+ countries visited, an 800km Camino, and a long-running habit of learning by making.
              Games are the latest chapter, but probably not the last one.
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
