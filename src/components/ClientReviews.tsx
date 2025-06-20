
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

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechCorp Inc.",
      avatar: "SJ",
      rating: 5,
      review: "Pionavix delivered an exceptional solution that exceeded our expectations. Their team was professional, responsive, and truly understood our business needs."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder",
      company: "InnovateX",
      avatar: "MC",
      rating: 5,
      review: "Working with Pionavix was a game-changer for our business. They delivered a stunning website that perfectly captures our brand essence and drives results."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "StartupHub",
      avatar: "ER",
      rating: 5,
      review: "The team at Pionavix is incredibly talented and professional. They took our vision and turned it into a reality that surpassed our dreams."
    },
    {
      id: 4,
      name: "David Thompson",
      position: "CTO",
      company: "DigitalFlow",
      avatar: "DT",
      rating: 5,
      review: "Exceptional service and outstanding results. Pionavix helped us transform our digital presence and achieve remarkable growth."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'} relative overflow-hidden`}>
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Client <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            See what our clients say about working with us and the results we've delivered.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Large quotation marks */}
          <Quote className={`absolute -top-4 -left-4 w-16 h-16 ${isDark ? 'text-gray-700' : 'text-gray-200'} opacity-50`} />
          <Quote className={`absolute -bottom-4 -right-4 w-16 h-16 ${isDark ? 'text-gray-700' : 'text-gray-200'} opacity-50 rotate-180`} />
          
          <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-50'} rounded-3xl p-8 md:p-12 shadow-2xl relative`}>
            {/* Carousel indicators */}
            <div className="flex justify-center mb-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                      : isDark ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Star rating */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Review text */}
            <div className="text-center mb-8">
              <p className={`text-xl md:text-2xl leading-relaxed italic ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                "{reviews[currentSlide].review}"
              </p>
            </div>

            {/* Client info */}
            <div className="flex items-center justify-center space-x-4">
              <div className={`w-16 h-16 rounded-full ${isDark ? 'bg-blue-600' : 'bg-blue-500'} flex items-center justify-center text-white font-bold text-lg border-4 ${isDark ? 'border-blue-400' : 'border-blue-300'}`}>
                {reviews[currentSlide].avatar}
              </div>
              <div className="text-center">
                <h4 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {reviews[currentSlide].name}
                </h4>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {reviews[currentSlide].position}
                </p>
                <p className={`text-sm font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  {reviews[currentSlide].company}
                </p>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white flex items-center justify-center transition-all duration-300 hover:scale-110`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white flex items-center justify-center transition-all duration-300 hover:scale-110`}
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
