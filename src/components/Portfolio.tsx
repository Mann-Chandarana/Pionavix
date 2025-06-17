
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Portfolio = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features",
      fullDescription: "A comprehensive e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, inventory management, real-time analytics, advanced search capabilities, personalized recommendations, and mobile-responsive design. The platform supports multi-vendor functionality, automated order processing, and sophisticated reporting tools.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
      features: ["Multi-vendor support", "Real-time analytics", "Payment integration", "Inventory management"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description: "Digital solution for healthcare providers",
      fullDescription: "A complete healthcare management system with patient records, appointment scheduling, billing, and telemedicine capabilities. Built with security and HIPAA compliance in mind. Features include electronic health records, prescription management, insurance verification, and comprehensive reporting dashboard.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker", "JWT", "FastAPI"],
      features: ["HIPAA compliant", "Telemedicine", "EHR integration", "Billing system"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description: "Real-time financial analytics platform",
      fullDescription: "A sophisticated financial dashboard providing real-time market data, portfolio tracking, and advanced analytics. Features interactive charts, risk assessment, automated reporting, algorithmic trading capabilities, and comprehensive market analysis tools.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      technologies: ["Angular", "Express.js", "MySQL", "Chart.js", "WebSocket", "Redis"],
      features: ["Real-time data", "Risk analysis", "Portfolio tracking", "Market insights"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Learning Management System",
      description: "Online education platform with interactive features",
      fullDescription: "A comprehensive LMS with course creation tools, student progress tracking, interactive quizzes, video streaming, certificate generation, and virtual classroom capabilities. Supports multiple learning formats including live sessions, recorded content, and interactive assessments.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      technologies: ["React", "Firebase", "WebRTC", "AWS", "Stripe", "Socket.io"],
      features: ["Virtual classrooms", "Progress tracking", "Certificate generation", "Interactive quizzes"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description: "AI-powered social media management tool",
      fullDescription: "An intelligent social media analytics platform that provides insights, content scheduling, sentiment analysis, performance tracking across multiple platforms, influencer identification, and automated content optimization using machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      technologies: ["Next.js", "Python", "TensorFlow", "Redis", "OpenAI", "MongoDB"],
      features: ["AI-powered insights", "Multi-platform support", "Sentiment analysis", "Content optimization"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "IoT Monitoring System",
      description: "Real-time IoT device management platform",
      fullDescription: "A scalable IoT monitoring system for industrial applications with real-time data visualization, predictive maintenance alerts, remote device control capabilities, energy monitoring, and comprehensive analytics dashboard for operational efficiency.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      technologies: ["React", "MQTT", "InfluxDB", "Grafana", "Docker", "Kubernetes"],
      features: ["Real-time monitoring", "Predictive maintenance", "Remote control", "Energy optimization"],
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
          <style>
            body { font-family: 'Inter', sans-serif; }
            .gradient-bg { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
            .card-hover { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
            .card-hover:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
          </style>
        </head>
        <body class="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
          <div class="min-h-screen py-12">
            <div class="max-w-6xl mx-auto px-4">
              <div class="bg-white rounded-3xl shadow-2xl overflow-hidden card-hover">
                <!-- Hero Section -->
                <div class="relative h-80 overflow-hidden">
                  <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div class="absolute bottom-8 left-8 text-white">
                    <h1 class="text-4xl font-bold mb-2">${project.title}</h1>
                    <p class="text-xl opacity-90">${project.description}</p>
                  </div>
                </div>
                
                <!-- Content -->
                <div class="p-10">
                  <!-- Description -->
                  <div class="mb-10">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                    <p class="text-lg text-gray-600 leading-relaxed">${project.fullDescription}</p>
                  </div>
                  
                  <!-- Key Features -->
                  <div class="mb-10">
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                      ${project.features.map(feature => `
                        <div class="flex items-center p-4 bg-purple-50 rounded-lg">
                          <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                          <span class="text-gray-700 font-medium">${feature}</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                  
                  <!-- Technologies -->
                  <div class="mb-10">
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
                    <div class="flex flex-wrap gap-3">
                      ${project.technologies.map(tech => `
                        <span class="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow">${tech}</span>
                      `).join('')}
                    </div>
                  </div>
                  
                  <!-- Action Buttons -->
                  <div class="flex gap-4 pt-6 border-t border-gray-200">
                    <a href="${project.liveUrl}" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium">
                      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      Live Demo
                    </a>
                    <a href="${project.githubUrl}" class="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-purple-400 hover:text-purple-600 transition-all duration-300 font-medium">
                      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
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
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-300 text-sm font-medium mb-6 shadow-lg backdrop-blur-sm">
            {t('ourWork')}
          </div>
          <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('featuredProjects')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('portfolioDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg dark:bg-gray-800 cursor-pointer overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div onClick={() => openProjectDetails(project)} className="h-full">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-6">
                    <div className="flex gap-2">
                      <ExternalLink className="h-5 w-5 text-white" />
                      <Github className="h-5 w-5 text-white" />
                    </div>
                    <ArrowRight className="h-6 w-6 text-white transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  {/* Gradient overlay for hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 text-purple-800 dark:text-purple-300 rounded-full text-xs font-medium border border-purple-200 dark:border-purple-700">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 border-purple-200 dark:border-purple-700">
                    {t('viewDetails')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
