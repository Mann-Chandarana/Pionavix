
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_60%)]"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-10 animate-slide-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-xl border border-blue-400/20 rounded-full text-blue-600 text-sm font-medium">
                <Zap className="h-4 w-4 mr-2" />
                Digital Innovation Experts
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span ref={typedRef} className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent"></span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                We craft cutting-edge digital solutions that drive growth, enhance user experience, and transform businesses across industries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200/50">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">150+</div>
                <div className="text-sm text-gray-500">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-sm text-gray-500">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">5+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-slide-right">
            <div className="relative">
              {/* Hero Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 hover:-translate-y-2">
                <img 
                  src="/lovable-uploads/a29dea34-b57a-410b-97a8-d46139cc2cbc.png" 
                  alt="Digital Innovation Team" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-2xl blur-xl animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-indigo-400/30 to-blue-400/30 rounded-2xl blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
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
