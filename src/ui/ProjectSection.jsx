import { MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

const projects = [
  {
    image: "/construction-1.jpeg",
    title: "Lagos Industrial Site Development",
    location: "Lagos, Nigeria",
    duration: "8 Months",
    description:
      "Heavy machinery excavation and site preparation for major industrial complex.",
    value: "₦2.8M",
  },
  {
    image: "construction-2.jpeg",
    title: "Abuja Commercial Flooring Project",
    location: "Abuja, FCT",
    duration: "6 Months",
    description:
      "Specialized concrete flooring installation for commercial warehouse facilities.",
    value: "₦1.5M",
  },
  {
    image: "/construction-3.jpeg",
    title: "Port Harcourt Petrochemical Foundation",
    location: "Port Harcourt, Rivers",
    duration: "10 Months",
    description:
      "Reinforcement steel installation for petrochemical processing plant foundation.",
    value: "₦3.2M",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-br from-emerald-50 to-slate-100 overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover pointer-events-none"
        >
          <source src="/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 text-sm font-semibold bg-emerald-100 text-emerald-700 rounded-full mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl  font-bold text-slate-900">
            Recent Major Projects
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto mt-4">
            Our biggest construction accomplishments brought to life.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/80 text-slate-800 px-3 py-1 text-sm rounded-full shadow">
                  {project.value}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-slate-800">
                  {project.title}
                </h3>
                <div className="flex items-center text-sm text-slate-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1 text-orange-500" />
                  {project.location}
                  <Clock className="h-4 w-4 ml-4 mr-1 text-orange-500" />
                  {project.duration}
                </div>
                <p className="text-slate-600 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
