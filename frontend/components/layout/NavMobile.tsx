"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useHeroStage } from "@/context/HeroStageContext";
import { PILL_ITEMS } from "./navItems";

export function NavMobile() {
  const pathname = usePathname();
  const { isHeroStage1 } = useHeroStage();

  // Keep the same logo behavior as desktop nav on the home hero.
  const showLogo = pathname !== "/" || !isHeroStage1;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 md:hidden">
      <div className="flex items-center justify-between bg-primary/90 backdrop-blur-3xl shadow-lg border-b border-neutral-50/20 px-4 py-3 rounded-b-lg">
        <AnimatePresence>
          {showLogo && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
            >
              <Link href="/" aria-label="RecSeekers home">
                <img src="/RecLogo.svg" alt="RecSeekers" className="h-8 w-auto" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-50/30 bg-white/20 text-primary-dark"
          aria-label={`Open navigation menu (${PILL_ITEMS.length} primary links)`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default NavMobile;
