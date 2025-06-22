
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
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
      review: "The team at Pionavix transformed our vision into reality. Their technical expertise and attention to detail is unmatched in the industry."
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
    <section className="py-20 bg-[#1a1f3a] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 text-8xl font-bold opacity-10 text-blue-500">"</div>
      <div className="absolute bottom-10 right-10 text-8xl font-bold opacity-10 text-purple-500">"</div>
      
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Client <span className="text-purple-400">Reviews</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            See what our clients say about working with us and the results we've delivered.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-[#2a2f4a]/80 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-gray-700/30 relative overflow-hidden">
            {/* Carousel indicators */}
            <div className="flex justify-center mb-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setProgress(0);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-500' 
                      : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            {/* Star rating */}
            <div className="flex justify-center mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mx-1" />
              ))}
            </div>

            {/* Review text */}
            <div className="text-center mb-12">
              <p className="text-2xl md:text-3xl leading-relaxed italic text-white font-light">
                "{reviews[currentSlide].review}"
              </p>
            </div>

            {/* Client info */}
            <div className="flex items-center justify-center space-x-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-500">
                <img 
                  src={reviews[currentSlide].avatar} 
                  alt={reviews[currentSlide].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="text-2xl font-bold text-white mb-1">
                  {reviews[currentSlide].name}
                </h4>
                <p className="text-gray-300 text-lg">
                  {reviews[currentSlide].position}
                </p>
                <p className="text-blue-400 font-medium">
                  {reviews[currentSlide].company}
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-12">
              <div className="w-full bg-gray-700 rounded-full h-1 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
