
import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Globe, Zap, Database, Shield, Cloud, Cpu } from "lucide-react";
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
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Vue, and Angular for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Cross-browser Compatible"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences across iOS and Android platforms.",
      features: ["Native iOS & Android", "React Native", "Flutter", "Progressive Web Apps"]
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions to grow your online presence and reach your target audience effectively.",
      features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"]
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Scalable database design and management solutions to handle your data efficiently and securely.",
      features: ["Database Design", "Data Migration", "Performance Optimization", "Backup & Recovery"]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud infrastructure solutions to scale your applications and ensure high availability and performance.",
      features: ["AWS & Azure", "DevOps & CI/CD", "Microservices", "Container Solutions"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
      features: ["Security Audits", "Vulnerability Assessment", "Compliance", "Incident Response"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize your applications for speed, scalability, and user satisfaction with our performance enhancement services.",
      features: ["Code Optimization", "Database Tuning", "CDN Implementation", "Monitoring & Analytics"]
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Leverage artificial intelligence and machine learning to automate processes and gain valuable insights from your data.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automation Solutions"]
    }
  ];

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Our <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            We provide comprehensive digital solutions to help your business thrive in the digital age with cutting-edge technologies and expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'
              } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardContent className="p-6 relative z-10">
                <div className={`w-16 h-16 rounded-full ${isDark ? 'bg-blue-900/50' : 'bg-blue-100'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-600'} mr-2`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className={`inline-block p-8 rounded-2xl ${isDark ? 'bg-gray-900' : 'bg-gray-100'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Ready to Get Started?
            </h3>
            <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Let's discuss your project and see how we can help transform your business.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
