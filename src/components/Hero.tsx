
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 text-sm font-medium">
                🚀 Digital Innovation Experts
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                Transform Your
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {" "}Digital Future
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                We craft cutting-edge digital solutions that drive growth, enhance user experience, and transform businesses across industries.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group border-purple-200 dark:border-purple-700">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Digital Innovation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
