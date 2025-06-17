
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Cloud, BarChart3, Shield, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices for optimal performance.",
      features: ["React/Next.js", "Node.js", "Database Design", "API Integration"],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to optimize your business operations.",
      features: ["AWS/Azure", "DevOps", "Microservices", "Container Orchestration"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that increase visibility and drive qualified leads.",
      features: ["SEO/SEM", "Social Media", "Analytics", "Content Strategy"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and customer data.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Risk Assessment"],
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Automation & AI",
      description: "Intelligent automation solutions powered by AI to streamline your business processes.",
      features: ["Process Automation", "Machine Learning", "Chatbots", "Workflow Optimization"],
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 text-sm font-medium mb-4">
            Our Expertise
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Services We Provide</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, we offer comprehensive digital services that help businesses thrive in the modern world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg dark:bg-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden relative">
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
