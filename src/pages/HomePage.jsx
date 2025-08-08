import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  Users,
  Award,
  HardHat,
  Building,
  Route as Road,
  Wrench,
  Shield,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import ProjectsCarousel from "../ui/Carousel";
import ProjectsSection from "../ui/ProjectSection";
import AboutSection from "../ui/AboutSection";
import ContactSection from "../ui/ContactSection";
import ServiceSection from "../ui/ServiceSection";
import { Badge, Button, Separator } from "../ui/CardUi";
import FooterSection from "../ui/FooterSection";
import VideoSection from "../ui/VideoSection";

export default function ContractorLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "25+", label: "Years Experience" },
    { number: "$1000+", label: "Total Project Value" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-emerald-700 to-emerald-600 p-2 rounded-lg">
                <HardHat className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  GbubemiGentle Construction
                </h1>
                <p className="text-xs text-slate-600">
                  Lets Build a Better Future Together
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-slate-700 hover:text-emerald-600 font-medium"
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-slate-700 hover:text-emerald-600 font-medium"
              >
                Projects
              </a>
              <a
                href="#about"
                className="text-slate-700 hover:text-emerald-600 font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-slate-700 hover:text-emerald-600 font-medium"
              >
                Contact
              </a>
              <Button>Contact Me</Button>
            </nav>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-2 space-y-2">
              <a href="#services" className="block py-2 text-slate-700">
                Services
              </a>
              <a href="#projects" className="block py-2 text-slate-700">
                Projects
              </a>
              <a href="#about" className="block py-2 text-slate-700">
                About
              </a>
              <a href="#contact" className="block py-2 text-slate-700">
                Contact
              </a>
              <Button className="w-full mt-2">Get Quote</Button>
            </div>
          </div>
        )}
      </header>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-900/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
            <Badge className="mb-4 bg-emerald-600/20 text-orange-100 border border-emerald-400">
              Licensed & Insured
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Building Infrastructure with
              <span className="text-emerald-400">
                {" "}
                GbubemiGentle Construction Company
              </span>
            </h1>
            <p className="text-l md:text-2xl mb-8 text-slate-200 max-w-3xl mx-auto">
              GbubemiGentle construction Company delivers world-class road
              construction, commercial building, and infrastructure development
              services across the Nigeria and worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-500 text-lg px-8 py-3"
              >
                <Phone className="mr-2 h-5 w-5" />
                <a href="#contact">Contact Me</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-slate-900 text-lg px-8 py-3 bg-transparent"
              >
                <a href="#services">View our work</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServiceSection />
      <VideoSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
