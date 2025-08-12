import React, { useState, useEffect, useRef } from "react";
import {
  Shield,
  Award,
  Users,
  Building,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Calendar,
  Trophy,
  Globe,
  FileCheck,
  Star,
  HardHat,
  Truck,
  Home,
  Settings,
  Package,
  AlertTriangle,
  Eye,
  Zap,
  Trash2,
  Wrench,
  BookOpen,
  Phone,
  UserCheck,
  Rotate3D,
  ToolCase,
  IterationCcw,
} from "lucide-react";

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("certificates");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: HardHat,
      title: "Road Construction",
      description:
        "From rural roads to major highways, we construct durable and well-engineered road networks that stand the test of time.",
      color: "emerald",
    },
    {
      icon: Home,
      title: "Residential & Commercial Buildings",
      description:
        "We bring your vision to life with modern, functional, and structurally sound buildings—designed to meet your needs and exceed expectations.",
      color: "blue",
    },
    {
      icon: Rotate3D,
      title: "Building of Houses and Bridges",
      description:
        "Our team builds strong, safe, and reliable bridges that connect communities and support economic development.",
      color: "purple",
    },
    {
      icon: IterationCcw,
      title: "Heavy Equipment services",
      description:
        "Our team is capable of taking in any heavy equipment services required",
      color: "emerald",
    },
    {
      icon: Settings,
      title: "Maintenance and renovation Services",
      description:
        "We also offer repair, renovation, and ongoing maintenance services to keep your infrastructure in top shape.",
      color: "amber",
    },
    {
      icon: Package,
      title: "Supply Quality Materials",
      description:
        "High-quality building materials such as sand, granite, cement, iron rods, and more—ensuring your project has everything it needs.",
      color: "rose",
    },
  ];

  const safetyTenants = [
    {
      icon: HardHat,
      title: "Wear Personal Protective Equipment (PPE)",
      description:
        "Always wear required PPE, such as hard hats, gloves, and safety glasses, on site.",
    },
    {
      icon: AlertTriangle,
      title: "Report Hazards and Incidents",
      description:
        "Immediately report all hazards and incidents to supervisors.",
    },
    {
      icon: FileCheck,
      title: "Follow Safe Work Procedures",
      description: "Adhere to established procedures and guidelines for tasks.",
    },
    {
      icon: Shield,
      title: "Use Fall Protection",
      description: "Utilize fall protection equipment when working at heights.",
    },
    {
      icon: Zap,
      title: "Electrical Safety",
      description:
        "Avoid electrical hazards by following lockout/tagout procedures.",
    },
    {
      icon: Trash2,
      title: "Maintain a Clean Workspace",
      description: "Keep work areas clean and organized to prevent accidents.",
    },
    {
      icon: ToolCase,
      title: "Proper Tool Usage",
      description:
        "Use tools and equipment correctly and follow manufacturer guidelines.",
    },
    {
      icon: BookOpen,
      title: "Supervision and Training",
      description: "Ensure workers receive proper training and supervision.",
    },
    {
      icon: Phone,
      title: "Emergency Preparedness",
      description:
        "Know emergency procedures, such as evacuation routes and first aid.",
    },
    {
      icon: UserCheck,
      title: "Accountability",
      description:
        "Take responsibility for your own safety and the safety of others on site.",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      subtitle: "Fully Certified",
      description: "Comprehensive licensing and insurance coverage",
      color: "emerald",
    },
    {
      icon: Award,
      title: "10+ Years Experience",
      subtitle: "Industry Leader",
      description: "Decades of expertise in construction industry",
      color: "blue",
    },
    {
      icon: Target,
      title: "98% Success Rate",
      subtitle: "Client Satisfaction",
      description: "Consistent project completion within deadlines",
      color: "purple",
    },
    {
      icon: Users,
      title: "Expert Team",
      subtitle: "Skilled Professionals",
      description: "Dedicated team committed to quality excellence",
      color: "amber",
    },
  ];

  const colorClasses = {
    emerald: "from-emerald-500 to-emerald-600",
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    amber: "from-amber-500 to-amber-600",
    rose: "from-rose-500 to-rose-600",
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: Building },
    { id: "services", label: "Services", icon: Wrench },
    { id: "safety", label: "Safety", icon: Shield },
    { id: "certificates", label: "Certificates", icon: Award },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-200">
            <Building className="w-4 h-4" />
            About Gbubemigentle Construction
          </div>
          <h2
            className={`text-3xl md:text-4xl  md:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-emerald-600 bg-clip-text text-transparent transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Building Excellence with Integrity
          </h2>
          <p className="text-l text-slate-600 max-w-4xl mx-auto leading-relaxed">
            At Gbubemigentle Construction Company, we are committed to building
            lasting infrastructure and delivering excellence in every project.
            With a passion for quality and a strong focus on client
            satisfaction, we provide dependable and efficient construction
            services across Nigeria.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-slate-200 max-w-2xl mx-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-emerald-600 text-white shadow-lg"
                    : "text-slate-600 hover:text-emerald-600 hover:bg-emerald-50"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Company Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl md:text-4xl  font-bold text-slate-900 mb-6">
                    Your Trusted Construction Partner
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Whether you're constructing a new project or maintaining an
                    existing one, Gbubemigentle Construction Company is your
                    trusted partner for quality, reliability, and results. We
                    combine decades of experience with modern techniques to
                    deliver exceptional outcomes.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div
                          key={index}
                          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group"
                        >
                          <div
                            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                              colorClasses[feature.color]
                            } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="text-slate-900 font-bold mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-emerald-600 text-sm font-medium mb-2">
                            {feature.subtitle}
                          </p>
                          <p className="text-slate-600 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column - Stats & Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 rounded-3xl" />
                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold mb-8">Our Impact</h4>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">500+</div>
                        <div className="text-emerald-100">
                          Projects Completed
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">10+</div>
                        <div className="text-emerald-100">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">98%</div>
                        <div className="text-emerald-100">
                          Client Satisfaction
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">$1M+</div>
                        <div className="text-emerald-100">Project Value</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === "services" && (
            <div>
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl  font-bold text-slate-900 mb-4">
                  Our Core Services
                </h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Comprehensive construction solutions from infrastructure
                  development to building material supply
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 hover:border-emerald-300 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    >
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                          colorClasses[service.color]
                        } flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-4">
                        {service.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-6 flex items-center text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Safety Tab */}
          {activeTab === "safety" && (
            <div>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
                  <Shield className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-3xl md:text-4xl  font-bold text-slate-900 mb-4">
                  Safety First - Our Ten Safety Tenants
                </h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  At Gbubemigentle Construction, safety is our top priority.
                  These ten safety tenants guide every aspect of our work.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {safetyTenants.map((tenant, index) => {
                  const Icon = tenant.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-bold text-lg">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <Icon className="w-5 h-5 text-emerald-600" />
                            <h4 className="text-slate-900 font-bold">
                              {tenant.title}
                            </h4>
                          </div>
                          <p className="text-slate-600 text-sm">
                            {tenant.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-12 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
                <h4 className="text-2xl font-bold mb-4">
                  Our Safety Commitment
                </h4>
                <p className="text-emerald-100 text-lg max-w-3xl mx-auto">
                  Display these tenants prominently in your workplace to remind
                  workers of the importance of safety. Every team member is
                  trained and committed to maintaining the highest safety
                  standards on every project.
                </p>
              </div>
            </div>
          )}

          {/* Certificates Tab */}
          {activeTab === "certificates" && (
            <div>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-6">
                  <Award className="w-10 h-10 text-amber-600" />
                </div>
                <h3 className="text-3xl md:text-4xl  font-bold text-slate-900 mb-4">
                  Our Certifications & Credentials
                </h3>
                <p className="text-l text-slate-600 max-w-3xl mx-auto">
                  Fully licensed and certified to deliver exceptional
                  construction services across Nigeria
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Certificate 1 */}
                <div className="group bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 hover:border-emerald-300 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100">
                      <img
                        src="/certificate.jpeg"
                        alt="Construction License Certificate"
                        className="w-90 h-90 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 ml-auto mr-auto"
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Licensed
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Bussiness Certification
                  </h4>
                  <p className="text-slate-600 mb-4">
                    Official construction license certifying our authority to
                    operate across Nigeria, ensuring all projects meet
                    regulatory standards and compliance requirements.
                  </p>
                  <div className="flex items-center text-emerald-600 font-medium">
                    <FileCheck className="w-4 h-4 mr-2" />
                    Verified & Active
                  </div>
                </div>

                {/* Certificate 2 */}
                <div className="group bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 hover:border-emerald-300 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
                      <img
                        src="/scum-cert.jpeg"
                        alt="Professional Certification"
                        className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Certified
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    SCUML Certification
                  </h4>
                  <p className="text-slate-600 mb-4">
                    Professional construction certification validating our
                    expertise, technical competency, and commitment to
                    delivering high-quality construction services.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <Star className="w-4 h-4 mr-2" />
                    Excellence Certified
                  </div>
                </div>
              </div>

              {/* Additional Credentials */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200">
                  <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h5 className="font-bold text-slate-900 mb-2">
                    Fully Insured
                  </h5>
                  <p className="text-sm text-slate-600">
                    Comprehensive insurance coverage for all projects
                  </p>
                </div>
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200">
                  <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h5 className="font-bold text-slate-900 mb-2">
                    Nationwide Coverage
                  </h5>
                  <p className="text-sm text-slate-600">
                    Licensed to operate across all Nigerian states
                  </p>
                </div>
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200">
                  <Trophy className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h5 className="font-bold text-slate-900 mb-2">
                    Industry Recognition
                  </h5>
                  <p className="text-sm text-slate-600">
                    10+ years of recognized excellence
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
