"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import localFont from "next/font/local";
import { Button } from "@/components/ui/Button";

const cooper = localFont({
  src: "../../app/fonts/cooper-black-cdnfonts/coopbl.ttf",
  display: "swap",
});

export function BottomCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-white px-8 pb-24">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 48 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="bg-tertiary rounded-3xl px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary-dark/10 shadow-lg"
        >
          {/* Left: Text */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold tracking-widest uppercase text-white/60">
              Ready to build your team?
            </p>
            <h3 className={`text-2xl lg:text-3xl text-white leading-tight ${cooper.className}`}>
              Let&apos;s find your next great recruiter.
            </h3>
          </div>

          {/* Right: Button */}
          <div className="shrink-0 flex justify-center">
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
