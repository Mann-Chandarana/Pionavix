
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const ClientReviews = () => {
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
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-800 dark:via-purple-900 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 text-sm font-medium mb-4">
            Client Testimonials
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Pionavix.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
                        "{review.review}"
                      </blockquote>
                      
                      <div className="flex items-center gap-4">
                        <img 
                          src={review.avatar} 
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">{review.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{review.position}</div>
                          <div className="text-sm text-purple-600 dark:text-purple-400">{review.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
