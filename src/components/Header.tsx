import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      }, 100);
    } else {
      // Ana sayfadaysak direkt scroll yap
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };

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

  const navItemClass =
    "inline-flex items-center text-sm font-semibold text-gray-700 px-3 py-1 rounded-tl-lg rounded-br-lg transition-colors duration-200 ease-in-out hover:bg-unog-blue hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-unog-blue/50";

  return (
    <header className="fixed top-4 left-0 right-0 z-50 bg-white/50 backdrop-blur-sm border-b border-gray-100 max-w-6xl w-full mx-auto rounded-tl-2xl rounded-br-2xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src="/logo.png" alt={t.common.logo} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isRoute = item.type === "route";

              if (isRoute) {
                return (
                  <Link
                    key={item.id}
                    to={item.id}
                    className={navItemClass}
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
                  className={navItemClass}
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
              {navItems.map((item) => {
                if (item.type === "route") {
                  return (
                    <Link
                      key={item.id}
                      to={item.id}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-left text-gray-700 px-4 py-3 rounded-xl bg-white/60 border border-gray-200 hover:bg-unog-blue hover:text-white transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-gray-700 px-4 py-3 rounded-xl bg-white/60 border border-gray-200 hover:bg-unog-blue hover:text-white transition-all duration-200"
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
