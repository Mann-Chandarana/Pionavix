
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target, Heart, CheckCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface AboutProps {
  isDark: boolean;
}

const About = ({ isDark }: AboutProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients to understand their needs and exceed expectations."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Quality is at the heart of everything we do, ensuring the highest standards."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our passion for technology drives us to create exceptional digital experiences."
    }
  ];

  const features = [
    "Expert team of certified developers",
    "Agile development methodology",
    "24/7 support and maintenance",
    "Scalable and secure solutions",
    "On-time project delivery",
    "Competitive pricing"
  ];

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            About <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Pionavix</span>
          </h2>
          <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            At Pionavix, we are a team of passionate digital innovators dedicated to transforming businesses through cutting-edge technology solutions. We specialize in creating exceptional digital experiences that drive growth and success for our clients worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Our Mission & Vision
            </h3>
            <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              We believe in the power of technology to transform businesses and create meaningful impact. Our mission is to deliver innovative digital solutions that not only meet but exceed our clients' expectations, helping them stay ahead in today's competitive digital landscape.
            </p>
            <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              With a focus on quality, innovation, and client satisfaction, we've built long-lasting partnerships with businesses across various industries, helping them navigate the digital transformation successfully.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                  <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10"></div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h3 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className={`transition-all duration-500 hover:scale-105 hover:shadow-xl text-center ${
                  isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <value.icon className={`w-12 h-12 mx-auto mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <h4 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {value.title}
                  </h4>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent`}>
                {stat.number}
              </div>
              <p className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
