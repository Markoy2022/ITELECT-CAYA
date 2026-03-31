"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timeoutId);
  }, []);
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SKILLS", href: "/skills" },
    { name: "PROJECTS", href: "/projects" },
    { name: "BLOG", href: "/blog" },
  ];

  return (
    <nav className="w-full border-b border-black/10 dark:border-white/10 py-6 px-8 flex justify-between items-center bg-[#E5E5E5] dark:bg-[#363737] transition-colors duration-300">
      <Link 
        href="/" 
        className="text-2xl md:text-3xl font-bold tracking-tighter hover:opacity-70 transition-opacity"
      >
        CAYA PORTFOLIO
      </Link>
      
      <div className="flex items-center space-x-6 md:space-x-12">
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-bold transition-all relative tracking-widest",
                  isActive 
                    ? "text-black dark:text-white" 
                    : "text-zinc-500 hover:text-black dark:hover:text-white"
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#BFC873] dark:bg-[#6b732e] rounded-full transition-colors duration-300" />
                )}
              </Link>
            );
          })}
        </div>

        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:bg-[#BFC873] dark:hover:bg-[#6b732e] hover:text-white transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
