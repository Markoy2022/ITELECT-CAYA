"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const contacts = [
    { label: "GITHUB", href: "https://github.com/Markoy2022" },
    { label: "FACEBOOK", href: "https://www.facebook.com/JMarkCaya" },
    { label: "GMAIL", href: "mailto:johnmarkcaya222@gmail.com" },
  ];

  return (
    <div
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 h-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "flex flex-col gap-6 p-8 bg-white/90 dark:bg-[#363737]/90 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-r-3xl transition-all duration-500 ease-in-out shadow-2xl",
          isHovered ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        )}
      >
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            className="text-xs font-bold tracking-[0.2em] text-zinc-500 hover:text-[#BFC873] dark:hover:text-[#6b732e] transition-all duration-300 relative group"
          >
            {contact.label}
            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#BFC873] dark:bg-[#6b732e] transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
      
      {/* Trigger area when not hovered */}
      {!isHovered && (
        <div className="absolute left-0 top-0 w-4 h-full cursor-pointer group">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-16 bg-black/20 dark:bg-white/20 rounded-r-full transition-all group-hover:h-24 group-hover:bg-[#BFC873] dark:group-hover:bg-[#6b732e]"></div>
        </div>
      )}
    </div>
  );
};

export { Sidebar };
