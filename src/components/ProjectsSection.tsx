import { Github, Youtube, ExternalLink, Gamepad2, Video, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Minecraft Addons",
    description: "Membuat berbagai addon custom untuk Minecraft Bedrock Edition",
    icon: Gamepad2,
    tags: ["Minecraft", "Addon", "JSON"],
    link: "https://github.com/IndokuDev",
    linkLabel: "View on GitHub",
  },
  {
    title: "IndokuDev22",
    description: "Channel YouTube utama untuk content creation dan tutorial",
    icon: Video,
    tags: ["YouTube", "Content", "Tutorial"],
    link: "https://youtube.com/@indokudev22",
    linkLabel: "Visit Channel",
  },
  {
    title: "MrHistoryBall",
    description: "Channel YouTube untuk content sejarah dengan Countryball",
    icon: Youtube,
    tags: ["History", "Countryball", "Education"],
    link: "https://youtube.com/@mrhistoryball",
    linkLabel: "Visit Channel",
  },
  {
    title: "GitHub Projects",
    description: "Repository untuk project-project development dan eksperimen",
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
    <section id="projects" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// Projects & Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What I <span className="text-gradient">Create</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dari Minecraft Addons sampai Content Creation, ini adalah beberapa hal yang gue kerjain.
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary" 
              className="px-4 py-2 text-sm bg-card border border-border/50 hover:border-primary/50 transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group overflow-hidden"
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
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
                <CardTitle className="text-xl mt-4">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-primary/30 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="group-hover:text-primary transition-colors"
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