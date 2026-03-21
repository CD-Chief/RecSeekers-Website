"use client";

import { useEffect, useRef, useState } from "react";
import { BlobField } from "@/components/Blob/Blob";
import { useHeroStage } from "@/context/HeroStageContext";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

// ─── Adjust these to control blob appearance in each stage ───────────────────
const BLOB_SIZE_STAGE1  = "24vmax";   // blob size on the logo/tagline screen
const BLOB_SIZE_STAGE2  = "24vmax";   // blob size on the headline/CTA screen
const BLOB_BLUR_STAGE1  = "0px";      // blur on stage 1 (none — blobs are sharp)
const BLOB_BLUR_STAGE2  = "80px";     // blur on stage 2 (settled)
const BLOB_BLUR_PEAK    = "120px";    // blur at the height of the transition
// ─────────────────────────────────────────────────────────────────────────────

/** How many px of accumulated wheel delta trigger the stage transition */
const SCROLL_THRESHOLD = 60;

const cooper = localFont({
  src: "../../app/fonts/cooper-black-cdnfonts/coopbl.ttf",
  display: "swap",
});

export function HeroSection() {
  const [stage, setStage]             = useState<1 | 2>(1);
  const [transitioning, setTransitioning] = useState(false);
  const [blobBlur, setBlobBlur]       = useState(BLOB_BLUR_STAGE1);
  const [blobSize, setBlobSize]       = useState(BLOB_SIZE_STAGE1);
  const { setIsHeroStage1 }           = useHeroStage();

  const hasTransitioned = useRef(false);
  const accumulated     = useRef(0);
  const touchStartY     = useRef<number | null>(null);

  useEffect(() => {
    // Prevent the page from scrolling while we're on Stage 1
    document.body.style.overflow = "hidden";

    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;

    function triggerTransition() {
      if (hasTransitioned.current) return;
      hasTransitioned.current = true;

      setTransitioning(true);
      setIsHeroStage1(false);

      // Step 1 – blur spikes to peak
      setBlobBlur(BLOB_BLUR_PEAK);

      // Step 2 – show stage 2, settle blur & size
      t1 = setTimeout(() => {
        setStage(2);
        setBlobBlur(BLOB_BLUR_STAGE2);
        setBlobSize(BLOB_SIZE_STAGE2);
      }, 350);

      // Step 3 – unlock scroll once stage 2 is fully visible
      t2 = setTimeout(() => {
        setTransitioning(false);
        document.body.style.overflow = "";
      }, 750);
    }

    function onWheel(e: WheelEvent) {
      if (hasTransitioned.current) return;
      if (e.deltaY > 0) {
        accumulated.current += e.deltaY;
        if (accumulated.current >= SCROLL_THRESHOLD) {
          triggerTransition();
        }
      }
    }

    function onTouchStart(e: TouchEvent) {
      touchStartY.current = e.touches[0].clientY;
    }

    function onTouchMove(e: TouchEvent) {
      if (hasTransitioned.current || touchStartY.current === null) return;
      const delta = touchStartY.current - e.touches[0].clientY;
      if (delta > 30) triggerTransition();
    }

    window.addEventListener("wheel",      onWheel,      { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove",  onTouchMove,  { passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("wheel",      onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove",  onTouchMove);
      document.body.style.overflow = "";
    };
  }, []);

  const stage1Visible = stage === 1 && !transitioning;
  const stage2Visible = stage === 2;
  const showChevron   = !transitioning && stage === 1;

  return (
    <section
      className="sticky top-0 z-10 isolate min-h-screen overflow-hidden"
      style={{ background: "#da8da0" }}
    >
      <BlobField size={blobSize} blurAmount={blobBlur} />

      {/* ── Stage 1: Centered logo + tagline ─────────────────────────────── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
        style={{
          opacity:       stage1Visible ? 1 : 0,
          transform:     stage1Visible ? "translateY(0)" : "translateY(-40px)",
          transition:    "opacity 0.45s ease, transform 0.45s ease",
          pointerEvents: stage1Visible ? "auto" : "none",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/RecLogo.svg"
          alt="RecSeekers"
          className="w-auto max-w-2xl my-3.5"
        />
        <h2 className={`text-6xl font-bold text-black -mt-4 ${cooper.className}`}>
          &ldquo;Have a nice day&rdquo;
        </h2>
      </div>

      {/* ── Bouncing chevron ──────────────────────────────────────────────── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{
          opacity:    showChevron ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      >
        <svg
          className="chevron-bounce"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* ── Stage 2: Left / right hero layout ────────────────────────────── */}
      <div
        className="absolute inset-0 flex items-center px-8 py-16"
        style={{
          opacity:       stage2Visible ? 1 : 0,
          transform:     stage2Visible ? "translateY(0)" : "translateY(28px)",
          transition:    "opacity 0.45s ease, transform 0.45s ease",
          pointerEvents: stage2Visible ? "auto" : "none",
        }}
      >
        <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Headline + subtext + CTA */}
          <div className="flex-1 flex flex-col items-start">
            <h1 className={`text-6xl md:text-5xl text-black mb-4 leading-tight ${cooper.className}`}>
              The best recruiters aren&apos;t on job boards.
            </h1>
            <p className="text-xl text-black/80 mb-10 leading-relaxed max-w-md font-medium">
              RecSeekers places top-tier recruiters into agencies that know the
              value of great hiring capability.
            </p>
            <Link href="/about">
                <Button variant="primary" size="xl" className={cooper.className}>
                  Learn More
                </Button>
            </Link>
          </div>

          {/* Right: Illustration */}
            <div className="flex-1 w-full max-w-xl lg:max-w-2xl">
            <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden">
              <Image
                src="/Illustrations/JobHunt1.svg"
                alt="Illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
