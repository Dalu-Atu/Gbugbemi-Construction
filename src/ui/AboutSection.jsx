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
} from "lucide-react";

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("story");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      id: "experience",
      number: 25,
      suffix: "+",
      label: "Years Experience",
      icon: Calendar,
      description: "Industry-leading expertise",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      id: "projects",
      number: 500,
      suffix: "+",
      label: "Projects Completed",
      icon: Building,
      description: "Successfully delivered",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "team",
      number: 150,
      suffix: "+",
      label: "Expert Team",
      icon: Users,
      description: "Certified professionals",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "awards",
      number: 42,
      suffix: "",
      label: "Industry Awards",
      icon: Trophy,
      description: "Recognition for excellence",
      color: "from-amber-500 to-amber-600",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Fully Licensed",
      subtitle: "All States & Federal",
      description: "Comprehensive licensing across all jurisdictions",
      color: "emerald",
    },
    {
      icon: Award,
      title: "Safety First",
      subtitle: "OSHA Certified",
      description: "Zero-accident track record for 5+ years",
      color: "blue",
    },
    {
      icon: Target,
      title: "On-Time Delivery",
      subtitle: "98% Success Rate",
      description: "Consistent project completion within deadlines",
      color: "purple",
    },
    {
      icon: FileCheck,
      title: "Certified Excellence",
      subtitle: "ISO 9001",
      description: "Quality management system certified",
      color: "amber",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger countup animations
          stats.forEach((stat, index) => {
            setTimeout(() => {
              animateNumber(stat.id, 0, stat.number, 2000);
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumber = (id, start, end, duration) => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(start + (end - start) * progress);

      const element = document.getElementById(`stat-${id}`);
      if (element) {
        element.textContent = current;
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  return (
    <section
      ref={sectionRef}
      className="py-10 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-0 rounded-full text-sm font-medium mb-6 border border-emerald-200">
            <Building className="w-4 h-4" />
            About Gbugbemi Construction
          </div>
          <h2
            className={`
            text-3xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-slate-800  to-slate-800 bg-clip-text text-transparent
            transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
          >
            Trusted and Certified
          </h2>
        </div>

        {/* Interactive Stats */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`
                  group relative bg-white/80 backdrop-blur-md rounded-2xl p-6 
                  border border-slate-200 hover:border-emerald-300
                  shadow-lg hover:shadow-xl
                  transform transition-all duration-500 hover:scale-105 hover:-translate-y-2
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-20 opacity-0"
                  }
                `}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredStat(stat.id)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${
                      stat.color.split(" ")[1]
                    }, ${stat.color.split(" ")[3]})`,
                  }}
                />

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex items-baseline gap-1 mb-2">
                    <span
                      id={`stat-${stat.id}`}
                      className="text-3xl font-bold text-slate-800"
                    >
                      0
                    </span>
                    <span className="text-2xl font-bold text-emerald-600">
                      {stat.suffix}
                    </span>
                  </div>

                  <div className="text-slate-700 font-medium mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-slate-500">
                    {stat.description}
                  </div>

                  {hoveredStat === stat.id && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-500 rounded-full animate-ping" />
                  )}
                </div>
              </div>
            );
          })}
        </div> */}

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - Interactive Content */}
          <div>
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const colorClasses = {
                  emerald: "from-emerald-500 to-emerald-600",
                  blue: "from-blue-500 to-blue-600",
                  purple: "from-purple-500 to-purple-600",
                  amber: "from-amber-500 to-amber-600",
                };

                return (
                  <div
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:bg-white hover:shadow-lg"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                        colorClasses[feature.color]
                      } flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="font-semibold text-slate-800 mb-1">
                      {feature.title}
                    </div>
                    <div className="text-sm text-emerald-600 mb-2">
                      {feature.subtitle}
                    </div>
                    <div className="text-xs text-slate-500">
                      {feature.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Right Column - Interactive Media */}
          <div className="relative">
            {/* Main Image/Video Container */}
            <div className="relative group mb-6">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/certificate.jpeg"
                  alt="Construction team"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -left-6 bg-white backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-200 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">150+</div>
                    <div className="text-sm text-slate-600">Expert Team</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-200 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">98%</div>
                    <div className="text-sm text-slate-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
