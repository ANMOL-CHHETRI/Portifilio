import { Award, FileCheck, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import htmlTeaching from "@/assets/html-teaching.jpg";
import fonepayPresentation from "@/assets/fonepay-presentation.jpg";
import nicCertificate from "@/assets/nic-certificate.jpg";

const Recognition = () => {
  const achievements = [
    {
      title: "NIC Certificate",
      organization: "National Innovation Center",
      description: "Recognition for outstanding contribution as Student Ambassador",
      icon: Trophy,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Fonepay Certificate", 
      organization: "Fonepay Nepal",
      description: "Certificate for excellent performance as Student Ambassador",
      icon: Award,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Mentor HTML/CSS Certificate",
      organization: "Web Development Training (60hr)",
      description: "Certified for mentoring students in HTML and CSS fundamentals",
      icon: FileCheck,
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <section id="recognition" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Recognition & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Certificates and recognitions that highlight my contributions and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-8 hover-lift shadow-medium bg-gradient-card text-center">
              <div className="mb-6">
                <img 
                  src={achievement.title === "Fonepay Certificate" ? fonepayPresentation : achievement.title === "NIC Certificate" ? nicCertificate : htmlTeaching}
                  alt={achievement.title === "Fonepay Certificate" ? "Fonepay Presentation" : achievement.title === "NIC Certificate" ? "NIC Innovation Event" : "Teaching session"}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center mx-auto`}>
                  <achievement.icon className="h-10 w-10 text-white" />
                </div>
              </div>
              
              <h3 className="font-display text-xl font-semibold mb-2">
                {achievement.title}
              </h3>
              
              <Badge variant="secondary" className="mb-4">
                {achievement.organization}
              </Badge>
              
              <p className="text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition;