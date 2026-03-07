import { Mail, Phone, Linkedin, Download, Github, Twitter, Youtube, BookOpen, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* AI Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/assets/hero-bg.png)`,
          filter: 'brightness(0.7)'
        }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%),
            linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
            Devon Clemente
          </h1>

          <h2 className="text-2xl md:text-3xl font-light mb-4 text-white/90 animate-fade-in" style={{ animationDelay: '0.2s', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            AI Process Automation Specialist
          </h2>

          <p className="text-xl md:text-2xl mb-12 text-white/80 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s', textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
            Building intelligent automation solutions that streamline workflows and eliminate inefficiencies
          </p>

          {/* Row 1: Email and Phone Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-black hover:bg-white/20 hover:border-black hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              asChild
            >
              <a href="mailto:devonclemente@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-black hover:bg-white/20 hover:border-black hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              asChild
            >
              <a href="tel:224-338-6624" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <div className="flex flex-col">
                  <span>(224) DEVON-AI</span>
                  <span className="text-sm opacity-80">(224) 338-6624</span>
                </div>
              </a>
            </Button>
          </div>

          {/* Row 2: Download Resume Button */}
          <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-white/90 hover:scale-105 transition-all duration-300 px-8 py-3 text-lg font-semibold animate-pulse-glow border-2 border-black"
              asChild
            >
              <a href="/Devon_Clemente_Resume.pdf" download="Devon_Clemente_Resume.pdf">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Row 3: Social Media Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-black hover:bg-white/20 hover:border-black hover:scale-105 transition-all duration-300 backdrop-blur-sm w-32"
              asChild
            >
              <a href="https://linkedin.com/in/devonjclemente" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-black hover:bg-white/20 hover:border-black hover:scale-105 transition-all duration-300 backdrop-blur-sm w-32"
              asChild
            >
              <a href="https://x.com/devonclemente" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Twitter className="w-5 h-5" />
                Twitter
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-black hover:bg-white/20 hover:border-black hover:scale-105 transition-all duration-300 backdrop-blur-sm w-32"
              asChild
            >
              <a href="https://github.com/devonclemente/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-black hover:bg-white/20 hover:border-black hover:scale-105 transition-all duration-300 backdrop-blur-sm w-32"
              asChild
            >
              <a href="https://medium.com/@devonclemente" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Medium
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-black hover:bg-white/20 hover:border-black hover:scale-105 transition-all duration-300 backdrop-blur-sm w-32"
              asChild
            >
              <a href="https://www.youtube.com/@devonclemente" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Youtube className="w-5 h-5" />
                YouTube
              </a>
            </Button>
          </div>

          {/* Row 4: View Gallery Button */}
          <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300 px-8 py-3 text-lg font-semibold backdrop-blur-sm"
              asChild
            >
              <Link href="/gallery">
                <Image className="w-5 h-5 mr-2" />
                View Gallery
              </Link>
            </Button>
          </div>

          {/* Location */}
          <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '1.0s' }}>
            <p className="text-white/80 text-lg">📍 Greater NY/NJ metropolitan area</p>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 flex flex-col items-center justify-center text-white/70 animate-bounce">
            <span className="text-sm font-medium text-center">Scroll to learn more</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center mt-2">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
