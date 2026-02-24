"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";

const PILL_ITEMS = [
  {
    label: "Home",
    href: "/",
    previewTitle: "Welcome to RecSeekers",
    previewText: "High-impact recruiters matching top talent with their next move.",
    previewImage: "/file.svg",
  },
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
];

const CONTACT_ITEM = {
  label: "Contact us",
  href: "/contact",
};

export function Nav() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isInside, setIsInside] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isPreviewOpen = hoveredIndex !== null && isInside;
  const showLogo = pathname !== "/" || scrolled;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="relative flex items-center justify-center bg-primary/90 backdrop-blur-3xl shadow-lg border-b border-neutral-50/20 px-6 py-2 rounded-b-lg">

        {/* Logo – far left, hidden on landing until scrolled */}
        <AnimatePresence>
          {showLogo && (
            <motion.div
              className="absolute left-10"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
            >
              <Link href="/">
                <img src="/RecLogo.svg" alt="RecSeekers" className="h-8 w-auto" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pill + preview – hover system scoped here only */}
        <div
          className="relative"
          onMouseEnter={() => setIsInside(true)}
          onMouseLeave={() => {
            setIsInside(false);
            setTimeout(() => setHoveredIndex(null), 120);
          }}
        >
          {/* Floating navbar pill – centered */}
          <div className="flex gap-3 px-2 py-1">
            {PILL_ITEMS.map((item, index) => (
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

          {/* Preview bar – centered under pill */}
          <AnimatePresence>
            {isPreviewOpen && hoveredIndex !== null && (
              <motion.div
                key="nav-preview"
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 8, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="
                  absolute left-1/2 -translate-x-1/2 top-full mt-2 w-80
                  rounded-2xl bg-white/95 border border-neutral-200 shadow-2xl
                  overflow-hidden
                "
                onMouseEnter={() => setIsInside(true)}
                onMouseLeave={() => setIsInside(false)}
              >
                <motion.div
                  key={PILL_ITEMS[hoveredIndex].label}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-[1fr_2fr] h-20 items-center p-2 gap-3"
                >
                  {/* Left 33%: Image */}
                  <div className="h-16 w-16 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    <img
                      src={PILL_ITEMS[hoveredIndex].previewImage}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Right 67%: Text */}
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 leading-tight">
                      {PILL_ITEMS[hoveredIndex].previewTitle}
                    </p>
                    <p className="text-xs text-neutral-600 mt-0.5 leading-tight">
                      {PILL_ITEMS[hoveredIndex].previewText}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Contact button – far right, outside preview system */}
        <div className="absolute right-10">
          <Link href={CONTACT_ITEM.href}>
            <Button variant="tertiary2" size="md">
              {CONTACT_ITEM.label}
            </Button>
          </Link>
        </div>

      </div>
    </nav>
  );
}
