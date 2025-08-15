import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Heart, Award, Users, Droplets, Sprout } from 'lucide-react';
import teamImage from '@/assets/team.jpg';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-primary">About UnityAgro</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Dedicated to sustainable farming practices and bringing the freshest produce from our farm to your table
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 text-primary">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                UnityAgro was founded in 2018 with a simple mission: to provide the freshest, 
                most nutritious fish and vegetables while maintaining sustainable farming practices 
                that protect our environment for future generations.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                What started as a small family farm has grown into a trusted source of premium 
                produce for our community. We combine traditional farming wisdom with modern 
                techniques to ensure every product meets our highest standards of quality and freshness.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're proud to serve hundreds of families and businesses, providing them 
                with the healthiest, most flavorful fish and vegetables while maintaining our 
                commitment to environmental stewardship.
              </p>
            </div>
            <div className="animate-slide-up">
              <img 
                src={teamImage} 
                alt="UnityAgro team working on the farm"
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
            <h2 className="text-4xl font-bold mb-6 text-primary">Our Mission & Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything we do is guided by our core values and unwavering commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Freshness</h3>
                <p className="text-muted-foreground">
                  We harvest and deliver our products at peak freshness to ensure the best 
                  taste and nutritional value for our customers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <Leaf className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
                <p className="text-muted-foreground">
                  Our farming practices protect the environment and ensure a sustainable 
                  future for agriculture and our planet.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Quality</h3>
                <p className="text-muted-foreground">
                  Every product undergoes strict quality checks to meet our high standards 
                  before reaching your table.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Community</h3>
                <p className="text-muted-foreground">
                  We're committed to supporting our local community and building lasting 
                  relationships with our customers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <Droplets className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Purity</h3>
                <p className="text-muted-foreground">
                  No harmful chemicals or artificial additives - just pure, natural farming 
                  methods for healthier produce.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <Sprout className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously improve our methods using modern technology while 
                  respecting traditional farming practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Farming Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-primary">Sustainable Farming Methods</h2>
              <p className="text-lg text-muted-foreground">
                Our commitment to the environment drives every decision we make on the farm
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 text-primary">Aquaculture Excellence</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Recirculating aquaculture systems for optimal water quality</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Regular water testing and monitoring for fish health</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Natural feed without antibiotics or growth hormones</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Proper fish density to ensure stress-free environment</span>
                  </li>
                </ul>
              </div>

              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 text-primary">Organic Cultivation</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Crop rotation to maintain soil health and fertility</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Composting and natural fertilizers only</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Integrated pest management without harmful chemicals</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Water conservation through drip irrigation systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Meet Our Dedicated Team</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our experienced farmers and aquaculture specialists work tirelessly to bring you 
            the freshest produce while maintaining the highest standards of quality and sustainability.
          </p>
          <p className="text-lg opacity-80">
            With over 50 years of combined experience in agriculture and aquaculture, 
            our team is passionate about what we do and committed to excellence in every harvest.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;