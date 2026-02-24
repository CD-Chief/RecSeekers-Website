"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { NavPreview } from "./NavPreview";

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
          <NavPreview
            items={PILL_ITEMS}
            hoveredIndex={hoveredIndex}
            isOpen={isPreviewOpen}
            onMouseEnter={() => setIsInside(true)}
            onMouseLeave={() => setIsInside(false)}
          />
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
