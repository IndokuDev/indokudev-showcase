import { Heart, Github, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© 2025</span>
            <span className="font-semibold text-foreground">IndokuDev</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Indonesia
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/IndokuDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/@indokudev22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-red-500 transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/indokudev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-pink-500 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;