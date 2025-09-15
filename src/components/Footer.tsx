import { ArrowUp, Github, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { 
      href: "https://www.facebook.com/AnmolXettri.AC",
      icon: Facebook, 
      label: "Facebook" 
    },
    { 
      href: "https://www.linkedin.com/in/canmol350", 
      icon: Linkedin, 
      label: "LinkedIn" 
    },
    { 
      href: "https://github.com/ANMOL-CHHETRI", 
      icon: Github, 
      label: "GitHub" 
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 text-white">
      <div className="container mx-auto px-6 py-8">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Left side - Name and Social Links */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="font-display text-2xl font-bold mb-4">Anmol Chhetri</h3>
            <p className="text-white/80 mb-4 max-w-md">
              Frontend & UI/UX Developer from Butwal, Nepal
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Back to Top */}
          <Button
            variant="ghost" 
            onClick={scrollToTop}
            className="text-white hover:bg-white/10 group px-6 py-3 rounded-lg border border-white/20"
          >
            Back to Top
            <ArrowUp className="h-4 w-4 ml-2 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6 mt-6">
          <div className="text-center">
            <p className="text-white/60 text-sm">
              © 2024 Anmol Chhetri. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;