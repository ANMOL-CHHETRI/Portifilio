import { ExternalLink, Github, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio built with React and Tailwind CSS. Features smooth animations, dark mode toggle, and mobile-first design.",
      image: "/api/placeholder/400/250",
      tags: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      github: "#",
      live: "#",
      status: "Completed"
    },
    {
      title: "Student Community App", 
      description: "A web application connecting students across different campuses for collaboration and knowledge sharing.",
      image: "/api/placeholder/400/250", 
      tags: ["JavaScript", "HTML", "CSS", "Community"],
      github: "#",
      live: "#",
      status: "In Progress"
    },
    {
      title: "Innovation Workshop Materials",
      description: "Created comprehensive workshop materials and presentations for innovation sessions at various educational institutions.",
      image: "/api/placeholder/400/250",
      tags: ["Education", "Innovation", "Presentation", "Community"],
      github: "#",
      live: "#",
      status: "Ongoing"
    },
    {
      title: "Fintech Awareness Campaign",
      description: "Digital campaign materials and interactive presentations to promote financial technology awareness among students.",
      image: "/api/placeholder/400/250",
      tags: ["Fintech", "Education", "Digital Marketing", "Canva"],
      github: "#",
      live: "#",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "In Progress": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Ongoing": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Projects & Initiatives
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects and community initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-lift shadow-medium group bg-gradient-card">
              <div className="aspect-video bg-gradient-subtle flex items-center justify-center border-b">
                <Lightbulb className="h-16 w-16 text-muted-foreground/50" />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                    {project.status}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs px-2 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            More projects coming soon as I continue my journey in technology and community leadership!
          </p>
          <Button variant="outline" size="lg">
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;