
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const ClientReviews = () => {
  const { t } = useLanguage();
  const [currentReview, setCurrentReview] = useState(0);
  
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

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900/20 to-pink-900/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.3),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_60%)]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 text-9xl font-bold text-white/5 select-none">GG</div>
      <div className="absolute bottom-20 right-20 text-9xl font-bold text-white/5 select-none">99</div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-6xl font-bold mb-8 text-white">
            Client <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            See what our clients say about working with us and the results we've delivered.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Navigation dots */}
          <div className="flex justify-center mb-8 gap-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Review Card */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-slate-800/95 to-purple-900/20 backdrop-blur-xl border-0 shadow-2xl relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10"></div>
              
              <CardContent className="p-12 text-center relative z-10">
                {/* Large quotation marks */}
                <div className="text-8xl text-purple-500/20 font-serif leading-none mb-8">"</div>
                
                {/* Rating */}
                <div className="flex justify-center items-center gap-2 mb-8">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                
                {/* Review text */}
                <blockquote className="text-white text-2xl leading-relaxed mb-12 font-light italic max-w-4xl mx-auto transition-all duration-500">
                  {reviews[currentReview].review}
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center justify-center gap-6">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 animate-pulse"></div>
                    <img 
                      src={reviews[currentReview].avatar} 
                      alt={reviews[currentReview].name}
                      className="relative w-20 h-20 rounded-full object-cover border-4 border-purple-500/50 transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white text-xl mb-1">{reviews[currentReview].name}</div>
                    <div className="text-gray-300 text-base">{reviews[currentReview].position}</div>
                    <div className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{reviews[currentReview].company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation arrows */}
            <button
              onClick={prevReview}
              className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 group"
            >
              <span className="text-2xl group-hover:-translate-x-1 transition-transform duration-300">‹</span>
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 group"
            >
              <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
