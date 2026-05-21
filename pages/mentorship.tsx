import { ArrowUpRight, Check } from "lucide-react";
import { SiteLayout } from "components/SiteLayout";

const programs = [
  {
    name: "Job Sprint",
    sessions: 3,
    price: 1000,
    unit: "TWD / session",
    desc: "Portfolio, resume, and interview strategy for people actively job hunting.",
    perks: ["Portfolio critique", "Resume review", "Mock interview", "Application strategy"],
  },
  {
    name: "Goal Achievement",
    sessions: 6,
    price: 900,
    unit: "TWD / session",
    desc: "A medium-length track for designers who want clearer direction and stronger momentum.",
    perks: ["Goal setting", "Progress check-ins", "Design critique", "Career roadmap"],
    featured: true,
  },
  {
    name: "Career Coaching",
    sessions: 12,
    price: 800,
    unit: "TWD / session",
    desc: "Longer-term support for designers planning the next chapter of their career.",
    perks: ["Long-term planning", "Leadership coaching", "Negotiation", "Senior-level review"],
  },
];

export default function Mentorship() {
  return (
    <SiteLayout
      title="Mentorship — Ken Huang"
      description="1:1 mentorship for designers and frontend builders who want stronger product instincts and clearer next steps."
    >
      <div className="bg-[#f7f1e8] text-[#1d2636]">
        <section className="px-6 pb-18 pt-28 md:px-8 lg:px-10 lg:pb-24 lg:pt-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <p
                className="text-[10px] uppercase tracking-[0.22em] text-[#8f7d6f]"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
              >
                Mentorship
              </p>
              <h1
                className="mt-4 text-[clamp(3rem,7vw,6rem)] leading-[0.92] tracking-[-0.05em]"
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
              >
                Clearer direction,
                <br />
                sharper product instincts.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6675]">
                I work best with designers and frontend people who are good already, but want better judgment,
                stronger positioning, and a more useful plan.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[#5f6675]">
                The tone is direct, supportive, and practical. Less motivational speech. More honest progress.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:bluetch@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1f3a5f] px-6 py-3 text-sm font-medium text-[#fff8f0]"
                >
                  Email me
                  <ArrowUpRight size={16} />
                </a>
                <div className="rounded-full border border-[#d3c5b7] px-6 py-3 text-sm text-[#6b625a]">
                  50+ mentees · 20+ countries
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#ddd1c4] bg-[#fffdf8] p-4 shadow-[0_24px_80px_rgba(61,49,38,0.12)]">
              <img
                src="/images/mentorship/mentorship_hero.jpg"
                alt="Mentorship with Ken Huang"
                className="w-full rounded-[1.6rem] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf4] px-6 py-18 md:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p
                className="text-[10px] uppercase tracking-[0.22em] text-[#8f7d6f]"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
              >
                Programs
              </p>
              <h2
                className="mt-4 text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.96] tracking-[-0.05em]"
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
              >
                Pick the pace that fits.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {programs.map((program) => (
                <div
                  key={program.name}
                  className="rounded-[1.8rem] border bg-[#fffdf8] p-6"
                  style={{
                    borderColor: program.featured ? "#1f3a5f" : "#ddd1c4",
                    boxShadow: program.featured ? "0 18px 60px rgba(31,58,95,0.08)" : "none",
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-2xl text-[#243b63]" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>
                        {program.name}
                      </p>
                      <p className="mt-1 text-sm text-[#8b8178]">{program.sessions} sessions</p>
                    </div>
                    {program.featured && (
                      <span className="rounded-full bg-[#1f3a5f] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#fff8f0]">
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-5xl leading-none text-[#1d2636]" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>
                      {program.price}
                    </span>
                    <span className="text-sm text-[#8b8178]">{program.unit}</span>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-[#5f6675]">{program.desc}</p>

                  <div className="mt-6 space-y-3">
                    {program.perks.map((perk) => (
                      <div key={perk} className="flex items-start gap-3 text-sm text-[#4f5969]">
                        <Check size={16} className="mt-1 flex-shrink-0 text-[#1f3a5f]" />
                        {perk}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
