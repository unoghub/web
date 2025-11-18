import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Instagram,
  Linkedin,
  X,
  Mail,
  Heart,
  Youtube,
  Newspaper,
} from "lucide-react";

// Discord SVG Icon Component
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
  </svg>
);

// Spotify SVG Icon Component
const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

// Patreon SVG Icon Component
const PatreonIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M15.386.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.764 3.876 8.64 8.64 8.64 4.764 0 8.64-3.876 8.64-8.64 0-4.764-3.876-8.64-8.64-8.64zM15.386 15.386c-3.561 0-6.446-2.885-6.446-6.446s2.885-6.446 6.446-6.446 6.446 2.885 6.446 6.446-2.885 6.446-6.446 6.446z"/>
    <path d="M15.386 3.561c-2.885 0-5.22 2.335-5.22 5.22s2.335 5.22 5.22 5.22 5.22-2.335 5.22-5.22-2.335-5.22-5.22-5.22z"/>
  </svg>
);

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: "Discord",
      icon: DiscordIcon,
      url: "https://unog.dev/discord",
      color: "hover:text-indigo-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/unoghub",
      color: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/unoghub",
      color: "hover:text-blue-600",
    },
    {
      name: "X",
      icon: X,
      url: "https://x.com/unoghub",
      color: "hover:text-blue-400",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@unoghub",
      color: "hover:text-red-500",
    },
    {
      name: "Spotify",
      icon: SpotifyIcon,
      url: "https://unog.dev/podcast",
      color: "hover:text-green-500",
    },
  ];

  const quickLinks: Array<{
    label: string;
    href: string;
    type: "anchor" | "route";
  }> = [
    { label: t.nav.home, href: "#home", type: "anchor" },
    { label: t.nav.events, href: "#events", type: "anchor" },
    { label: t.nav.contact, href: "#contact", type: "anchor" },
    { label: t.nav.support, href: "#patreon", type: "anchor" },
    { label: t.nav.merch, href: "/merch", type: "route" },
    { label: t.nav.volunteers, href: "/gonullu", type: "route" },
  ];

  const quickLinkClass =
    "text-sm font-semibold tracking-tight text-slate-600 px-4 py-2 rounded-tl-xl rounded-br-xl border border-transparent bg-white/60 shadow-sm transition-all duration-200 hover:text-unog-blue hover:border-unog-blue/30 hover:-translate-y-0.5";

  return (
    <footer className="bg-gradient-to-b from-white via-slate-50 to-slate-100 py-16 md:py-20">
      <div className="max-w-6xl px-4 sm:px-0 mx-auto">
        <div className="relative overflow-hidden rounded-tl-3xl rounded-br-3xl border border-slate-200 bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-16 -top-10 h-32 rounded-full bg-gradient-to-r from-unog-blue/40 via-sky-200/50 to-fuchsia-200/50 blur-3xl"
          />

          <div className="relative px-6 py-10 sm:px-10 md:py-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col gap-4 lg:max-w-md">
                <Link to="/" className="w-fit">
                  <img
                    src="/logo.png"
                    alt={t.common.logo}
                    className="h-12 w-auto"
                  />
                </Link>
                <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                  {t.footer.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {quickLinks.map((item) =>
                  item.type === "route" ? (
                    <Link key={item.label} to={item.href} className={quickLinkClass}>
                      {item.label}
                    </Link>
                  ) : (
                    <a key={item.label} href={item.href} className={quickLinkClass}>
                      {item.label}
                    </a>
                  )
                )}
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm">
                <div className="flex items-center gap-3 text-slate-900">
                  <Mail className="h-5 w-5 text-unog-blue" />
                  <h3 className="text-lg font-semibold">{t.footer.contact}</h3>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  info@unoghub.org
                </p>
                <a
                  href="mailto:info@unoghub.org"
                  className="mt-3 inline-flex items-center text-sm font-semibold text-unog-blue hover:underline"
                >
                  {t.footer.contact}
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm">
                <div className="flex items-center gap-3 text-slate-900">
                  <Newspaper className="h-5 w-5 text-unog-blue" />
                  <h3 className="text-lg font-semibold">{t.footer.newsletter}</h3>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  UNOG Gelistirici Bulteni
                </p>
                <a
                  href="https://unog.dev/bulten"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center text-sm font-semibold text-unog-blue hover:underline"
                >
                  unog.dev/bulten
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm">
                <div className="flex items-center gap-3 text-slate-900">
                  <Heart className="h-5 w-5 text-unog-blue" />
                  <h3 className="text-lg font-semibold">{t.footer.support}</h3>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  {t.footer.supportWithPatreonText}
                </p>
                <a
                  href="https://unog.dev/patreon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center text-sm font-semibold text-unog-blue hover:underline"
                >
                  {t.footer.supportWithPatreon}
                </a>
              </div>
            </div>

            <div className="mt-12 border-t border-slate-200 pt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center text-slate-500">
                <span>{t.footer.madeWith}</span>
                <Heart className="mx-2 h-4 w-4 text-unog-blue" />
                <span>{t.footer.byCommunity}</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-slate-500 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${social.color}`}
                    title={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
