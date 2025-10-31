import React, { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fish, Leaf, Eye, CheckCircle, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import fishImage from "@/assets/fish.jpg";
import vegetablesImage from "@/assets/vegetables.jpg";
import { useI18n } from "@/i18n/I18nProvider";

const Services = () => {
  const { t } = useI18n();

  const fishVarieties = useMemo(
    () => [
      t("servicesPage.fish.varieties.tilapia"),
      t("servicesPage.fish.varieties.catfish")
    ],
    [t]
  );

  const fishProcess = useMemo(
    () => [
      t("servicesPage.fish.process.water"),
      t("servicesPage.fish.process.nutrition"),
      t("servicesPage.fish.process.checks"),
      t("servicesPage.fish.process.harvesting")
    ],
    [t]
  );

  const vegetableProduce = useMemo(
    () => [
      t("servicesPage.vegetables.produce.greens"),
      t("servicesPage.vegetables.produce.roots"),
      t("servicesPage.vegetables.produce.vines"),
      t("servicesPage.vegetables.produce.herbs")
    ],
    [t]
  );

  const vegetablePractices = useMemo(
    () => [
      t("servicesPage.vegetables.practices.pesticides"),
      t("servicesPage.vegetables.practices.compost"),
      t("servicesPage.vegetables.practices.rotation"),
      t("servicesPage.vegetables.practices.irrigation")
    ],
    [t]
  );

  const tourCards = useMemo(
    () => [
      {
        icon: Calendar,
        title: t("servicesPage.tours.educational.title"),
        description: t("servicesPage.tours.educational.description"),
        bullets: [
          t("servicesPage.tours.educational.bullets.demos"),
          t("servicesPage.tours.educational.bullets.qa"),
          t("servicesPage.tours.educational.bullets.materials"),
          t("servicesPage.tours.educational.bullets.duration")
        ]
      },
      {
        icon: Eye,
        title: t("servicesPage.tours.family.title"),
        description: t("servicesPage.tours.family.description"),
        bullets: [
          t("servicesPage.tours.family.bullets.activities"),
          t("servicesPage.tours.family.bullets.samples"),
          t("servicesPage.tours.family.bullets.photos"),
          t("servicesPage.tours.family.bullets.duration")
        ]
      },
      {
        icon: MapPin,
        title: t("servicesPage.tours.private.title"),
        description: t("servicesPage.tours.private.description"),
        bullets: [
          t("servicesPage.tours.private.bullets.itinerary"),
          t("servicesPage.tours.private.bullets.scheduling"),
          t("servicesPage.tours.private.bullets.info"),
          t("servicesPage.tours.private.bullets.duration")
        ]
      }
    ],
    [t]
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-primary">{t("servicesPage.hero.title")}</h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t("servicesPage.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Fish Farming Service */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <Fish className="h-12 w-12 text-primary mr-4" />
                <h2 className="text-4xl font-bold text-primary">{t("servicesPage.fish.title")}</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t("servicesPage.fish.description")}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">{t("servicesPage.fish.varietiesTitle")}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {fishVarieties.map((item) => (
                      <li key={item} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">{t("servicesPage.fish.processTitle")}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {fishProcess.map((item) => (
                      <li key={item} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="animate-slide-up">
              <img 
                src={fishImage} 
                alt={t("servicesPage.fish.imageAlt")}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vegetable Cultivation Service */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up order-2 lg:order-1">
              <img 
                src={vegetablesImage} 
                alt={t("servicesPage.vegetables.imageAlt")}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="animate-fade-in order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <Leaf className="h-12 w-12 text-primary mr-4" />
                <h2 className="text-4xl font-bold text-primary">{t("servicesPage.vegetables.title")}</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t("servicesPage.vegetables.description")}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">{t("servicesPage.vegetables.produceTitle")}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {vegetableProduce.map((item) => (
                      <li key={item} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">{t("servicesPage.vegetables.practicesTitle")}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {vegetablePractices.map((item) => (
                      <li key={item} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Tours Service */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Eye className="h-12 w-12 text-primary mr-4" />
              <h2 className="text-4xl font-bold text-primary">{t("servicesPage.tours.title")}</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              {t("servicesPage.tours.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourCards.map(({ icon: Icon, title, description, bullets }) => (
              <Card key={title} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <Icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{description}</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/contact">{t("servicesPage.tours.cta")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">{t("servicesPage.quality.title")}</h2>
            <p className="text-xl mb-8 opacity-90">{t("servicesPage.quality.description")}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <CheckCircle className="h-16 w-16 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-semibold mb-2">{t("servicesPage.quality.testing.title")}</h3>
                <p className="opacity-80">{t("servicesPage.quality.testing.description")}</p>
              </div>
              
              <div className="text-center">
                <CheckCircle className="h-16 w-16 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-semibold mb-2">{t("servicesPage.quality.freshness.title")}</h3>
                <p className="opacity-80">{t("servicesPage.quality.freshness.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;