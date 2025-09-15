import { Building2, Lightbulb, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import nicLogo from "@/assets/nic-logo.png";
import fonepayLogo from "@/assets/fonepay-logo.png";

const Experience = () => {
  const experiences = [
    {
      title: "Student Ambassador",
      organization: "National Innovation Center",
      period: "2024 - Present",
      location: "Nepal",
      description: "Promoting innovation, technology, and entrepreneurship among student communities across Nepal.",
      impact: [
        "Organized innovation workshops for 100+ students",
        "Connected students with startup opportunities", 
        "Promoted STEM education initiatives"
      ],
      skills: ["Leadership", "Public Speaking", "Innovation", "Community Building"],
      icon: Lightbulb,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Student Ambassador", 
      organization: "Fonepay",
      period: "2024 - 2025",
      location: "Butwal Kalika Campus",
      description: "Representing Fonepay digital payment solutions and promoting financial technology awareness among students.",
      impact: [
        "Increased digital payment adoption by 40%",
        "Conducted fintech awareness sessions",
        "Bridged gap between students and digital finance"
      ],
      skills: ["Digital Marketing", "Fintech", "Student Engagement", "Communication"],
      icon: Building2,
      color: "from-green-500 to-teal-600"
    }
  ];

  const achievements = [
    {
      title: "Top Student Ambassador",
      organization: "Recognition Program",
      description: "Outstanding performance in community engagement",
      icon: Award
    },
    {
      title: "Innovation Workshop Leader", 
      organization: "Campus Initiative",
      description: "Led multiple successful innovation workshops",
      icon: Users
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Experience & Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey as a student leader and community ambassador
          </p>
        </div>

        {/* Main Experiences */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 hover-lift shadow-medium bg-gradient-card">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  {exp.organization === "National Innovation Center" ? (
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 p-1 border-2 border-gray-200">
                      <img src={nicLogo} alt="NIC Logo" className="w-10 h-10 object-contain" />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 p-2 border-2 border-red-500 shadow-lg">
                      <img src={fonepayLogo} alt="Fonepay Logo" className="w-12 h-12 object-contain rounded-full" style={{filter: 'sepia(1) saturate(2) hue-rotate(330deg)'}} />
                    </div>
                  )}
                  <div className="text-sm text-muted-foreground mb-1">{exp.period}</div>
                  <div className="text-sm font-medium">{exp.location}</div>
                </div>

                <div className="md:col-span-3">
                  <h3 className="font-display text-2xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-lg text-primary font-medium mb-4">{exp.organization}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Impact:</h4>
                    <ul className="space-y-2">
                      {exp.impact.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;