
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface ClientReviewsProps {
  isDark: boolean;
}

const ClientReviews = ({ isDark }: ClientReviewsProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Michael Chen",
      position: "CTO",
      company: "Innovation Labs",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      review: "Working with Pionavix was a game-changer for our digital transformation. They provided cutting-edge solutions with remarkable attention to detail."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechCorp Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b69c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      review: "Exceptional service and outstanding results. Pionavix helped us achieve remarkable growth through their innovative solutions and expertise."
    },
    {
      id: 3,
      name: "David Thompson",
      position: "VP of Engineering",
      company: "HealthTech Solutions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      review: "Pionavix delivered a robust healthcare platform that meets all our compliance requirements. Their expertise in the healthcare domain is impressive."
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "StartupHub",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      review: "Outstanding partnership with Pionavix. They delivered beyond our expectations and provided ongoing support that truly made a difference."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
    setProgress(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section className="py-20 bg-gradient-to-br from-[#0a0f1c] to-[#1a2137] relative overflow-hidden transition-all duration-1000">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-sky-500 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white transition-all duration-700 hover:scale-105">
            Client <span className="text-blue-400 transition-colors duration-500 hover:text-blue-300">Reviews</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 transition-all duration-500 hover:text-gray-200">
            See what our clients say about working with us and the results we've delivered.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className={`w-[85%] mx-auto bg-[#1e2a47]/90 backdrop-blur-lg rounded-2xl border border-gray-700/30 relative overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/50 transform ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Quote icons */}
            <div className="absolute top-8 left-8 z-10">
              <Quote className="w-16 h-16 text-blue-400/40 transition-all duration-300" />
            </div>
            <div className="absolute bottom-8 right-8 z-10">
              <Quote className="w-16 h-16 text-blue-400/40 rotate-180 transition-all duration-300" />
            </div>

            <div className="p-12 pt-20 pb-20">
              {/* Carousel indicators */}
              <div className="flex justify-center mb-10 space-x-3">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      setProgress(0);
                    }}
                    className={`transition-all duration-500 rounded-full hover:scale-125 ${
                      index === currentSlide 
                        ? 'w-10 h-4 bg-gradient-to-r from-blue-500 to-cyan-600 shadow-lg shadow-blue-500/50' 
                        : 'w-4 h-4 bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              {/* Star rating */}
              <div className="flex justify-center mb-10">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-8 h-8 fill-yellow-400 text-yellow-400 mx-1 transition-all duration-300 hover:scale-110" 
                  />
                ))}
              </div>

              {/* Review text */}
              <div className="text-center mb-12">
                <p className="text-2xl md:text-3xl leading-relaxed italic text-white font-light transition-all duration-500 hover:text-gray-100 max-w-4xl mx-auto">
                  "{reviews[currentSlide].review}"
                </p>
              </div>

              {/* Client info */}
              <div className="flex items-center justify-center space-x-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 transition-all duration-300 hover:border-cyan-500 hover:scale-110">
                  <img 
                    src={reviews[currentSlide].avatar} 
                    alt={reviews[currentSlide].name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-2xl font-bold text-white mb-2 transition-colors duration-300 hover:text-blue-300">
                    {reviews[currentSlide].name}
                  </h4>
                  <p className="text-gray-300 text-lg mb-1 transition-colors duration-300 hover:text-gray-200">
                    {reviews[currentSlide].position}
                  </p>
                  <p className="text-blue-400 font-medium transition-colors duration-300 hover:text-blue-300">
                    {reviews[currentSlide].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Progress bar at the bottom edge */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="w-full bg-gray-700 h-1">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-600 transition-all duration-100 ease-linear shadow-lg"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Navigation arrows - positioned at the center of left and right borders */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-[7.5%] -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-30 hover:shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-[7.5%] -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-30 hover:shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
