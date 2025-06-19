
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
  const { t } = useLanguage();
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Transform Your Digital Future",
        "Build Modern Applications", 
        "Create Stunning Websites",
        "Develop Smart Solutions"
      ],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.3),transparent_60%)]"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-10 animate-slide-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-xl border border-blue-600/30 rounded-full text-blue-300 text-sm font-medium">
                <Zap className="h-4 w-4 mr-2" />
                Digital Innovation Experts
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span ref={typedRef} className="bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent"></span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                We craft exceptional digital experiences through innovative web development, cutting-edge design, and strategic technology solutions that drive your business forward.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                {t('getStarted')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-600/20 px-8 py-4 text-lg font-semibold backdrop-blur-xl">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700/50">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">150+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative animate-slide-right">
            <div className="relative">
              {/* Main card */}
              <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Code className="h-8 w-8 text-blue-400" />
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full w-1/2"></div>
                    <div className="h-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full w-5/6"></div>
                  </div>
                  
                  <div className="flex gap-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-3 bg-gray-600/50 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-600/50 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-60 animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur-xl opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
