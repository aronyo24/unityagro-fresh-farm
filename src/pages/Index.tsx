import React from 'react';
import Hero from '@/components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Fish, Carrot, Users, Award, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import vegetablesImage from '@/assets/vegetables.jpg';
import fishImage from '@/assets/fish.jpg';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 text-primary">Welcome to UnityAgro</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              At UnityAgro, we are passionate about providing the freshest fish and vegetables through 
              sustainable farming practices. Our commitment to quality, freshness, and environmental 
              responsibility sets us apart in the agricultural industry.
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 text-center">
                  <Leaf className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">100% Natural</h3>
                  <p className="text-muted-foreground">No artificial chemicals or harmful pesticides in our farming process</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 text-center">
                  <Fish className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Fresh Fish Daily</h3>
                  <p className="text-muted-foreground">Premium tilapia and catfish raised in clean, monitored environments</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 text-center">
                  <Carrot className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Organic Vegetables</h3>
                  <p className="text-muted-foreground">Seasonal produce grown with sustainable and organic methods</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From farm to table, we provide comprehensive agricultural services that ensure quality and sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Fish Farming */}
            <div className="animate-slide-up">
              <img 
                src={fishImage} 
                alt="Fresh fish from UnityAgro"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-primary">Professional Fish Farming</h3>
              <p className="text-muted-foreground mb-6">
                Our state-of-the-art aquaculture facilities ensure the highest quality fish production. 
                We specialize in tilapia and catfish, maintaining optimal water conditions and nutrition 
                for healthy, flavorful fish.
              </p>
              <Button asChild variant="outline">
                <Link to="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>

            {/* Vegetable Cultivation */}
            <div className="animate-slide-up">
              <img 
                src={vegetablesImage} 
                alt="Fresh organic vegetables from UnityAgro"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-primary">Organic Vegetable Cultivation</h3>
              <p className="text-muted-foreground mb-6">
                Our vegetable gardens produce a wide variety of fresh, organic produce year-round. 
                From leafy greens to root vegetables, everything is grown using sustainable practices 
                without harmful chemicals.
              </p>
              <Button asChild variant="outline">
                <Link to="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at UnityAgro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <Heart className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Freshness</h3>
              <p className="text-muted-foreground">
                We harvest and deliver our products at peak freshness to ensure the best taste and nutritional value
              </p>
            </div>

            <div className="text-center animate-fade-in">
              <Leaf className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-muted-foreground">
                Our farming practices protect the environment and ensure a sustainable future for agriculture
              </p>
            </div>

            <div className="text-center animate-fade-in">
              <Award className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-muted-foreground">
                Every product meets our strict quality standards before reaching your table
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Fresh?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust UnityAgro for their fresh fish and vegetable needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
