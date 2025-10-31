import React, { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Fish, Carrot, Star, Calendar, Droplets } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n/I18nProvider";

const Products = () => {
  const { t } = useI18n();

  const fishProducts = useMemo(
    () => [
      {
        image: "🐟",
        name: t("productsPage.fish.items.tilapia.name"),
        description: t("productsPage.fish.items.tilapia.description"),
        features: [
          t("productsPage.fish.items.tilapia.features.hormoneFree"),
          t("productsPage.fish.items.tilapia.features.cleanWater"),
          t("productsPage.fish.items.tilapia.features.weight")
        ],
        price: t("productsPage.fish.items.tilapia.price"),
        availability: t("productsPage.fish.items.tilapia.availability")
      },
      {
        image: "�",
        name: t("productsPage.fish.items.catfish.name"),
        description: t("productsPage.fish.items.catfish.description"),
        features: [
          t("productsPage.fish.items.catfish.features.taste"),
          t("productsPage.fish.items.catfish.features.sustainable"),
          t("productsPage.fish.items.catfish.features.weight")
        ],
        price: t("productsPage.fish.items.catfish.price"),
        availability: t("productsPage.fish.items.catfish.availability")
      }
    ],
    [t]
  );

  const vegetables = useMemo(
    () => [
      {
        image: "🥬",
        name: t("productsPage.vegetables.items.spinach.name"),
        description: t("productsPage.vegetables.items.spinach.description"),
        features: [
          t("productsPage.vegetables.items.spinach.features.pesticideFree"),
          t("productsPage.vegetables.items.spinach.features.iron"),
          t("productsPage.vegetables.items.spinach.features.leaves")
        ],
        season: t("productsPage.vegetables.items.spinach.season")
      },
      {
        image: "🍅",
        name: t("productsPage.vegetables.items.tomatoes.name"),
        description: t("productsPage.vegetables.items.tomatoes.description"),
        features: [
          t("productsPage.vegetables.items.tomatoes.features.heirloom"),
          t("productsPage.vegetables.items.tomatoes.features.ripened"),
          t("productsPage.vegetables.items.tomatoes.features.sizes")
        ],
        season: t("productsPage.vegetables.items.tomatoes.season")
      },
      {
        image: "🥒",
        name: t("productsPage.vegetables.items.cucumbers.name"),
        description: t("productsPage.vegetables.items.cucumbers.description"),
        features: [
          t("productsPage.vegetables.items.cucumbers.features.burpless"),
          t("productsPage.vegetables.items.cucumbers.features.organic"),
          t("productsPage.vegetables.items.cucumbers.features.size")
        ],
        season: t("productsPage.vegetables.items.cucumbers.season")
      },
      {
        image: "�",
        name: t("productsPage.vegetables.items.carrots.name"),
        description: t("productsPage.vegetables.items.carrots.description"),
        features: [
          t("productsPage.vegetables.items.carrots.features.beta"),
          t("productsPage.vegetables.items.carrots.features.sizes"),
          t("productsPage.vegetables.items.carrots.features.storage")
        ],
        season: t("productsPage.vegetables.items.carrots.season")
      },
      {
        image: "�",
        name: t("productsPage.vegetables.items.lettuce.name"),
        description: t("productsPage.vegetables.items.lettuce.description"),
        features: [
          t("productsPage.vegetables.items.lettuce.features.varieties"),
          t("productsPage.vegetables.items.lettuce.features.hydroponic"),
          t("productsPage.vegetables.items.lettuce.features.yearRound")
        ],
        season: t("productsPage.vegetables.items.lettuce.season")
      },
      {
        image: "�",
        name: t("productsPage.vegetables.items.peppers.name"),
        description: t("productsPage.vegetables.items.peppers.description"),
        features: [
          t("productsPage.vegetables.items.peppers.features.vitaminC"),
          t("productsPage.vegetables.items.peppers.features.sweet"),
          t("productsPage.vegetables.items.peppers.features.certified")
        ],
        season: t("productsPage.vegetables.items.peppers.season")
      }
    ],
    [t]
  );

  const herbs = useMemo(
    () => [
      {
        image: "🌿",
        name: t("productsPage.herbs.items.basil.name"),
        description: t("productsPage.herbs.items.basil.description"),
        features: [
          t("productsPage.herbs.items.basil.features.varieties"),
          t("productsPage.herbs.items.basil.features.pesticideFree"),
          t("productsPage.herbs.items.basil.features.oil")
        ],
        season: t("productsPage.herbs.items.basil.season")
      },
      {
        image: "🌿",
        name: t("productsPage.herbs.items.cilantro.name"),
        description: t("productsPage.herbs.items.cilantro.description"),
        features: [
          t("productsPage.herbs.items.cilantro.features.slowBolt"),
          t("productsPage.herbs.items.cilantro.features.organic"),
          t("productsPage.herbs.items.cilantro.features.roots")
        ],
        season: t("productsPage.herbs.items.cilantro.season")
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
            <h1 className="text-5xl font-bold mb-6 text-primary">{t("productsPage.hero.title")}</h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t("productsPage.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Fish Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Fish className="h-12 w-12 text-primary mr-4" />
              <h2 className="text-4xl font-bold text-primary">{t("productsPage.fish.title")}</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("productsPage.fish.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fishProducts.map((product, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-4xl">{product.image}</span>
                      <CardTitle className="text-2xl">{product.name}</CardTitle>
                    </div>
                    <Badge variant="secondary">{product.availability}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {product.availability}
                      </span>
                      <span className="font-semibold text-primary">{product.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vegetables */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Carrot className="h-12 w-12 text-primary mr-4" />
              <h2 className="text-4xl font-bold text-primary">{t("productsPage.vegetables.title")}</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("productsPage.vegetables.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vegetables.map((product, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{product.image}</span>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {product.season}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Herbs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">{t("productsPage.herbs.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("productsPage.herbs.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {herbs.map((product, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{product.image}</span>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {product.season}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Freshness */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">{t("productsPage.quality.title")}</h2>
            <p className="text-xl mb-12 opacity-90">{t("productsPage.quality.description")}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Droplets className="h-16 w-16 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-semibold mb-2">{t("productsPage.quality.harvest.title")}</h3>
                <p className="opacity-80">{t("productsPage.quality.harvest.description")}</p>
              </div>
              
              <div className="text-center">
                <Star className="h-16 w-16 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-semibold mb-2">{t("productsPage.quality.premium.title")}</h3>
                <p className="opacity-80">{t("productsPage.quality.premium.description")}</p>
              </div>
              
              <div className="text-center">
                <Fish className="h-16 w-16 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-semibold mb-2">{t("productsPage.quality.sustainable.title")}</h3>
                <p className="opacity-80">{t("productsPage.quality.sustainable.description")}</p>
              </div>
            </div>

            <div className="mt-12">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">{t("productsPage.quality.cta")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;