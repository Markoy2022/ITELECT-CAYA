import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "My Design Journey",
      excerpt: "Exploring the intersection of creativity and functionality in web design.",
      date: "March 27, 2026",
      author: "CAYA",
      category: "Design",
      image: "/profile.jpg"
    },
    {
      id: 2,
      title: "Building with Next.js",
      excerpt: "Why Next.js is the perfect choice for modern portfolio websites.",
      date: "March 25, 2026",
      author: "CAYA",
      category: "Development",
      image: "/profile.jpg"
    },
    {
      id: 3,
      title: "The Power of Tailwind CSS",
      excerpt: "How utility-first CSS changed my development workflow forever.",
      date: "March 20, 2026",
      author: "CAYA",
      category: "Tools",
      image: "/profile.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-8 py-16 max-w-6xl">
      <header className="mb-16 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter dark:text-white uppercase">BLOG</h1>
        <div className="w-24 h-1.5 bg-[#BFC873] dark:bg-[#6b732e] mx-auto rounded-full transition-colors duration-300"></div>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
          Insights, tutorials, and personal stories about design and development.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <Card key={post.id} className="bg-white dark:bg-zinc-800 border-black/5 dark:border-white/5 overflow-hidden group hover:shadow-2xl transition-all duration-500 rounded-3xl">
            <div className="relative h-56 w-full overflow-hidden">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#BFC873] dark:bg-[#6b732e] text-white text-[10px] font-bold tracking-widest rounded-full uppercase transition-colors duration-300">
                  {post.category}
                </span>
              </div>
            </div>
            <CardHeader className="space-y-3 pt-6">
              <div className="flex items-center gap-4 text-[10px] text-zinc-400 font-medium uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                <span className="flex items-center gap-1.5"><User className="w-3 h-3" /> {post.author}</span>
              </div>
              <CardTitle className="text-xl font-bold leading-tight group-hover:text-[#BFC873] dark:group-hover:text-[#6b732e] transition-colors">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <button className="text-xs font-bold tracking-widest text-black dark:text-white border-b-2 border-[#BFC873] dark:border-[#6b732e] pb-1 hover:border-black dark:hover:border-white transition-all">
                READ MORE
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
