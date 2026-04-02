import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "CAYA-OS PORTFOLIO",
      description: "My personal developer portfolio, built with React (via Vite) for fast development and smooth performance. It serves as a platform to showcase projects, skills, and contact details with a clean and modern design.",
      image: "/profile.jpg",
      tags: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/Markoy2022/caya-os.git",
      demo: "https://caya-portfolio.vercel.app/"
    }
  ];

  return (
    <div className="container mx-auto px-6 md:px-8 py-12 md:py-16 max-w-7xl">
      <header className="mb-12 md:mb-20 text-center space-y-4 md:space-y-6">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter dark:text-white uppercase">PROJECTS</h1>
        <div className="w-20 md:w-32 h-1.5 md:h-2 bg-[#BFC873] dark:bg-[#6b732e] mx-auto rounded-full transition-colors duration-300"></div>
        <p className="text-sm md:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto uppercase">
          A collection of digital experiences I&apos;ve built from the ground up, combining logic with clean aesthetics.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project) => (
          <Card key={project.id} className="bg-zinc-100 dark:bg-[#363737] border-none rounded-[2rem] md:rounded-[3rem] overflow-hidden group hover:shadow-2xl transition-all duration-700 shadow-xl">
            <div className="relative h-64 md:h-96 w-full overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-4 md:gap-6">
                <a 
                  href={project.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-white hover:text-[#BFC873] dark:hover:text-[#6b732e] transition-all transform translate-y-4 group-hover:translate-y-0 uppercase"
                >
                  VIEW GITHUB
                </a>
                <div className="w-8 md:w-12 h-[1px] bg-white/20"></div>
                <a 
                  href={project.demo} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-white hover:text-[#BFC873] dark:hover:text-[#6b732e] transition-all transform translate-y-4 group-hover:translate-y-0 delay-75 uppercase"
                >
                  LIVE DEMO
                </a>
              </div>
            </div>
            <CardHeader className="p-6 md:p-10 pb-4">
              <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 md:px-3 py-1 bg-white/50 dark:bg-white/10 text-[8px] md:text-[10px] font-bold tracking-widest rounded-full uppercase dark:text-white/70">
                    {tag}
                  </span>
                ))}
              </div>
              <CardTitle className="text-xl md:text-3xl font-bold tracking-tight dark:text-white uppercase">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 md:px-10 pb-8 md:pb-10">
              <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 md:mb-8 uppercase">
                {project.description}
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 md:w-12 h-1 bg-[#BFC873] dark:bg-[#6b732e] rounded-full transition-colors duration-300"></div>
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase dark:text-white">EXPLORE PROJECT</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
