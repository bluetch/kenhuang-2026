import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "components/SiteLayout";

export default function Contact() {
  return (
    <SiteLayout
      title="Contact — Ken Huang"
      description="Get in touch with Ken Huang for collaboration, product work, or mentorship."
    >
      <div className="flex min-h-screen items-center justify-center bg-[#f7f1e8] px-6 py-24 text-[#1d2636]">
        <div className="w-full max-w-2xl rounded-[2rem] border border-[#ddd1c4] bg-[#fffdf8] p-8 text-center shadow-[0_24px_80px_rgba(61,49,38,0.10)] md:p-12">
          <p
            className="text-[10px] uppercase tracking-[0.22em] text-[#8f7d6f]"
            style={{ fontFamily: '"Press Start 2P", monospace' }}
          >
            Contact
          </p>
          <h1
            className="mt-5 text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.94] tracking-[-0.05em]"
            style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
          >
            Say hello.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#5f6675]">
            For product work, thoughtful collaborations, mentorship, or a good conversation about games and interfaces.
          </p>
          <a
            href="mailto:bluetch@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1f3a5f] px-6 py-3 text-sm font-medium text-[#fff8f0]"
          >
            bluetch@gmail.com
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </SiteLayout>
  );
}
