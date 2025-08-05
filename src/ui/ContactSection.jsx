import { useState } from "react";
import { Badge, Button } from "./CardUi";
import {
  Facebook,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter, // Added Twitter, assuming you might use it
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp redirect
    const whatsappMessage = `Hello! I'm interested in your construction services.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/2348159019225?text=${whatsappMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: <Facebook className="h-5 w-5" />,
      url: "https://www.facebook.com/gbubemi.gentle.constructions",
      name: "Facebook",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      url: "https://wa.me/2348159019225",
      name: "WhatsApp",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-emerald-900 to-slate-900"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {" "}
        {/* Adjusted max-w and increased horizontal padding */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white/20 text-white border border-white/30 text-sm py-1 px-3">
            {" "}
            {/* Slightly smaller badge text */}
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-bold text-white mb-4 leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a consultation and let's bring your
            construction vision to life.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-10 lg:sticky lg:top-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                {" "}
                {/* Slightly larger heading */}
                Get In Touch
              </h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-emerald-200 text-sm">Phone</p>{" "}
                    <p className="text-white font-semibold text-lg">
                      {" "}
                      +234 815 901 9225
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-emerald-200 text-sm">Email</p>
                    <p className="text-white font-semibold text-lg">
                      info@gubemigentle.com
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-emerald-200 text-sm">Location</p>
                    <p className="text-white font-semibold text-lg">Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Social Media */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-5">Follow Us</h4>{" "}
              {/* Larger heading, increased margin */}
              <div className="flex space-x-3">
                {" "}
                {/* Slightly reduced space-x for closer icons */}
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-emerald-600 hover:scale-105 transition-all duration-300 shadow-md" /* Slightly smaller icons, added shadow, subtle scale effect */
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/20 shadow-xl">
            {" "}
            {/* Increased padding, added border and stronger shadow */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    {" "}
                    {/* Added htmlFor for accessibility */}
                    Full Name <span className="text-red-400">*</span>{" "}
                    {/* Added asterisk for required fields */}
                  </label>
                  <input
                    id="fullName" // Added ID
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base" /* Consistent text-base */
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="emailAddress"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="serviceNeeded"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Service Needed
                </label>
                <select
                  id="serviceNeeded"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none pr-8 text-base" /* Added appearance-none and padding-right for custom arrow */
                >
                  <option value="">Select a service</option>
                  <option value="road-construction">Road Construction</option>
                  <option value="building-construction">
                    Building Construction
                  </option>
                  <option value="bridge-construction">
                    Bridge Construction
                  </option>
                  <option value="maintenance">Maintenance Services</option>
                  <option value="materials">Building Materials</option>
                </select>
                {/* You might want to add a custom arrow icon for the select box */}
              </div>

              <div>
                <label
                  htmlFor="projectDetails"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="projectDetails"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-y text-base" /* Changed resize-none to resize-y */
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg text-lg transition duration-300 flex items-center justify-center" /* Increased padding, font size, added transition */
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Message Us
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
