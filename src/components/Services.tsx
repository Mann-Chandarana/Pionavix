
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
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies and best practices.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: Brain,
      title: "AI/ML Solutions",
      description: "Intelligent automation and machine learning solutions to transform your business processes and decision-making.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/30"
    },
    {
      icon: Shield,
      title: "QA & Testing",
      description: "Comprehensive quality assurance and testing services to ensure flawless software delivery and performance.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: Settings,
      title: "DevOps Solutions",
      description: "Streamlined development and deployment processes for faster and more reliable software delivery pipelines.",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/30"
    }
  ];

  return (
    <section className="py-20 bg-[#1a1f3a]">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Our <span className="text-purple-400">Services</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            We offer comprehensive digital solutions to transform your business and create exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-[#2a2f4a]/80 border-gray-700/50 backdrop-blur-lg hover:border-purple-500/50 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${service.bgColor} border ${service.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
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
