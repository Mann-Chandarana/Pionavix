
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target, Lightbulb } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface AboutProps {
  isDark: boolean;
}

const About = ({ isDark }: AboutProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const techStacks = {
    frontend: {
      title: "Frontend",
      icon: "💻",
      technologies: ["React", "Vue.js", "Angular", "TypeScript", "Next.js"]
    },
    backend: {
      title: "Backend",
      icon: "⚙️",
      technologies: ["Node.js", "Python", "Java", "C#", ".NET"]
    },
    cloudDevops: {
      title: "Cloud & DevOps",
      icon: "☁️",
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"]
    },
    mobile: {
      title: "Mobile",
      icon: "📱",
      technologies: ["React Native", "Flutter", "iOS", "Android", "Ionic"]
    }
  };

  const values = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with years of experience in cutting-edge technologies.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control to ensure flawless deliverables.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on achieving your business objectives with measurable results.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Creative solutions that push boundaries and drive digital transformation.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-[#1a1f3a]">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            About <span className="text-purple-400">Pionavix</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left side - Description and Technology Stack */}
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                We are a team of passionate developers, designers, and strategists dedicated to creating exceptional digital experiences. Our mission is to transform your ideas into powerful, scalable solutions that drive business growth.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With a focus on innovation and excellence, we combine technical expertise with creative vision to deliver results that exceed expectations. Every project is an opportunity to push boundaries and create something extraordinary.
              </p>
            </div>

            {/* Technology Stack - 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(techStacks).map(([key, stack], index) => (
                <Card 
                  key={key}
                  className={`bg-[#2a2f4a]/80 border-gray-700/50 backdrop-blur-lg hover:border-purple-500/50 transition-all duration-500 hover:scale-105 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">{stack.icon}</span>
                      <h4 className="text-lg font-semibold text-white">
                        {stack.title}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {stack.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right side - Values Cards (vertically centered) */}
          <div className="flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className={`bg-[#2a2f4a]/80 border-gray-700/50 backdrop-blur-lg hover:border-purple-500/50 transition-all duration-300 hover:scale-105 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-4`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-3 text-white">
                      {value.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
