"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";

const NAV_ITEMS = [
  {
    label: "About",
    href: "/about",
    previewTitle: "About RecSeekers",
    previewText: "We specialise in recruiter-to-recruiter hiring—matching top talent with high-performing teams.",
    previewImage: "/file.svg",
  },
  {
    label: "Candidates",
    href: "/candidates",
    previewTitle: "For Recruiter Candidates",
    previewText: "Level up your recruiting career with roles that match your niche, targets, and way of working.",
    previewImage: "/file.svg",
  },
  {
    label: "Employers",
    href: "/employers",
    previewTitle: "For Hiring Teams",
    previewText: "Hire proven recruiters who understand your market, your pipeline, and your growth targets.",
    previewImage: "/file.svg",
  },
  {
    label: "Contact",
    href: "/contact",
    previewTitle: "Talk to RecSeekers",
    previewText: "Book a quick call to discuss open roles, hiring plans, or your next career move.",
    previewImage: "/file.svg",
  },
];

export function Nav() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isInside, setIsInside] = useState(false);

  // preview is visible if mouse is over nav OR over preview
  const isPreviewOpen = hoveredIndex !== null && isInside;

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div
        className="relative"
        onMouseEnter={() => setIsInside(true)}
        onMouseLeave={() => {
          setIsInside(false);
          // small delay so it can finish fade if you want
          setTimeout(() => setHoveredIndex(null), 120);
        }}
      >
        {/* Floating navbar pill */}
        <div className="bg-primary rounded-3xl shadow-lg border border-neutral-50/20 px-2 py-2 flex gap-3">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <Button variant="text" size="md">
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Wider/taller preview bar */}
        <AnimatePresence>
          {isPreviewOpen && hoveredIndex !== null && (
            <motion.div
              key="nav-preview"
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 8, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="
                absolute left-1/2 -translate-x-1/2 mt-2 w-[calc(100%+2rem)] max-w-md
                rounded-2xl bg-white/95 border border-neutral-200 shadow-2xl
                overflow-hidden
              "
              onMouseEnter={() => setIsInside(true)}
              onMouseLeave={() => setIsInside(false)}
            >
              {/* Grid: 33% image | 67% text */}
              <motion.div
                key={NAV_ITEMS[hoveredIndex].label}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-[1fr_2fr] h-20 items-center p-2 gap-3"
              >
                {/* Left 33%: Image */}
                <div className="h-16 w-16 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img
                    src={NAV_ITEMS[hoveredIndex].previewImage}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Right 67%: Text */}
                <div>
                  <p className="text-sm font-semibold text-neutral-900 leading-tight">
                    {NAV_ITEMS[hoveredIndex].previewTitle}
                  </p>
                  <p className="text-xs text-neutral-600 mt-0.5 leading-tight">
                    {NAV_ITEMS[hoveredIndex].previewText}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}