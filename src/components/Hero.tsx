import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Fish, Carrot } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="UnityAgro fish farm and vegetable gardens"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Fresh from Nature to Your Table
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Discover the finest fish and vegetables grown with sustainable farming practices. 
            At UnityAgro, we bring nature's best directly to your family.
          </p>

          {/* Feature Icons */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <Fish className="h-6 w-6" />
              <span className="text-lg">Fresh Fish</span>
            </div>
            <div className="flex items-center space-x-2">
              <Carrot className="h-6 w-6" />
              <span className="text-lg">Organic Vegetables</span>
            </div>
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6" />
              <span className="text-lg">Sustainable</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/products">
                Explore Our Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/about">
                Learn About Us
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;