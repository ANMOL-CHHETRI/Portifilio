import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("skills-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const strongSkills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
  ];

  const basicSkills = [
    { name: "C", level: 5 },
    { name: "Figma", level: 10 },
    { name: "Photo Editing", level: 75 },
  ];

  const otherSkills = [
    "Git & GitHub",
    "Responsive Design", 
    "Team Leadership",
    "Community Building",
    "Public Speaking",
    "Project Management",
    "Problem Solving",
    "Innovation"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and leadership capabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12" id="skills-section">
          {/* Technical Skills */}
          <div className="space-y-8">
            {/* Strong Skills */}
            <Card className="p-8 shadow-medium bg-gradient-card">
              <h3 className="font-display text-2xl font-semibold mb-6 flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                Strong Skills
              </h3>
              <div className="space-y-6">
                {strongSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="progress-bar h-3">
                      <div 
                        className="progress-fill"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Basic Skills */}
            <Card className="p-8 shadow-medium bg-gradient-card">
              <h3 className="font-display text-2xl font-semibold mb-6 flex items-center">
                <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                Growing Skills
              </h3>
              <div className="space-y-6">
                {basicSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="progress-bar h-3">
                      <div 
                        className="progress-fill"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(index + 4) * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Other Skills & Attributes */}
          <div>
            <Card className="p-8 shadow-medium bg-gradient-card h-full">
              <h3 className="font-display text-2xl font-semibold mb-6 flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mr-3"></div>
                Additional Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {otherSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm hover-lift justify-center"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-subtle rounded-lg">
                <h4 className="font-semibold text-lg mb-3">Core Strengths</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Strong foundation in web development technologies</li>
                  <li>• Excellent leadership and communication skills</li>
                  <li>• Passionate about learning new technologies</li>
                  <li>• Community-focused mindset with innovation drive</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
