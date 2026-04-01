import React from "react";

const Footer = () => {
  const contacts = [
    { label: "GITHUB", href: "https://github.com/Markoy2022" },
    { label: "FACEBOOK", href: "https://www.facebook.com/JMarkCaya" },
    { label: "GMAIL", href: "mailto:johnmarkcaya222@gmail.com" },
  ];

  return (
    <footer className="w-full mt-auto bg-[#E5E5E5] dark:bg-[#363737] px-8 py-16 flex flex-col items-center transition-colors duration-300">
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end mb-12 border-t border-black/10 dark:border-white/10 pt-12 gap-8">
        <div className="text-xl font-bold tracking-tighter opacity-50">CAYA PORTFOLIO</div>
        
        <div className="flex flex-col space-y-6 items-center md:items-end">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <a 
                href={contact.href}
                className="text-xs font-bold tracking-[0.3em] text-zinc-500 hover:text-[#BFC873] dark:hover:text-[#6b732e] transition-all"
              >
                {contact.label}
              </a>
              <div className="w-24 h-[1px] bg-black/10 dark:bg-white/10 group-hover:bg-[#BFC873] dark:group-hover:bg-[#6b732e] transition-all"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 h-[1px] bg-black/5 dark:bg-white/5"></div>
      <div className="mt-8 text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase">
        © 2026 CAYA PORTFOLIO. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
