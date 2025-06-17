
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features",
      fullDescription: "A comprehensive e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, inventory management, and real-time analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description: "Digital solution for healthcare providers",
      fullDescription: "A complete healthcare management system with patient records, appointment scheduling, billing, and telemedicine capabilities. Built with security and HIPAA compliance in mind.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description: "Real-time financial analytics platform",
      fullDescription: "A sophisticated financial dashboard providing real-time market data, portfolio tracking, and advanced analytics. Features interactive charts, risk assessment, and automated reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
      technologies: ["Angular", "Express.js", "MySQL", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Learning Management System",
      description: "Online education platform with interactive features",
      fullDescription: "A comprehensive LMS with course creation tools, student progress tracking, interactive quizzes, video streaming, and certificate generation. Supports multiple learning formats.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3",
      technologies: ["React", "Firebase", "WebRTC", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description: "AI-powered social media management tool",
      fullDescription: "An intelligent social media analytics platform that provides insights, content scheduling, sentiment analysis, and performance tracking across multiple platforms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
      technologies: ["Next.js", "Python", "TensorFlow", "Redis"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "IoT Monitoring System",
      description: "Real-time IoT device management platform",
      fullDescription: "A scalable IoT monitoring system for industrial applications with real-time data visualization, predictive maintenance alerts, and remote device control capabilities.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3",
      technologies: ["React", "MQTT", "InfluxDB", "Grafana"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const openProjectDetails = (project: typeof projects[0]) => {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${project.title} - Pionavix</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gray-50">
          <div class="min-h-screen py-12">
            <div class="max-w-4xl mx-auto px-4">
              <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover">
                <div class="p-8">
                  <h1 class="text-3xl font-bold text-gray-900 mb-4">${project.title}</h1>
                  <p class="text-lg text-gray-600 mb-6">${project.fullDescription}</p>
                  <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-3">Technologies Used:</h3>
                    <div class="flex flex-wrap gap-2">
                      ${project.technologies.map(tech => `<span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">${tech}</span>`).join('')}
                    </div>
                  </div>
                  <div class="flex gap-4">
                    <a href="${project.liveUrl}" class="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      Live Demo
                    </a>
                    <a href="${project.githubUrl}" class="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `);
      newWindow.document.close();
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-sm font-medium mb-4">
            Our Work
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise in creating innovative digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg dark:bg-gray-800 cursor-pointer">
              <div onClick={() => openProjectDetails(project)}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                    <ExternalLink className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    View Details
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
