export type Language = "en" | "bn";

type TranslationValue = string | { [key: string]: TranslationValue };

type TranslationTree = { [key: string]: TranslationValue };

export const translations: Record<Language, TranslationTree> = {
  en: {
    common: {
      brandName: "UnityAgro",
      tagline: "Fresh from Nature to Your Table",
      primaryCta: "Get In Touch",
      secondaryCta: "View Products",
      learnMore: "Learn More",
      language: {
        en: "English",
        bn: "Bangla",
        switchLabel: "Language"
      }
    },
    navigation: {
      home: "Home",
      about: "About",
      services: "Services",
      products: "Products",
      testimonials: "Testimonials",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu"
    },
    hero: {
      title: "Fresh from Nature to Your Table",
      description: "Discover the finest fish and vegetables grown with sustainable farming practices. At UnityAgro, we bring nature's best directly to your family.",
      features: {
        freshFish: "Fresh Fish",
        organicVegetables: "Organic Vegetables",
        sustainable: "Sustainable"
      },
      primaryCta: "Explore Our Products",
      secondaryCta: "Learn About Us",
      alt: "UnityAgro fish farm and vegetable gardens"
    },
    home: {
      intro: {
        title: "Welcome to UnityAgro",
        description: "At UnityAgro, we are passionate about providing the freshest fish and vegetables through sustainable farming practices. Our commitment to quality, freshness, and environmental responsibility sets us apart in the agricultural industry.",
        features: {
          natural: {
            title: "100% Natural",
            description: "No artificial chemicals or harmful pesticides in our farming process"
          },
          fish: {
            title: "Fresh Fish Daily",
            description: "Premium tilapia and catfish raised in clean, monitored environments"
          },
          vegetables: {
            title: "Organic Vegetables",
            description: "Seasonal produce grown with sustainable and organic methods"
          }
        }
      },
      servicesPreview: {
        title: "Our Services",
        description: "From farm to table, we provide comprehensive agricultural services that ensure quality and sustainability",
        fish: {
          title: "Professional Fish Farming",
          description: "Our state-of-the-art aquaculture facilities ensure the highest quality fish production. We specialize in tilapia and catfish, maintaining optimal water conditions and nutrition for healthy, flavorful fish.",
          cta: "Learn More"
        },
        vegetables: {
          title: "Organic Vegetable Cultivation",
          description: "Our vegetable gardens produce a wide variety of fresh, organic produce year-round. From leafy greens to root vegetables, everything is grown using sustainable practices without harmful chemicals.",
          cta: "Learn More"
        },
        fishAlt: "Fresh fish from UnityAgro",
        vegetablesAlt: "Fresh organic vegetables from UnityAgro"
      },
      values: {
        title: "Our Values",
        description: "These core principles guide everything we do at UnityAgro",
        freshness: {
          title: "Freshness",
          description: "We harvest and deliver our products at peak freshness to ensure the best taste and nutritional value"
        },
        sustainability: {
          title: "Sustainability",
          description: "Our farming practices protect the environment and ensure a sustainable future for agriculture"
        },
        quality: {
          title: "Quality",
          description: "Every product meets our strict quality standards before reaching your table"
        }
      },
      cta: {
        title: "Ready to Experience Fresh?",
        description: "Join hundreds of satisfied customers who trust UnityAgro for their fresh fish and vegetable needs",
        primary: "Get In Touch",
        secondary: "View Products"
      }
    },
    footer: {
      description: "Fresh from Nature to Your Table. Sustainable fish farming and organic vegetable cultivation for a healthier tomorrow.",
      quickLinks: "Quick Links",
      ourServices: "Our Services",
      contactInfo: "Contact Info",
      services: {
        fish: "Fish Farming",
        vegetables: "Vegetable Cultivation",
        tours: "Farm Tours",
        produce: "Organic Produce",
        sustainable: "Sustainable Agriculture"
      },
      address: "123 Farm Road, Agricultural Valley, State 12345",
      phone: "+1 (555) 123-4567",
      email: "info@unityagro.com",
      copyright: "© {{year}} UnityAgro. All rights reserved. | Built with care for sustainable agriculture.",
      socialAlt: {
        facebook: "UnityAgro on Facebook",
        instagram: "UnityAgro on Instagram",
        youtube: "UnityAgro on YouTube"
      }
    },
    about: {
      hero: {
        title: "About UnityAgro",
        description: "Dedicated to sustainable farming practices and bringing the freshest produce from our farm to your table"
      },
      story: {
        title: "Our Story",
        paragraph1: "UnityAgro was founded in 2018 with a simple mission: to provide the freshest, most nutritious fish and vegetables while maintaining sustainable farming practices that protect our environment for future generations.",
        paragraph2: "What started as a small family farm has grown into a trusted source of premium produce for our community. We combine traditional farming wisdom with modern techniques to ensure every product meets our highest standards of quality and freshness.",
        paragraph3: "Today, we're proud to serve hundreds of families and businesses, providing them with the healthiest, most flavorful fish and vegetables while maintaining our commitment to environmental stewardship.",
        imageAlt: "UnityAgro team working on the farm"
      },
      mission: {
        title: "Our Mission & Values",
        description: "Everything we do is guided by our core values and unwavering commitment to excellence",
        cards: {
          freshness: {
            title: "Freshness",
            description: "We harvest and deliver our products at peak freshness to ensure the best taste and nutritional value for our customers."
          },
          sustainability: {
            title: "Sustainability",
            description: "Our farming practices protect the environment and ensure a sustainable future for agriculture and our planet."
          },
          quality: {
            title: "Quality",
            description: "Every product undergoes strict quality checks to meet our high standards before reaching your table."
          },
          community: {
            title: "Community",
            description: "We're committed to supporting our local community and building lasting relationships with our customers."
          },
          purity: {
            title: "Purity",
            description: "No harmful chemicals or artificial additives - just pure, natural farming methods for healthier produce."
          },
          innovation: {
            title: "Innovation",
            description: "We continuously improve our methods using modern technology while respecting traditional farming practices."
          }
        }
      },
      methods: {
        title: "Sustainable Farming Methods",
        description: "Our commitment to the environment drives every decision we make on the farm",
        aquaculture: {
          title: "Aquaculture Excellence",
          items: {
            recirculating: "Recirculating aquaculture systems for optimal water quality",
            testing: "Regular water testing and monitoring for fish health",
            feed: "Natural feed without antibiotics or growth hormones",
            density: "Proper fish density to ensure stress-free environment"
          }
        },
        cultivation: {
          title: "Organic Cultivation",
          items: {
            rotation: "Crop rotation to maintain soil health and fertility",
            compost: "Composting and natural fertilizers only",
            pest: "Integrated pest management without harmful chemicals",
            irrigation: "Water conservation through drip irrigation systems"
          }
        }
      },
      team: {
        title: "Meet Our Dedicated Team",
        description1: "Our experienced farmers and aquaculture specialists work tirelessly to bring you the freshest produce while maintaining the highest standards of quality and sustainability.",
        description2: "With over 50 years of combined experience in agriculture and aquaculture, our team is passionate about what we do and committed to excellence in every harvest."
      }
    },
    servicesPage: {
      hero: {
        title: "Our Services",
        description: "From farm to table, we provide comprehensive agricultural services that ensure quality and sustainability"
      },
      fish: {
        title: "Fish Farming",
        description: "Our state-of-the-art aquaculture facilities ensure the highest quality fish production. We specialize in sustainable fish farming practices that prioritize both fish welfare and environmental responsibility.",
        varietiesTitle: "Fish Varieties",
        varieties: {
          tilapia: "Premium Tilapia - Sweet, mild flavor with tender texture",
          catfish: "Fresh Catfish - Rich flavor, perfect for grilling and frying"
        },
        processTitle: "Our Process",
        process: {
          water: "Clean, monitored water systems",
          nutrition: "Natural, hormone-free nutrition",
          checks: "Regular health and quality checks",
          harvesting: "Sustainable harvesting practices"
        },
        imageAlt: "Fresh fish from UnityAgro aquaculture"
      },
      vegetables: {
        title: "Vegetable Cultivation",
        description: "Our vegetable gardens produce a wide variety of fresh, organic produce year-round. We use sustainable farming practices that protect soil health and ensure the most nutritious vegetables possible.",
        produceTitle: "Seasonal Produce",
        produce: {
          greens: "Leafy Greens - Spinach, lettuce, kale, and chard",
          roots: "Root Vegetables - Carrots, radishes, and beets",
          vines: "Vine Crops - Tomatoes, cucumbers, and peppers",
          herbs: "Herbs - Basil, cilantro, parsley, and mint"
        },
        practicesTitle: "Organic Practices",
        practices: {
          pesticides: "No synthetic pesticides or fertilizers",
          compost: "Composting and natural soil enrichment",
          rotation: "Crop rotation for soil health",
          irrigation: "Water-efficient irrigation systems"
        },
        imageAlt: "Fresh organic vegetables from UnityAgro"
      },
      tours: {
        title: "Farm Tours",
        description: "Experience our farm firsthand and see where your food comes from. Our guided tours offer an educational and engaging look at sustainable farming practices.",
        educational: {
          title: "Educational Tours",
          description: "Perfect for schools and groups. Learn about sustainable farming, aquaculture, and the journey from farm to table.",
          bullets: {
            demos: "Interactive demonstrations",
            qa: "Q&A with our farmers",
            materials: "Educational materials included",
            duration: "1.5 hour duration"
          }
        },
        family: {
          title: "Family Tours",
          description: "A fun, family-friendly experience where kids can see how fish are raised and vegetables are grown.",
          bullets: {
            activities: "Kid-friendly activities",
            samples: "Fresh produce samples",
            photos: "Photo opportunities",
            duration: "1 hour duration"
          }
        },
        private: {
          title: "Private Tours",
          description: "Customized tours for businesses, organizations, or special groups with tailored content and timing.",
          bullets: {
            itinerary: "Customized itinerary",
            scheduling: "Flexible scheduling",
            info: "Detailed technical information",
            duration: "Duration varies"
          }
        },
        cta: "Book a Tour"
      },
      quality: {
        title: "Our Quality Promise",
        description: "Every product that leaves our farm meets our strict quality standards",
        testing: {
          title: "Regular Testing",
          description: "Water quality, soil health, and product safety are monitored continuously"
        },
        freshness: {
          title: "Freshness Guarantee",
          description: "Products are harvested at peak quality and delivered fresh to maintain optimal taste"
        }
      }
    },
    productsPage: {
      hero: {
        title: "Our Products",
        description: "Fresh, high-quality fish and vegetables harvested daily from our sustainable farm"
      },
      fish: {
        title: "Fresh Fish",
        description: "Our fish are raised in clean, monitored environments using sustainable aquaculture practices",
        items: {
          tilapia: {
            name: "Premium Tilapia",
            description: "Sweet, mild flavor with tender, flaky texture. Perfect for grilling, baking, or frying.",
            features: {
              hormoneFree: "Hormone-free",
              cleanWater: "Clean water raised",
              weight: "2-3 lbs average"
            },
            price: "Market Price",
            availability: "Year-round"
          },
          catfish: {
            name: "Fresh Catfish",
            description: "Rich, distinctive flavor ideal for traditional Southern cooking and grilling.",
            features: {
              taste: "Wild taste",
              sustainable: "Sustainably raised",
              weight: "1-4 lbs average"
            },
            price: "Market Price",
            availability: "Year-round"
          }
        }
      },
      vegetables: {
        title: "Organic Vegetables",
        description: "Seasonal vegetables grown using organic practices without harmful chemicals",
        items: {
          spinach: {
            name: "Organic Spinach",
            description: "Fresh, tender leaves packed with nutrients. Perfect for salads, smoothies, and cooking.",
            features: {
              pesticideFree: "Pesticide-free",
              iron: "Iron-rich",
              leaves: "Baby & mature leaves"
            },
            season: "Spring, Fall"
          },
          tomatoes: {
            name: "Vine Tomatoes",
            description: "Juicy, flavorful tomatoes grown on the vine for maximum taste and nutrition.",
            features: {
              heirloom: "Heirloom varieties",
              ripened: "Vine-ripened",
              sizes: "Multiple sizes"
            },
            season: "Summer, Fall"
          },
          cucumbers: {
            name: "Crisp Cucumbers",
            description: "Fresh, crunchy cucumbers perfect for salads, pickling, or healthy snacking.",
            features: {
              burpless: "Burpless variety",
              organic: "Organic grown",
              size: "6-8 inches"
            },
            season: "Summer"
          },
          carrots: {
            name: "Fresh Carrots",
            description: "Sweet, tender carrots with vibrant color and excellent crunch.",
            features: {
              beta: "High beta-carotene",
              sizes: "Various sizes",
              storage: "Storage variety"
            },
            season: "Fall, Winter"
          },
          lettuce: {
            name: "Garden Lettuce",
            description: "Crisp, fresh lettuce varieties including romaine, butterhead, and leaf lettuce.",
            features: {
              varieties: "Multiple varieties",
              hydroponic: "Hydroponic option",
              yearRound: "Year-round"
            },
            season: "Year-round"
          },
          peppers: {
            name: "Bell Peppers",
            description: "Colorful, sweet peppers in red, yellow, and green varieties.",
            features: {
              vitaminC: "High vitamin C",
              sweet: "Sweet variety",
              certified: "Organic certified"
            },
            season: "Summer, Fall"
          }
        }
      },
      herbs: {
        title: "Fresh Herbs",
        description: "Aromatic herbs grown fresh for cooking and garnishing",
        items: {
          basil: {
            name: "Fresh Basil",
            description: "Aromatic sweet basil perfect for cooking, pesto, and garnishes.",
            features: {
              varieties: "Multiple varieties",
              pesticideFree: "Pesticide-free",
              oil: "High oil content"
            },
            season: "Spring, Summer"
          },
          cilantro: {
            name: "Garden Cilantro",
            description: "Fresh cilantro with bold flavor perfect for Mexican and Asian cuisine.",
            features: {
              slowBolt: "Slow-bolt variety",
              organic: "Organic grown",
              roots: "Roots included"
            },
            season: "Fall, Winter, Spring"
          }
        }
      },
      quality: {
        title: "Quality & Freshness Guarantee",
        description: "We stand behind every product that leaves our farm",
        harvest: {
          title: "Harvest Fresh",
          description: "Picked at peak ripeness and delivered within 24 hours"
        },
        premium: {
          title: "Premium Quality",
          description: "Only the finest products meet our strict quality standards"
        },
        sustainable: {
          title: "Sustainable Methods",
          description: "Environmentally responsible farming practices"
        },
        cta: "Order Fresh Products"
      }
    },
    testimonialsPage: {
      hero: {
        title: "Customer Testimonials",
        description: "Don't just take our word for it - hear what our satisfied customers have to say about UnityAgro"
      },
      stats: {
        happyCustomers: "Happy Customers",
        satisfaction: "Customer Satisfaction",
        years: "Years of Excellence",
        reviews: "Five-Star Reviews"
      },
      grid: {
        title: "What Our Customers Say",
        description: "Real stories from real customers who trust UnityAgro for their fresh produce needs"
      },
      featured: {
        quote: "\"UnityAgro has completely changed how our family eats. The freshness and quality of their fish and vegetables is unmatched. We've become customers for life!\"",
        cite: "- Jennifer Martinez, Loyal Customer Since 2019"
      },
      cta: {
        title: "Join Our Happy Customers",
        description: "Experience the UnityAgro difference for yourself. Fresh, sustainable, and delicious - that's our promise to you.",
        primary: "Start Your Order",
        secondary: "View Our Products"
      },
      testimonials: {
        sarah: {
          name: "Sarah Johnson",
          role: "Local Restaurant Owner",
          content: "UnityAgro has been our go-to supplier for fresh fish and vegetables for over two years. The quality is consistently outstanding, and our customers always comment on how fresh everything tastes. Their tilapia is the best we've ever served!"
        },
        mike: {
          name: "Mike Rodriguez",
          role: "Family Customer",
          content: "We've been buying from UnityAgro for our family meals, and the difference is incredible. The vegetables are so fresh and flavorful - my kids actually ask for more vegetables! The fish is always perfectly fresh and never has that 'fishy' smell."
        },
        emma: {
          name: "Chef Emma Thompson",
          role: "Executive Chef",
          content: "As a chef, I'm extremely particular about ingredient quality. UnityAgro consistently delivers the freshest produce and fish. Their sustainable farming practices align with our restaurant's values, and the taste speaks for itself."
        },
        david: {
          name: "David Park",
          role: "Health-Conscious Consumer",
          content: "I switched to UnityAgro after learning about their organic practices. Knowing that their vegetables are grown without harmful chemicals and their fish are raised naturally gives me peace of mind when feeding my family."
        },
        lisa: {
          name: "Lisa Chen",
          role: "Nutritionist",
          content: "I recommend UnityAgro to all my clients who want the highest quality, most nutritious produce. Their farming methods preserve the natural nutrients, and you can really taste the difference in their vegetables and fish."
        },
        robert: {
          name: "Robert Wilson",
          role: "Local Market Manager",
          content: "We've partnered with UnityAgro for our farmer's market stand, and their products are always the first to sell out. Customers come specifically looking for their tilapia and organic vegetables. Exceptional quality and service!"
        }
      }
    },
    contactPage: {
      hero: {
        title: "Contact Us",
        description: "Get in touch with UnityAgro for fresh produce, farm tours, or any questions about our sustainable farming practices"
      },
      info: {
        location: {
          title: "Our Location",
          lines: "123 Farm Road\nAgricultural Valley\nState 12345"
        },
        phone: {
          title: "Phone",
          lines: "Main: +1 (555) 123-4567\nFarm Tours: +1 (555) 123-4568\nOrders: +1 (555) 123-4569"
        },
        email: {
          title: "Email",
          lines: "info@unityagro.com\norders@unityagro.com\ntours@unityagro.com"
        },
        hours: {
          title: "Hours",
          lines: "Mon-Fri: 7:00 AM - 6:00 PM\nSat: 8:00 AM - 4:00 PM\nSun: 9:00 AM - 3:00 PM"
        }
      },
      form: {
        title: "Send Us a Message",
        description: "Fill out the form below and we'll get back to you within 24 hours",
        name: "Full Name *",
        namePlaceholder: "Your full name",
        phone: "Phone Number",
        phonePlaceholder: "(555) 123-4567",
        email: "Email Address *",
        emailPlaceholder: "your@email.com",
        subject: "Subject *",
        subjectPlaceholder: "What is this regarding?",
        message: "Message *",
        messagePlaceholder: "Tell us about your inquiry, order details, or any questions you have...",
        submit: "Send Message",
        successTitle: "Message Sent!",
        successDescription: "Thank you for contacting us. We'll get back to you within 24 hours."
      },
      map: {
        title: "Find Our Farm",
        description: "Visit us in person to see our sustainable farming practices firsthand",
        placeholder: "Interactive map would be embedded here\nshowing our farm location at:\n123 Farm Road, Agricultural Valley",
        directions: {
          title: "Directions",
          description: "Take Highway 45 North for 12 miles, turn right on Farm Road. Look for the UnityAgro sign on your left after 2 miles."
        },
        parking: {
          title: "Parking",
          description: "Free parking available on-site. Large vehicles and tour buses welcome."
        }
      },
      faq: {
        title: "Frequently Asked Questions",
        description: "Quick answers to common questions about our products and services",
        items: {
          order: {
            question: "How do I place an order?",
            answer: "You can place orders by calling us at (555) 123-4569, emailing orders@unityagro.com, or visiting our farm in person. We recommend calling ahead for large orders."
          },
          delivery: {
            question: "Do you offer delivery?",
            answer: "Yes! We offer local delivery within 25 miles of our farm. Delivery fees apply based on distance and order size. Same-day delivery available for orders placed before 2 PM."
          },
          organic: {
            question: "Are your products organic?",
            answer: "Our vegetables are grown using organic practices without synthetic pesticides or fertilizers. Our fish are raised naturally without hormones or antibiotics in clean, monitored environments."
          },
          tours: {
            question: "How do I book a farm tour?",
            answer: "Farm tours can be booked by calling (555) 123-4568 or emailing tours@unityagro.com. We offer educational, family, and private tours. Advance booking recommended."
          }
        }
      },
      cta: {
        title: "Ready to Experience Fresh?",
        description: "Contact us today to place your order or schedule a visit to our sustainable farm",
        call: "Call Now: (555) 123-4567",
        email: "Email Us"
      }
    },
    notFound: {
      title: "404",
      description: "Oops! Page not found",
      cta: "Return to Home"
    }
  },
  bn: {
    common: {
      brandName: "ইউনিটি অ্যাগ্রো",
      tagline: "প্রকৃতির কাছ থেকে সরাসরি আপনার টেবিলে",
      primaryCta: "যোগাযোগ করুন",
      secondaryCta: "পণ্য দেখুন",
      learnMore: "আরও জানুন",
      language: {
        en: "ইংরেজি",
        bn: "বাংলা",
        switchLabel: "ভাষা"
      }
    },
    navigation: {
      home: "হোম",
      about: "আমাদের সম্পর্কে",
      services: "সেবা",
      products: "পণ্য",
      testimonials: "প্রশংসাপত্র",
      contact: "যোগাযোগ",
      openMenu: "মেনু খুলুন",
      closeMenu: "মেনু বন্ধ করুন"
    },
    hero: {
      title: "প্রকৃতির কাছ থেকে সরাসরি আপনার টেবিলে",
      description: "টেকসই কৃষি পদ্ধতিতে উৎপাদিত সর্বোত্তম মাছ ও সবজি আবিষ্কার করুন। ইউনিটি অ্যাগ্রো আপনাদের পরিবারে প্রকৃতির সেরা উপহার পৌঁছে দেয়।",
      features: {
        freshFish: "তাজা মাছ",
        organicVegetables: "জৈব সবজি",
        sustainable: "টেকসই"
      },
      primaryCta: "আমাদের পণ্য দেখুন",
      secondaryCta: "আমাদের সম্পর্কে জানুন",
      alt: "ইউনিটি অ্যাগ্রোর মাছের খামার ও সবজির বাগানের ছবি"
    },
    home: {
      intro: {
        title: "ইউনিটি অ্যাগ্রোতে আপনাকে স্বাগতম",
        description: "ইউনিটি অ্যাগ্রো টেকসই কৃষি পদ্ধতির মাধ্যমে সবচেয়ে তাজা মাছ ও সবজি সরবরাহে অঙ্গীকারবদ্ধ। গুণগত মান, তাজা উপকরণ ও পরিবেশের দায়িত্বশীলতার প্রতি আমাদের প্রতিশ্রুতি আমাদের আলাদা পরিচয় তৈরি করেছে।",
        features: {
          natural: {
            title: "১০০% প্রাকৃতিক",
            description: "আমাদের কৃষি পদ্ধতিতে কোনো কৃত্রিম রাসায়নিক বা ক্ষতিকর কীটনাশক নেই"
          },
          fish: {
            title: "প্রতিদিন তাজা মাছ",
            description: "পরিষ্কার ও পর্যবেক্ষণ করা পরিবেশে লালিত প্রিমিয়াম তেলাপিয়া ও ক্যাটফিশ"
          },
          vegetables: {
            title: "জৈব সবজি",
            description: "টেকসই ও জৈব পদ্ধতিতে উৎপাদিত মৌসুমি সবজি"
          }
        }
      },
      servicesPreview: {
        title: "আমাদের সেবা",
        description: "খামার থেকে টেবিল পর্যন্ত, আমরা এমন কৃষি সেবা দিই যা গুণমান ও টেকসইত্ব নিশ্চিত করে",
        fish: {
          title: "পেশাদার মাছ চাষ",
          description: "আমাদের আধুনিক জলজ চাষ ব্যবস্থা সর্বোচ্চ মানের মাছ উৎপাদন নিশ্চিত করে। আমরা তেলাপিয়া ও ক্যাটফিশে দক্ষ, যেখানে সুস্থ ও স্বাদযুক্ত মাছের জন্য পানির অবস্থা ও পুষ্টি নিয়মিত নিয়ন্ত্রণে থাকে।",
          cta: "আরও জানুন"
        },
        vegetables: {
          title: "জৈব সবজি চাষ",
          description: "আমাদের সবজির বাগান সারা বছর জুড়ে নানা ধরনের তাজা ও জৈব সবজি উৎপাদন করে। পাতাওয়ালা সবজি থেকে শুরু করে মূলজাত সবজি—সবকিছুই ক্ষতিকর রাসায়নিক ছাড়া টেকসই পদ্ধতিতে উৎপাদিত হয়।",
          cta: "আরও জানুন"
        },
        fishAlt: "ইউনিটি অ্যাগ্রোর তাজা মাছ",
        vegetablesAlt: "ইউনিটি অ্যাগ্রোর জৈব সবজি"
      },
      values: {
        title: "আমাদের মূল্যবোধ",
        description: "ইউনিটি অ্যাগ্রোতে আমরা যেসব নীতিতে বিশ্বাস করি",
        freshness: {
          title: "তাজা",
          description: "সেরা স্বাদ ও পুষ্টি নিশ্চিত করতে আমরা সর্বোচ্চ তাজা অবস্থায় পণ্য সংগ্রহ ও সরবরাহ করি"
        },
        sustainability: {
          title: "টেকসই",
          description: "ভবিষ্যতের কৃষি রক্ষায় আমাদের কৃষি পদ্ধতি পরিবেশকে সুরক্ষা দেয়"
        },
        quality: {
          title: "গুণমান",
          description: "আপনার টেবিলে পৌঁছানোর আগে প্রতিটি পণ্য আমাদের কঠোর মান নিয়ন্ত্রণে উত্তীর্ণ হয়"
        }
      },
      cta: {
        title: "তাজা স্বাদের জন্য প্রস্তুত?",
        description: "শত শত সন্তুষ্ট গ্রাহকের সাথে যুক্ত হোন যারা ইউনিটি অ্যাগ্রোর তাজা মাছ ও সবজিতে ভরসা করেন",
        primary: "যোগাযোগ করুন",
        secondary: "পণ্য দেখুন"
      }
    },
    footer: {
      description: "প্রকৃতির কাছ থেকে আপনার টেবিলে। টেকসই মাছ চাষ ও জৈব সবজি উৎপাদনের মাধ্যমে আমরা গড়ছি সুস্থ ভবিষ্যৎ।",
      quickLinks: "দ্রুত লিঙ্ক",
      ourServices: "আমাদের সেবা",
      contactInfo: "যোগাযোগের তথ্য",
      services: {
        fish: "মাছ চাষ",
        vegetables: "সবজি চাষ",
        tours: "খামার ভ্রমণ",
        produce: "জৈব পণ্য",
        sustainable: "টেকসই কৃষি"
      },
      address: "১২৩ ফার্ম রোড, এগ্রিকালচারাল ভ্যালি, স্টেট ১২৩৪৫",
      phone: "+১ (৫৫৫) ১২৩-৪৫৬৭",
      email: "info@unityagro.com",
      copyright: "© {{year}} ইউনিটি অ্যাগ্রো। সর্বস্বত্ব সংরক্ষিত। | টেকসই কৃষির জন্য ভালোবাসা দিয়ে নির্মিত।",
      socialAlt: {
        facebook: "ফেসবুকে ইউনিটি অ্যাগ্রো",
        instagram: "ইনস্টাগ্রামে ইউনিটি অ্যাগ্রো",
        youtube: "ইউটিউবে ইউনিটি অ্যাগ্রো"
      }
    },
    about: {
      hero: {
        title: "ইউনিটি অ্যাগ্রো সম্পর্কে",
        description: "টেকসই কৃষিতে নিবেদিত ও খামার থেকে সরাসরি আপনার টেবিলে তাজা পণ্য পৌঁছে দিই"
      },
      story: {
        title: "আমাদের গল্প",
        paragraph1: "ইউনিটি অ্যাগ্রো ২০১৮ সালে যাত্রা শুরু করে একটি সহজ লক্ষ্য নিয়ে: পরিবেশ রক্ষা করে ভবিষ্যৎ প্রজন্মের জন্য নিশ্চিত রেখে সবচেয়ে তাজা ও পুষ্টিকর মাছ ও সবজি সরবরাহ করা।",
        paragraph2: "একটি ছোট পারিবারিক খামার দিয়ে শুরু হলেও আজ আমরা আমাদের সম্প্রদায়ের বিশ্বস্ত প্রিমিয়াম পণ্যের উৎস। আধুনিক প্রযুক্তি ও ঐতিহ্যগত কৃষি জ্ঞান একত্র করে আমরা প্রতিটি পণ্যের গুণমান নিশ্চিত করি।",
        paragraph3: "আজ আমরা গর্বের সাথে শত শত পরিবার ও ব্যবসায়িক প্রতিষ্ঠানকে সেবা দিচ্ছি। সুস্বাদু ও স্বাস্থ্যকর মাছ ও সবজি সরবরাহের পাশাপাশি পরিবেশ রক্ষায় আমাদের অটল প্রতিশ্রুতি বজায় রেখেছি।",
        imageAlt: "ইউনিটি অ্যাগ্রোর দলের খামারে কাজ করার ছবি"
      },
      mission: {
        title: "আমাদের লক্ষ্য ও মূল্যবোধ",
        description: "গুণগত উৎকর্ষে অটল প্রত্যয়ে আমাদের প্রতিটি কাজ পরিচালিত হয়",
        cards: {
          freshness: {
            title: "তাজা",
            description: "গ্রাহকদের সেরা স্বাদ ও পুষ্টি দিতে আমরা সবসময় সর্বোচ্চ তাজা অবস্থায় পণ্য সরবরাহ করি।"
          },
          sustainability: {
            title: "টেকসই",
            description: "আমাদের কৃষি পদ্ধতি পরিবেশকে সুরক্ষা দেয় এবং ভবিষ্যতের কৃষিকে নিরাপদ করে।"
          },
          quality: {
            title: "গুণমান",
            description: "আপনার টেবিলে পৌঁছানোর আগে প্রতিটি পণ্য কঠোর মান পরীক্ষায় উত্তীর্ণ হয়।"
          },
          community: {
            title: "সম্প্রদায়",
            description: "স্থানীয় সম্প্রদায়কে সমর্থন করা ও গ্রাহকদের সাথে দীর্ঘস্থায়ী সম্পর্ক গড়ে তোলা আমাদের অঙ্গীকার।"
          },
          purity: {
            title: "বিশুদ্ধতা",
            description: "কোনো ক্ষতিকর রাসায়নিক বা কৃত্রিম উপাদান নয়—শুধু বিশুদ্ধ, প্রাকৃতিক কৃষি পদ্ধতি।"
          },
          innovation: {
            title: "নবায়ন",
            description: "আমরা আধুনিক প্রযুক্তি ব্যবহার করে পদ্ধতি উন্নত করি, তবে ঐতিহ্যকে শ্রদ্ধা করি।"
          }
        }
      },
      methods: {
        title: "টেকসই কৃষি পদ্ধতি",
        description: "পরিবেশের প্রতি দায়বদ্ধতা আমাদের প্রতিটি সিদ্ধান্তকে পরিচালিত করে",
        aquaculture: {
          title: "উন্নত জলজ চাষ",
          items: {
            recirculating: "স্বয়ংসম্পূর্ণ জল সঞ্চালন ব্যবস্থা যাতে পানির গুণমান সর্বোচ্চ থাকে",
            testing: "মাছের স্বাস্থ্য নিশ্চিত করতে নিয়মিত পানি পরীক্ষা ও পর্যবেক্ষণ",
            feed: "অ্যান্টিবায়োটিক ও গ্রোথ হরমোনমুক্ত প্রাকৃতিক খাদ্য",
            density: "মাছের জন্য উপযুক্ত ঘনত্ব যাতে চাপমুক্ত পরিবেশ বজায় থাকে"
          }
        },
        cultivation: {
          title: "জৈব চাষাবাদ",
          items: {
            rotation: "মাটির স্বাস্থ্য ও উর্বরতা বজায় রাখতে ফসল পরিবর্তন",
            compost: "শুধুমাত্র কম্পোস্ট ও প্রাকৃতিক সার ব্যবহার",
            pest: "ক্ষতিকর রাসায়নিক ছাড়া সমন্বিত পোকা নিয়ন্ত্রণ ব্যবস্থা",
            irrigation: "ড্রিপ সেচের মাধ্যমে পানি সাশ্রয়"
          }
        }
      },
      team: {
        title: "আমাদের নিবেদিত দল",
        description1: "অভিজ্ঞ কৃষক ও জলজ চাষ বিশেষজ্ঞরা সর্বোচ্চ মান বজায় রেখে আপনাকে তাজা পণ্য পৌছে দিতে নিরন্তর কাজ করেন।",
        description2: "কৃষি ও জলজ চাষে ৫০ বছরেরও বেশি সম্মিলিত অভিজ্ঞতার মাধ্যমে আমাদের দল প্রতিটি ফসলে উৎকর্ষতা নিশ্চিত করে।"
      }
    },
    servicesPage: {
      hero: {
        title: "আমাদের সেবা",
        description: "খামার থেকে টেবিল পর্যন্ত গুণমান ও টেকসইত্ব নিশ্চিত করতে আমরা সমন্বিত কৃষি সেবা দিই"
      },
      fish: {
        title: "মাছ চাষ",
        description: "আমাদের আধুনিক জলজ চাষ সুবিধা সর্বোচ্চ মানের মাছ উৎপাদন নিশ্চিত করে। আমরা এমন টেকসই পদ্ধতি ব্যবহার করি যা মাছের কল্যাণ ও পরিবেশ দুটোই রক্ষা করে।",
        varietiesTitle: "মাছের ধরন",
        varieties: {
          tilapia: "প্রিমিয়াম তেলাপিয়া - মিষ্টি, মোলায়েম স্বাদ ও কোমল টেক্সচার",
          catfish: "তাজা ক্যাটফিশ - সমৃদ্ধ স্বাদ, গ্রিল ও ভাজার জন্য উপযুক্ত"
        },
        processTitle: "আমাদের প্রক্রিয়া",
        process: {
          water: "পরিষ্কার ও পর্যবেক্ষিত পানির ব্যবস্থা",
          nutrition: "হরমোনমুক্ত প্রাকৃতিক খাদ্য",
          checks: "নিয়মিত স্বাস্থ্য ও গুণমান পরীক্ষা",
          harvesting: "টেকসই আহরণ পদ্ধতি"
        },
        imageAlt: "ইউনিটি অ্যাগ্রোর জলজ খামারের তাজা মাছ"
      },
      vegetables: {
        title: "সবজি চাষ",
        description: "আমাদের সবজির বাগান সারা বছর নানা ধরনের তাজা ও জৈব ফসল উৎপাদন করে। মাটির স্বাস্থ্য রক্ষা ও পুষ্টিগুণ নিশ্চিত করতে আমরা টেকসই কৃষি পদ্ধতি অনুসরণ করি।",
        produceTitle: "মৌসুমি ফসল",
        produce: {
          greens: "পাতাওয়ালা সবজি - পালং, লেটুস, কেল ও চার্ড",
          roots: "মূলজাত সবজি - গাজর, মুলা ও বিট",
          vines: "লতানো ফসল - টমেটো, শসা ও মরিচ",
          herbs: "ভেষজ - তুলসী, ধনিয়া, পার্সলে ও পুদিনা"
        },
        practicesTitle: "জৈব পদ্ধতি",
        practices: {
          pesticides: "কোনো কৃত্রিম কীটনাশক বা সার নয়",
          compost: "কম্পোস্ট ও প্রাকৃতিক মাটি সমৃদ্ধকরণ",
          rotation: "মাটির সুস্থতার জন্য ফসল পরিবর্তন",
          irrigation: "পানি সাশ্রয়ী সেচ ব্যবস্থা"
        },
        imageAlt: "ইউনিটি অ্যাগ্রোর জৈব সবজির সংগ্রহ"
      },
      tours: {
        title: "খামার ভ্রমণ",
        description: "নিজ চোখে দেখুন আপনার খাবার কোথা থেকে আসে। আমাদের নির্দেশিত ভ্রমণে টেকসই কৃষি সম্পর্কে জানুন ও অভিজ্ঞতা নিন।",
        educational: {
          title: "শিক্ষামূলক ভ্রমণ",
          description: "স্কুল ও দলের জন্য আদর্শ। টেকসই কৃষি, জলজ চাষ ও ফার্ম টু টেবিল যাত্রা সম্পর্কে শিখুন।",
          bullets: {
            demos: "ইন্টার‌্যাকটিভ প্রদর্শনী",
            qa: "আমাদের কৃষকদের সাথে প্রশ্নোত্তর",
            materials: "শিক্ষামূলক উপকরণ অন্তর্ভুক্ত",
            duration: "১.৫ ঘন্টার সেশন"
          }
        },
        family: {
          title: "পারিবারিক ভ্রমণ",
          description: "শিশুদের জন্য মজার অভিজ্ঞতা যেখানে তারা মাছ চাষ ও সবজি চাষ কাছ থেকে দেখতে পারে।",
          bullets: {
            activities: "শিশুবান্ধব কার্যক্রম",
            samples: "তাজা পণ্যের স্বাদ গ্রহণ",
            photos: "ছবি তোলার সুযোগ",
            duration: "১ ঘন্টার সেশন"
          }
        },
        private: {
          title: "ব্যক্তিগত ভ্রমণ",
          description: "ব্যবসা প্রতিষ্ঠান বা বিশেষ দলের জন্য কাস্টমাইজড ভ্রমণ যার বিষয়বস্তু ও সময়সূচি নির্ধারণ করা যায়।",
          bullets: {
            itinerary: "আপনাদের জন্য সাজানো পরিকল্পনা",
            scheduling: "নমনীয় সময়সূচি",
            info: "বিস্তারিত প্রযুক্তিগত তথ্য",
            duration: "সময়কাল প্রয়োজন অনুযায়ী"
          }
        },
        cta: "ভ্রমণ বুক করুন"
      },
      quality: {
        title: "আমাদের গুণমানের অঙ্গীকার",
        description: "আমাদের খামার থেকে বের হওয়া প্রতিটি পণ্য কঠোর মানদণ্ড পূরণ করে",
        testing: {
          title: "নিয়মিত পরীক্ষা",
          description: "পানির গুণমান, মাটির স্বাস্থ্য ও পণ্যের নিরাপত্তা সার্বক্ষণিক পর্যবেক্ষণে থাকে"
        },
        freshness: {
          title: "তাজা থাকার নিশ্চয়তা",
          description: "উচ্চ মান বজায় রেখে পণ্য সংগ্রহ ও তাজা অবস্থায় সরবরাহ করা হয়"
        }
      }
    },
    productsPage: {
      hero: {
        title: "আমাদের পণ্য",
        description: "আমাদের টেকসই খামার থেকে প্রতিদিন সংগ্রহ করা তাজা ও উচ্চমানের মাছ ও সবজি"
      },
      fish: {
        title: "তাজা মাছ",
        description: "টেকসই জলজ পদ্ধতিতে পরিষ্কার ও পর্যবেক্ষিত পরিবেশে লালিত আমাদের মাছ",
        items: {
          tilapia: {
            name: "প্রিমিয়াম তেলাপিয়া",
            description: "মিষ্টি ও মোলায়েম স্বাদের কোমল মাংস। গ্রিল, বেক বা ভাজার জন্য আদর্শ।",
            features: {
              hormoneFree: "হরমোনমুক্ত",
              cleanWater: "পরিষ্কার পানিতে লালিত",
              weight: "গড়ে ২-৩ পাউন্ড"
            },
            price: "বাজার মূল্য",
            availability: "সারা বছর"
          },
          catfish: {
            name: "তাজা ক্যাটফিশ",
            description: "সমৃদ্ধ স্বাদের মাছ যা ঐতিহ্যবাহী রান্না ও গ্রিল করার জন্য দারুণ।",
            features: {
              taste: "প্রাকৃতিক স্বাদ",
              sustainable: "টেকসইভাবে উৎপাদিত",
              weight: "গড়ে ১-৪ পাউন্ড"
            },
            price: "বাজার মূল্য",
            availability: "সারা বছর"
          }
        }
      },
      vegetables: {
        title: "জৈব সবজি",
        description: "ক্ষতিকর রাসায়নিক ছাড়া জৈব পদ্ধতিতে উৎপাদিত মৌসুমি সবজি",
        items: {
          spinach: {
            name: "জৈব পালং শাক",
            description: "নরম ও তাজা পাতা যা সালাদ, স্মুদি ও রান্নার জন্য আদর্শ।",
            features: {
              pesticideFree: "কীটনাশকমুক্ত",
              iron: "লোহা সমৃদ্ধ",
              leaves: "বেবি ও পূর্ণাঙ্গ পাতা"
            },
            season: "বসন্ত, শরৎ"
          },
          tomatoes: {
            name: "লতা টমেটো",
            description: "লতার উপর পাকা হওয়া রসালো ও সুস্বাদু টমেটো।",
            features: {
              heirloom: "ঐতিহ্যবাহী জাত",
              ripened: "লতায় পাকা",
              sizes: "বিভিন্ন আকার"
            },
            season: "গ্রীষ্ম, শরৎ"
          },
          cucumbers: {
            name: "কচকচে শসা",
            description: "সালাদ, আচার বা স্বাস্থ্যকর স্ন্যাকসের জন্য তাজা ও কচকচে শসা।",
            features: {
              burpless: "বেডানা মুক্ত",
              organic: "জৈবভাবে উৎপাদিত",
              size: "৬-৮ ইঞ্চি"
            },
            season: "গ্রীষ্ম"
          },
          carrots: {
            name: "তাজা গাজর",
            description: "উজ্জ্বল রং ও চমৎকার ক্রাঞ্চযুক্ত মিষ্টি গাজর।",
            features: {
              beta: "বেটা-ক্যারোটিন সমৃদ্ধ",
              sizes: "বিভিন্ন আকার",
              storage: "দীর্ঘমেয়াদি সংরক্ষণযোগ্য"
            },
            season: "শরৎ, শীত"
          },
          lettuce: {
            name: "বাগানের লেটুস",
            description: "কচকচে লেটুস যার মধ্যে রোমেইন, বাটারহেড ও পাতা লেটুস অন্তর্ভুক্ত।",
            features: {
              varieties: "একাধিক জাত",
              hydroponic: "হাইড্রোপনিক বিকল্প",
              yearRound: "সারা বছর"
            },
            season: "সারা বছর"
          },
          peppers: {
            name: "ক্যাপসিকাম",
            description: "লাল, হলুদ ও সবুজ রঙের মিষ্টি ক্যাপসিকাম।",
            features: {
              vitaminC: "ভিটামিন সি সমৃদ্ধ",
              sweet: "মিষ্টি জাত",
              certified: "জৈব সনদপ্রাপ্ত"
            },
            season: "গ্রীষ্ম, শরৎ"
          }
        }
      },
      herbs: {
        title: "তাজা ভেষজ",
        description: "রান্না ও পরিবেশনের জন্য তাজা সুগন্ধি ভেষজ",
        items: {
          basil: {
            name: "তাজা তুলসী",
            description: "রান্না, পেস্টো ও গার্নিশের জন্য সুগন্ধি তুলসী।",
            features: {
              varieties: "বিভিন্ন জাত",
              pesticideFree: "কীটনাশকমুক্ত",
              oil: "উচ্চ তেল ঘনত্ব"
            },
            season: "বসন্ত, গ্রীষ্ম"
          },
          cilantro: {
            name: "বাগানের ধনিয়া",
            description: "মেক্সিকান ও এশীয় রান্নার জন্য উপযোগী তীব্র সুগন্ধযুক্ত ধনিয়া।",
            features: {
              slowBolt: "দ্রুত ফুল না ধরার জাত",
              organic: "জৈবভাবে উৎপাদিত",
              roots: "মূলসহ"
            },
            season: "শরৎ, শীত, বসন্ত"
          }
        }
      },
      quality: {
        title: "গুণমান ও তাজা থাকার নিশ্চয়তা",
        description: "আমাদের খামার থেকে বের হওয়া প্রতিটি পণ্যের দায়িত্ব আমরা নিই",
        harvest: {
          title: "সরাসরি সংগ্রহ",
          description: "সর্বোচ্চ পাকা অবস্থায় সংগ্রহ করে ২৪ ঘণ্টার মধ্যে সরবরাহ"
        },
        premium: {
          title: "প্রিমিয়াম গুণমান",
          description: "শুধুমাত্র কঠোর মানদণ্ড পূরণ করা পণ্যই আপনার হাতে পৌঁছায়"
        },
        sustainable: {
          title: "টেকসই পদ্ধতি",
          description: "পরিবেশবান্ধব কৃষি পদ্ধতি"
        },
        cta: "তাজা পণ্য অর্ডার করুন"
      }
    },
    testimonialsPage: {
      hero: {
        title: "গ্রাহকদের অভিমত",
        description: "শুধু আমাদের কথায় নয়—জানুন সন্তুষ্ট গ্রাহকরা ইউনিটি অ্যাগ্রো সম্পর্কে কী বলেন"
      },
      stats: {
        happyCustomers: "সন্তুষ্ট গ্রাহক",
        satisfaction: "গ্রাহক সন্তুষ্টি",
        years: "বছরের উৎকর্ষ",
        reviews: "ফাইভ-স্টার রিভিউ"
      },
      grid: {
        title: "গ্রাহকদের কথা",
        description: "তাজা পণ্যের জন্য ইউনিটি অ্যাগ্রোতে ভরসা করা প্রকৃত গ্রাহকদের অভিজ্ঞতা"
      },
      featured: {
        quote: "\"ইউনিটি অ্যাগ্রো আমাদের পরিবারের খাদ্যাভ্যাস বদলে দিয়েছে। তাদের মাছ ও সবজির তাজা স্বাদ অতুলনীয়। আমরা আজীবনের গ্রাহক হয়ে গেছি!\"",
        cite: "- জেনিফার মার্টিনেজ, ২০১৯ সাল থেকে বিশ্বস্ত গ্রাহক"
      },
      cta: {
        title: "সন্তুষ্ট গ্রাহকদের তালিকায় যোগ দিন",
        description: "নিজেই অনুভব করুন ইউনিটি অ্যাগ্রোর পার্থক্য। তাজা, টেকসই ও সুস্বাদু—এটাই আমাদের প্রতিশ্রুতি।",
        primary: "অর্ডার শুরু করুন",
        secondary: "আমাদের পণ্য দেখুন"
      },
      testimonials: {
        sarah: {
          name: "সারা জনসন",
          role: "স্থানীয় রেস্তোরাঁ মালিক",
          content: "দুই বছরেরও বেশি সময় ধরে ইউনিটি অ্যাগ্রো আমাদের তাজা মাছ ও সবজির প্রধান সরবরাহকারী। গুণমান সবসময় অসাধারণ এবং আমাদের গ্রাহকরা সবসময় তাজা স্বাদের প্রশংসা করেন। তাদের তেলাপিয়া আমরা যত পরিবেশন করেছি তার মধ্যে সেরা!"
        },
        mike: {
          name: "মাইক রদ্রিগেজ",
          role: "পারিবারিক গ্রাহক",
          content: "আমরা পরিবারের খাবারের জন্য ইউনিটি অ্যাগ্রো থেকে কিনছি এবং পার্থক্য অবিশ্বাস্য। সবজিগুলো এত তাজা ও স্বাদে ভরা যে বাচ্চারাই আরো সবজি চায়! মাছ সবসময়ই একেবারে তাজা এবং কখনোই গন্ধ করে না।"
        },
        emma: {
          name: "শেফ এমা থম্পসন",
          role: "এক্সিকিউটিভ শেফ",
          content: "একজন শেফ হিসেবে আমি উপকরণের মান নিয়ে খুবই সচেতন। ইউনিটি অ্যাগ্রো সবসময় সবচেয়ে তাজা পণ্য ও মাছ সরবরাহ করে। তাদের টেকসই কৃষি পদ্ধতি আমাদের রেস্তোরাঁর মূল্যবোধের সাথে মেলে এবং স্বাদই তা প্রমাণ করে।"
        },
        david: {
          name: "ডেভিড পার্ক",
          role: "স্বাস্থ্যসচেতন গ্রাহক",
          content: "তাদের জৈব পদ্ধতি সম্পর্কে জানার পর আমি ইউনিটি অ্যাগ্রোকে বেছে নিয়েছি। জানতে পারা যে সবজি ক্ষতিকর রাসায়নিক ছাড়া উৎপাদিত এবং মাছ প্রাকৃতিকভাবে লালিত—আমার পরিবারের খাবারে শান্তি দেয়।"
        },
        lisa: {
          name: "লিসা চেন",
          role: "পুষ্টিবিদ",
          content: "যারা সবচেয়ে উচ্চমানের ও পুষ্টিকর পণ্য চান তাদের সবাইকে আমি ইউনিটি অ্যাগ্রো সুপারিশ করি। তাদের চাষ পদ্ধতি প্রাকৃতিক পুষ্টিগুণ অটুট রাখে এবং আপনি স্বাদে সেই পার্থক্য বুঝতে পারবেন।"
        },
        robert: {
          name: "রবার্ট উইলসন",
          role: "স্থানীয় মার্কেট ম্যানেজার",
          content: "আমরা কৃষকদের বাজারে ইউনিটি অ্যাগ্রোর সাথে অংশীদার হয়েছি এবং তাদের পণ্য সবসময় সবার আগে বিক্রি হয়ে যায়। গ্রাহকরা বিশেষভাবে তাদের তেলাপিয়া ও জৈব সবজি খুঁজতে আসেন। অসাধারণ গুণমান ও সেবা!"
        }
      }
    },
    contactPage: {
      hero: {
        title: "যোগাযোগ করুন",
        description: "তাজা পণ্য, খামার ভ্রমণ বা আমাদের টেকসই কৃষি সম্পর্কে যেকোনো প্রশ্নের জন্য ইউনিটি অ্যাগ্রোর সাথে যুক্ত হন"
      },
      info: {
        location: {
          title: "আমাদের ঠিকানা",
          lines: "১২৩ ফার্ম রোড\nএগ্রিকালচারাল ভ্যালি\nস্টেট ১২৩৪৫"
        },
        phone: {
          title: "ফোন",
          lines: "প্রধান: +১ (৫৫৫) ১২৩-৪৫৬৭\nখামার ভ্রমণ: +১ (৫৫৫) ১২৩-৪৫৬৮\nঅর্ডার: +১ (৫৫৫) ১২৩-৪৫৬৯"
        },
        email: {
          title: "ইমেইল",
          lines: "info@unityagro.com\norders@unityagro.com\ntours@unityagro.com"
        },
        hours: {
          title: "সময়সূচি",
          lines: "সোম-শুক্র: সকাল ৭টা - সন্ধ্যা ৬টা\nশনিবার: সকাল ৮টা - বিকেল ৪টা\nরবিবার: সকাল ৯টা - বিকেল ৩টা"
        }
      },
      form: {
        title: "আমাদের বার্তা পাঠান",
        description: "নিচের ফর্মটি পূরণ করুন, আমরা ২৪ ঘণ্টার মধ্যে উত্তর দেব",
        name: "পুরো নাম *",
        namePlaceholder: "আপনার পুরো নাম লিখুন",
        phone: "ফোন নম্বর",
        phonePlaceholder: "(৫৫৫) ১২৩-৪৫৬৭",
        email: "ইমেইল ঠিকানা *",
        emailPlaceholder: "your@email.com",
        subject: "বিষয় *",
        subjectPlaceholder: "এটি কী বিষয়ে?",
        message: "বার্তা *",
        messagePlaceholder: "আপনার জিজ্ঞাসা, অর্ডারের বিস্তারিত বা যেকোনো প্রশ্ন আমাদের জানান...",
        submit: "বার্তা পাঠান",
        successTitle: "বার্তা পাঠানো হয়েছে!",
        successDescription: "আমাদের সাথে যোগাযোগের জন্য ধন্যবাদ। আমরা ২৪ ঘণ্টার মধ্যে আপনার কাছে ফিরে আসব।"
      },
      map: {
        title: "আমাদের খামার খুঁজে নিন",
        description: "টেকসই কৃষি পদ্ধতি কাছ থেকে দেখতে আমাদের খামারে চলে আসুন",
        placeholder: "এখানে ইন্টার‌্যাকটিভ মানচিত্র এম্বেড করা হবে\nযেখানে আমাদের অবস্থান প্রদর্শিত হবে:\n১২৩ ফার্ম রোড, এগ্রিকালচারাল ভ্যালি",
        directions: {
          title: "পথ নির্দেশনা",
          description: "হাইওয়ে ৪৫ উত্তর দিকে ১২ মাইল গিয়ে ফার্ম রোডে ডান দিকে মোড় নিন। ২ মাইল পর বাম পাশে ইউনিটি অ্যাগ্রোর সাইনবোর্ড দেখবেন।"
        },
        parking: {
          title: "পার্কিং",
          description: "অন-সাইট বিনামূল্যের পার্কিং সুবিধা রয়েছে। বড় যানবাহন ও ট্যুর বাসও স্বাগত।"
        }
      },
      faq: {
        title: "ঘন ঘন জিজ্ঞাসিত প্রশ্ন",
        description: "আমাদের পণ্য ও সেবা সম্পর্কে সাধারণ প্রশ্নের দ্রুত উত্তর",
        items: {
          order: {
            question: "অর্ডার কীভাবে করব?",
            answer: "(৫৫৫) ১২৩-৪৫৬৯ নম্বরে কল করে, orders@unityagro.com এ মেইল করে বা সরাসরি খামারে আসতে পারেন। বড় অর্ডারের ক্ষেত্রে আগে থেকে ফোন করার পরামর্শ দিচ্ছি।"
          },
          delivery: {
            question: "আপনারা কি ডেলিভারি দেন?",
            answer: "হ্যাঁ! খামার থেকে ২৫ মাইলের মধ্যে আমরা ডেলিভারি করি। দূরত্ব ও অর্ডারের আকার অনুযায়ী ডেলিভারি চার্জ প্রযোজ্য। দুপুর ২টার আগে অর্ডার করলে একই দিনে ডেলিভারি সম্ভব।"
          },
          organic: {
            question: "আপনাদের পণ্য কি জৈব?",
            answer: "আমাদের সবজি ক্ষতিকর কীটনাশক ও সার ছাড়া জৈব পদ্ধতিতে উৎপাদিত। মাছ প্রাকৃতিকভাবে লালিত হয় এবং পরিষ্কার, নজরদারিতে থাকা পানিতে বেড়ে ওঠে।"
          },
          tours: {
            question: "খামার ভ্রমণ কীভাবে বুক করব?",
            answer: "(৫৫৫) ১২৩-৪৫৬৮ নম্বরে কল বা tours@unityagro.com এ ইমেইল করে খামার ভ্রমণ বুক করতে পারেন। আমরা শিক্ষামূলক, পারিবারিক ও ব্যক্তিগত ভ্রমণ অফার করি। আগেভাগে বুকিং করার অনুরোধ রইলো।"
          }
        }
      },
      cta: {
        title: "তাজা অভিজ্ঞতার জন্য প্রস্তুত?",
        description: "আজই আমাদের সাথে যোগাযোগ করুন অথবা টেকসই খামার ভ্রমণের সময় ঠিক করুন",
        call: "এখনই কল করুন: (৫৫৫) ১২৩-৪৫৬৭",
        email: "আমাদের ইমেইল করুন"
      }
    },
    notFound: {
      title: "৪০৪",
      description: "দুঃখিত! পৃষ্ঠা খুঁজে পাওয়া যায়নি",
      cta: "হোমে ফিরে যান"
    }
  }
};

export const availableLanguages: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "bn", label: "বাংলা" }
];
