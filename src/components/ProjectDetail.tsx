
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Clock } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-indigo-900/20 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          onClick={() => navigate('/')}
          variant="ghost"
          className="mb-8 text-gray-300 hover:text-white hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>

            {/* Project Title */}
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {project.title}
            </h1>

            {/* Project Description */}
            <p className="text-xl text-gray-300 leading-relaxed">
              {project.detailedDescription}
            </p>

            {/* Key Features */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-white">Key Features</h3>
                <div className="grid gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-white">Project Info</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-blue-400" />
                    <div>
                      <div className="text-sm text-gray-400">Timeline</div>
                      <div className="font-semibold text-white">{project.timeline}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-green-400" />
                    <div>
                      <div className="text-sm text-gray-400">Team Size</div>
                      <div className="font-semibold text-white">{project.teamSize}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-purple-400" />
                    <div>
                      <div className="text-sm text-gray-400">Completed</div>
                      <div className="font-semibold text-white">{project.completed}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-2 bg-green-600/20 text-green-300 rounded-lg text-sm border border-green-600/30"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Live Demo
              </Button>
              <Button variant="outline" className="w-full border-slate-600 text-gray-300 hover:bg-slate-800 py-3">
                <Github className="h-4 w-4 mr-2" />
                View Source Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
