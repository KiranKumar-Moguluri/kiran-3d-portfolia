import { Heart, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">
                Kiran Kumar Moguluri
              </h3>
              <p className="text-muted-foreground">
                .NET Developer & AWS Cloud Engineer passionate about building 
                scalable, innovative solutions that make a difference.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/kiranmoguluri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/kiranmoguluri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:kiran.moguluri@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Ready to collaborate?</h4>
              <p className="text-muted-foreground text-sm">
                Let's discuss your next project and bring your ideas to life.
              </p>
              <div className="space-y-3">
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => scrollToSection('#contact')}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
                <Button variant="glass" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Kiran Kumar Moguluri. All rights reserved.
            </div>
            
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              Built with <Heart className="h-4 w-4 text-red-500 mx-1" fill="currentColor" /> using React & TypeScript
            </div>

            <button
              onClick={scrollToTop}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;