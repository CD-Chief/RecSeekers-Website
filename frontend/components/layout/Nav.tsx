"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
    previewTitle: "Welcome to RecSeekers",
    previewText: "High-impact recruiters matching talent with their next move.",
  },
  {
    label: "About",
    href: "/about",
    previewTitle: "About RecSeekers",
    previewText: "Recruiters for recruiters – learn how we work and who we help.",
  },
  {
    label: "Jobs",
    href: "/jobs",
    previewTitle: "Live roles",
    previewText: "Browse open positions and find your next opportunity.",
  },
  {
    label: "Contact",
    href: "/contact",
    previewTitle: "Work with us",
    previewText: "Reach out to discuss hiring or your next career step.",
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

        {/* Preview bar: same width as nav pill */}
        <AnimatePresence>
          {isPreviewOpen && hoveredIndex !== null && (
            <motion.div
              key="nav-preview"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 8 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="
                absolute left-0 right-0 mt-1
                rounded-2xl bg-white/95 border border-neutral-200 shadow-xl
                overflow-hidden
              "
              onMouseEnter={() => setIsInside(true)}
              onMouseLeave={() => setIsInside(false)}
            >
              {/* Content fades when hoveredIndex changes */}
              <motion.div
                key={NAV_ITEMS[hoveredIndex].label}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="px-4 py-3"
              >
                <p className="text-xs font-semibold text-neutral-900">
                  {NAV_ITEMS[hoveredIndex].previewTitle}
                </p>
                <p className="mt-1 text-xs text-neutral-600">
                  {NAV_ITEMS[hoveredIndex].previewText}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}