import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Dribbble,
  Globe,
} from "lucide-react";

// Mapea el "label" del JSON al ícono correspondiente.
const ICONS = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Instagram: Instagram,
  Dribbble: Dribbble,
};

export default function SocialIcons({ socials, className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socials.map((s) => {
        const Icon = ICONS[s.label] || Globe;
        return (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className="text-text/80 transition-colors hover:text-accent"
          >
            <Icon size={20} strokeWidth={1.75} />
          </a>
        );
      })}
    </div>
  );
}
