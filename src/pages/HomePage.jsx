import React, { useEffect, useState } from "react";
import { BoltIcon, MapPinIcon } from "lucide-react";
import { Zap, Menu, X } from "lucide-react";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const DEFAULT_CONTENT = {
  header: {
    title: "Gbubemigentle Construction",
    subtitle: "Lets Build a Better Future Together",
  },
  hero: {
    badge: "Licensed & Insured",
    titleStart: "Building  with Gbubemigentle Construction Company Limited",

    description:
      "Gbubemigentle construction Company delivers world-class road construction, commercial building, and infrastructure development services across the Nigeria and worldwide.",
    bgImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop",
  },

  about: {
    img: "Construction.png",
    badgeText: "About Gbubemigentle Construction",
    mainTitle: "Building Excellence with Integrity",
    description:
      "At Gbubemigentle Construction Company, we are committed to building lasting infrastructure and delivering excellence in every project. With a passion for quality and a strong focus on client satisfaction, we provide dependable and efficient construction services across Nigeria.",
    overviewTitle: "Your Trusted Construction Partner",
    overviewDescription:
      "Whether you're constructing a new project or maintaining an existing one, Gbubemigentle Construction Company is your trusted partner for quality, reliability, and results. We combine decades of experience with modern techniques to deliver exceptional outcomes.",
    impactTitle: "Our Impact",
    impactStats: [
      { value: "100+", label: "Projects Completed" },
      { value: "10+", label: "Years Experience" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "$1,000+", label: "Project Value" },
    ],
    servicesTitle: "Our Core Services",
    servicesSubtitle:
      "Comprehensive construction solutions from infrastructure development to building material supply",
    services: [
      {
        title: "Road Construction",
        description:
          "From rural roads to major highways, we construct durable and well-engineered road networks that stand the test of time.",
      },
      {
        title: "Residential & Commercial Buildings",
        description:
          "We bring your vision to life with modern, functional, and structurally sound buildings—designed to meet your needs and exceed expectations.",
      },
      {
        title: "Building of Houses and Bridges",
        description:
          "Our team builds strong, safe, and reliable bridges that connect communities and support economic development.",
      },
      {
        title: "Heavy Equipment services",
        description:
          "Our team is capable of taking in any heavy equipment services required",
      },
      {
        title: "Maintenance and renovation Services",
        description:
          "We also offer repair, renovation, and ongoing maintenance services to keep your infrastructure in top shape.",
      },
      {
        title: "Supply Quality Materials",
        description:
          "High-quality building materials such as sand, granite, cement, iron rods, and more—ensuring your project has everything it needs.",
      },
      {
        title: "Electrical Wiring",
        description:
          "Safe and efficient electrical wiring for residential, commercial, and industrial buildings.",
      },
      {
        title: "Tiling",
        description:
          "Expert tiling services to give your floors and walls a clean, polished, and modern look.",
      },
      {
        title: "Painting",
        description:
          "Interior and exterior painting services using durable and aesthetic finishes tailored to your taste.",
      },
      {
        title: "Plumbing",
        description:
          "Reliable plumbing installations and repairs to ensure clean water access and proper drainage.",
      },
    ],
    safetyTitle: "Safety First - Our Ten Safety Tenants",
    safetySubtitle:
      "At Gbubemigentle Construction, safety is our top priority. These ten safety tenants guide every aspect of our work.",
    safetyTenants: [
      {
        title: "Wear Personal Protective Equipment (PPE)",
        description:
          "Always wear required PPE, such as hard hats, gloves, and safety glasses, on site.",
      },
      {
        title: "Report Hazards and Incidents",
        description:
          "Immediately report all hazards and incidents to supervisors.",
      },
      {
        title: "Follow Safe Work Procedures",
        description:
          "Adhere to established procedures and guidelines for tasks.",
      },
      {
        title: "Use Fall Protection",
        description:
          "Utilize fall protection equipment when working at heights.",
      },
      {
        title: "Electrical Safety",
        description:
          "Avoid electrical hazards by following lockout/tagout procedures.",
      },
      {
        title: "Maintain a Clean Workspace",
        description:
          "Keep work areas clean and organized to prevent accidents.",
      },
      {
        title: "Proper Tool Usage",
        description:
          "Use tools and equipment correctly and follow manufacturer guidelines.",
      },
      {
        title: "Supervision and Training",
        description: "Ensure workers receive proper training and supervision.",
      },
      {
        title: "Emergency Preparedness",
        description:
          "Know emergency procedures, such as evacuation routes and first aid.",
      },
      {
        title: "Accountability",
        description:
          "Take responsibility for your own safety and the safety of others on site.",
      },
    ],
    safetyCommitmentTitle: "Our Safety Commitment",
    safetyCommitmentDescription:
      "Display these tenants prominently in your workplace to remind workers of the importance of safety. Every team member is trained and committed to maintaining the highest safety standards on every project.",
    certificatesTitle: "Our Certifications & Credentials",
    certificatesSubtitle:
      "Fully licensed and certified to deliver exceptional construction services across Nigeria",
    certificates: [
      {
        image: "/certificate.jpeg",
        title: "Business Certification",
        description:
          "Official construction license certifying our authority to operate across Nigeria, ensuring all projects meet regulatory standards and compliance requirements.",
        statusText: "Verified & Active",
      },
      {
        image: "/scum-cert.jpeg",
        title: "SCUML Certification",
        description:
          "Professional construction certification validating our expertise, technical competency, and commitment to delivering high-quality construction services.",
        statusText: "Excellence Certified",
      },
    ],
    additionalCredentials: [
      {
        title: "Fully Insured",
        description: "Comprehensive insurance coverage for all projects",
      },
      {
        title: "Nationwide Coverage",
        description: "Licensed to operate across all Nigerian states",
      },
      {
        title: "Industry Recognition",
        description: "10+ years of recognized excellence",
      },
    ],
  },
  projects: [
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
    },
    {
      id: 2,
      title: "Specialized Concrete Flooring",
      description:
        "Professional concrete pouring and finishing services with full PPE compliance for industrial and commercial flooring applications.",
      image: "/work-2.jpeg",
      tech: [
        "Concrete Pouring",
        "Floor Finishing",
        "PPE Standards",
        "Quality Control",
      ],
      date: "2024",
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
    },
  ],
  contact: {
    badgeText: "Get In Touch",
    title: "Ready to Start Your Project?",
    subtitle:
      "Contact us today for a consultation and let's bring your construction vision to life.",
    sectionTitle: "Get In Touch",
    phoneLabel: "Phone",
    phoneNumbers: ["+234 815 901 9225", "+234 816 3814 609"],
    emailLabel: "Email",
    emailAddress: "gentlegbubemi@gmail.com",
    locationLabel: "Location",
    locationAddress: "Nigeria",
    socialHeading: "Lets Build a Better Future Together",
    followTitle: "Follow Us",
    whatsappUrl: "https://wa.me/2348159019225",
    whatsappNumber: "2348159019225",
    formNameLabel: "Full Name",
    formNamePlaceholder: "Your full name",
    formPhoneLabel: "Phone Number",
    formPhonePlaceholder: "Your phone number",
    formEmailLabel: "Email Address",
    formEmailPlaceholder: "your.email@example.com",
    formServiceLabel: "Service Needed",
    formMessageLabel: "Project Details",
    formMessagePlaceholder: "Tell us about your project requirements...",
    formSubmitButton: "Message Us",
    serviceOptions: [
      { value: "", label: "Select a service" },
      { value: "road-construction", label: "Road Construction" },
      { value: "building-construction", label: "Building Construction" },
      { value: "bridge-construction", label: "Bridge Construction" },
      { value: "supplying", label: "Supplying Quality Materials" },
      { value: "maintenance", label: "Maintenance Services" },
      { value: "materials", label: "Building Materials" },
      { value: "renovation", label: "Maintenance & Renovation" },
    ],
  },
  featuredProjects: {
    badgeText: "Featured Work",
    title: "Recent Major Projects",
    subtitle: "Our biggest construction accomplishments brought to life.",
    videoBackground: "/vid.mp4",
    projects: [
      {
        image: "/construction-1.jpeg",
        title: "Lagos Industrial Site Development",
        location: "Lagos, Nigeria",
        duration: "8 Months",
        description:
          "Heavy machinery excavation and site preparation for major industrial complex.",
      },
      {
        image: "/construction-2.jpeg",
        title: "Abuja Commercial Flooring Project",
        location: "Abuja, FCT",
        duration: "6 Months",
        description:
          "Specialized concrete flooring installation for commercial warehouse facilities.",
      },
      {
        image: "/construction-3.jpeg",
        title: "Port Harcourt Petrochemical Foundation",
        location: "Port Harcourt, Rivers",
        duration: "10 Months",
        description:
          "Reinforcement steel installation for petrochemical processing plant foundation.",
      },
    ],
  },
  services: {
    badgeText: "Our Expertise",
    title: "Comprehensive Construction Services",
    subtitle:
      "From major highway projects to commercial developments, we deliver exceptional results with unmatched expertise and state-of-the-art equipment.",
  },
  testimonials: {
    badgeText: "Client Testimonials",
    title: "What Our Clients Say",
    subtitle:
      "Don't just take our word for it. Here's what industry professionals and government officials say about working with Gbubemi Gentle construction.",
    items: [
      {
        name: "Michael Rodriguez",
        title: "Project Manager, State DOT",
        content:
          "Gbubemi Gentle construction delivered our highway project 2 months ahead of schedule and under budget. Their attention to safety and quality is unmatched.",
        rating: 5,
      },
      {
        name: "Sarah Chen",
        title: "Development Director, Metro Properties",
        content:
          "Working with Gbubemi Gentle construction on our commercial development was seamless. They handled every challenge professionally and delivered exceptional results.",
        rating: 5,
      },
      {
        name: "David Thompson",
        title: "City Engineer",
        content:
          "The bridge reconstruction project exceeded all our expectations. Gbubemi Gentle construction's expertise in complex infrastructure projects is evident in their work.",
        rating: 5,
      },
    ],
  },
};

const StarRating = ({ rating }) => (
  <div className="flex text-yellow-500">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? "fill-current" : "fill-gray-300"}`}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
      </svg>
    ))}
  </div>
);

// Section Header Component
const SectionHeader = ({ badgeText, title, subtitle, className = "" }) => (
  <div className={`text-center max-w-3xl mx-auto mb-12 ${className}`}>
    <span className="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-white uppercase bg-yellow-600 rounded-full">
      {badgeText}
    </span>
    <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
      {title}
    </h2>
    <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
  </div>
);
const Header = ({ content }) => {
  const navItems = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Safety",
    "Contact",
  ];
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-lg"
          : "bg-white/95 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-amber-400 to-yellow-600 p-2 rounded-lg transform group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <span className="sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {content.title}
            </span>
            <span></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="relative px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full overflow-hidden group"
            >
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 border-t border-gray-200" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 space-y-1 bg-white/95 backdrop-blur-lg">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 rounded-lg transition-all transform hover:translate-x-1"
              style={{
                animation: isOpen
                  ? `slideIn 0.3s ease-out ${index * 0.05}s both`
                  : "none",
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block mt-4 px-4 py-3 text-base font-semibold text-center text-white bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg hover:from-yellow-600 hover:to-amber-500 transition-all transform hover:scale-105"
          >
            Get Quote
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
};

/** 2. Hero Section (Edge Case: Image Loading) **/
const Hero = ({ content }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gray-50 pt-5"
    >
      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <img
          src={content.bgImage}
          alt="Construction site"
          className="object-cover w-full h-full"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-amber-500 rounded text-gray-900 font-semibold text-sm">
              <Shield className="w-4 h-4" />
              {content.badge}
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6">
              {content.titleStart}
              <span className="block mt-2">{content.titleEnd}</span>
            </h1>

            {/* Description */}
            <p className="text-l text-gray-300 mb-8 max-w-xl leading-relaxed">
              {content.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold rounded transition-colors"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded transition-all"
              >
                Our Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-gray-700">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-500" />
                <span className="text-sm text-gray-300">Fully Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                <span className="text-sm text-gray-300">
                  Certified Professionals
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-500" />
                <span className="text-sm text-gray-300">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Illustration (Why Choose Us replaced) */}
          <div className="mx-auto lg:ml-auto w-full flex justify-center">
            <img
              src="/Construction.png"
              alt="Construction Illustration"
              className="w-full max-w-sm lg:max-w-md object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
/** 3. About Section **/
const About = ({ content }) => (
  <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
    {/* Optional: Subtle Background Pattern Element */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-30">
      <svg
        className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-gray-200"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <pattern
          id="dots"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1" />
        </pattern>
        <rect width="100" height="100" fill="url(#dots)" />
      </svg>
    </div>

    <div className="container px-4 mx-auto lg:px-8 relative z-10">
      <SectionHeader
        badgeText={content.badgeText}
        title={content.mainTitle}
        subtitle={content.description}
        className="mb-16 md:mb-20"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text & Stats Column */}
        <div className="order-2 lg:order-1">
          <div className="relative">
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
              {content.overviewTitle}
            </h3>
            <div className="w-20 h-1.5 bg-yellow-500 mb-8 rounded-full"></div>
          </div>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            {content.overviewDescription}
          </p>

          {/* Modernized Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {content.impactStats.map((stat, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="mb-2 flex items-baseline">
                  <span className="text-3xl font-extrabold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                    {stat.value}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide group-hover:text-gray-700">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Optional CTA or Link could go here */}
        </div>

        {/* Visual/Image Column */}
        <div className="order-1 lg:order-2 relative">
          {/* Decorative Offset Box - Creates Depth */}
          <div className="absolute top-8 -right-8 w-full h-full bg-yellow-500/10 rounded-3xl -z-10 hidden lg:block"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-dots-pattern opacity-50 hidden lg:block"></div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.01]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 z-10"></div>
            <img
              src={content.img}
              alt="Construction Overview"
              className="object-cover w-full h-[500px]"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/600x400?text=About+Image";
              }}
            />

            {/* Floating 'Badge' on Image - Adds credibility */}
            <div className="absolute bottom-6 left-6 z-20">
              <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-yellow-500 max-w-xs">
                <p className="text-gray-900 font-bold text-lg">
                  Excellence in Construction
                </p>
                <p className="text-gray-600 text-sm">
                  Building the future with precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
/** 4. Services Section **/
const Services = ({ content }) => (
  <section id="services" className="py-16 bg-white">
    <div className="container px-4 mx-auto lg:px-8">
      <SectionHeader
        badgeText={content.about.badgeText}
        title={content.title}
        subtitle={content.subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Use about.services data for a richer service list */}
        {content.about.services.map((service, index) => (
          <div
            key={index}
            className="p-8 bg-gray-50 border-t-4 border-yellow-600 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            <div className="flex items-center mb-4">
              {/* <BuildingOffice2Icon className="w-8 h-8 mr-4 text-yellow-600" /> */}
              <h3 className="text-xl font-bold text-gray-900">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/** 5. Safety Section (Combined Safety and Certificates) **/
const Safety = ({ content }) => (
  <section id="safety" className="py-16 bg-gray-100">
    <div className="container px-4 mx-auto lg:px-8">
      {/* Safety Tenants */}
      <SectionHeader
        badgeText="Our Core Value"
        title={content.safetyTitle}
        subtitle={content.safetySubtitle}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {content.safetyTenants.map((tenant, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md border-l-4 border-yellow-600"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{`${
              index + 1
            }. ${tenant.title}`}</h4>
            <p className="text-sm text-gray-600">{tenant.description}</p>
          </div>
        ))}
      </div>

      {/* Commitment Block */}
      <div className="bg-yellow-600 text-white p-6 md:p-8 rounded-xl shadow-xl text-center mb-16">
        <h3 className="text-2xl font-bold mb-2">
          {content.safetyCommitmentTitle}
        </h3>
        <p className="text-lg">{content.safetyCommitmentDescription}</p>
      </div>

      {/* Certifications & Credentials (Edge Case: Image rendering/placeholder) */}
      <SectionHeader
        badgeText="Official Status"
        title={content.certificatesTitle}
        subtitle={content.certificatesSubtitle}
        className="mb-12"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              {/* <CheckBadgeIcon className="w-12 h-12 text-green-600 mb-3" /> */}
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {cert.title}
              </h4>
              <p className="text-gray-600 mb-4">{cert.description}</p>
              <span className="inline-block px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
                {cert.statusText}
              </span>
              {/* Image Placeholder - In a real app, these would be logos or cert photos */}
              <div className="w-full mt-4">
                <img
                  src={cert.image}
                  alt={cert.title || "Certificate"}
                  className="w-full object-contain rounded-md shadow-md"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/fallback-certificate.jpg";
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Credentials */}
        <div className="p-6 bg-gray-200 rounded-lg shadow-inner">
          <h4 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-300">
            Why Choose Us?
          </h4>
          <ul className="space-y-4">
            {content.additionalCredentials.map((cred, index) => (
              <li key={index} className="flex items-start">
                {/* <CheckBadgeIcon className="flex-shrink-0 w-6 h-6 mr-3 text-yellow-600" /> */}
                <div>
                  <h5 className="font-semibold text-gray-900">{cred.title}</h5>
                  <p className="text-sm text-gray-600">{cred.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/** 6. Projects Section **/
const Projects = ({ content }) => (
  <section id="projects" className="py-16 bg-white">
    <div className="container px-4 mx-auto lg:px-8">
      <SectionHeader
        badgeText={content.featuredProjects.badgeText}
        title={content.featuredProjects.title}
        subtitle={content.featuredProjects.subtitle}
      />

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {content.featuredProjects.projects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-white rounded-lg shadow-xl group"
          >
            {/* Image Placeholder */}
            <div className="h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/600x400?text=Project+Image+Fallback";
                }}
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {project.title}
              </h4>
              <p className="text-sm text-yellow-600 flex items-center mb-3">
                <MapPinIcon className="w-4 h-4 mr-1" /> {project.location}
              </p>
              <p className="text-gray-600">{project.description}</p>
              <span className="inline-block mt-4 text-xs font-semibold px-3 py-1 bg-gray-100 rounded-full">
                {project.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/** 7. Testimonials Section **/
const Testimonials = ({ content }) => (
  <section className="py-16 bg-gray-50">
    <div className="container px-4 mx-auto lg:px-8">
      <SectionHeader
        badgeText={content.badgeText}
        title={content.title}
        subtitle={content.subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {content.items.map((testimonial, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-yellow-600"
          >
            <StarRating rating={testimonial.rating} />
            <p className="mt-4 text-gray-700 italic">"{testimonial.content}"</p>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-lg font-semibold text-gray-900">
                {testimonial.name}
              </p>
              <p className="text-sm text-yellow-600">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/** 8. Contact Section (Edge Case: Form Submission/Validation Placeholder) **/
const Contact = ({ content }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [message, setMessage] = React.useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage(null); // Clear message on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      setMessage({
        type: "error",
        text: "Please fill out all required fields (Name, Email, Project Details).",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      setMessage({
        type: "success",
        text: "Thank you! Your message has been received. We will contact you shortly.",
      });
      setIsSubmitting(false);
      setFormData({ name: "", phone: "", email: "", service: "", message: "" }); // Clear form
    }, 2000);
  };

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="container px-4 mx-auto lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info (Left Column) */}
          <div className="lg:col-span-1 text-white">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-wider uppercase bg-yellow-600 rounded-full">
              {content.badgeText}
            </span>
            <h2 className="text-2xl font-extrabold mb-4">{content.title}</h2>
            <p className="text-gray-300 mb-8">{content.subtitle}</p>

            <div className="space-y-6">
              {/* Phone Numbers */}
              <div>
                <h4 className="flex items-center text-xl font-semibold text-yellow-500 mb-2">
                  {/* <PhoneIcon className="w-5 h-5 mr-3" /> {content.phoneLabel} */}
                </h4>
                {content.phoneNumbers.map((num, index) => (
                  <p key={index} className="text-lg text-gray-300">
                    <a
                      href={`tel:${num.replace(/\s/g, "")}`}
                      className="hover:text-yellow-400"
                    >
                      {num}
                    </a>
                  </p>
                ))}
              </div>

              {/* Email */}
              <div>
                <h4 className="flex items-center text-xl font-semibold text-yellow-500 mb-2">
                  {/* <EnvelopeIcon className="w-5 h-5 mr-3" /> {content.emailLabel} */}
                </h4>
                <p className="text-lg text-gray-300">
                  <a
                    href={`mailto:${content.emailAddress}`}
                    className="hover:text-yellow-400"
                  >
                    {content.emailAddress}
                  </a>
                </p>
              </div>

              {/* Location */}
              <div>
                <h4 className="flex items-center text-xl font-semibold text-yellow-500 mb-2">
                  {/* <MapPinIcon className="w-5 h-5 mr-3" />{" "} */}
                  {content.locationLabel}
                </h4>
                <p className="text-lg text-gray-300">
                  {content.locationAddress}
                </p>
              </div>
            </div>

            {/* Social Link (WhatsApp) */}
            <div className="mt-10">
              <p className="text-xl font-semibold mb-3">
                {content.socialHeading}
              </p>
              <a
                href={content.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.04 2C6.517 2 2.016 6.502 2.016 12.024c0 1.767.466 3.447 1.353 4.908L2 22l6.244-1.65a9.982 9.982 0 003.8 0c5.523 0 10.024-4.502 10.024-10.024S17.562 2 12.04 2zm5.503 14.88c-.147.253-.298.423-.423.423-.122 0-.36-.089-.785-.357-.425-.269-1.3-.646-2.522-1.558-1.22-.912-2.03-2.045-2.274-2.325-.245-.27-.478-.65-.245-1.025.234-.374.654-.8.887-1.07.234-.27.31-.482.46-.777.15-.295.074-.556-.037-.777-.11-.22-.727-.723-1.0-.993-.272-.27-.47-.23-.654-.23-.186 0-.4-.007-.615-.007-.217 0-.568.083-.864.417-.294.333-1.12 1.09-1.12 2.662 0 1.572 1.15 3.09 1.306 3.315.157.225 2.15 3.28 5.235 4.545 3.085 1.265 3.737 1.05 4.417.982.68-.068 2.062-.843 2.355-1.65.293-.806.293-1.487.205-1.657-.086-.17-.317-.27-.66-.44z" />
                </svg>
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-2 p-8 bg-gray-200 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>

            {/* Submission Message */}
            {message && (
              <div
                className={`p-4 mb-4 rounded-lg text-white ${
                  message.type === "success" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 bg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {content.formNameLabel}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={content.formNamePlaceholder}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {content.formPhoneLabel}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={content.formPhonePlaceholder}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {content.formEmailLabel}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={content.formEmailPlaceholder}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {content.formServiceLabel}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  >
                    {content.serviceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  {content.formMessageLabel}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={content.formMessagePlaceholder}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 text-lg font-semibold text-gray-900 transition duration-300 ease-in-out bg-yellow-400 rounded-lg hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending Message..." : content.formSubmitButton}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

/** 9. Footer **/
const Footer = ({ content }) => (
  <footer className="bg-gray-800 text-white">
    <div className="container px-4 py-8 mx-auto lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
        <div className="mb-4 md:mb-0">
          <a href="#" className="flex items-center text-xl font-bold">
            <BoltIcon className="w-6 h-6 mr-2 text-yellow-600" />
            {content.title}
          </a>
          <p className="mt-1 text-sm text-gray-400">{content.subtitle}</p>
        </div>
        <div className="flex space-x-6 text-sm">
          <a href="#about" className="text-gray-400 hover:text-yellow-500">
            About
          </a>
          <a href="#services" className="text-gray-400 hover:text-yellow-500">
            Services
          </a>
          <a href="#projects" className="text-gray-400 hover:text-yellow-500">
            Projects
          </a>
          <a href="#contact" className="text-gray-400 hover:text-yellow-500">
            Contact
          </a>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} {content.title}. All rights reserved.
        | Designed and built with React & Tailwind CSS.
      </div>
    </div>
  </footer>
);

const ContractorLanding = () => {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState();
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const { data, error } = await supabase
          .from("site_content")
          .select("content")
          .eq("slug", "landing_page")
          .single();

        if (error && error.code !== "PGRST116") {
          // Ignore "not found" error
          console.error("Error fetching:", error);
        }

        // If data exists and has keys, use it. Otherwise default.
        if (data && data.content && Object.keys(data.content).length > 0) {
          setContent(data.content);
        } else {
          setContent(DEFAULT_CONTENT);
        }
      } catch (err) {
        // Fallback for demo if no Supabase connection
        console.log("Using default content (Supabase not connected or empty)");
        setContent(DEFAULT_CONTENT);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  });
  if (loading) return <p>Loading...</p>;

  return (
    <div className="font-sans antialiased bg-white">
      <Header content={content.header} />

      <main>
        <Hero content={content.hero} stats={content.stats} />
        <About content={content.about} />
        <Services content={content} />
        <Projects content={content} />
        <Safety content={content.about} />
        <Testimonials content={content.testimonials} />
        <Contact content={content.contact} />
      </main>

      <Footer content={content.header} />
    </div>
  );
};

export default ContractorLanding;
