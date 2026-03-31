import Image from "next/image";
import { Download, GraduationCap, Heart, User, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-8 py-16 max-w-7xl">
      <div className="bg-[#BFC873] dark:bg-[#6b732e] rounded-[4rem] p-12 md:p-20 relative overflow-hidden transition-colors duration-300 shadow-2xl">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          
          {/* Left Side: Personal Info */}
          <div className="space-y-12">
            <div className="flex flex-col items-center md:items-start gap-8">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-100 dark:bg-[#363737] rounded-full relative overflow-hidden shadow-xl border-4 border-white/20">
                <Image 
                  src="/profile.jpg" 
                  alt="Profile" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 text-black dark:text-white">
                  <User className="w-6 h-6" />
                  <h2 className="text-3xl font-bold tracking-tighter uppercase">Who am I</h2>
                </div>
                <div className="w-24 h-1.5 bg-black dark:bg-white rounded-full mx-auto md:mx-0"></div>
                <p className="text-lg leading-relaxed text-black/80 dark:text-white/80 max-w-lg">
                  I AM A PASSIONATE DESIGNER AND DEVELOPER DEDICATED TO CREATING SEAMLESS DIGITAL EXPERIENCES. 
                  MY APPROACH BLENDS CREATIVE ARTISTRY WITH TECHNICAL PRECISION TO SOLVE REAL-WORLD PROBLEMS.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-black dark:text-white">
                <Heart className="w-6 h-6" />
                <h2 className="text-2xl font-bold tracking-tighter uppercase">My Hobbies</h2>
              </div>
              <div className="w-16 h-1 bg-black/40 dark:bg-white/40 rounded-full"></div>
              <p className="text-base leading-relaxed text-black/70 dark:text-white/70 max-w-lg">
                BEYOND CODING, I FIND INSPIRATION IN MUSIC AND THE ARTS. I ENJOY EXPLORING NEW DESIGN TRENDS, 
                PHOTOGRAPHY, AND CONTINUOUSLY LEARNING ABOUT EMERGING TECHNOLOGIES THAT SHAPE OUR FUTURE.
              </p>
            </div>
          </div>

          {/* Right Side: Education & Focus */}
          <div className="flex flex-col justify-between space-y-12">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-black dark:text-white">
                  <GraduationCap className="w-8 h-8" />
                  <h2 className="text-3xl font-bold tracking-tighter uppercase">Education</h2>
                </div>
                <div className="w-32 h-2 bg-black dark:bg-white rounded-full"></div>
                
                <div className="bg-white/20 dark:bg-black/20 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10 space-y-4">
                  <h3 className="text-xl font-bold text-black dark:text-white">CORDOVA PUBLIC COLLEGE</h3>
                  <p className="text-lg font-medium text-black/80 dark:text-white/80">
                    BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold text-black/60 dark:text-white/60">
                    <span className="px-3 py-1 bg-white/30 dark:bg-black/30 rounded-full uppercase tracking-widest">Currently Studying</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 text-black dark:text-white">
                  <Sparkles className="w-6 h-6" />
                  <h2 className="text-2xl font-bold tracking-tighter uppercase">Focus Areas</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Software Development", "Web Design", "UI/UX"].map((area) => (
                    <span key={area} className="px-6 py-2 bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-full text-sm font-bold tracking-widest text-black dark:text-white uppercase">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button className="group w-full md:w-auto flex items-center justify-center gap-4 px-12 py-5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-[2rem] hover:bg-white hover:text-black dark:hover:bg-zinc-900 dark:hover:text-white transition-all duration-500 text-sm font-bold tracking-[0.2em] shadow-2xl uppercase">
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </button>
            </div>
          </div>

        </div>

        {/* Decorative Bottom Line */}
        <div className="mt-20 w-full h-[1px] bg-black/10 dark:bg-white/10"></div>
      </div>
    </div>
  );
}
