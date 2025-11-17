import React, { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // Eğer ana sayfada değilsek, önce ana sayfaya git
    if (location.pathname !== "/") {
      navigate("/");
      // Ana sayfa yüklendikten sonra bölüme scroll yap
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
        // Mark as active after navigation
        setActiveSection(sectionId);
      }, 100);
    } else {
      // Ana sayfadaysak direkt scroll yap
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };

  // Observe sections on the homepage to update activeSection while scrolling
  useEffect(() => {
    if (location.pathname !== "/") {
      // If we're on a different page, set active based on pathname for page links
      if (location.pathname.startsWith("/merch")) setActiveSection("merch");
      else if (location.pathname.startsWith("/gonullu"))
        setActiveSection("volunteers");
      return;
    }

    const ids = ["home", "events", "contact", "patreon"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: [0.5] }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  // Nav items configuration (so we can map and apply consistent classes)
  const navItems: Array<{
    id: string;
    label: string;
    type: "section" | "route";
  }> = [
    { id: "home", label: t.nav.home, type: "section" },
    { id: "events", label: t.nav.events, type: "section" },
    { id: "contact", label: t.nav.contact, type: "section" },
    { id: "/merch", label: t.nav.merch, type: "route" },
    { id: "patreon", label: t.nav.support, type: "section" },
    { id: "/gonullu", label: t.nav.volunteers, type: "route" },
  ];

  const navItemClass = (
    id: string,
    _idx: number,
    type: "section" | "route"
  ) => {
    const isActive =
      type === "route"
        ? id === "/merch"
          ? location.pathname.startsWith("/merch")
          : location.pathname.startsWith("/gonullu")
        : activeSection === id;

    // Base ensures color/transform transitions so when active toggles we get a smooth change
    const base = `text-gray-700 transition-colors duration-200 ease-in-out transform`;

    // Hover should show same bg/text as active
    const hover = `hover:text-unog-blue`;

    const active = isActive
      ? "bg-unog-blue text-white px-3 py-1 rounded-tl-lg rounded-br-lg hover:text-white"
      : "";

    return `${base} ${hover} ${active}`;
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 bg-white/50 backdrop-blur-sm border-b border-gray-100 max-w-5xl w-full mx-auto rounded-tl-2xl rounded-br-2xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src="/logo.png" alt={t.common.logo} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, idx) => {
              const isRoute = item.type === "route";
              const className = navItemClass(item.id, idx, item.type);

              if (isRoute) {
                return (
                  <Link
                    key={item.id}
                    to={item.id}
                    className={
                      className + " hidden md:inline-flex items-center"
                    }
                    aria-current={
                      item.id === "/merch"
                        ? location.pathname.startsWith("/merch")
                          ? "page"
                          : undefined
                        : location.pathname.startsWith("/gonullu")
                        ? "page"
                        : undefined
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={className}
                  aria-current={activeSection === item.id ? "true" : undefined}
                >
                  {item.label}
                </button>
              );
            })}

            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="flex items-center space-x-2"
            >
              <Globe className="h-4 w-4" />
              <span>{language.toUpperCase()}</span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs">{language.toUpperCase()}</span>
            </Button>

            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
              size="sm"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, idx) => {
                if (item.type === "route") {
                  return (
                    <Link
                      key={item.id}
                      to={item.id}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-left text-gray-700 hover:bg-unog-blue hover:text-white transition-colors py-2 ${
                        item.id === "/merch"
                          ? location.pathname.startsWith("/merch")
                            ? "bg-unog-blue text-white rounded px-3 py-1"
                            : ""
                          : location.pathname.startsWith("/gonullu")
                          ? "bg-unog-blue text-white rounded px-3 py-1"
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-gray-700 hover:bg-unog-blue hover:text-white transition-colors duration-200 py-2 ${
                      activeSection === item.id
                        ? "bg-unog-blue text-white rounded px-3 py-1"
                        : ""
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
