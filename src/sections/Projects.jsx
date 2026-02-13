import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { projectImg } from "../assets";
const projects = [
  {
    title: "Visibuy VVE Platform",
    description:
      "A core feature for Visibuy that enhance seller trust, featuring dynamic profiles, real-time updates, and a badge-based verification system.",
    image: projectImg[0],
    tags: ["React", "Typescript", "RTK Query", "Redux"],
    link: "https://visibuy.com.ng/",
    github: "https://github.com/VisiBuy/visibuy-fe",
  },
  {
    title: "Animated Space Tourism Website",
    description:
      "A visually engaging, interactive website built with GSAP  animations, bringing a futuristic space travel experience to live ",
    image: projectImg[1],
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    link: "https://github.io/Babs-unique/Animated-Space-tourism-Website-HexSoftwares-",
    github: "https://github.com/Babs-unique/Animated-Space-tourism-Website-HexSoftwares-",
  },
  {
    title: "Quizzical WebApp",
    description:
      "A responsive quiz application using React, offering dynamic question handling, score tracking, and smooth user interactions",
    image: projectImg[2],
    tags: ["React", "OpenTrivia"],
    link: "https://github.io/Babs-unique/Quizzical-Project/",
    github: "https://github.com/Babs-unique/Quizzical-Project/",
  },
  {
    title: "SunnySide Website(Frontend Mentor Challenge)",
    description:
      "A modern, responsive landing page built with HTML, CSS, and JS, replicating a clean, professional design from a real-world challenge.",
    image: projectImg[3],
    tags: ["HTML",  "CSS", "JAVASCRIPT"],
    link: "https://github.io/Babs-unique/sunnyside-agency-landing-page-main",
    github: "https://github.com/Babs-unique/sunnyside-agency-landing-page-main",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Engineering in
            <span className="font-serif italic font-normal text-white">
              {" "}
             Practice.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
        
          <AnimatedBorderButton>
            <a href="https://github.com/Babs-unique?tab=repositories">
              View All Projects
            </a>            
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
