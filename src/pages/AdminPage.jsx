import React, { useState, useEffect } from "react";
import {
  Eye,
  EyeOff,
  LogOut,
  Save,
  Upload,
  Plus,
  Trash2,
  Menu,
  Home,
  FileText,
  Briefcase,
  Phone,
  Users,
  Shield,
  Award,
  Database,
  RefreshCw,
  Download,
} from "lucide-react";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const DEFAULT_CONTENT = {
  admin: {
    Username: "Gbubemigentle",
    password: "Gentle1",
    name: "GbubemiGentle Construction",
  },
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

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [content, setContent] = useState(DEFAULT_CONTENT);
  const [activeTab, setActiveTab] = useState("header");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState("checking");
  const [useSupabase, setUseSupabase] = useState(false);

  useEffect(() => {
    // Check if Supabase is configured
    if ((supabaseUrl, supabaseAnonKey)) {
      setUseSupabase(true);
      checkSupabaseConnection();
      loadContentFromSupabase();
    } else {
      setConnectionStatus("not_configured");
      loadContentFromLocalStorage();
    }

    const auth = sessionStorage.getItem("adminAuth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const loadContentFromLocalStorage = () => {
    const savedContent = localStorage.getItem("constructionContent");
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  };

  const checkSupabaseConnection = async () => {
    try {
      const { error, count } = await supabase.from("site_content").select("*");

      if (error) {
        console.error("Supabase check error:", error);
        setConnectionStatus("error");
        return;
      }

      setConnectionStatus("connected");
    } catch (err) {
      console.error("Supabase connection error:", err);
      setConnectionStatus("error");
    }
  };

  const loadContentFromSupabase = async () => {
    setIsLoading(true);

    try {
      const { data, error } = await supabase
        .from("site_content")
        .select("*")
        .single();

      if (error) {
        console.error("Error loading content:", error);
      } else if (data) {
        setContent(data.content);
        console.log(data);
      }
    } catch (err) {
      console.error("Failed to load content:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      username === content.admin.Username &&
      password === content.admin.password
    ) {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuth", "true");
      setLoginError("");
    } else {
      setLoginError("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("adminAuth");
    setUsername("");
    setPassword("");
  };

const handleSave = async () => {
  setIsLoading(true);

  if (useSupabase && connectionStatus === "connected") {
    try {
      const { error } = await supabase.from("site_content").upsert(
        {
      
          slug: "landing_page", 
          content: content,
          updated_at: new Date().toISOString(),
        },
      
      );

      if (error) throw error;

      setSaveMessage("✓ Changes saved to Supabase successfully!");
    } catch (error) {
      console.error("Error saving content:", error);

      localStorage.setItem("constructionContent", JSON.stringify(content));
      setSaveMessage("✗ Error saving to Supabase. Saved locally instead.");
    }
  } else {
    localStorage.setItem("constructionContent", JSON.stringify(content));
    setSaveMessage("✓ Changes saved locally!");
  }

  setTimeout(() => setSaveMessage(""), 4000);
  setIsLoading(false);
};

  const updateField = (path, value) => {
    const keys = path.split(".");
    const newContent = JSON.parse(JSON.stringify(content));
    let current = newContent;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    setContent(newContent);
  };

  const updateArrayItem = (path, index, field, value) => {
    const keys = path.split(".");
    const newContent = JSON.parse(JSON.stringify(content));
    let current = newContent;
    for (let i = 0; i < keys.length; i++) {
      current = current[keys[i]];
    }
    current[index][field] = value;
    setContent(newContent);
  };

  const addArrayItem = (path, template) => {
    const keys = path.split(".");
    const newContent = JSON.parse(JSON.stringify(content));
    let current = newContent;
    for (let i = 0; i < keys.length; i++) {
      current = current[keys[i]];
    }
    current.push(template);
    setContent(newContent);
  };

  const removeArrayItem = (path, index) => {
    const keys = path.split(".");
    const newContent = JSON.parse(JSON.stringify(content));
    let current = newContent;
    for (let i = 0; i < keys.length; i++) {
      current = current[keys[i]];
    }
    current.splice(index, 1);
    setContent(newContent);
  };

  const handleImageUpload = (path, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateField(path, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-10 h-10 text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Admin Login
            </h1>
            <p className="text-gray-600">
              Enter your credentials to access the dashboard
            </p>

            <div
              className={`mt-4 flex items-center justify-center gap-2 text-sm ${
                connectionStatus === "connected"
                  ? "text-green-600"
                  : connectionStatus === "error"
                  ? "text-orange-600"
                  : connectionStatus === "not_configured"
                  ? "text-blue-600"
                  : "text-gray-500"
              }`}
            >
              <Database className="w-4 h-4" />
              {/* <span>
                {connectionStatus === "connected"
                  ? "Supabase Connected"
                  : connectionStatus === "error"
                  ? "Supabase Error - Using Local Storage"
                  : connectionStatus === "not_configured"
                  ? "Using Local Storage"
                  : "Checking connection..."}
              </span> */}
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent pr-12"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "header", label: "Header", icon: Home },
    { id: "hero", label: "Hero Section", icon: FileText },
    { id: "about", label: "About", icon: FileText },
    { id: "featured", label: "Featured Projects", icon: Award },
    { id: "testimonials", label: "Testimonials", icon: Users },
    { id: "contact", label: "Contact", icon: Phone },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold">{content.admin.name}</h2>
          <p className="text-sm text-gray-400 mt-1">Admin Dashboard</p>
          <div
            className={`mt-3 flex items-center gap-2 text-xs ${
              connectionStatus === "connected"
                ? "text-green-400"
                : connectionStatus === "not_configured"
                ? "text-blue-400"
                : "text-orange-400"
            }`}
          >
            <Database className="w-3 h-3" />
            <span>
              {connectionStatus === "connected"
                ? "Supabase Live"
                : connectionStatus === "not_configured"
                ? "Local Mode"
                : "Local Fallback"}
            </span>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? "bg-orange-500 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700 space-y-2">
          {useSupabase && (
            <button
              onClick={loadContentFromSupabase}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
              disabled={isLoading}
            >
              <RefreshCw
                className={`w-5 h-5 ${isLoading ? "animate-spin" : ""}`}
              />
              <span>Reload Data</span>
            </button>
          )}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-red-600 hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Top Bar */}
        <div className="bg-white shadow-sm sticky top-0 z-40">
          <div className="px-4 py-4 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden text-gray-600 hover:text-gray-900"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
            </div>

            <div className="flex items-center gap-2">
          
              <button
                onClick={handleSave}
                disabled={isLoading}
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                <Save
                  className={`w-4 h-4 ${isLoading ? "animate-pulse" : ""}`}
                />
                <span className="hidden sm:inline">
                  {isLoading ? "Saving..." : "Save"}
                </span>
              </button>
            </div>
          </div>

          {saveMessage && (
            <div className="px-4 pb-4">
              <div
                className={`px-4 py-2 rounded-lg text-sm ${
                  saveMessage.includes("✓")
                    ? "bg-green-50 text-green-700"
                    : "bg-orange-50 text-orange-700"
                }`}
              >
                {saveMessage}
              </div>
            </div>
          )}
        </div>

        {/* Content Area - Same as before */}
        <div className="p-4 lg:p-8">
          {activeTab === "header" && (
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Header Settings
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Title
                </label>
                <input
                  type="text"
                  value={content.header.title}
                  onChange={(e) => updateField("header.title", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subtitle
                </label>
                <input
                  type="text"
                  value={content.header.subtitle}
                  onChange={(e) =>
                    updateField("header.subtitle", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {activeTab === "hero" && (
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Hero Section
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Badge Text
                </label>
                <input
                  type="text"
                  value={content.hero.badge}
                  onChange={(e) => updateField("hero.badge", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Main Title
                </label>
                <input
                  type="text"
                  value={content.hero.titleStart}
                  onChange={(e) =>
                    updateField("hero.titleStart", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={content.hero.description}
                  onChange={(e) =>
                    updateField("hero.description", e.target.value)
                  }
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Background Image URL
                </label>
                <input
                  type="text"
                  value={content.hero.bgImage}
                  onChange={(e) => updateField("hero.bgImage", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent mb-2"
                />
                <label className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                  <Upload className="w-5 h-5" />
                  <span>Upload Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload("hero.bgImage", e)}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          )}

          {activeTab === "about" && (
            <div className="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
              {/* Basic Info */}
              <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Basic Information
                </h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image Filename
                  </label>
                  <input
                    type="text"
                    value={content.about.img}
                    onChange={(e) => updateField("about.img", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Badge Text
                  </label>
                  <input
                    type="text"
                    value={content.about.badgeText}
                    onChange={(e) =>
                      updateField("about.badgeText", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Main Title
                  </label>
                  <input
                    type="text"
                    value={content.about.mainTitle}
                    onChange={(e) =>
                      updateField("about.mainTitle", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={content.about.description}
                    onChange={(e) =>
                      updateField("about.description", e.target.value)
                    }
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              {/* Overview Section */}
              <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Overview Section
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Overview Title
                  </label>
                  <input
                    type="text"
                    value={content.about.overviewTitle}
                    onChange={(e) =>
                      updateField("about.overviewTitle", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Overview Description
                  </label>
                  <textarea
                    value={content.about.overviewDescription}
                    onChange={(e) =>
                      updateField("about.overviewDescription", e.target.value)
                    }
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              {/* Impact Stats */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Impact Section
                </h3>
                <div className="space-y-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Impact Title
                    </label>
                    <input
                      type="text"
                      value={content.about.impactTitle}
                      onChange={(e) =>
                        updateField("about.impactTitle", e.target.value)
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <button
                  onClick={() =>
                    addArrayItem("about.impactStats", { value: "", label: "" })
                  }
                  className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 mb-4"
                >
                  <Plus className="w-4 h-4" />
                  Add Impact Stat
                </button>
                <div className="space-y-4">
                  {content.about.impactStats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex gap-4 items-start">
                        <div className="flex-1 space-y-3">
                          <input
                            type="text"
                            value={stat.value}
                            onChange={(e) =>
                              updateArrayItem(
                                "about.impactStats",
                                idx,
                                "value",
                                e.target.value
                              )
                            }
                            placeholder="Value (e.g., 100+)"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                          <input
                            type="text"
                            value={stat.label}
                            onChange={(e) =>
                              updateArrayItem(
                                "about.impactStats",
                                idx,
                                "label",
                                e.target.value
                              )
                            }
                            placeholder="Label"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <button
                          onClick={() =>
                            removeArrayItem("about.impactStats", idx)
                          }
                          className="text-red-500 hover:text-red-700 p-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Services Section
                </h3>
                <div className="space-y-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Services Title
                    </label>
                    <input
                      type="text"
                      value={content.about.servicesTitle}
                      onChange={(e) =>
                        updateField("about.servicesTitle", e.target.value)
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Services Subtitle
                    </label>
                    <input
                      type="text"
                      value={content.about.servicesSubtitle}
                      onChange={(e) =>
                        updateField("about.servicesSubtitle", e.target.value)
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <button
                  onClick={() =>
                    addArrayItem("about.services", {
                      title: "",
                      description: "",
                    })
                  }
                  className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 mb-4"
                >
                  <Plus className="w-4 h-4" />
                  Add Service
                </button>
                <div className="space-y-4">
                  {content.about.services.map((service, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-lg p-4 space-y-3"
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1 space-y-3">
                          <input
                            type="text"
                            value={service.title}
                            onChange={(e) =>
                              updateArrayItem(
                                "about.services",
                                idx,
                                "title",
                                e.target.value
                              )
                            }
                            placeholder="Service Title"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                          <textarea
                            value={service.description}
                            onChange={(e) =>
                              updateArrayItem(
                                "about.services",
                                idx,
                                "description",
                                e.target.value
                              )
                            }
                            placeholder="Service Description"
                            rows="2"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <button
                          onClick={() => removeArrayItem("about.services", idx)}
                          className="text-red-500 hover:text-red-700 p-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety Section */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Safety Section
                </h3>
                <div className="space-y-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Safety Title
                    </label>
                    <input
                      type="text"
                      value={content.about.safetyTitle}
                      onChange={(e) =>
                        updateField("about.safetyTitle", e.target.value)
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Safety Subtitle
                    </label>
                    <input
                      type="text"
                      value={content.about.safetySubtitle}
                      onChange={(e) =>
                        updateField("about.safetySubtitle", e.target.value)
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <button
                  onClick={() =>
                    addArrayItem("about.safetyTenants", {
                      title: "",
                      description: "",
                    })
                  }
                  className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 mb-4"
                >
                  <Plus className="w-4 h-4" />
                  Add Safety Tenant
                </button>
                <div className="space-y-4">
                  {content.about.safetyTenants.map((tenant, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-lg p-4 space-y-3"
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1 space-y-3">
                          <input
                            type="text"
                            value={tenant.title}
                            onChange={(e) =>
                              updateArrayItem(
                                "about.safetyTenants",
                                idx,
                                "title",
                                e.target.value
                              )
                            }
                            placeholder="Safety Tenant Title"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                          <textarea
                            value={tenant.description}
                            onChange={(e) =>
                              updateArrayItem(
                                "about.safetyTenants",
                                idx,
                                "description",
                                e.target.value
                              )
                            }
                            placeholder="Safety Tenant Description"
                            rows="2"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <button
                          onClick={() =>
                            removeArrayItem("about.safetyTenants", idx)
                          }
                          className="text-red-500 hover:text-red-700 p-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Safety Commitment Title
                    </label>
                    <input
                      type="text"
                      value={content.about.safetyCommitmentTitle}
                      onChange={(e) =>
                        updateField(
                          "about.safetyCommitmentTitle",
                          e.target.value
                        )
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Safety Commitment Description
                    </label>
                    <textarea
                      value={content.about.safetyCommitmentDescription}
                      onChange={(e) =>
                        updateField(
                          "about.safetyCommitmentDescription",
                          e.target.value
                        )
                      }
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Certificates */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Certifications Section
                </h3>
                <div className="space-y-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Certificates Title
                    </label>
                    <input
                      type="text"
                      value={content.about.certificatesTitle}
                      onChange={(e) =>
                        updateField("about.certificatesTitle", e.target.value)
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Certificates Subtitle
                    </label>
                    <input
                      type="text"
                      value={content.about.certificatesSubtitle}
                      onChange={(e) =>
                        updateField(
                          "about.certificatesSubtitle",
                          e.target.value
                        )
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <button
                  onClick={() =>
                    addArrayItem("about.certificates", {
                      image: "",
                      title: "",
                      description: "",
                      statusText: "",
                    })
                  }
                  className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 mb-4"
                >
                  <Plus className="w-4 h-4" />
                  Add Certificate
                </button>
                <div className="space-y-4">
                  {content.about.certificates.map((cert, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-lg p-4 space-y-3"
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1 space-y-3">
                          <input
                            type="text"
                            value={cert.image}
                            onChange={(e) =>
                              updateArrayItem(
                                "about.certificates",
                                idx,
                                "image",
                                e.target.value
                              )
                            }
                            placeholder="Image Path"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                          <input
                            type="text"
                            value={cert.title}
                            onChange={(e) =>
                              updateArrayItem(
                                "about.certificates",
                                idx,
                                "title",
                                e.target.value
                              )
                            }
                            placeholder="Certificate Title"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                          <textarea
                            value={cert.description}
                            onChange={(e) =>
                              updateArrayItem(
                                "about.certificates",
                                idx,
                                "description",
                                e.target.value
                              )
                            }
                            placeholder="Certificate Description"
                            rows="2"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                          <input
                            type="text"
                            value={cert.statusText}
                            onChange={(e) =>
                              updateArrayItem(
                                "about.certificates",
                                idx,
                                "statusText",
                                e.target.value
                              )
                            }
                            placeholder="Status Text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <button
                          onClick={() =>
                            removeArrayItem("about.certificates", idx)
                          }
                          className="text-red-500 hover:text-red-700 p-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Credentials */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Additional Credentials
                </h3>
                <button
                  onClick={() =>
                    addArrayItem("about.additionalCredentials", {
                      title: "",
                      description: "",
                    })
                  }
                  className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 mb-4"
                >
                  <Plus className="w-4 h-4" />
                  Add Credential
                </button>
                <div className="space-y-4">
                  {content.about.additionalCredentials.map((cred, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-lg p-4 space-y-3"
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1 space-y-3">
                          <input
                            type="text"
                            value={cred.title}
                            onChange={(e) =>
                              updateArrayItem(
                                "about.additionalCredentials",
                                idx,
                                "title",
                                e.target.value
                              )
                            }
                            placeholder="Credential Title"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                          <input
                            type="text"
                            value={cred.description}
                            onChange={(e) =>
                              updateArrayItem(
                                "about.additionalCredentials",
                                idx,
                                "description",
                                e.target.value
                              )
                            }
                            placeholder="Credential Description"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <button
                          onClick={() =>
                            removeArrayItem("about.additionalCredentials", idx)
                          }
                          className="text-red-500 hover:text-red-700 p-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* {activeTab === "projects" && (
            <div className="bg-white rounded-xl shadow-sm p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
                <button
                  onClick={() =>
                    addArrayItem("projects", {
                      id: Date.now(),
                      title: "",
                      description: "",
                      image: "",
                      tech: [],
                      date: "2024",
                    })
                  }
                  className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                >
                  <Plus className="w-4 h-4" />
                  Add Project
                </button>
              </div>

              <div className="space-y-6">
                {content.projects.map((project, idx) => (
                  <div
                    key={project.id}
                    className="border border-gray-200 rounded-lg p-6 space-y-4"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Project {idx + 1}
                      </h3>
                      <button
                        onClick={() => removeArrayItem("projects", idx)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) =>
                          updateArrayItem(
                            "projects",
                            idx,
                            "title",
                            e.target.value
                          )
                        }
                        placeholder="Title"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                      <input
                        type="text"
                        value={project.date}
                        onChange={(e) =>
                          updateArrayItem(
                            "projects",
                            idx,
                            "date",
                            e.target.value
                          )
                        }
                        placeholder="Date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>

                    <textarea
                      value={project.description}
                      onChange={(e) =>
                        updateArrayItem(
                          "projects",
                          idx,
                          "description",
                          e.target.value
                        )
                      }
                      rows="3"
                      placeholder="Description"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />

                    <input
                      type="text"
                      value={project.image}
                      onChange={(e) =>
                        updateArrayItem(
                          "projects",
                          idx,
                          "image",
                          e.target.value
                        )
                      }
                      placeholder="Image URL"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />

                    <input
                      type="text"
                      value={project.tech.join(", ")}
                      onChange={(e) =>
                        updateArrayItem(
                          "projects",
                          idx,
                          "tech",
                          e.target.value.split(",").map((t) => t.trim())
                        )
                      }
                      placeholder="Technologies (comma separated)"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          )} */}

          {activeTab === "featured" && (
            <div className="bg-white rounded-xl shadow-sm p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Featured Projects
              </h2>

              <div className="space-y-6 mb-8">
                <input
                  type="text"
                  value={content.featuredProjects.badgeText}
                  onChange={(e) =>
                    updateField("featuredProjects.badgeText", e.target.value)
                  }
                  placeholder="Badge Text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  value={content.featuredProjects.title}
                  onChange={(e) =>
                    updateField("featuredProjects.title", e.target.value)
                  }
                  placeholder="Title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <button
                onClick={() =>
                  addArrayItem("featuredProjects.projects", {
                    image: "",
                    title: "",
                    location: "",
                    duration: "",
                    description: "",
                  })
                }
                className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 mb-4"
              >
                <Plus className="w-4 h-4" />
                Add Featured Project
              </button>

              <div className="space-y-6">
                {content.featuredProjects.projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg p-6 space-y-4"
                  >
                    <div className="flex justify-between">
                      <h4 className="text-lg font-semibold">
                        Project {idx + 1}
                      </h4>
                      <button
                        onClick={() =>
                          removeArrayItem("featuredProjects.projects", idx)
                        }
                        className="text-red-500"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) =>
                        updateArrayItem(
                          "featuredProjects.projects",
                          idx,
                          "title",
                          e.target.value
                        )
                      }
                      placeholder="Title"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                    <input
                      type="text"
                      value={project.location}
                      onChange={(e) =>
                        updateArrayItem(
                          "featuredProjects.projects",
                          idx,
                          "location",
                          e.target.value
                        )
                      }
                      placeholder="Location"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                    <input
                      type="text"
                      value={project.duration}
                      onChange={(e) =>
                        updateArrayItem(
                          "featuredProjects.projects",
                          idx,
                          "duration",
                          e.target.value
                        )
                      }
                      placeholder="Duration"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                    <textarea
                      value={project.description}
                      onChange={(e) =>
                        updateArrayItem(
                          "featuredProjects.projects",
                          idx,
                          "description",
                          e.target.value
                        )
                      }
                      rows="2"
                      placeholder="Description"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                    <input
                      type="text"
                      value={project.image}
                      onChange={(e) =>
                        updateArrayItem(
                          "featuredProjects.projects",
                          idx,
                          "image",
                          e.target.value
                        )
                      }
                      placeholder="Image URL"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "testimonials" && (
            <div className="bg-white rounded-xl shadow-sm p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Testimonials
              </h2>

              <button
                onClick={() =>
                  addArrayItem("testimonials.items", {
                    name: "",
                    title: "",
                    content: "",
                    rating: 5,
                  })
                }
                className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 mb-4"
              >
                <Plus className="w-4 h-4" />
                Add Testimonial
              </button>

              <div className="space-y-6">
                {content.testimonials.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg p-6 space-y-4"
                  >
                    <div className="flex justify-between">
                      <h4 className="text-lg font-semibold">
                        Testimonial {idx + 1}
                      </h4>
                      <button
                        onClick={() =>
                          removeArrayItem("testimonials.items", idx)
                        }
                        className="text-red-500"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) =>
                          updateArrayItem(
                            "testimonials.items",
                            idx,
                            "name",
                            e.target.value
                          )
                        }
                        placeholder="Name"
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) =>
                          updateArrayItem(
                            "testimonials.items",
                            idx,
                            "title",
                            e.target.value
                          )
                        }
                        placeholder="Job Title"
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <textarea
                      value={item.content}
                      onChange={(e) =>
                        updateArrayItem(
                          "testimonials.items",
                          idx,
                          "content",
                          e.target.value
                        )
                      }
                      rows="4"
                      placeholder="Content"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                    <input
                      type="number"
                      min="1"
                      max="5"
                      value={item.rating}
                      onChange={(e) =>
                        updateArrayItem(
                          "testimonials.items",
                          idx,
                          "rating",
                          parseInt(e.target.value)
                        )
                      }
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "contact" && (
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <input
                type="text"
                value={content.contact.title}
                onChange={(e) => updateField("contact.title", e.target.value)}
                placeholder="Title"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="email"
                value={content.contact.emailAddress}
                onChange={(e) =>
                  updateField("contact.emailAddress", e.target.value)
                }
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                value={content.contact.phoneNumbers.join(", ")}
                onChange={(e) =>
                  updateField(
                    "contact.phoneNumbers",
                    e.target.value.split(",").map((p) => p.trim())
                  )
                }
                placeholder="Phone Numbers (comma separated)"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                value={content.contact.locationAddress}
                onChange={(e) =>
                  updateField("contact.locationAddress", e.target.value)
                }
                placeholder="Location"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                value={content.contact.whatsappNumber}
                onChange={(e) =>
                  updateField("contact.whatsappNumber", e.target.value)
                }
                placeholder="WhatsApp Number"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        />
      )}
    </div>
  );
}
