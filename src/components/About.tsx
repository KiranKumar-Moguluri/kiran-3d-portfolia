import { Calendar, MapPin, Award } from "lucide-react";

const About = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "First National Bank",
      period: "2023 – Present",
      location: "Remote",
      description: "Developing enterprise banking solutions using .NET Core, React, and AWS cloud services.",
      technologies: [".NET Core", "React", "AWS", "Microservices"]
    },
    {
      title: "Software Engineer",
      company: "MediBuddy",
      period: "2021 – 2023",
      location: "Bangalore, India",
      description: "Built healthcare platform features using React Native and backend APIs for mobile applications.",
      technologies: ["React Native", "Node.js", "Firebase", "MongoDB"]
    },
    {
      title: "Software Engineer",
      company: "Flowserve",
      period: "2020 – 2021",
      location: "Hyderabad, India",
      description: "Developed industrial automation software solutions with focus on performance and reliability.",
      technologies: ["C#", ".NET", "SQL Server", "WPF"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate software engineer with expertise in full-stack development, 
              cloud architecture, and modern web technologies.
            </p>
          </div>

          {/* Profile Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Profile</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a dedicated software engineer with over 5 years of experience building 
                scalable web applications and cloud-native solutions. My expertise spans 
                from frontend development with React and TypeScript to backend services 
                using .NET Core and cloud infrastructure on AWS.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I have a passion for writing clean, maintainable code and implementing 
                best practices in software development. My experience includes working 
                with diverse teams to deliver high-quality products that solve real-world problems.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Based in India</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Available for opportunities</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4 text-primary" />
                  <span>AWS Certified</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <p className="text-sm text-muted-foreground">React, TypeScript, Next.js, React Native</p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <p className="text-sm text-muted-foreground">.NET Core, Node.js, ASP.NET</p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Cloud</h4>
                  <p className="text-sm text-muted-foreground">AWS, Docker, Kubernetes, Terraform</p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Database</h4>
                  <p className="text-sm text-muted-foreground">SQL Server, MongoDB, Firebase</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-20 bg-gradient-primary opacity-30" />
                  )}
                  
                  <div className="flex gap-6">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center tech-glow">
                      <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-primary rounded-full" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 glass-card p-6 rounded-lg project-card">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-xl font-semibold">{exp.title}</h4>
                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="font-medium text-primary">{exp.company}</span>
                        <span className="text-sm text-muted-foreground">{exp.location}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;