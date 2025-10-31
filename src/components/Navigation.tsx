import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useI18n } from "@/i18n/I18nProvider";
import type { Language } from "@/i18n/translations";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, language, changeLanguage, availableLanguages } = useI18n();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { labelKey: "navigation.home", path: "/" },
    { labelKey: "navigation.about", path: "/about" },
    { labelKey: "navigation.services", path: "/services" },
    { labelKey: "navigation.products", path: "/products" },
    { labelKey: "navigation.testimonials", path: "/testimonials" },
    { labelKey: "navigation.contact", path: "/contact" }
  ];

  const isActive = (path: string) =>
    location.pathname === path || (path !== '/' && location.pathname.startsWith(path));

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between h-16 ">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-primary">
            <Leaf className="h-6 w-6" />
            <span>{t("common.brandName")}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold transition-colors text-black  hover:text-primary ${
                  isActive(item.path) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {t(item.labelKey)}
              </Link>
            ))}
            </div>
            <Select
              value={language}
              onValueChange={(value) => changeLanguage(value as Language)}
            >
              <SelectTrigger
                className="w-32 border-muted/60"
                aria-label={t("common.language.switchLabel")}
              >
                <SelectValue placeholder={t("common.language.switchLabel")} />
              </SelectTrigger>
              <SelectContent align="end">
                {availableLanguages.map(({ code }) => (
                  <SelectItem key={code} value={code}>
                    {t(`common.language.${code}`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? t("navigation.closeMenu") : t("navigation.openMenu")}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation: render outside the centered container so it spans full width */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.labelKey)}
              </Link>
            ))}
            <div className="px-3 pt-4">
              <Select
                value={language}
                onValueChange={(value) => changeLanguage(value as Language)}
              >
                <SelectTrigger
                  className="w-full border-muted/60"
                  aria-label={t("common.language.switchLabel")}
                >
                  <SelectValue placeholder={t("common.language.switchLabel")} />
                </SelectTrigger>
                <SelectContent>
                  {availableLanguages.map(({ code }) => (
                    <SelectItem key={code} value={code}>
                      {t(`common.language.${code}`)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;