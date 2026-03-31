import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Globe, Terminal } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Skills() {
  const skills = [
    { name: "DESIGN", progress: 85, color: "bg-green-700" },
    { name: "WEB DEV", progress: 75, color: "bg-blue-600" },
    { name: "MOBILE", progress: 90, color: "bg-green-800" },
  ];

  const technologies = [
    { icon: <Terminal className="w-8 h-8 text-green-600" />, name: "Node.js" },
    { icon: <Globe className="w-8 h-8 text-blue-400" />, name: "React" },
    { icon: <Code2 className="w-8 h-8 text-blue-600" />, name: "JS" },
    { icon: <Code2 className="w-8 h-8 text-blue-500" />, name: "TS" },
    { icon: <GithubIcon className="w-8 h-8 text-black" />, name: "GitHub" },
  ];

  return (
    <div className="container mx-auto px-8 py-16">
      <div className="bg-[#BFC873] rounded-[3rem] p-12 md:p-20 border border-black/10">
        <div className="flex flex-col items-center space-y-16">
          {/* Heading */}
          <div className="text-center space-y-6">
            <div className="w-48 h-1.5 bg-black rounded-full mx-auto"></div>
            <div className="w-64 h-1 bg-black/30 rounded-full mx-auto"></div>
          </div>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {skills.map((skill) => (
              <Card key={skill.name} className="bg-gray-100 border-none rounded-3xl p-6">
                <CardContent className="p-0 flex flex-col items-center space-y-6">
                  <div className="w-24 h-1 bg-black/40 rounded-full"></div>
                  <div className="w-full space-y-4">
                    <div className="h-4 bg-gray-300 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} transition-all duration-1000`} 
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                    <div className="w-16 h-1 bg-black/20 rounded-full mx-auto"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technology Icons Bar */}
          <div className="w-full bg-gray-100 rounded-3xl p-8 flex justify-center items-center gap-12 md:gap-20 overflow-x-auto border border-black/10 shadow-inner">
            {technologies.map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 hover:scale-110 transition-transform cursor-pointer">
                {tech.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
