import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Leaf, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const Footer = () => {
  const { t } = useI18n();
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">{t("common.brandName")}</span>
            </div>
            <p className="text-muted-foreground mb-4">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={t("footer.socialAlt.facebook")}
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={t("footer.socialAlt.instagram")}
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={t("footer.socialAlt.youtube")}
              >
                <Youtube className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("navigation.home")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("navigation.about")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("navigation.services")}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("navigation.products")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("navigation.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">{t("footer.ourServices")}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>{t("footer.services.fish")}</li>
              <li>{t("footer.services.vegetables")}</li>
              <li>{t("footer.services.tours")}</li>
              <li>{t("footer.services.produce")}</li>
              <li>{t("footer.services.sustainable")}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">{t("footer.contactInfo")}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">{t("footer.address")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">{t("footer.phone")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">{t("footer.email")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            {t("footer.copyright", { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;