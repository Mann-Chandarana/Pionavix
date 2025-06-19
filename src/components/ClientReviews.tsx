
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const ClientReviews = () => {
  const { t } = useLanguage();
  const [currentReview, setCurrentReview] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      position: "CEO",
      review: "Working with Pionavix was a game-changer for our digital transformation. They provided cutting-edge solutions with remarkable attention to detail.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Innovation Labs", 
      position: "CTO",
      review: "The healthcare management system developed by Pionavix has revolutionized our patient care process. Outstanding work and professional approach.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "EduTech Innovations",
      position: "Product Manager", 
      review: "Exceptional service and innovative solutions. The team understood our vision perfectly and delivered beyond expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Park",
      company: "FinanceFlow Inc",
      position: "Director",
      review: "The financial dashboard created by Pionavix has become an essential tool for our business operations and decision making.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    }
  ];

  // Auto-slide functionality with progress
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
      setProgress(0);
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 2;
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
    setProgress(0);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    setProgress(0);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/50 to-gray-50/30"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-8 text-gray-900">
            Client <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            See what our clients say about working with us and the results we've delivered.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Navigation buttons positioned on the sides */}
          <button
            onClick={prevReview}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 group border border-blue-500/30"
          >
            <ChevronLeft className="h-8 w-8 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
          
          <button
            onClick={nextReview}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 group border border-blue-500/30"
          >
            <ChevronRight className="h-8 w-8 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <div className="relative px-20">
            <Card className="bg-white backdrop-blur-xl border border-gray-200 shadow-2xl relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/50 to-gray-50/30"></div>
              
              <CardContent className="p-16 text-center relative z-10">
                {/* Progress dots */}
                <div className="flex justify-center items-center gap-3 mb-12">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentReview(index);
                        setProgress(0);
                      }}
                      className={`transition-all duration-500 rounded-full ${
                        index === currentReview 
                          ? 'w-12 h-3 bg-gradient-to-r from-blue-500 to-indigo-500' 
                          : 'w-3 h-3 bg-gray-400 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Rating */}
                <div className="flex justify-center items-center gap-2 mb-8">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Review text */}
                <blockquote className="text-gray-900 text-3xl leading-relaxed mb-16 font-light italic max-w-5xl mx-auto transition-all duration-500">
                  "{reviews[currentReview].review}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center justify-center gap-8 mb-8">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-75"></div>
                    <img 
                      src={reviews[currentReview].avatar} 
                      alt={reviews[currentReview].name}
                      className="relative w-24 h-24 rounded-full object-cover border-4 border-blue-500/50 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 text-2xl mb-2">{reviews[currentReview].name}</div>
                    <div className="text-gray-600 text-lg">{reviews[currentReview].position}</div>
                    <div className="text-base font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{reviews[currentReview].company}</div>
                  </div>
                </div>
              </CardContent>
              
              {/* Progress Bar at the bottom of card, full width */}
              <div className="relative">
                <div className="w-full bg-gray-200 h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
