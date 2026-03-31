import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-8 py-16">
      <div className="bg-[#BFC873] rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Circular Placeholder */}
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-100 rounded-full flex-shrink-0 relative overflow-hidden group">
            <Image 
              src="/profile.jpg" 
              alt="Profile" 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* About Content */}
          <div className="flex-1 space-y-10">
            <div className="w-32 h-1.5 bg-black rounded-full mb-8"></div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">ABOUT ME</h2>
              <div className="space-y-2">
                <div className="w-full h-[1px] bg-black opacity-30"></div>
                <div className="w-full h-[1px] bg-black opacity-30"></div>
                <div className="w-full h-[1px] bg-black opacity-30"></div>
                <div className="w-full h-[1px] bg-black opacity-30"></div>
              </div>
              <p className="text-lg leading-relaxed text-black/80 max-w-xl">
                I AM A PASSIONATE DESIGNER WITH A FOCUS ON CREATING INTUITIVE AND VISUALLY APPEALING DIGITAL EXPERIENCES. MY WORK BLENDS CREATIVITY WITH FUNCTIONALITY TO SOLVE COMPLEX PROBLEMS.
              </p>
              <button className="px-8 py-1.5 bg-gray-200 border border-gray-400 rounded-full hover:bg-gray-300 transition-all text-[10px] font-semibold tracking-widest text-gray-600">
                DETAILS
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Rounded Rectangle */}
        <div className="mt-16 w-full bg-gray-100 rounded-3xl p-6 border border-black/10">
          <div className="space-y-2">
            <div className="w-full h-[1px] bg-black opacity-20"></div>
            <div className="w-full h-[1px] bg-black opacity-20"></div>
            <div className="w-2/3 h-[1px] bg-black opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
