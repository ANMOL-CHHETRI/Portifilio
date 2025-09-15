import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Send, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "canmol350@gmail.com",
      href: "mailto:canmol350@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+977 9748809637",
      href: "tel:+9779748809637"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Butwal, Nepal",
      href: "#"
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Anmol Xettri",
      href: "https://www.facebook.com/AnmolXettri.AC"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss technology, innovation, and collaboration opportunities. 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 shadow-medium bg-gradient-card">
            <div className="flex items-center mb-6">
              <MessageCircle className="h-6 w-6 text-primary mr-3" />
              <h3 className="font-display text-2xl font-semibold">Send a Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, collaboration ideas, or just say hello!"
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-primary-glow">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-8 shadow-medium bg-gradient-card">
              <h3 className="font-display text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center p-4 rounded-lg bg-gradient-subtle hover:shadow-soft transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground text-sm">{info.label}</p>
                      <p className="font-semibold group-hover:text-primary transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-8 shadow-medium bg-gradient-card">
              <h3 className="font-display text-xl font-semibold mb-4">Quick Response</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I typically respond to messages within 24-48 hours. For urgent matters, 
                feel free to call or send a direct message on Facebook.
              </p>
              <div className="flex items-center text-sm text-primary">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Usually active during Nepal timezone (UTC+5:45)
              </div>
            </Card>

            <Card className="p-8 shadow-medium bg-gradient-card">
              <h3 className="font-display text-xl font-semibold mb-4">Let's Collaborate</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're interested in tech discussions, potential collaborations, 
                student community initiatives, or just want to connect with a fellow developer, 
                I'd love to hear from you!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;