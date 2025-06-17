
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Target } from "lucide-react";

const About = () => {
  const achievements = [
    "500+ Successful Projects Delivered",
    "98% Client Retention Rate",
    "50+ Industry Awards",
    "24/7 Technical Support"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                About Our Company
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Building Digital Excellence Since 2019
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We are a passionate team of digital innovators, developers, and strategists committed to transforming businesses through cutting-edge technology solutions. Our expertise spans across multiple domains, ensuring comprehensive digital transformation for our clients.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From startups to enterprise-level organizations, we've helped businesses across various industries achieve their digital goals and stay ahead of the competition.
              </p>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
              Learn More About Us
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Expert Team</h3>
                <p className="text-gray-600 text-sm">Skilled professionals with years of industry experience</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Quality Assured</h3>
                <p className="text-gray-600 text-sm">Rigorous testing and quality control processes</p>
              </div>
            </div>

            <div className="space-y-6 pt-12">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Results Driven</h3>
                <p className="text-gray-600 text-sm">Focused on delivering measurable business outcomes</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-2xl text-white">
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-blue-100 text-sm">Years of Excellence in Digital Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
