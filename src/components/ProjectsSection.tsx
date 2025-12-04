import { Github, Youtube, ExternalLink, Gamepad2, Video, Code, Globe, MessageSquare, BookOpen, MapPin, FileArchive, Newspaper } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Minecrafter Community",
    description: "Community platform for Minecraft Bedrock players with addons, worlds, skins, and servers",
    icon: Globe,
    tags: ["Web", "Community", "Minecraft"],
    link: "https://minecraftercommunity.my.id",
    linkLabel: "Visit Site",
    featured: true,
  },
  {
    title: "Eskul Journalist Web",
    description: "Simple community website for school journalism extracurricular",
    icon: Newspaper,
    tags: ["Web", "School", "Community"],
    link: "https://github.com/IndokuDev",
    linkLabel: "View Project",
  },
  {
    title: "JSON Chat Apps",
    description: "Simple real-time chat application using JSON-based backend",
    icon: MessageSquare,
    tags: ["Chat", "JSON", "Web App"],
    link: "https://github.com/IndokuDev",
    linkLabel: "View Project",
  },
  {
    title: "E-Storybook",
    description: "Digital storybook converted from MS Word documents",
    icon: BookOpen,
    tags: ["Education", "Digital Book"],
    link: "https://github.com/IndokuDev",
    linkLabel: "View Project",
  },
  {
    title: "Buku Piket",
    description: "Digital class duty roster management system",
    icon: BookOpen,
    tags: ["School", "Management"],
    link: "https://github.com/IndokuDev",
    linkLabel: "View Project",
  },
  {
    title: "Phone Tracker",
    description: "Simple phone location tracking application",
    icon: MapPin,
    tags: ["Utility", "Tracking"],
    link: "https://github.com/IndokuDev",
    linkLabel: "View Project",
  },
  {
    title: "File Compressor",
    description: "Tool for compressing files to reduce size",
    icon: FileArchive,
    tags: ["Utility", "Tool"],
    link: "https://github.com/IndokuDev",
    linkLabel: "View Project",
  },
  {
    title: "Minecraft Addons",
    description: "Custom addons for Minecraft Bedrock Edition",
    icon: Gamepad2,
    tags: ["Minecraft", "Addon", "JSON"],
    link: "https://github.com/IndokuDev",
    linkLabel: "View on GitHub",
  },
  {
    title: "IndokuDev22",
    description: "Main YouTube channel for content creation and tutorials",
    icon: Video,
    tags: ["YouTube", "Content"],
    link: "https://youtube.com/@indokudev22",
    linkLabel: "Visit Channel",
  },
  {
    title: "MrHistoryBall",
    description: "YouTube channel for history content with Countryball",
    icon: Youtube,
    tags: ["History", "Countryball"],
    link: "https://youtube.com/@mrhistoryball",
    linkLabel: "Visit Channel",
  },
];

const skills = [
  "HTML & CSS",
  "JavaScript",
  "JSON",
  "Minecraft Addon Development",
  "Content Creation",
  "Video Editing",
  "Game Modding",
  "Web Development",
];

const tools = [
  "VS Code",
  "GitHub",
  "Canva",
  "CapCut",
  "Bridge App",
  "Blockbench",
  "Google Docs",
  "Microsoft Word",
  "Chrome DevTools",
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
            From Minecraft Addons to Web Applications, here are the things I build and work on.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-center mb-4">Skills</h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
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
        </div>

        {/* Tools */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-lg font-semibold text-center mb-4">Tools I Use</h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {tools.map((tool) => (
              <Badge 
                key={tool} 
                variant="outline" 
                className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm border-primary/30 text-primary hover:bg-primary/10 transition-colors"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Project with Preview */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-lg font-semibold text-center mb-6">Featured Project</h3>
          <Card className="bg-gradient-card border-primary/30 overflow-hidden">
            <CardHeader className="p-4 md:p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg md:text-xl">Minecrafter Community</CardTitle>
                  <p className="text-sm text-muted-foreground">minecraftercommunity.my.id</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0">
              <div className="rounded-lg overflow-hidden border border-border/50 mb-4">
                <iframe
                  src="https://minecraftercommunity.my.id"
                  title="Minecrafter Community Preview"
                  className="w-full h-64 md:h-96"
                  loading="lazy"
                />
              </div>
              <p className="text-muted-foreground mb-4 text-sm md:text-base">
                A community platform for Minecraft Bedrock players featuring addons, worlds, skins, and server listings. Built to connect Indonesian Minecraft community.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Web", "Community", "Minecraft", "Platform"].map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs border-primary/30 text-primary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button asChild>
                <a href="https://minecraftercommunity.my.id" target="_blank" rel="noopener noreferrer">
                  Visit Site <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Projects Grid */}
        <h3 className="text-lg font-semibold text-center mb-6">All Projects</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.filter(p => !p.featured).map((project) => (
            <Card 
              key={project.title}
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group overflow-hidden"
            >
              <CardHeader className="pb-2 p-4 md:p-5">
                <div className="flex items-start justify-between">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
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
                <CardTitle className="text-base md:text-lg mt-3">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-5 pt-0">
                <p className="text-muted-foreground mb-3 text-sm line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-primary/30 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="group-hover:text-primary transition-colors text-xs"
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
