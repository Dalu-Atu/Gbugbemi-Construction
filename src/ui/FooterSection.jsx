import { HardHat } from "lucide-react";
import { Separator } from "./CardUi";

function FooterSection() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-800 p-2 rounded-lg">
                <HardHat className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Gbubemi Gentle construction
                </h3>
                <p className="text-sm text-slate-400">
                  Building Tomorrow's Infrastructure
                </p>
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Your trusted partner for large-scale construction projects across
              the Southeast.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Road Construction</li>
              <li>Commercial Building</li>
              <li>Infrastructure Development</li>
              <li>Heavy Equipment Services</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li>About Us</li>
              <li>Our Projects</li>
              <li>Safety Standards</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>+234(816) 381-4609</li>
              <li>info@gbugbemiconstruction.com</li>
              <li>1234 Construction Blvd</li>
              <li> 1234 Sapele road</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 Gbubemi Gentle construction. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm">
              License Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
