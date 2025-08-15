import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Fish, Leaf, Eye, CheckCircle, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import fishImage from '@/assets/fish.jpg';
import vegetablesImage from '@/assets/vegetables.jpg';

const Services = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-primary">Our Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              From farm to table, we provide comprehensive agricultural services that ensure quality and sustainability
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
                <h2 className="text-4xl font-bold text-primary">Fish Farming</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our state-of-the-art aquaculture facilities ensure the highest quality fish production. 
                We specialize in sustainable fish farming practices that prioritize both fish welfare 
                and environmental responsibility.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Fish Varieties</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Premium Tilapia - Sweet, mild flavor with tender texture</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Fresh Catfish - Rich flavor, perfect for grilling and frying</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Our Process</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Clean, monitored water systems</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Natural, hormone-free nutrition</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Regular health and quality checks</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Sustainable harvesting practices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="animate-slide-up">
              <img 
                src={fishImage} 
                alt="Fresh fish from UnityAgro aquaculture"
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
                alt="Fresh organic vegetables from UnityAgro"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="animate-fade-in order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <Leaf className="h-12 w-12 text-primary mr-4" />
                <h2 className="text-4xl font-bold text-primary">Vegetable Cultivation</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our vegetable gardens produce a wide variety of fresh, organic produce year-round. 
                We use sustainable farming practices that protect soil health and ensure the most 
                nutritious vegetables possible.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Seasonal Produce</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Leafy Greens - Spinach, lettuce, kale, and chard</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Root Vegetables - Carrots, radishes, and beets</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Vine Crops - Tomatoes, cucumbers, and peppers</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Herbs - Basil, cilantro, parsley, and mint</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Organic Practices</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>No synthetic pesticides or fertilizers</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Composting and natural soil enrichment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Crop rotation for soil health</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Water-efficient irrigation systems</span>
                    </li>
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
              <h2 className="text-4xl font-bold text-primary">Farm Tours</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Experience our farm firsthand and see where your food comes from. Our guided tours 
              offer an educational and engaging look at sustainable farming practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Educational Tours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Perfect for schools and groups. Learn about sustainable farming, aquaculture, 
                  and the journey from farm to table.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Interactive demonstrations</li>
                  <li>• Q&A with our farmers</li>
                  <li>• Educational materials included</li>
                  <li>• 1.5 hour duration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Eye className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Family Tours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A fun, family-friendly experience where kids can see how fish are raised 
                  and vegetables are grown.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Kid-friendly activities</li>
                  <li>• Fresh produce samples</li>
                  <li>• Photo opportunities</li>
                  <li>• 1 hour duration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Private Tours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Customized tours for businesses, organizations, or special groups with 
                  tailored content and timing.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Customized itinerary</li>
                  <li>• Flexible scheduling</li>
                  <li>• Detailed technical information</li>
                  <li>• Duration varies</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/contact">Book a Tour</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Quality Promise</h2>
            <p className="text-xl mb-8 opacity-90">
              Every product that leaves our farm meets our strict quality standards
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <CheckCircle className="h-16 w-16 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-semibold mb-2">Regular Testing</h3>
                <p className="opacity-80">
                  Water quality, soil health, and product safety are monitored continuously
                </p>
              </div>
              
              <div className="text-center">
                <CheckCircle className="h-16 w-16 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-semibold mb-2">Freshness Guarantee</h3>
                <p className="opacity-80">
                  Products are harvested at peak quality and delivered fresh to maintain optimal taste
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;