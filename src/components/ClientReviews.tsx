
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ClientReviews = () => {
  const { t } = useLanguage();
  
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      position: "CEO",
      review: "Pionavix exceeded our expectations in every way. Their team delivered a robust e-commerce platform that increased our sales by 300%. The attention to detail and professional approach made the entire process seamless.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "HealthFirst Clinic",
      position: "Director of Operations",
      review: "The healthcare management system developed by Pionavix has revolutionized our patient care process. The user-friendly interface and comprehensive features have improved our efficiency significantly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "EduTech Innovations",
      position: "Product Manager",
      review: "Working with Pionavix was an absolute pleasure. They understood our vision for the learning platform and brought it to life with innovative features. The final product exceeded all our expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Park",
      company: "FinanceFlow Inc",
      position: "CTO",
      review: "The financial dashboard created by Pionavix has become an essential tool for our business. The real-time analytics and intuitive design help us make better data-driven decisions daily.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      company: "Green Energy Solutions",
      position: "Founder",
      review: "Pionavix delivered an outstanding IoT monitoring system that has transformed how we manage our renewable energy installations. Their expertise in emerging technologies is truly impressive.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-cyan-50/50 dark:from-gray-800/50 dark:via-purple-900/30 dark:to-gray-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/50 dark:to-orange-900/50 text-yellow-800 dark:text-yellow-300 text-sm font-medium mb-6 shadow-lg backdrop-blur-sm">
            <Star className="w-4 h-4 mr-2 fill-current" />
            {t('clientTestimonials')}
          </div>
          <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t('whatClientsSay')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('reviewsDescription')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardContent className="p-8 h-full flex flex-col relative z-10">
                      {/* Quote icon */}
                      <div className="mb-6">
                        <Quote className="h-8 w-8 text-purple-500 dark:text-purple-400 fill-current" />
                      </div>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      {/* Review text */}
                      <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 flex-grow text-lg italic">
                        "{review.review}"
                      </blockquote>
                      
                      {/* Author */}
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-25"></div>
                          <img 
                            src={review.avatar} 
                            alt={review.name}
                            className="relative w-14 h-14 rounded-full object-cover border-2 border-white dark:border-gray-700"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 dark:text-white text-lg">{review.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{review.position}</div>
                          <div className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{review.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative translate-y-0 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border-purple-200 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/50 transition-all duration-300" />
              <CarouselNext className="relative translate-y-0 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border-purple-200 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/50 transition-all duration-300" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
