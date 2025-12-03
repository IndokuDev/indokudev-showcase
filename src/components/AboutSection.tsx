import { MapPin, Calendar, GraduationCap, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const infoCards = [
  {
    icon: Calendar,
    label: "Date of Birth",
    value: "June 26, 2007",
  },
  {
    icon: MapPin,
    label: "Born in",
    value: "Bekasi, Indonesia",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "SMA Negeri 12 Bekasi",
  },
  {
    icon: Trophy,
    label: "Achievement",
    value: "Class Champion",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-mono text-sm mb-2">// About Me</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Get to Know <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            A young developer passionate about coding, gaming, and content creation.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-12">
          {infoCards.map((card, index) => (
            <Card 
              key={card.label} 
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <card.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <p className="text-muted-foreground text-xs md:text-sm mb-1">{card.label}</p>
                <p className="font-semibold text-foreground text-sm md:text-base">{card.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">
            <span className="text-gradient">Education</span> History
          </h3>
          
          <div className="space-y-4 md:space-y-6">
            {[
              { year: "2022 - Present", school: "SMA Negeri 12 Bekasi", desc: "Grade XII" },
              { year: "2019 - 2022", school: "SMP Negeri 139 Jakarta", desc: "Graduated with honors" },
              { year: "2013 - 2019", school: "SD Bintara Jaya 2", desc: "Elementary education" },
            ].map((edu, index) => (
              <div key={edu.school} className="flex gap-3 md:gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-primary shadow-glow" />
                  {index < 2 && <div className="w-0.5 h-full bg-border group-hover:bg-primary/30 transition-colors" />}
                </div>
                <Card className="flex-1 bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-3 md:p-4">
                    <p className="text-primary font-mono text-xs mb-1">{edu.year}</p>
                    <h4 className="font-semibold text-foreground text-sm md:text-base">{edu.school}</h4>
                    <p className="text-muted-foreground text-xs md:text-sm">{edu.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;