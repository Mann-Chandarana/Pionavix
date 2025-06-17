
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Target, Rocket } from "lucide-react";

const About = () => {
  const achievements = [
    "500+ Successful Projects Delivered",
    "98% Client Retention Rate",
    "50+ Industry Awards",
    "24/7 Technical Support"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 text-sm font-medium mb-4">
                About Pionavix
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Building Digital Excellence Since 2019
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                We are a passionate team of digital innovators, developers, and strategists committed to transforming businesses through cutting-edge technology solutions. Our expertise spans across multiple domains, ensuring comprehensive digital transformation for our clients.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                From startups to enterprise-level organizations, we've helped businesses across various industries achieve their digital goals and stay ahead of the competition.
              </p>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{achievement}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300">
              Learn More About Us
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Expert Team</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Skilled professionals with years of industry experience</p>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Quality Assured</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Rigorous testing and quality control processes</p>
              </div>
            </div>

            <div className="space-y-6 pt-12">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Results Driven</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Focused on delivering measurable business outcomes</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-6 rounded-2xl text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-2">
                    <Rocket className="h-6 w-6 mr-2" />
                    <div className="text-3xl font-bold">5+</div>
                  </div>
                  <div className="text-blue-100 text-sm">Years of Excellence in Digital Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
