import React, { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "@/i18n/I18nProvider";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();
  const { t } = useI18n();

  const infoCards = useMemo(
    () => [
      {
        icon: MapPin,
        title: t("contactPage.info.location.title"),
        lines: t("contactPage.info.location.lines").split("\n")
      },
      {
        icon: Phone,
        title: t("contactPage.info.phone.title"),
        lines: t("contactPage.info.phone.lines").split("\n")
      },
      {
        icon: Mail,
        title: t("contactPage.info.email.title"),
        lines: t("contactPage.info.email.lines").split("\n")
      },
      {
        icon: Clock,
        title: t("contactPage.info.hours.title"),
        lines: t("contactPage.info.hours.lines").split("\n")
      }
    ],
    [t]
  );

  const faqItems = useMemo(
    () => [
      {
        question: t("contactPage.faq.items.order.question"),
        answer: t("contactPage.faq.items.order.answer")
      },
      {
        question: t("contactPage.faq.items.delivery.question"),
        answer: t("contactPage.faq.items.delivery.answer")
      },
      {
        question: t("contactPage.faq.items.organic.question"),
        answer: t("contactPage.faq.items.organic.answer")
      },
      {
        question: t("contactPage.faq.items.tours.question"),
        answer: t("contactPage.faq.items.tours.answer")
      }
    ],
    [t]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: t("contactPage.form.successTitle"),
      description: t("contactPage.form.successDescription")
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-primary">{t("contactPage.hero.title")}</h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t("contactPage.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {infoCards.map(({ icon: Icon, title, lines }) => (
              <Card key={title} className="text-center border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-muted-foreground text-sm space-y-1">
                    {lines.map((line, index) => (
                      <div key={`${title}-${index}`}>{line}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    <CardTitle className="text-2xl">{t("contactPage.form.title")}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">
                    {t("contactPage.form.description")}
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium block mb-2">
                          {t("contactPage.form.name")}
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder={t("contactPage.form.namePlaceholder")}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="text-sm font-medium block mb-2">
                          {t("contactPage.form.phone")}
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder={t("contactPage.form.phonePlaceholder")}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="text-sm font-medium block mb-2">
                        {t("contactPage.form.email")}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t("contactPage.form.emailPlaceholder")}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="text-sm font-medium block mb-2">
                        {t("contactPage.form.subject")}
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder={t("contactPage.form.subjectPlaceholder")}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium block mb-2">
                        {t("contactPage.form.message")}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={t("contactPage.form.messagePlaceholder")}
                        className="min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      {t("contactPage.form.submit")}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="animate-slide-up">
              <Card className="border-2 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{t("contactPage.map.title")}</CardTitle>
                  <p className="text-muted-foreground">
                    {t("contactPage.map.description")}
                  </p>
                </CardHeader>
                <CardContent className="h-full">
                  <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                      <p className="text-muted-foreground">
                        {t("contactPage.map.placeholder")
                          .split("\n")
                          .map((line, index, arr) => (
                            <span key={`${line}-${index}`} className="block">
                              {index === arr.length - 1 ? <strong>{line}</strong> : line}
                            </span>
                          ))}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">{t("contactPage.map.directions.title")}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t("contactPage.map.directions.description")}
                      </p>
                    </div>
                    
                    <div className="p-4 bg-accent/20 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">{t("contactPage.map.parking.title")}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t("contactPage.map.parking.description")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-primary">{t("contactPage.faq.title")}</h2>
              <p className="text-lg text-muted-foreground">
                {t("contactPage.faq.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqItems.map((item) => (
                <Card key={item.question} className="border-2">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t("contactPage.cta.title")}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t("contactPage.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+15551234567">{t("contactPage.cta.call")}</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="mailto:info@unityagro.com">{t("contactPage.cta.email")}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;