
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      id: 1,
      title: "AI Analytics Dashboard",
      description: "A comprehensive analytics solution with advanced insights and real-time data visualization.",
      image: "/lovable-uploads/82f7817c-77ac-436c-93a3-1820e035c4e5.png",
      technologies: ["React", "Node.js", "MongoDB", "TensorFlow"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Healthcare Management System", 
      description: "Digital healthcare platform streamlining patient records, appointments, and medical workflow processes.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Python", "PostgreSQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Learning Management Platform",
      description: "Interactive educational platform with course management, video streaming, and progress tracking capabilities.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "GraphQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-6xl font-bold mb-8 text-white">
            Our <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore our portfolio of successful digital solutions that have transformed businesses across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {projects.map((project, index) => (
            <Card key={project.id} className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 animate-slide-up rounded-2xl" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative overflow-hidden rounded-t-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating action buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white shadow-lg">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white shadow-lg">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technology tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-600/30">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Link to={`/project/${project.id}`} className="flex-1">
                    <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </Link>
                  <Button size="sm" variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-600/20 shadow-lg">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
