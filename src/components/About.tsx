
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target, Heart } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface AboutProps {
  isDark: boolean;
}

const About = ({ isDark }: AboutProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const values = [
    {
      icon: Users,
      title: "Team Collaboration",
      description: "We believe in the power of teamwork and collaborative innovation."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project we undertake."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "We focus on achieving measurable results for our clients."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We are passionate about creating digital solutions that make a difference."
    }
  ];

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-12 items-center ${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          <div>
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              About <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Pionavix</span>
            </h2>
            <p className={`text-xl leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              At Pionavix, we are a team of passionate digital innovators dedicated to transforming businesses through cutting-edge technology solutions. With years of experience and a commitment to excellence, we help companies navigate the digital landscape and achieve their goals.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <value.icon className={`w-6 h-6 mt-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {value.title}
                    </h4>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
