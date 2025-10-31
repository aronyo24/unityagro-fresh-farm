import React, { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Award, Users, Droplets, Sprout } from "lucide-react";
import teamImage from "@/assets/team.jpg";
import { useI18n } from "@/i18n/I18nProvider";

const About = () => {
  const { t } = useI18n();

  const missionCards = useMemo(
    () => [
      {
        icon: Heart,
        title: t("about.mission.cards.freshness.title"),
        description: t("about.mission.cards.freshness.description")
      },
      {
        icon: Leaf,
        title: t("about.mission.cards.sustainability.title"),
        description: t("about.mission.cards.sustainability.description")
      },
      {
        icon: Award,
        title: t("about.mission.cards.quality.title"),
        description: t("about.mission.cards.quality.description")
      },
      {
        icon: Users,
        title: t("about.mission.cards.community.title"),
        description: t("about.mission.cards.community.description")
      },
      {
        icon: Droplets,
        title: t("about.mission.cards.purity.title"),
        description: t("about.mission.cards.purity.description")
      },
      {
        icon: Sprout,
        title: t("about.mission.cards.innovation.title"),
        description: t("about.mission.cards.innovation.description")
      }
    ],
    [t]
  );

  const aquacultureItems = useMemo(
    () => [
      t("about.methods.aquaculture.items.recirculating"),
      t("about.methods.aquaculture.items.testing"),
      t("about.methods.aquaculture.items.feed"),
      t("about.methods.aquaculture.items.density")
    ],
    [t]
  );

  const cultivationItems = useMemo(
    () => [
      t("about.methods.cultivation.items.rotation"),
      t("about.methods.cultivation.items.compost"),
      t("about.methods.cultivation.items.pest"),
      t("about.methods.cultivation.items.irrigation")
    ],
    [t]
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-primary">{t("about.hero.title")}</h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t("about.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 text-primary">{t("about.story.title")}</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t("about.story.paragraph1")}
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t("about.story.paragraph2")}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.story.paragraph3")}
              </p>
            </div>
            <div className="animate-slide-up">
              <img 
                src={teamImage} 
                alt={t("about.story.imageAlt")}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">{t("about.mission.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("about.mission.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missionCards.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8 text-center">
                  <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-4">{title}</h3>
                  <p className="text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Farming Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-primary">{t("about.methods.title")}</h2>
              <p className="text-lg text-muted-foreground">
                {t("about.methods.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 text-primary">{t("about.methods.aquaculture.title")}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {aquacultureItems.map((item) => (
                    <li key={item} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 text-primary">{t("about.methods.cultivation.title")}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {cultivationItems.map((item) => (
                    <li key={item} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t("about.team.title")}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t("about.team.description1")}
          </p>
          <p className="text-lg opacity-80">
            {t("about.team.description2")}
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;