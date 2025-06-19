
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Clock, CheckCircle2 } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Header with back button */}
      <div className="bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 py-6">
        <div className="container mx-auto px-4">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="text-gray-300 hover:text-white hover:bg-white/10 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-96 lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
          </div>

          {/* Project Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {project.detailedDescription}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg">
                <ExternalLink className="h-5 w-5 mr-2" />
                View Live Demo
              </Button>
              <Button variant="outline" className="border-gray-400 text-gray-700 hover:bg-gray-100 px-8 py-3 text-lg">
                <Github className="h-5 w-5 mr-2" />
                View Source Code
              </Button>
            </div>
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Project Meta */}
          <Card className="bg-gray-900 border border-gray-700 rounded-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Project Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Calendar className="h-6 w-6 text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-400">Timeline</div>
                    <div className="font-semibold text-white text-lg">{project.timeline}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Users className="h-6 w-6 text-green-400" />
                  <div>
                    <div className="text-sm text-gray-400">Team Size</div>
                    <div className="font-semibold text-white text-lg">{project.teamSize}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6 text-purple-400" />
                  <div>
                    <div className="text-sm text-gray-400">Completed</div>
                    <div className="font-semibold text-white text-lg">{project.completed}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card className="bg-white border border-gray-200 rounded-2xl shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-xl text-sm border border-blue-200 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="bg-gray-900 border border-gray-700 rounded-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Services Provided</h3>
              <div className="space-y-3">
                {project.services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <Card className="bg-white border border-gray-200 rounded-2xl shadow-lg">
          <CardContent className="p-12">
            <h3 className="text-3xl font-bold mb-10 text-gray-900 text-center">Key Features & Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">{feature}</span>
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
