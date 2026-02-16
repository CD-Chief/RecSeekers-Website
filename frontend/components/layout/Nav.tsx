"use client";

import Link from "next/link";
import { Button } from "../ui/Button";

export function Nav() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Jobs", href: "/jobs" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className=" bg-primary rounded-3xl shadow-lg border border-neutral-50/20 px-2 py-2">
        <div className="flex gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button variant="text" size="md">
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}