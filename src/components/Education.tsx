import { GraduationCap, BookOpen, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Butwal Kalika Campus",
      period: "2022 - Present",
      status: "Currently Pursuing",
      description: "Comprehensive program covering programming, database management, web development, and computer science fundamentals.",
      highlights: [
        "Strong focus on programming languages and software development",
        "Database management and system analysis",
        "Web development technologies and frameworks",
        "Active participation in tech events and workshops"
      ],
      icon: GraduationCap,
      color: "from-blue-500 to-indigo-600"
    },
    {
      degree: "+2 Science",
      institution: "Kalika Manavgyan Secondary School", 
      period: "2020 - 2022",
      status: "Completed",
      description: "Higher secondary education with a focus on Science stream, building foundation for computer applications.",
      highlights: [
        "Mathematics and Physics fundamentals",
        "Analytical and problem-solving skills development", 
        "Preparation for technical higher education",
        "Leadership roles in school activities"
      ],
      icon: BookOpen,
      color: "from-green-500 to-emerald-600"
    },
    {
      degree: "School Education (SEE/SLC)",
      institution: "Prabhat English Boarding Secondary School",
      period: "2008 - 2020",
      status: "Completed - 10th Grade",
      description: "Comprehensive school education providing strong foundation in core subjects and extracurricular activities.",
      highlights: [
        "Consistent academic performance",
        "Active participation in school programs",
        "Development of communication skills",
        "Foundation in Mathematics and core subjects"
      ],
      icon: Award,
      color: "from-purple-500 to-violet-600"
    }
  ];

  const certifications = [
    "Web Development Fundamentals",
    "JavaScript Programming",
    "Student Leadership Training",
    "Innovation Workshop Facilitation"
  ];

  return (
    <section id="education" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Education & Learning
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My educational journey and continuous learning path
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <Card key={index} className="p-8 hover-lift shadow-medium bg-gradient-card">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1 text-center md:text-left">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center mx-auto md:mx-0 mb-4`}>
                      <edu.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">{edu.period}</div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      edu.status.includes('Present') 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                    }`}>
                      {edu.status}
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <h3 className="font-display text-2xl font-semibold mb-2">{edu.degree}</h3>
                    <p className="text-lg text-primary font-medium mb-4">{edu.institution}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{edu.description}</p>

                    <div>
                      <h4 className="font-semibold mb-3">Key Highlights:</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Learning */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="p-8 shadow-medium bg-gradient-card">
            <h3 className="font-display text-2xl font-semibold mb-6 text-center">
              Continuous Learning & Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center p-4 bg-gradient-subtle rounded-lg hover-lift">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-sm font-medium">{cert}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                I believe in lifelong learning and continuously expanding my knowledge in technology, leadership, and innovation.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;