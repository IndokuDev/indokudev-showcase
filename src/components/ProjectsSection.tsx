import { Github, Youtube, ExternalLink, Gamepad2, Video, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Minecraft Addons",
    description: "Creating custom addons for Minecraft Bedrock Edition",
    icon: Gamepad2,
    tags: ["Minecraft", "Addon", "JSON"],
    link: "https://github.com/IndokuDev",
    linkLabel: "View on GitHub",
  },
  {
    title: "IndokuDev22",
    description: "Main YouTube channel for content creation and tutorials",
    icon: Video,
    tags: ["YouTube", "Content", "Tutorial"],
    link: "https://youtube.com/@indokudev22",
    linkLabel: "Visit Channel",
  },
  {
    title: "MrHistoryBall",
    description: "YouTube channel for history content with Countryball",
    icon: Youtube,
    tags: ["History", "Countryball", "Education"],
    link: "https://youtube.com/@mrhistoryball",
    linkLabel: "Visit Channel",
  },
  {
    title: "GitHub Projects",
    description: "Repository for development projects and experiments",
    icon: Code,
    tags: ["Open Source", "Development"],
    link: "https://github.com/OverhandBook79",
    linkLabel: "View Repos",
  },
];

const skills = [
  "Minecraft Addon Development",
  "Content Creation",
  "Video Editing",
  "JavaScript",
  "JSON",
  "Game Modding",
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-mono text-sm mb-2">// Projects & Skills</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            What I <span className="text-gradient">Create</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            From Minecraft Addons to Content Creation, here are some things I work on.
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16">
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary" 
              className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm bg-card border border-border/50 hover:border-primary/50 transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group overflow-hidden"
            >
              <CardHeader className="pb-2 p-4 md:p-6">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </a>
                </div>
                <CardTitle className="text-lg md:text-xl mt-3 md:mt-4">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
                <p className="text-muted-foreground mb-3 md:mb-4 text-sm md:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-primary/30 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="group-hover:text-primary transition-colors text-xs md:text-sm"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.linkLabel}
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;