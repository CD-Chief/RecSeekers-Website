import Link from "next/link";
import localFont from "next/font/local";
import { Button } from "@/components/ui/Button";
import { FeatureCards } from "@/components/employers/FeatureCards";
import { BottomCTA } from "@/components/employers/BottomCTA";

const cooper = localFont({
  src: "../fonts/cooper-black-cdnfonts/coopbl.ttf",
  display: "swap",
});

export default function EmployersPage() {
  return (
    <main className="w-full">
      {/* ── CTA BANNER ── */}
      <section
        className="relative min-h-[30vh] flex items-center overflow-hidden"
        style={{ background: "#ffa4bb" }}
      >
        {/* Soft background blob accent */}
        <div className="absolute -top-32 -right-32 w-150 h-150 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-100 h-100 rounded-full bg-primary-dark/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto w-full px-8 pt-24 pb-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: Copy + CTA ── */}
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary-dark/70">
              For Hiring Teams
            </p>

            <h1
              className={`text-5xl lg:text-6xl leading-tight text-primary-dark ${cooper.className}`}
            >
              Find recruiters who{" "}
              <span className="italic text-white">already get it.</span>
            </h1>

            <p className="text-lg text-primary-dark/80 max-w-md leading-relaxed">
              Stop onboarding recruiters who need six months to ramp. We place
              niche-specific recruitment professionals who hit the ground
              running—already fluent in your market, your roles, and your
              growth targets.
            </p>

            <div className="mt-2 flex justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Let&apos;s Talk Hiring
                </Button>
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Image ── */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Offset border for neo-brutalist feel */}
              <div className="absolute inset-0 rounded-3xl border-4 border-primary-dark translate-x-3 translate-y-3" />
              <div className="relative h-full w-full rounded-3xl border-4 border-primary-dark overflow-hidden bg-white/30">
                <img
                  src="/Illustrations/FindingIdeas2.svg"
                  alt="Employer hiring illustration"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── WHY WORK WITH US ── */}
      <section className="min-h-screen flex flex-col justify-center bg-white px-8">
        <div className="max-w-6xl mx-auto w-full">

          {/* Section title */}
          <h2 className={`text-4xl lg:text-5xl text-neutral-900 mb-16 ${cooper.className}`}>
            Why work with{" "}
            <span className="text-primary italic">RecSeekers?</span>
          </h2>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* LEFT: Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 rounded-3xl border-4 border-neutral-900 translate-x-3 translate-y-3" />
                <div className="relative h-full w-full rounded-3xl border-4 border-neutral-900 overflow-hidden bg-neutral-100">
                  <img
                    src="/Illustrations/BusinessDeal1.svg"
                    alt="Why work with RecSeekers"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT: Feature cards */}
            <FeatureCards />

          </div>
        </div>
      </section>
      <BottomCTA />
    </main>
  );
}
