import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "components/SiteLayout";

export default function Contact() {
  return (
    <SiteLayout
      title="Contact — Ken Huang"
      description="Contact Ken Huang for collaboration, mentorship, or speaking opportunities."
    >
      <section
        className="min-h-screen flex items-center justify-center"
        style={{ background: "#0D1533" }}
      >
        <div className="text-center px-6 space-y-6">
          <p
            className="text-[10px] tracking-widest uppercase"
            style={{ fontFamily: "Space Mono, monospace", color: "#4D9EFF" }}
          >
            // CONTACT.INIT
          </p>
          <h1
            className="leading-tight"
            style={{
              fontFamily: "VT323, monospace",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "#D0E4FF",
            }}
          >
            Thanks for taking the time<br />to reach out.
          </h1>
          <p
            className="text-sm max-w-sm mx-auto"
            style={{ fontFamily: "DM Sans, sans-serif", color: "#8898BB" }}
          >
            I&apos;m always open to new collaborations, mentorship inquiries, or just a good conversation.
          </p>
          <a
            href="mailto:bluetch@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 text-[10px] font-bold tracking-widest uppercase transition-all duration-150"
            style={{
              fontFamily: "Space Mono, monospace",
              background: "#4D9EFF",
              color: "#0D1533",
              border: "2px solid #4D9EFF",
              boxShadow: "4px 4px 0 0 #2468CC",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translate(2px,2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "4px 4px 0 0 #2468CC"; e.currentTarget.style.transform = "none"; }}
          >
            ▶ bluetch@gmail.com <ArrowUpRight size={12} />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
