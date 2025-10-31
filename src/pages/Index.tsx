import React, { useMemo } from "react";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Fish, Carrot, Users, Award, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import vegetablesImage from "@/assets/vegetables.jpg";
import fishImage from "@/assets/fish.jpg";
import { useI18n } from "@/i18n/I18nProvider";

const Index = () => {
  const { t } = useI18n();

  const introFeatures = useMemo(
    () => [
      {
        icon: Leaf,
        title: t("home.intro.features.natural.title"),
        description: t("home.intro.features.natural.description")
      },
      {
        icon: Fish,
        title: t("home.intro.features.fish.title"),
        description: t("home.intro.features.fish.description")
      },
      {
        icon: Carrot,
        title: t("home.intro.features.vegetables.title"),
        description: t("home.intro.features.vegetables.description")
      }
    ],
    [t]
  );

  const values = useMemo(
    () => [
      {
        icon: Heart,
        title: t("home.values.freshness.title"),
        description: t("home.values.freshness.description")
      },
      {
        icon: Leaf,
        title: t("home.values.sustainability.title"),
        description: t("home.values.sustainability.description")
      },
      {
        icon: Award,
        title: t("home.values.quality.title"),
        description: t("home.values.quality.description")
      }
    ],
    [t]
  );

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 text-primary">{t("home.intro.title")}</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              {t("home.intro.description")}
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {introFeatures.map(({ icon: Icon, title, description }) => (
                <Card key={title} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-muted-foreground">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">{t("home.servicesPreview.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("home.servicesPreview.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Fish Farming */}
            <div className="animate-slide-up">
              <img 
                src={fishImage} 
                alt={t("home.servicesPreview.fishAlt")}
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-primary">{t("home.servicesPreview.fish.title")}</h3>
              <p className="text-muted-foreground mb-6">
                {t("home.servicesPreview.fish.description")}
              </p>
              <Button asChild variant="outline">
                <Link to="/services">
                  {t("home.servicesPreview.fish.cta")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Vegetable Cultivation */}
            <div className="animate-slide-up">
              <img 
                src={vegetablesImage} 
                alt={t("home.servicesPreview.vegetablesAlt")}
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-primary">{t("home.servicesPreview.vegetables.title")}</h3>
              <p className="text-muted-foreground mb-6">
                {t("home.servicesPreview.vegetables.description")}
              </p>
              <Button asChild variant="outline">
                <Link to="/services">
                  {t("home.servicesPreview.vegetables.cta")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">{t("home.values.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("home.values.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center animate-fade-in">
                <Icon className="h-16 w-16 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t("home.cta.title")}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t("home.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">{t("home.cta.primary")}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-red-500 hover:bg-primary-foreground hover:text-primary">
              <Link to="/products">{t("home.cta.secondary")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
