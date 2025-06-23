
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

interface PortfolioProps {
  isDark: boolean;
}

const Portfolio = ({ isDark }: PortfolioProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features and seamless user experience",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Healthcare Management",
      description: "Comprehensive healthcare management system with patient tracking and analytics",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      tags: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description: "Real-time financial analytics dashboard with advanced reporting capabilities",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      tags: ["Angular", "Express", "MySQL", "D3.js"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "Social Media App",
      description: "Modern social media platform with real-time messaging and content sharing",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      tags: ["React Native", "Firebase", "Redux", "Socket.io"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Our <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore our latest projects and see how we've helped businesses transform their digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.slice(0, 4).map((project, index) => (
            <Card 
              key={project.id}
              className={`group overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDark ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/project/${project.id}`}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/projects">
            <Button 
              size="lg" 
              variant="outline"
              className={`${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} px-8`}
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
