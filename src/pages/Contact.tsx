import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

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
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-primary">Contact Us</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get in touch with UnityAgro for fresh produce, farm tours, or any questions about our sustainable farming practices
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                <CardTitle className="text-lg">Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  123 Farm Road<br />
                  Agricultural Valley<br />
                  State 12345
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Phone className="h-8 w-8 mx-auto mb-2 text-primary" />
                <CardTitle className="text-lg">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Main: +1 (555) 123-4567<br />
                  Farm Tours: +1 (555) 123-4568<br />
                  Orders: +1 (555) 123-4569
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Mail className="h-8 w-8 mx-auto mb-2 text-primary" />
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  info@unityagro.com<br />
                  orders@unityagro.com<br />
                  tours@unityagro.com
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                <CardTitle className="text-lg">Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Mon-Fri: 7:00 AM - 6:00 PM<br />
                  Sat: 8:00 AM - 4:00 PM<br />
                  Sun: 9:00 AM - 3:00 PM
                </p>
              </CardContent>
            </Card>
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
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  </div>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium block mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="text-sm font-medium block mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="text-sm font-medium block mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="text-sm font-medium block mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium block mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your inquiry, order details, or any questions you have..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message
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
                  <CardTitle className="text-2xl">Find Our Farm</CardTitle>
                  <p className="text-muted-foreground">
                    Visit us in person to see our sustainable farming practices firsthand
                  </p>
                </CardHeader>
                <CardContent className="h-full">
                  <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                      <p className="text-muted-foreground">
                        Interactive map would be embedded here<br />
                        showing our farm location at:<br />
                        <strong>123 Farm Road, Agricultural Valley</strong>
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Directions</h4>
                      <p className="text-sm text-muted-foreground">
                        Take Highway 45 North for 12 miles, turn right on Farm Road. 
                        Look for the UnityAgro sign on your left after 2 miles.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-accent/20 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Parking</h4>
                      <p className="text-sm text-muted-foreground">
                        Free parking available on-site. Large vehicles and tour buses welcome.
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
              <h2 className="text-4xl font-bold mb-6 text-primary">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions about our products and services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">How do I place an order?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    You can place orders by calling us at (555) 123-4569, emailing orders@unityagro.com, 
                    or visiting our farm in person. We recommend calling ahead for large orders.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer delivery?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Yes! We offer local delivery within 25 miles of our farm. Delivery fees apply 
                    based on distance and order size. Same-day delivery available for orders placed before 2 PM.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Are your products organic?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Our vegetables are grown using organic practices without synthetic pesticides or fertilizers. 
                    Our fish are raised naturally without hormones or antibiotics in clean, monitored environments.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">How do I book a farm tour?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Farm tours can be booked by calling (555) 123-4568 or emailing tours@unityagro.com. 
                    We offer educational, family, and private tours. Advance booking recommended.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Fresh?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to place your order or schedule a visit to our sustainable farm
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+15551234567">Call Now: (555) 123-4567</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="mailto:info@unityagro.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;