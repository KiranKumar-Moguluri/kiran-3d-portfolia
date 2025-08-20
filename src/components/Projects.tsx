import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X } from "lucide-react";
import urbanDashXImage from "@/assets/urbandashx-project.jpg";
import iDandaImage from "@/assets/idanda-project.jpg";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  links: {
    demo?: string;
    github?: string;
  };
  category: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "urbandashx",
      title: "UrbanDashX",
      description: "AI-powered urban analytics platform built with React/Next.js and AWS microservices architecture.",
      longDescription: "UrbanDashX is a comprehensive urban analytics platform that leverages AI and machine learning to provide insights into city operations, traffic patterns, and resource optimization. Built using modern web technologies and cloud-native architecture.",
      image: urbanDashXImage,
      technologies: ["React", "Next.js", "TypeScript", "AWS", "Microservices", "AI/ML", "Tailwind CSS"],
      features: [
        "Real-time urban data analytics",
        "AI-powered predictive insights",
        "Scalable microservices architecture",
        "Interactive data visualizations",
        "Cloud-native deployment on AWS"
      ],
      links: {
        demo: "https://urbandashx-demo.com",
        github: "https://github.com/kiranmoguluri/urbandashx"
      },
      category: "Web Application"
    },
    {
      id: "idanda",
      title: "iDanda",
      description: "React Native mobile application with Firebase backend, featuring Stripe payments and Maps integration.",
      longDescription: "iDanda is a full-featured mobile application built with React Native that provides location-based services with integrated payment processing. The app features real-time maps, secure payment handling, and a robust backend infrastructure.",
      image: iDandaImage,
      technologies: ["React Native", "Firebase", "Stripe API", "Maps API", "Node.js", "MongoDB"],
      features: [
        "Cross-platform mobile application",
        "Integrated payment processing with Stripe",
        "Real-time location services and maps",
        "Firebase authentication and database",
        "Push notifications and real-time updates"
      ],
      links: {
        github: "https://github.com/kiranmoguluri/idanda"
      },
      category: "Mobile Application"
    },
    {
      id: "fintech-dashboard",
      title: "FinTech Dashboard",
      description: "Enterprise financial dashboard with advanced analytics and real-time data processing capabilities.",
      longDescription: "A comprehensive financial technology dashboard designed for enterprise use, featuring advanced analytics, real-time data processing, and secure financial data management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: [".NET Core", "React", "SQL Server", "SignalR", "Chart.js", "Azure"],
      features: [
        "Real-time financial data processing",
        "Advanced analytics and reporting",
        "Secure data handling and encryption",
        "Interactive charts and visualizations",
        "Role-based access control"
      ],
      links: {
        demo: "https://fintech-dashboard-demo.com"
      },
      category: "Enterprise Application"
    },
    {
      id: "healthcare-integration",
      title: "Healthcare Integration Platform",
      description: "HIPAA-compliant healthcare data integration platform with secure API endpoints and real-time monitoring.",
      longDescription: "A secure healthcare integration platform that enables seamless data exchange between different healthcare systems while maintaining HIPAA compliance and ensuring data privacy.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      technologies: ["ASP.NET Core", "SQL Server", "Redis", "Docker", "Azure", "HL7 FHIR"],
      features: [
        "HIPAA-compliant data handling",
        "HL7 FHIR standard integration",
        "Secure API endpoints with OAuth 2.0",
        "Real-time health data monitoring",
        "Automated compliance reporting"
      ],
      links: {
        github: "https://github.com/kiranmoguluri/healthcare-platform"
      },
      category: "Healthcare"
    }
  ];

  const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative glass-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="p-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <div className="mb-4">
            <span className="text-sm text-primary font-medium">{project.category}</span>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground">{project.longDescription}</p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-3">Key Features</h4>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {project.links.demo && (
              <Button variant="hero" asChild>
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button variant="glass" asChild>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of my recent work showcasing modern web development, 
              cloud architecture, and innovative solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group glass-card rounded-lg overflow-hidden project-card cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">View Details</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-primary font-medium">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {project.links.demo && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;