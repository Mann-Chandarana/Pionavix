
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Clock, CheckCircle2, Star, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    timeline: string;
    teamSize: string;
    completed: string;
    services: string[];
    features: string[];
    detailedDescription: string;
  };
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-gray-900 dark:via-gray-800 dark:to-black">
      {/* Header with back button */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-xl border-b border-cyan-500/20 py-8 shadow-2xl">
        <div className="container mx-auto px-4">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="text-cyan-400 hover:text-white hover:bg-cyan-500/20 mb-4 border border-cyan-500/30 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section with Cyberpunk Style */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-3xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-cyan-500/10 rounded-2xl"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-cyan-400 rounded-full animate-spin-slow"></div>
            </div>
          </div>

          {/* Project Info with Neon Styling */}
          <div className="flex flex-col justify-center space-y-8 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-8 w-8 text-cyan-400" />
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full text-cyan-400 text-sm font-medium border border-cyan-500/30">
                  Featured Project
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {project.detailedDescription}
              </p>
            </div>

            {/* Action Buttons with Neon Effect */}
            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-3 text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 border border-cyan-400/30">
                <ExternalLink className="h-5 w-5 mr-2" />
                View Live Demo
              </Button>
              <Button className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-3 text-lg shadow-2xl hover:shadow-xl transition-all duration-300 border border-gray-600">
                <Github className="h-5 w-5 mr-2" />
                Source Code
              </Button>
            </div>
          </div>
        </div>

        {/* Project Details Grid with Cyberpunk Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Project Meta with Neon Border */}
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>
            <CardContent className="p-8 relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-3">
                <Star className="h-6 w-6" />
                Project Details
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl backdrop-blur-sm border border-cyan-500/20">
                  <Calendar className="h-6 w-6 text-cyan-400" />
                  <div>
                    <div className="text-sm text-gray-400">Timeline</div>
                    <div className="font-semibold text-white text-lg">{project.timeline}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-xl backdrop-blur-sm border border-green-500/20">
                  <Users className="h-6 w-6 text-green-400" />
                  <div>
                    <div className="text-sm text-gray-400">Team Size</div>
                    <div className="font-semibold text-white text-lg">{project.teamSize}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl backdrop-blur-sm border border-purple-500/20">
                  <Clock className="h-6 w-6 text-purple-400" />
                  <div>
                    <div className="text-sm text-gray-400">Completed</div>
                    <div className="font-semibold text-white text-lg">{project.completed}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technologies with Glow Effect */}
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30 rounded-3xl shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-xl text-sm border border-blue-500/30 font-semibold hover:scale-105 transition-transform duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Services with Gradient */}
          <Card className="bg-gradient-to-br from-purple-900/80 to-blue-900/80 border border-purple-500/30 rounded-3xl shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Services Provided</h3>
              <div className="space-y-4">
                {project.services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-purple-400/20">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-white font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Features with Cyberpunk Style */}
        <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
          <CardContent className="p-12">
            <h3 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Key Features & Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.features.map((feature, index) => (
                <div key={index} className="group flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
                  <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-cyan-400/50"></div>
                  <span className="text-gray-300 leading-relaxed font-medium group-hover:text-white transition-colors duration-300">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetail;
