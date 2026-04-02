import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Code2 } from "lucide-react";
import { ContactModal } from "@/components/ContactModal";

export default function Home() {
  const featuredProjects = [
    {
      title: "CAYA-OS PORTFOLIO",
      category: "WEB DEVELOPMENT",
      image: "/profile.jpg",
      href: "/projects"
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12 min-h-[calc(100vh-88px)]">
        <div className="w-full md:w-1/2 flex flex-col gap-6 animate-in fade-in slide-in-from-left duration-1000">
          <div className="w-full aspect-square md:aspect-[4/3] bg-[#BFC873] dark:bg-[#6b732e] rounded-[2rem] md:rounded-[2.5rem] p-3 md:p-4 overflow-hidden relative group shadow-2xl transition-colors duration-300">
            <Image 
              src="/profile.jpg" 
              alt="Profile" 
              fill 
              className="object-cover rounded-[1.5rem] md:rounded-[2rem] transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
          <div className="w-full h-20 md:h-24 bg-[#BFC873] dark:bg-[#6b732e] rounded-2xl md:rounded-3xl flex items-center justify-center px-6 md:px-8 transition-colors duration-300">
            <div className="flex justify-between w-full text-white text-[9px] md:text-[10px] font-bold tracking-[0.2em]">
              <a href="https://github.com/Markoy2022" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">GITHUB</a>
              <a href="https://www.facebook.com/JMarkCaya" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">FACEBOOK</a>
              <a href="mailto:johnmarkcaya222@gmail.com" className="hover:scale-105 transition-transform">GMAIL</a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 animate-in fade-in slide-in-from-right duration-1000">
          <div className="w-32 md:w-48 h-1.5 md:h-2 bg-black dark:bg-white rounded-full"></div>
          
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none">
              CREATIVE<br />DESIGNER
            </h1>
            <div className="space-y-4 max-w-md mx-auto md:mx-0">
              <p className="text-base md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                SPECIALIZING IN BUILDING HIGH-PERFORMANCE WEB AND MOBILE EXPERIENCES WITH A MINIMALIST AESTHETIC.
              </p>
              <div className="flex flex-col space-y-2 opacity-30">
                <div className="w-full h-[1.5px] bg-black dark:bg-white"></div>
                <div className="w-full h-[1.5px] bg-black dark:bg-white"></div>
                <div className="w-3/4 h-[1.5px] bg-black dark:bg-white mx-auto md:mx-0"></div>
              </div>
            </div>
          </div>

          <Link 
            href="/about"
            className="group flex items-center gap-4 px-8 md:px-10 py-3 md:py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full hover:bg-[#BFC873] dark:hover:bg-[#6b732e] hover:text-white transition-all duration-300 text-xs font-bold tracking-widest"
          >
            LEARN MORE
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-zinc-100 dark:bg-[#363737]/50 py-20 md:py-32 transition-colors duration-500">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-20 gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">FEATURED PROJECTS</h2>
              <div className="w-24 h-2 bg-[#BFC873] dark:bg-[#6b732e] rounded-full transition-colors duration-300 mx-auto md:mx-0"></div>
            </div>
            <Link 
              href="/projects" 
              className="text-xs font-bold tracking-widest border-b-2 border-black dark:border-white pb-1 hover:text-[#BFC873] dark:hover:text-[#6b732e] hover:border-[#BFC873] dark:hover:border-[#6b732e] transition-all"
            >
              VIEW ALL PROJECTS
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {featuredProjects.map((project, idx) => (
              <div key={idx} className="group relative aspect-[16/10] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white dark:bg-zinc-800 shadow-xl transition-colors duration-300">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 text-white space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-[#BFC873] dark:text-[#6b732e]">{project.category}</p>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase">{project.title}</h3>
                </div>
                <Link href={project.href} className="absolute inset-0 z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume/Experience Section */}
      <section className="container mx-auto px-6 md:px-8 py-20 md:py-32">
        <div className="bg-[#BFC873] dark:bg-[#6b732e] rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 text-white relative overflow-hidden group shadow-2xl transition-colors duration-300">
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/20 transition-all duration-700 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12 md:gap-16">
            <div className="space-y-6 md:space-y-8 flex-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight uppercase">READY TO WORK TOGETHER?</h2>
              <p className="text-base md:text-xl font-medium opacity-90 max-w-xl mx-auto lg:mx-0 uppercase">
                I AM CURRENTLY AVAILABLE FOR FREELANCE WORK AND FULL-TIME OPPORTUNITIES. DOWNLOAD MY RESUME TO LEARN MORE ABOUT MY BACKGROUND.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 justify-center lg:justify-start">
                <a 
                  href="https://caya-portfolio.vercel.app/assets/JCaya_Resume-CfnsM5el.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-full hover:bg-zinc-900 hover:text-white transition-all duration-300 text-xs font-bold tracking-widest shadow-lg uppercase"
                >
                  <Download className="w-4 h-4" />
                  DOWNLOAD RESUME
                </a>
                <ContactModal 
                  trigger={
                    <button className="flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-zinc-900 dark:bg-zinc-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 text-xs font-bold tracking-widest shadow-lg uppercase">
                      GET IN TOUCH
                    </button>
                  }
                />
              </div>
            </div>

            <div className="flex-shrink-0 w-48 md:w-80 h-48 md:h-80 border-4 border-white/30 rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 flex items-center justify-center transform rotate-6 group-hover:rotate-0 transition-transform duration-700">
              <Code2 className="w-24 md:w-32 h-24 md:h-32 opacity-50" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
