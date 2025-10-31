import React, { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Users, Award } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const Testimonials = () => {
  const { t } = useI18n();

  const testimonials = useMemo(
    () => [
      {
        key: "sarah",
        image: "👩‍🍳",
        rating: 5
      },
      {
        key: "mike",
        image: "👨‍👩‍👧‍👦",
        rating: 5
      },
      {
        key: "emma",
        image: "👩‍🍳",
        rating: 5
      },
      {
        key: "david",
        image: "🏃‍♂️",
        rating: 5
      },
      {
        key: "lisa",
        image: "🥗",
        rating: 5
      },
      {
        key: "robert",
        image: "🛒",
        rating: 5
      }
    ],
    []
  );

  const stats = useMemo(
    () => [
      { number: "500+", label: t("testimonialsPage.stats.happyCustomers"), icon: Users },
      { number: "95%", label: t("testimonialsPage.stats.satisfaction"), icon: Star },
      { number: "3+", label: t("testimonialsPage.stats.years"), icon: Award },
      { number: "1000+", label: t("testimonialsPage.stats.reviews"), icon: Quote }
    ],
    [t]
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-primary">{t("testimonialsPage.hero.title")}</h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t("testimonialsPage.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">{t("testimonialsPage.grid.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("testimonialsPage.grid.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => {
              const name = t(`testimonialsPage.testimonials.${testimonial.key}.name`);
              const role = t(`testimonialsPage.testimonials.${testimonial.key}.role`);
              const content = t(`testimonialsPage.testimonials.${testimonial.key}.content`);

              return (
                <Card key={testimonial.key} className="border-2 hover:border-primary transition-colors relative">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    {`"${content}"`}
                  </p>
                  
                  {/* Customer Info */}
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{testimonial.image}</span>
                    <div>
                      <div className="font-semibold text-foreground">{name}</div>
                      <div className="text-sm text-muted-foreground">{role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="h-16 w-16 mx-auto mb-6 opacity-50" />
            <blockquote className="text-2xl font-medium mb-8 italic leading-relaxed">
              {t("testimonialsPage.featured.quote")}
            </blockquote>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <cite className="text-lg opacity-90">
              {t("testimonialsPage.featured.cite")}
            </cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">{t("testimonialsPage.cta.title")}</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("testimonialsPage.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              {t("testimonialsPage.cta.primary")}
            </a>
            <a 
              href="/products" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              {t("testimonialsPage.cta.secondary")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;