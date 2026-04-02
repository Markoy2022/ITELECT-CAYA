import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Palette, 
  Terminal, 
  Zap, 
  Database, 
  Globe, 
  Wind,
  Layout,
  Atom,
  PenTool
} from "lucide-react";

const LaravelIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 3.5l-1.5 1.5h-3.5l-1.5 1.5v3.5l-1.5 1.5v6l1.5 1.5h3.5l1.5 1.5h6l1.5-1.5v-3.5l1.5-1.5v-6l-1.5-1.5h-3.5l-1.5-1.5h-6z" />
    <path d="M11 8.5v6" />
    <path d="M8.5 11.5h6" />
  </svg>
);

export default function Skills() {
  const skills = [
    { 
      name: "HTML/CSS", 
      progress: 65, 
      color: "bg-green-700",
      icon: <Layout className="w-5 h-5 md:w-6 md:h-6" />,
      description: "Proficient in building structured and styled web pages with modern CSS features. Experienced in creating responsive layouts that work across all devices."
    },
    { 
      name: "REACT", 
      progress: 60, 
      color: "bg-blue-600",
      icon: <Atom className="w-5 h-5 md:w-6 md:h-6" />,
      description: "Capable of developing interactive user interfaces using component-based architecture. Familiar with hooks, state management, and the React ecosystem."
    },
    { 
      name: "FIGMA", 
      progress: 85, 
      color: "bg-purple-600",
      icon: <PenTool className="w-5 h-5 md:w-6 md:h-6" />,
      description: "Experienced in designing high-fidelity prototypes and user interfaces. Skilled in layout design, typography, and creating design systems."
    },
    { 
      name: "JAVASCRIPT",   
      progress: 70, 
      color: "bg-yellow-600",
      icon: <Code2 className="w-5 h-5 md:w-6 md:h-6" />,
      description: "Moderate understanding of core programming concepts and ES6+ features. Able to implement complex logic and dynamic functionality in web apps."
    },
    { 
      name: "UI/UX DESIGN", 
      progress: 80, 
      color: "bg-green-800",
      icon: <Palette className="w-5 h-5 md:w-6 md:h-6" />,
      description: "Focused on creating intuitive user experiences and aesthetically pleasing designs. Skilled in user research, wireframing, and usability testing."
    },
    { 
      name: "LARAVEL", 
      progress: 68, 
      color: "bg-red-700",
      icon: <LaravelIcon className="w-5 h-5 md:w-6 md:h-6" />,
      description: "Experienced in backend development using the PHP Laravel framework. Knowledgeable in MVC architecture, routing, and database management."
    },
  ];

  const tools = [
    { name: "Node.js", icon: <Terminal className="w-4 h-4 md:w-5 md:h-5" />, description: "Runtime environment for server-side JS." },
    { name: "Next.js", icon: <Zap className="w-4 h-4 md:w-5 md:h-5" />, description: "React framework for production-grade apps." },
    { name: "Git", icon: <Globe className="w-4 h-4 md:w-5 md:h-5" />, description: "Version control for tracking code changes." },
    { name: "Tailwind", icon: <Wind className="w-4 h-4 md:w-5 md:h-5" />, description: "Utility-first CSS for rapid UI styling." },
    { name: "MySQL", icon: <Database className="w-4 h-4 md:w-5 md:h-5" />, description: "Relational database for structured data." },
  ];

  return (
    <div className="container mx-auto px-6 md:px-8 py-12 md:py-16">
      <div className="bg-[#BFC873] dark:bg-[#6b732e] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-20 border border-black/10 transition-colors duration-300 shadow-2xl">
        <div className="flex flex-col items-center space-y-12 md:space-y-16">
          {/* Heading */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter dark:text-white uppercase">SKILLS AND EXPERTISE</h1>
            <div className="w-32 md:w-48 h-1 md:h-1.5 bg-black dark:bg-white rounded-full mx-auto"></div>
            <div className="w-48 md:w-64 h-0.5 md:h-1 bg-black/30 dark:bg-white/30 rounded-full mx-auto"></div>
          </div>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            {skills.map((skill) => (
              <Card key={skill.name} className="bg-gray-100 dark:bg-[#363737] border-none rounded-2xl md:rounded-3xl p-6 md:p-8 transition-colors duration-300 shadow-lg group hover:scale-[1.02] transition-transform">
                <CardContent className="p-0 flex flex-col space-y-4 md:space-y-6">
                  <div className="flex flex-col items-center space-y-3 md:space-y-4">
                    <div className="p-2.5 md:p-3 rounded-xl md:rounded-2xl bg-white dark:bg-zinc-800 text-[#BFC873] shadow-sm group-hover:bg-[#BFC873] group-hover:text-white transition-all duration-300">
                      {skill.icon}
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <div className="text-sm font-bold tracking-widest uppercase text-zinc-800 dark:text-zinc-200">{skill.name}</div>
                      <div className="w-8 h-0.5 bg-[#BFC873] opacity-50"></div>
                    </div>
                  </div>
                  
                  <p className="text-xs md:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 text-center italic">
                    &quot;{skill.description}&quot;
                  </p>

                  <div className="w-full space-y-3 md:space-y-4 pt-1 md:pt-2">
                    <div className="h-2 md:h-2.5 bg-gray-300 dark:bg-zinc-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} transition-all duration-1000`} 
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center px-1">
                      <div className="w-8 h-0.5 bg-black/10 dark:bg-white/10 rounded-full"></div>
                      <span className="text-xs font-bold text-zinc-600 dark:text-zinc-300">{skill.progress}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tools Description Bar */}
          <div className="w-full bg-gray-100 dark:bg-[#363737] rounded-[2rem] md:rounded-3xl p-6 md:p-12 border border-black/10 dark:border-white/5 shadow-inner transition-colors duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
              {tools.map((tool, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-3 group">
                  <div className="p-2 rounded-xl bg-white dark:bg-zinc-800 text-[#BFC873] shadow-sm group-hover:bg-[#BFC873] group-hover:text-white transition-all duration-300">
                    {tool.icon}
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <span className="text-xs font-bold tracking-[0.2em] text-black dark:text-white group-hover:text-[#BFC873] transition-colors">
                      {tool.name.toUpperCase()}
                    </span>
                    <div className="w-4 h-[1px] bg-[#BFC873] opacity-50"></div>
                  </div>
                  <p className="text-[10px] leading-tight text-zinc-500 dark:text-zinc-400 font-medium uppercase">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
