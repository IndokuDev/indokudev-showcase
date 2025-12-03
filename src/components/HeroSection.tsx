import { Github, Youtube, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar from "@/assets/avatar.jpg";

const socialLinks = [
  { icon: Github, href: "https://github.com/IndokuDev", label: "GitHub" },
  { icon: Youtube, href: "https://youtube.com/@indokudev22", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com/indokudev", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/6285776445247", label: "WhatsApp" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Avatar */}
        <div className="mb-8 animate-slide-up">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50 animate-pulse-slow" />
            <img
              src={avatar}
              alt="Ahmad Raghib Zahron"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background shadow-glow"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-accent-foreground text-xs font-bold">✓</span>
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <p className="text-muted-foreground font-mono text-sm mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-gradient">Ahmad Raghib</span>
            <br />
            <span className="text-foreground">Zahron</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            a.k.a <span className="text-primary font-semibold">@IndokuDev</span>
          </p>
        </div>

        {/* Bio */}
        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Developer muda dari Indonesia. Minecraft Addon Creator & Content Creator.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Hubungi Saya
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/50 hover:bg-primary/10"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Lihat Projects
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;