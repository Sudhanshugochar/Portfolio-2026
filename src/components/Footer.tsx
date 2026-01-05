import { Github, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Sudhanshugochar", label: "GitHub" },
  { 
    icon: () => (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ), 
    href: "https://x.com/GocharSudhanshu", 
    label: "X" 
  },
  { icon: Mail, href: "mailto:sudhanshugocher11@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="font-display text-xl font-bold gradient-text">
            Sudhanshu Gochar
          </div>

          {/* Built by */}
          <div className="text-muted-foreground text-sm text-center">
            Built by <span className="font-medium text-foreground">Sudhanshu Gochar</span> • Machine Learning & Web Engineering
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sudhanshu Gochar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
