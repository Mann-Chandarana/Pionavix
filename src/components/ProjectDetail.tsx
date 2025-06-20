
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag } from "lucide-react";
import { Link, useParams } from "react-router-dom";

interface ProjectDetailProps {
  isDark: boolean;
}

const ProjectDetail = ({ isDark }: ProjectDetailProps) => {
  const { id } = useParams();

  const project = {
    id: 1,
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution built with modern technologies to provide seamless shopping experience for users and powerful management tools for administrators.",
    longDescription: "This project represents a complete digital transformation for a traditional retail business. We developed a full-stack e-commerce platform that includes user authentication, product catalog, shopping cart, payment processing, order management, and admin dashboard. The platform is designed to handle high traffic and provide excellent user experience across all devices.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "AWS"],
    features: [
      "User Authentication & Authorization",
      "Product Catalog Management",
      "Shopping Cart & Wishlist",
      "Secure Payment Processing",
      "Order Management System",
      "Admin Dashboard",
      "Real-time Analytics",
      "Mobile Responsive Design"
    ],
    client: "TechRetail Inc.",
    duration: "6 months",
    year: "2023",
    github: "#",
    live: "#"
  };

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button 
            variant="outline" 
            className={`mb-8 ${isDark ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h1>
              <p className={`text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`flex items-center space-x-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <User className="h-5 w-5" />
                <div>
                  <div className="text-sm opacity-75">Client</div>
                  <div className="font-semibold">{project.client}</div>
                </div>
              </div>
              <div className={`flex items-center space-x-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <Calendar className="h-5 w-5" />
                <div>
                  <div className="text-sm opacity-75">Duration</div>
                  <div className="font-semibold">{project.duration}</div>
                </div>
              </div>
              <div className={`flex items-center space-x-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <Tag className="h-5 w-5" />
                <div>
                  <div className="text-sm opacity-75">Year</div>
                  <div className="font-semibold">{project.year}</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live
              </Button>
              <Button variant="outline" className={`${isDark ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}>
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <CardContent className="p-8">
                <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Project Overview
                </h2>
                <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.longDescription}
                </p>
              </CardContent>
            </Card>

            <Card className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <CardContent className="p-8">
                <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Project Gallery
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.images.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <CardContent className="p-6">
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDark ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <CardContent className="p-6">
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className={`flex items-start ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span className="text-blue-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
