import { useState, useEffect, useRef } from "react";
import { 
  Code, 
  Cloud, 
  Database, 
  Smartphone, 
  Settings, 
  Shield,
  GitBranch,
  Monitor
} from "lucide-react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  icon: React.ReactNode;
  delay?: number;
}

const SkillBar = ({ skill, percentage, icon, delay = 0 }: SkillBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const animationDuration = 2000;
        const startTime = Date.now();
        
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / animationDuration, 1);
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          
          setAnimatedPercentage(Math.round(percentage * easeOutQuart));
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        requestAnimationFrame(animate);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, delay]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="text-primary">{icon}</div>
          <span className="font-medium">{skill}</span>
        </div>
        <span className="text-sm font-medium text-primary">
          {animatedPercentage}%
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div 
          className="skill-bar-fill h-full rounded-full relative"
          style={{ width: `${animatedPercentage}%` }}
        >
          <div className="absolute inset-0 bg-gradient-primary opacity-80" />
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="h-6 w-6" />,
      skills: [
        { name: "React/Next.js", percentage: 95, icon: <Code className="h-4 w-4" /> },
        { name: "TypeScript", percentage: 90, icon: <Code className="h-4 w-4" /> },
        { name: "Tailwind CSS", percentage: 88, icon: <Code className="h-4 w-4" /> },
        { name: "React Native", percentage: 85, icon: <Smartphone className="h-4 w-4" /> },
      ]
    },
    {
      title: "Backend Development", 
      icon: <Settings className="h-6 w-6" />,
      skills: [
        { name: ".NET Core", percentage: 95, icon: <Code className="h-4 w-4" /> },
        { name: "ASP.NET", percentage: 90, icon: <Code className="h-4 w-4" /> },
        { name: "Node.js", percentage: 85, icon: <Code className="h-4 w-4" /> },
        { name: "Microservices", percentage: 88, icon: <Settings className="h-4 w-4" /> },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "AWS", percentage: 90, icon: <Cloud className="h-4 w-4" /> },
        { name: "Docker", percentage: 85, icon: <Settings className="h-4 w-4" /> },
        { name: "Kubernetes", percentage: 80, icon: <Settings className="h-4 w-4" /> },
        { name: "Terraform", percentage: 78, icon: <Settings className="h-4 w-4" /> },
      ]
    },
    {
      title: "Database & Security",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "SQL Server", percentage: 92, icon: <Database className="h-4 w-4" /> },
        { name: "MongoDB", percentage: 85, icon: <Database className="h-4 w-4" /> },
        { name: "Firebase", percentage: 88, icon: <Database className="h-4 w-4" /> },
        { name: "CI/CD", percentage: 85, icon: <GitBranch className="h-4 w-4" /> },
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      icon: <Shield className="h-5 w-5" />
    },
    {
      name: "Frontend Developer (React)",
      issuer: "HackerRank",
      icon: <Code className="h-5 w-5" />
    },
    {
      name: "Full Stack Web Development",
      issuer: "Certificate Authority",
      icon: <Monitor className="h-5 w-5" />
    },
    {
      name: "Ethical Hacking",
      issuer: "Security Institute",
      icon: <Shield className="h-5 w-5" />
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive set of technical skills built through years of hands-on experience 
              and continuous learning in modern software development.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="glass-card p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-primary">{category.icon}</div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      skill={skill.name}
                      percentage={skill.percentage}
                      icon={skill.icon}
                      delay={categoryIndex * 200 + skillIndex * 100}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
              Certifications & Achievements
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-lg text-center project-card group"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 tech-glow group-hover:animate-pulse-glow">
                    <div className="text-white">{cert.icon}</div>
                  </div>
                  <h4 className="font-semibold mb-2 text-sm">{cert.name}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;