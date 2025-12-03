import { FaWhatsapp, FaDiscord } from "react-icons/fa";
import { Github, Youtube, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "085776445247",
    href: "https://wa.me/6285776445247",
    color: "hover:text-green-500",
  },
  {
    icon: FaDiscord,
    label: "Discord",
    value: "@IndokuDev",
    href: "https://discord.com/users/IndokuDev",
    color: "hover:text-purple-500",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@indokudev",
    href: "https://instagram.com/indokudev",
    color: "hover:text-pink-500",
  },
  {
    icon: Instagram,
    label: "Instagram Personal",
    value: "@ahmad.raghib.zahron",
    href: "https://instagram.com/ahmad.raghib.zahron",
    color: "hover:text-pink-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@IndokuDev",
    href: "https://github.com/IndokuDev",
    color: "hover:text-foreground",
  },
  {
    icon: Youtube,
    label: "YouTube",
    value: "@indokudev22",
    href: "https://youtube.com/@indokudev22",
    color: "hover:text-red-500",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-mono text-sm mb-2">// Contact</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Want to collaborate or just chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-12">
          {contactMethods.map((method) => (
            <a
              key={method.value}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow h-full">
                <CardContent className="p-4 md:p-6 flex flex-col md:flex-row items-center gap-2 md:gap-4">
                  <div className={`p-2.5 md:p-3 rounded-xl bg-muted group-hover:bg-primary/10 transition-colors`}>
                    <method.icon className={`w-4 h-4 md:w-5 md:h-5 text-muted-foreground ${method.color} transition-colors`} />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-xs text-muted-foreground">{method.label}</p>
                    <p className="font-medium text-foreground text-xs md:text-sm">{method.value}</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-primary p-[2px] rounded-2xl overflow-hidden">
            <CardContent className="bg-card rounded-2xl p-6 md:p-12">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Ready to Work Together?</h3>
              <p className="text-muted-foreground mb-4 md:mb-6 max-w-md mx-auto text-sm md:text-base">
                Got a project or idea to discuss? Let's make it happen!
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground"
                asChild
              >
                <a href="https://wa.me/6285776445247" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="w-4 h-4 mr-2" />
                  Chat via WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;