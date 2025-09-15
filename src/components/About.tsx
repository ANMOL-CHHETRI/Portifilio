import { Heart, Lightbulb, Users, Compass, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import nicLogo from "@/assets/nic-logo.png";

const About = () => {
  const milestones = [
    {
      year: "2024",
      title: "National Innovation Center Ambassador",
      description: "Selected as Student Ambassador to promote innovation and technology",
      icon: Lightbulb,
    },
    {
      year: "2023",
      title: "Fonepay Student Ambassador",
      description: "Representing Fonepay at Butwal Kalika Campus",
      icon: Users,
    },
    {
      year: "2022",
      title: "Started BCA Journey",
      description: "Began Bachelor of Computer Applications at Butwal Kalika Campus",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="animate-slide-in">
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-accent mr-4" />
              <h3 className="font-display text-2xl font-semibold">Passionate Developer</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm <span className="font-semibold text-primary">Anmol Chhetri</span>, a dedicated BCA student at Butwal Kalika Campus with an unwavering passion for technology and community leadership. Born and raised in the beautiful city of Butwal, Nepal, I believe in using technology as a force for positive change.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My journey combines academic excellence with active community engagement. As a Student Ambassador for both Fonepay and the National Innovation Center, I bridge the gap between innovative technology solutions and student communities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about creating meaningful applications that solve real-world problems while continuously learning and growing in the ever-evolving tech landscape.
            </p>
          </div>

          {/* Timeline */}
          <div className="animate-fade-up">
            <div className="flex items-center mb-8">
              <Compass className="h-8 w-8 text-accent mr-4" />
              <h3 className="font-display text-2xl font-semibold">My Journey</h3>
            </div>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <Card key={index} className="p-6 hover-lift bg-gradient-card">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                        <milestone.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                          {milestone.year}
                        </span>
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{milestone.title}</h4>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;