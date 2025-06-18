
import { useParams, Navigate } from "react-router-dom";
import ProjectDetail from "@/components/ProjectDetail";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  const projects = [
    {
      id: 1,
      title: "AI Analytics Dashboard",
      description: "A comprehensive analytics solution with advanced insights and real-time data visualization.",
      detailedDescription: "An advanced analytics platform that leverages artificial intelligence and machine learning to transform raw business data into actionable insights. The system processes large datasets in real-time, provides predictive analytics, and offers customizable dashboards for different stakeholders.",
      image: "/lovable-uploads/82f7817c-77ac-436c-93a3-1820e035c4e5.png",
      technologies: ["React", "Node.js", "MongoDB", "TensorFlow"],
      timeline: "8 months",
      teamSize: "6 developers",
      completed: "January 2024",
      services: ["AI/ML Solutions", "Web Development"],
      features: [
        "Real-time data processing",
        "Predictive analytics models",
        "Interactive data visualizations",
        "Customizable dashboards",
        "Advanced reporting system",
        "Machine learning algorithms"
      ]
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description: "Digital healthcare platform streamlining patient records, appointments, and medical workflow processes.",
      detailedDescription: "A comprehensive digital healthcare platform designed to streamline patient records, appointment scheduling, and medical workflow processes. The system integrates with existing medical equipment and provides secure access to patient data.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Python", "PostgreSQL", "AWS"],
      timeline: "12 months",
      teamSize: "8 developers",
      completed: "March 2024",
      services: ["Healthcare Solutions", "Cloud Infrastructure"],
      features: [
        "Patient record management",
        "Appointment scheduling",
        "Medical workflow automation",
        "Secure data encryption",
        "Real-time notifications",
        "Integration with medical devices"
      ]
    },
    {
      id: 3,
      title: "Learning Management Platform",
      description: "Interactive educational platform with course management, video streaming, and progress tracking capabilities.",
      detailedDescription: "An interactive educational platform featuring comprehensive course management, high-quality video streaming, and detailed progress tracking capabilities. The platform supports multiple learning formats and provides analytics for educators.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "GraphQL", "Docker"],
      timeline: "10 months",
      teamSize: "5 developers",
      completed: "February 2024",
      services: ["Education Technology", "Video Streaming"],
      features: [
        "Course management system",
        "HD video streaming",
        "Progress tracking",
        "Interactive quizzes",
        "Student analytics",
        "Mobile responsive design"
      ]
    }
  ];

  const project = projects.find(p => p.id === parseInt(id || "0"));
  
  if (!project) {
    return <Navigate to="/" replace />;
  }

  return <ProjectDetail project={project} />;
};

export default ProjectDetailPage;
