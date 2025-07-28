import { Badge } from "./CardUi";
import ProjectsCarousel from "./Carousel";

function ServiceSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Our Expertise</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Construction Services
          </h2>
          <p className="text-l text-slate-600 max-w-3xl mx-auto">
            From major highway projects to commercial developments, we deliver
            exceptional results with unmatched expertise and state-of-the-art
            equipment.
          </p>
        </div>

        <div className="gap-8">
          <ProjectsCarousel />
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
