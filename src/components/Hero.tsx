import { ArrowDown, Download, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/anmol-profile.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Simple background */}
      <div className="absolute inset-0 bg-white/10">
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Profile Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <img 
                src={profileImage} 
                alt="Anmol Chhetri" 
                className="relative w-80 h-80 mx-auto rounded-full border-4 border-white/20 shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 md:order-2 text-left">
            <div className="mb-6">
              <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-slate-800 mb-4 leading-tight">
                Anmol Chhetri
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mb-6"></div>
              <p className="text-2xl text-blue-600 mb-4 font-medium">
                Frontend & UI/UX Developer
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Passionate and dedicated developer with strong skills in building clean, 
                user-focused web applications. Currently pursuing BCA and actively 
                contributing to impactful web initiatives.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-slate-600">
                <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                <span>Butwal, Nepal</span>
              </div>
              <div className="flex items-center text-slate-600">
                <Phone className="h-5 w-5 mr-3 text-blue-600" />
                <span>+977-9748809637</span>
              </div>
              <div className="flex items-center text-slate-600">
                <Mail className="h-5 w-5 mr-3 text-blue-600" />
                <span>canmol350@gmail.com</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 group"
                onClick={() => window.open('/cv.jpg', '_blank')}
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;