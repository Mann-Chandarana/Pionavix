
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";
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
    <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.2),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.2),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-6xl font-bold mb-8 text-white">
            Client <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            See what our clients say about working with us and the results we've delivered.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full" opts={{ align: "center", loop: true }}>
            <CarouselContent className="-ml-8">
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="pl-8 basis-full">
                  <Card className="bg-gradient-to-br from-slate-800/90 to-gray-800/90 backdrop-blur-xl border-0 shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 group relative overflow-hidden">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardContent className="p-12 text-center relative z-10">
                      {/* Large quotation marks */}
                      <div className="text-8xl text-gray-600/20 font-serif leading-none mb-8">"</div>
                      
                      {/* Rating */}
                      <div className="flex justify-center items-center gap-2 mb-8">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      {/* Review text */}
                      <blockquote className="text-white text-2xl leading-relaxed mb-12 font-light italic max-w-4xl mx-auto">
                        {review.review}
                      </blockquote>
                      
                      {/* Author */}
                      <div className="flex items-center justify-center gap-6">
                        <div className="relative">
                          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75"></div>
                          <img 
                            src={review.avatar} 
                            alt={review.name}
                            className="relative w-20 h-20 rounded-full object-cover border-4 border-white/20"
                          />
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-white text-xl mb-1">{review.name}</div>
                          <div className="text-gray-300 text-base">{review.position}</div>
                          <div className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{review.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom navigation */}
            <div className="flex justify-center gap-6 mt-12">
              <CarouselPrevious className="relative translate-y-0 bg-purple-600 hover:bg-purple-700 border-0 text-white shadow-xl hover:shadow-2xl w-12 h-12 transition-all duration-300" />
              <CarouselNext className="relative translate-y-0 bg-purple-600 hover:bg-purple-700 border-0 text-white shadow-xl hover:shadow-2xl w-12 h-12 transition-all duration-300" />
            </div>
            
            {/* Progress dots */}
            <div className="flex justify-center gap-3 mt-8">
              {reviews.map((_, index) => (
                <div key={index} className="w-3 h-3 rounded-full bg-gray-600 transition-all duration-300"></div>
              ))}
              <div className="w-8 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 absolute transition-all duration-300"></div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
