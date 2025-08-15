import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, Users, Award } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Local Restaurant Owner",
      content: "UnityAgro has been our go-to supplier for fresh fish and vegetables for over two years. The quality is consistently outstanding, and our customers always comment on how fresh everything tastes. Their tilapia is the best we've ever served!",
      rating: 5,
      image: "👩‍🍳"
    },
    {
      name: "Mike Rodriguez",
      role: "Family Customer",
      content: "We've been buying from UnityAgro for our family meals, and the difference is incredible. The vegetables are so fresh and flavorful - my kids actually ask for more vegetables! The fish is always perfectly fresh and never has that 'fishy' smell.",
      rating: 5,
      image: "👨‍👩‍👧‍👦"
    },
    {
      name: "Chef Emma Thompson",
      role: "Executive Chef",
      content: "As a chef, I'm extremely particular about ingredient quality. UnityAgro consistently delivers the freshest produce and fish. Their sustainable farming practices align with our restaurant's values, and the taste speaks for itself.",
      rating: 5,
      image: "👩‍🍳"
    },
    {
      name: "David Park",
      role: "Health-Conscious Consumer",
      content: "I switched to UnityAgro after learning about their organic practices. Knowing that their vegetables are grown without harmful chemicals and their fish are raised naturally gives me peace of mind when feeding my family.",
      rating: 5,
      image: "🏃‍♂️"
    },
    {
      name: "Lisa Chen",
      role: "Nutritionist",
      content: "I recommend UnityAgro to all my clients who want the highest quality, most nutritious produce. Their farming methods preserve the natural nutrients, and you can really taste the difference in their vegetables and fish.",
      rating: 5,
      image: "🥗"
    },
    {
      name: "Robert Wilson",
      role: "Local Market Manager",
      content: "We've partnered with UnityAgro for our farmer's market stand, and their products are always the first to sell out. Customers come specifically looking for their tilapia and organic vegetables. Exceptional quality and service!",
      rating: 5,
      image: "🛒"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers", icon: Users },
    { number: "95%", label: "Customer Satisfaction", icon: Star },
    { number: "3+", label: "Years of Excellence", icon: Award },
    { number: "1000+", label: "Five-Star Reviews", icon: Quote }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-primary">Customer Testimonials</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Don't just take our word for it - hear what our satisfied customers have to say about UnityAgro
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
            <h2 className="text-4xl font-bold mb-6 text-primary">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from real customers who trust UnityAgro for their fresh produce needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors relative">
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
                    "{testimonial.content}"
                  </p>
                  
                  {/* Customer Info */}
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{testimonial.image}</span>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="h-16 w-16 mx-auto mb-6 opacity-50" />
            <blockquote className="text-2xl font-medium mb-8 italic leading-relaxed">
              "UnityAgro has completely changed how our family eats. The freshness and quality 
              of their fish and vegetables is unmatched. We've become customers for life!"
            </blockquote>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <cite className="text-lg opacity-90">
              - Jennifer Martinez, Loyal Customer Since 2019
            </cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Join Our Happy Customers</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the UnityAgro difference for yourself. Fresh, sustainable, and delicious - 
            that's our promise to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Start Your Order
            </a>
            <a 
              href="/products" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              View Our Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;