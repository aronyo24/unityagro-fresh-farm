import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Fish, Carrot, Star, Calendar, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const fishProducts = [
    {
      name: "Premium Tilapia",
      description: "Sweet, mild flavor with tender, flaky texture. Perfect for grilling, baking, or frying.",
      features: ["Hormone-free", "Clean water raised", "2-3 lbs average"],
      price: "Market Price",
      availability: "Year-round",
      image: "🐟"
    },
    {
      name: "Fresh Catfish",
      description: "Rich, distinctive flavor ideal for traditional Southern cooking and grilling.",
      features: ["Wild taste", "Sustainably raised", "1-4 lbs average"],
      price: "Market Price", 
      availability: "Year-round",
      image: "🐠"
    }
  ];

  const vegetables = [
    {
      name: "Organic Spinach",
      description: "Fresh, tender leaves packed with nutrients. Perfect for salads, smoothies, and cooking.",
      features: ["Pesticide-free", "Iron-rich", "Baby & mature leaves"],
      season: "Spring, Fall",
      image: "🥬"
    },
    {
      name: "Vine Tomatoes",
      description: "Juicy, flavorful tomatoes grown on the vine for maximum taste and nutrition.",
      features: ["Heirloom varieties", "Vine-ripened", "Multiple sizes"],
      season: "Summer, Fall",
      image: "🍅"
    },
    {
      name: "Crisp Cucumbers",
      description: "Fresh, crunchy cucumbers perfect for salads, pickling, or healthy snacking.",
      features: ["Burpless variety", "Organic grown", "6-8 inches"],
      season: "Summer",
      image: "🥒"
    },
    {
      name: "Fresh Carrots",
      description: "Sweet, tender carrots with vibrant color and excellent crunch.",
      features: ["High beta-carotene", "Various sizes", "Storage variety"],
      season: "Fall, Winter",
      image: "🥕"
    },
    {
      name: "Garden Lettuce",
      description: "Crisp, fresh lettuce varieties including romaine, butterhead, and leaf lettuce.",
      features: ["Multiple varieties", "Hydroponic option", "Year-round"],
      season: "Year-round",
      image: "🥗"
    },
    {
      name: "Bell Peppers",
      description: "Colorful, sweet peppers in red, yellow, and green varieties.",
      features: ["High vitamin C", "Sweet variety", "Organic certified"],
      season: "Summer, Fall",
      image: "🫑"
    }
  ];

  const herbs = [
    {
      name: "Fresh Basil",
      description: "Aromatic sweet basil perfect for cooking, pesto, and garnishes.",
      features: ["Multiple varieties", "Pesticide-free", "High oil content"],
      season: "Spring, Summer",
      image: "🌿"
    },
    {
      name: "Garden Cilantro",
      description: "Fresh cilantro with bold flavor perfect for Mexican and Asian cuisine.",
      features: ["Slow-bolt variety", "Organic grown", "Roots included"],
      season: "Fall, Winter, Spring",
      image: "🌿"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-primary">Our Products</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Fresh, high-quality fish and vegetables harvested daily from our sustainable farm
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
              <h2 className="text-4xl font-bold text-primary">Fresh Fish</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our fish are raised in clean, monitored environments using sustainable aquaculture practices
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
              <h2 className="text-4xl font-bold text-primary">Organic Vegetables</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seasonal vegetables grown using organic practices without harmful chemicals
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
            <h2 className="text-4xl font-bold mb-6 text-primary">Fresh Herbs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Aromatic herbs grown fresh for cooking and garnishing
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
            <h2 className="text-4xl font-bold mb-6">Quality & Freshness Guarantee</h2>
            <p className="text-xl mb-12 opacity-90">
              We stand behind every product that leaves our farm
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Droplets className="h-16 w-16 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-semibold mb-2">Harvest Fresh</h3>
                <p className="opacity-80">
                  Picked at peak ripeness and delivered within 24 hours
                </p>
              </div>
              
              <div className="text-center">
                <Star className="h-16 w-16 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="opacity-80">
                  Only the finest products meet our strict quality standards
                </p>
              </div>
              
              <div className="text-center">
                <Fish className="h-16 w-16 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-semibold mb-2">Sustainable Methods</h3>
                <p className="opacity-80">
                  Environmentally responsible farming practices
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Order Fresh Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;