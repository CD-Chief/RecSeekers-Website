"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FEATURES = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Niche-Ready Talent",
    text: "Every recruiter we place already specialises in your sector. No generalists, no guesswork—just people who speak your hiring language from day one.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Faster Time-to-Hire",
    text: "Our pre-vetted network means you get matched with proven recruiters quickly—cutting weeks off the search so your pipeline keeps moving.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Flexible Engagement Models",
    text: "Whether you need a retained search or contingency hire, we adapt to how you work—so you only pay for what actually fits your team's structure.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.18, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function FeatureCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="flex flex-col gap-6">
      {FEATURES.map((feature, i) => (
        <motion.div
          key={feature.title}
          custom={i}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={cardVariants}
          className="flex items-start gap-5 bg-white rounded-2xl border border-neutral-200 shadow-sm p-6"
        >
          {/* Icon */}
          <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
            {feature.icon}
          </div>

          {/* Text */}
          <div>
            <h3 className="text-base font-semibold text-neutral-900 mb-1">
              {feature.title}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {feature.text}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
