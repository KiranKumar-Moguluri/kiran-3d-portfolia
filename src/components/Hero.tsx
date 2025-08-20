import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

interface CounterProps {
  end: number;
  suffix: string;
  label: string;
  duration?: number;
}

const AnimatedCounter = ({ end, suffix, label, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const timer = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(endTime - now, 0);
      const progress = Math.min((duration - remaining) / duration, 1);
      
      setCount(Math.round(progress * end));

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="text-center animate-counter">
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground text-sm md:text-base">{label}</div>
    </div>
  );
};

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 hero-background"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 z-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-hero-primary/20 rounded-full animate-float z-20" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-hero-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-hero-accent/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="container mx-auto px-6 text-center z-30 relative">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            I'm{" "}
            <span className="gradient-text">Kiran Kumar Moguluri</span>
          </h1>
          
          {/* Subheading */}
          <h2 className="text-xl md:text-2xl font-semibold mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            .NET Developer & AWS Cloud Engineer
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Building scalable, cloud-native, and AI-driven solutions that transform ideas into powerful digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="lg">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="glass" size="lg">
              <Github className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>

          {/* Animated Counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <AnimatedCounter end={5} suffix="+" label="Years Experience" />
            <AnimatedCounter end={10} suffix="+" label="Major Projects" />
            <AnimatedCounter end={4} suffix="+" label="Certifications" />
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8 animate-slide-up" style={{ animationDelay: '1s' }}>
            <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="mailto:kiran@example.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;