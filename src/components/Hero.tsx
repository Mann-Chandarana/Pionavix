import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface HeroProps {
  isDark: boolean;
}

const Hero = ({ isDark }: HeroProps) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "Digital Future",
    "Business Growth",
    "User Experience",
    "Innovation Journey"
  ];

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const animate = () => {
      const time = Date.now() * 0.002;
      const yOffset = Math.sin(time) * 20;
      image.style.transform = `translateY(${yOffset}px)`;
    };

    const animationId = setInterval(animate, 16);
    return () => clearInterval(animationId);
  }, []);

  useEffect(() => {
    const currentText = texts[textIndex];
    const typingSpeed = isDeleting ? 50 : 80;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && currentIndex < currentText.length) {
        setDisplayedText(currentText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayedText(currentText.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isDeleting && currentIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, textIndex, texts]);

  return (
    <section className={`relative min-h-screen flex items-center transition-all duration-1000 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800' 
        : 'bg-gradient-to-br from-gray-800 via-gray-900 to-slate-800'
    }`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className={`inline-flex items-center px-4 py-2 rounded-full ${
                isDark ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-900/20 text-blue-200'
              } text-sm font-medium backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-lg`}>
                🚀 Digital Innovation Experts
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight transition-all duration-700 hover:scale-105 text-white">
                Transform Your
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-500 bg-clip-text text-transparent transition-all duration-500 hover:from-blue-300 hover:via-cyan-400 hover:to-indigo-400">
                  {displayedText}
                  <span className="typed-cursor">|</span>
                </span>
              </h1>
              <p className="text-xl leading-relaxed max-w-xl transition-all duration-500 hover:scale-[1.02] text-gray-300 hover:text-gray-200">
                We craft cutting-edge digital solutions that drive growth, enhance user experience, and transform businesses across industries.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="transition-all duration-300 hover:scale-110">
                <div className="text-3xl font-bold transition-colors duration-300 text-white hover:text-blue-300">500+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="transition-all duration-300 hover:scale-110">
                <div className="text-3xl font-bold transition-colors duration-300 text-white hover:text-blue-300">98%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div className="transition-all duration-300 hover:scale-110">
                <div className="text-3xl font-bold transition-colors duration-300 text-white hover:text-blue-300">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in" ref={imageRef} style={{ animationDelay: '300ms' }}>
            <div className="relative z-10 transition-all duration-500 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Digital Innovation"
                className="rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:shadow-purple-500/20"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
