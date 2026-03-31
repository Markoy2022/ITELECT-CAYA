import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Code2 } from "lucide-react";

export default function Home() {
  const featuredProjects = [
    {
      title: "PROJECT ONE",
      category: "WEB DEVELOPMENT",
      image: "/profile.jpg",
      href: "/projects"
    },
    {
      title: "PROJECT TWO",
      category: "UI/UX DESIGN",
      image: "/profile.jpg",
      href: "/projects"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="container mx-auto px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-12 min-h-[80vh]">
        <div className="w-full md:w-1/2 flex flex-col gap-6 animate-in fade-in slide-in-from-left duration-1000">
          <div className="w-full aspect-[4/3] bg-[#BFC873] dark:bg-[#BFC873]/80 rounded-[2.5rem] p-4 overflow-hidden relative group shadow-2xl">
            <Image 
              src="/profile.jpg" 
              alt="Profile" 
              fill 
              className="object-cover rounded-[2rem] transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
          <div className="w-full h-24 bg-[#BFC873] dark:bg-[#BFC873]/80 rounded-3xl flex items-center justify-center px-8">
            <div className="flex justify-between w-full text-white text-[10px] font-bold tracking-[0.2em]">
              <a href="#" className="hover:scale-105 transition-transform">GITHUB</a>
              <a href="#" className="hover:scale-105 transition-transform">DRIBBBLE</a>
              <a href="#" className="hover:scale-105 transition-transform">BEHANCE</a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start text-left space-y-8 animate-in fade-in slide-in-from-right duration-1000">
          <div className="w-48 h-2 bg-black dark:bg-white rounded-full"></div>
          
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
              CREATIVE<br />DESIGNER
            </h1>
            <div className="space-y-4 max-w-md">
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                SPECIALIZING IN BUILDING HIGH-PERFORMANCE WEB AND MOBILE EXPERIENCES WITH A MINIMALIST AESTHETIC.
              </p>
              <div className="flex flex-col space-y-2 opacity-30">
                <div className="w-full h-[1.5px] bg-black dark:bg-white"></div>
                <div className="w-full h-[1.5px] bg-black dark:bg-white"></div>
                <div className="w-3/4 h-[1.5px] bg-black dark:bg-white"></div>
              </div>
            </div>
          </div>

          <Link 
            href="/about"
            className="group flex items-center gap-4 px-10 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full hover:bg-[#BFC873] dark:hover:bg-[#BFC873] hover:text-white transition-all duration-300 text-xs font-bold tracking-widest"
          >
            LEARN MORE
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-zinc-100 dark:bg-zinc-900/50 py-32 transition-colors duration-500">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">FEATURED PROJECTS</h2>
              <div className="w-24 h-2 bg-[#BFC873] rounded-full"></div>
            </div>
            <Link 
              href="/projects" 
              className="text-xs font-bold tracking-widest border-b-2 border-black dark:border-white pb-1 hover:text-[#BFC873] hover:border-[#BFC873] transition-all"
            >
              VIEW ALL PROJECTS
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredProjects.map((project, idx) => (
              <div key={idx} className="group relative aspect-[16/10] rounded-[3rem] overflow-hidden bg-white dark:bg-zinc-800 shadow-xl">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute bottom-10 left-10 text-white space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] font-bold tracking-[0.3em] text-[#BFC873]">{project.category}</p>
                  <h3 className="text-3xl font-bold tracking-tighter">{project.title}</h3>
                </div>
                <Link href={project.href} className="absolute inset-0 z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume/Experience Section */}
      <section className="container mx-auto px-8 py-32">
        <div className="bg-[#BFC873] dark:bg-[#BFC873]/90 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="space-y-8 flex-1">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">READY TO WORK TOGETHER?</h2>
              <p className="text-lg md:text-xl font-medium opacity-90 max-w-xl">
                I AM CURRENTLY AVAILABLE FOR FREELANCE WORK AND FULL-TIME OPPORTUNITIES. DOWNLOAD MY RESUME TO LEARN MORE ABOUT MY BACKGROUND.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full hover:bg-zinc-900 hover:text-white transition-all duration-300 text-xs font-bold tracking-widest shadow-lg">
                  <Download className="w-4 h-4" />
                  DOWNLOAD RESUME
                </button>
                <Link href="mailto:contact@caya.com" className="flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 text-xs font-bold tracking-widest shadow-lg">
                  GET IN TOUCH
                </Link>
              </div>
            </div>

            <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 border-4 border-white/30 rounded-[3rem] p-8 flex items-center justify-center transform rotate-6 group-hover:rotate-0 transition-transform duration-700">
              <Code2 className="w-32 h-32 opacity-50" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
