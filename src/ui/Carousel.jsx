import React from "react";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";

const ProjectsCarousel = () => {
  // Replace this with your actual projects data
  const projects = [
    {
      id: 1,
      title: "Site Excavation & Material Handling",
      description:
        "Heavy-duty skid steer loader operations for site preparation, excavation work, and material transport in industrial construction zones.",
      image: "/work-1.jpeg",
      tech: [
        "Skid Steer Loader",
        "Excavation Equipment",
        "Material Handling",
        "Site Safety",
      ],
      date: "2024",
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "Specialized Concrete Flooring",
      description:
        "Professional concrete pouring and finishing services with full PPE compliance for industrial and commercial flooring applications.",
      image: "work-2.jpeg",
      tech: [
        "Concrete Pouring",
        "Floor Finishing",
        "PPE Standards",
        "Quality Control",
      ],
      date: "2024",
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "Reinforcement Steel Installation",
      description:
        "Precision rebar placement and structural reinforcement work for industrial foundations and concrete structures in petrochemical facilities.",
      image: "/work-3.jpeg",
      tech: [
        "Rebar Installation",
        "Structural Engineering",
        "Foundation Work",
        "Industrial Construction",
      ],
      date: "2024",
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "Mobile Concrete Mixing Operations",
      description:
        "Self-loading concrete mixer truck services providing on-site concrete production and delivery for construction projects.",
      image: "/work-4.jpeg",
      tech: [
        "Concrete Mixing",
        "Mobile Equipment",
        "DB400 Mixer",
        "On-site Production",
      ],
      date: "2024",
      github: "#",
      live: "#",
    },
    {
      id: 5,
      title: "Asphalt Paving & Road Construction",
      description:
        "Complete road surfacing operations including asphalt application, compaction, and quality assurance for industrial access roads.",
      image: "/work-5.jpeg",
      tech: [
        "Asphalt Paving",
        "Road Construction",
        "Compaction Equipment",
        "Surface Treatment",
      ],
      date: "2024",
      github: "#",
      live: "#",
    },
    {
      id: 6,
      title: "Deep Foundation Drilling",
      description:
        "Specialized drilling operations for deep foundation installations and ground stabilization work in secure industrial facilities.",
      image: "/work-6.jpeg",
      tech: [
        "Foundation Drilling",
        "Ground Stabilization",
        "Drilling Equipment",
        "Site Security",
      ],
      date: "2024",
      github: "#",
      live: "#",
    },
  ];

  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="">
      {/* Carousel Container */}
      <div className="relative">
        {/* Gradient Overlays - Responsive */}

        {/* Scrolling Container */}
        <div
          className="flex hover:[animation-play-state:paused]"
          style={{
            animation: "scroll 40s linear infinite",
            width: `${duplicatedProjects.length * 280}px`,
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="flex-shrink-0 w-64 sm:w-72 lg:w-80 mx-2 sm:mx-3 lg:mx-4"
            >
              <div className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200/50 hover:border-emerald-200 h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Action Buttons */}
                  <div className="absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 flex space-x-1 sm:space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      className="p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                      aria-label="View GitHub"
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 text-slate-700" />
                    </a>
                    <a
                      href={project.live}
                      className="p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                      aria-label="View Live Project"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-slate-700" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-3 sm:p-4 lg:p-6">
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors leading-tight pr-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-xs sm:text-sm text-slate-500 whitespace-nowrap">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {project.date}
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-2 sm:px-2.5 py-0.5 sm:py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200"
                      >
                        <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 sm:py-1 bg-slate-50 text-slate-500 text-xs font-medium rounded-full border border-slate-200">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          /* Touch-friendly hover states on mobile */
          @media (hover: none) and (pointer: coarse) {
            .group:active .opacity-0 {
              opacity: 1;
            }
            .group:active img {
              transform: scale(1.05);
            }
          }
        `,
        }}
      />
    </section>
  );
};

export default ProjectsCarousel;
