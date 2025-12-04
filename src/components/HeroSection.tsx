import { Github, Youtube, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar from "@/assets/avatar.jpg";
import { useEffect, useState } from "react";

const socialLinks = [
  { icon: Github, href: "https://github.com/IndokuDev", label: "GitHub" },
  { icon: Youtube, href: "https://youtube.com/@indokudev22", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com/indokudev", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/6285776445247", label: "WhatsApp" },
];

const roles = [
  "Minecraft Addon Creator",
  "Content Creator",
  "Web Developer",
  "Student",
];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 md:pt-16 lg:pt-12">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-56 md:w-80 h-56 md:h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Avatar */}
        <div className="mb-6 md:mb-8 animate-slide-up">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50 animate-pulse-slow" />
            <img
              src={avatar}
              alt="Ahmad Raghib Zahron"
              className="relative w-28 h-28 md:w-40 md:h-40 rounded-full object-cover border-4 border-background shadow-glow"
            />
            <div className="absolute -bottom-2 -right-2 w-7 h-7 md:w-8 md:h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-accent-foreground text-xs font-bold">✓</span>
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <p className="text-muted-foreground font-mono text-xs md:text-sm mb-2">Hello, I'm</p>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4">
            <span className="text-gradient">Ahmad Raghib</span>
            <br />
            <span className="text-foreground">Zahron</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground mb-2">
            a.k.a <span className="text-primary font-semibold">@IndokuDev</span>
          </p>
        </div>

        {/* Typing Animation */}
        <div className="animate-slide-up h-8 md:h-10" style={{ animationDelay: "0.2s" }}>
          <p className="text-base md:text-xl text-primary font-mono">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Bio */}
        <div className="animate-slide-up" style={{ animationDelay: "0.25s" }}>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 px-2">
            Young Developer from Indonesia. Building cool stuff with code & creativity.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 animate-slide-up px-4" style={{ animationDelay: "0.3s" }}>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground px-6 md:px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/50 hover:bg-primary/10"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3 md:gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2.5 md:p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
