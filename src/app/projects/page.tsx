import Image from "next/image";
import { Link2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "ECOMMERCE PLATFORM",
      description: "A full-stack ecommerce solution with Next.js, Stripe, and Tailwind CSS. Features real-time inventory and modern checkout.",
      image: "/profile.jpg",
      tags: ["Next.js", "Stripe", "Prisma"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "TASK MANAGEMENT APP",
      description: "Real-time collaboration tool with drag-and-drop features and task tracking. Focused on high-performance UX.",
      image: "/profile.jpg",
      tags: ["React", "Supabase", "Framer Motion"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "AI IMAGE GENERATOR",
      description: "Web application that uses AI to generate unique images based on user prompts. Integrated with OpenAI API.",
      image: "/profile.jpg",
      tags: ["Node.js", "OpenAI", "React"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="container mx-auto px-8 py-16 max-w-7xl">
      <header className="mb-20 text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">PROJECTS</h1>
        <div className="w-32 h-2 bg-[#BFC873] mx-auto rounded-full"></div>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
          A collection of digital experiences I've built from the ground up, combining logic with clean aesthetics.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <Card key={project.id} className="bg-zinc-100 dark:bg-zinc-900 border-none rounded-[3rem] overflow-hidden group hover:shadow-2xl transition-all duration-700">
            <div className="relative h-72 md:h-96 w-full overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-6">
                <a 
                  href={project.github} 
                  className="text-xs font-bold tracking-[0.3em] text-white hover:text-[#BFC873] transition-all transform translate-y-4 group-hover:translate-y-0"
                >
                  VIEW GITHUB
                </a>
                <div className="w-12 h-[1px] bg-white/20"></div>
                <a 
                  href={project.demo} 
                  className="text-xs font-bold tracking-[0.3em] text-white hover:text-[#BFC873] transition-all transform translate-y-4 group-hover:translate-y-0 delay-75"
                >
                  LIVE DEMO
                </a>
              </div>
            </div>
            <CardHeader className="p-10 pb-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/50 dark:bg-white/10 text-[10px] font-bold tracking-widest rounded-full uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-10 pb-10">
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
                {project.description}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-[#BFC873] rounded-full"></div>
                <span className="text-xs font-bold tracking-widest uppercase">EXPLORE PROJECT</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
