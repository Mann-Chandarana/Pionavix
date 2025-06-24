
import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Globe, Zap, Database, Shield, Settings, Brain } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface ServicesProps {
  isDark: boolean;
}

const Services = ({ isDark }: ServicesProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements and goals with scalable architecture.",
      color: "from-blue-500 to-blue-600",
      bgColor: isDark ? "bg-gray-800/50" : "bg-blue-500/20",
      borderColor: isDark ? "border-gray-700/50" : "border-blue-500/30"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies and best practices.",
      color: "from-cyan-500 to-cyan-600",
      bgColor: isDark ? "bg-gray-800/50" : "bg-cyan-500/20",
      borderColor: isDark ? "border-gray-700/50" : "border-cyan-500/30"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      color: "from-sky-500 to-sky-600",
      bgColor: isDark ? "bg-gray-800/50" : "bg-sky-500/20",
      borderColor: isDark ? "border-gray-700/50" : "border-sky-500/30"
    },
    {
      icon: Brain,
      title: "AI/ML Solutions",
      description: "Intelligent automation and machine learning solutions to transform your business processes and decision-making.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: isDark ? "bg-gray-800/50" : "bg-indigo-500/20",
      borderColor: isDark ? "border-gray-700/50" : "border-indigo-500/30"
    },
    {
      icon: Shield,
      title: "QA & Testing",
      description: "Comprehensive quality assurance and testing services to ensure flawless software delivery and performance.",
      color: "from-blue-600 to-blue-700",
      bgColor: isDark ? "bg-gray-800/50" : "bg-blue-600/20",
      borderColor: isDark ? "border-gray-700/50" : "border-blue-600/30"
    },
    {
      icon: Settings,
      title: "DevOps Solutions",
      description: "Streamlined development and deployment processes for faster and more reliable software delivery pipelines.",
      color: "from-cyan-600 to-cyan-700",
      bgColor: isDark ? "bg-gray-800/50" : "bg-cyan-600/20",
      borderColor: isDark ? "border-gray-700/50" : "border-cyan-600/30"
    }
  ];

  return (
    <section className={isDark ? "py-20 bg-gray-900" : "py-20 bg-[#0f1729]"}>
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${isDark ? 'text-gray-200' : 'text-white'}`}>
            Our <span className="text-blue-400">Services</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-300'}`}>
            We offer comprehensive digital solutions to transform your business and create exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isDark 
                  ? 'bg-gray-800/80 border-gray-700/50 backdrop-blur-lg hover:border-blue-500/50' 
                  : 'bg-[#1e2a47]/80 border-gray-700/50 backdrop-blur-lg hover:border-blue-500/50'
              } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${service.bgColor} border ${service.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 ${isDark ? 'text-gray-300' : 'text-white'}`} />
                  </div>
                  
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-200 group-hover:text-blue-300' : 'text-white group-hover:text-blue-300'} transition-colors duration-300`}>
                    {service.title}
                  </h3>
                  
                  <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-300 group-hover:text-gray-200'}`}>
                    {service.description}
                  </p>
                  
                  {/* Bottom accent line */}
                  <div className={`h-1 w-0 bg-gradient-to-r ${service.color} mt-6 group-hover:w-full transition-all duration-500 ease-out`}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
