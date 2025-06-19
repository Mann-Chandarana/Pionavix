
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('home'), href: "#home" },
    { name: t('services'), href: "#services" },
    { name: t('portfolio'), href: "#portfolio" },
    { name: t('about'), href: "#about" },
    { name: t('reviews'), href: "#reviews" },
    { name: t('contact'), href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-2xl py-2' 
        : 'bg-white/98 backdrop-blur-xl border-b border-gray-200/50 shadow-xl py-3'
    }`}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-12' : 'h-14'}`}>
          <div className="flex items-center">
            <div className="relative group cursor-pointer">
              {/* New attractive logo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-700 group-hover:blur-xl"></div>
              
              <div className="relative flex items-center space-x-2 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-4 py-2 rounded-2xl border border-blue-300/30 shadow-xl group-hover:shadow-blue-500/30 transition-all duration-700 backdrop-blur-sm">
                {/* Logo icon */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-xl blur opacity-70 group-hover:opacity-90 transition duration-500"></div>
                  <div className={`relative ${scrolled ? 'w-7 h-7' : 'w-8 h-8'} bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 shadow-lg`}>
                    <span className={`text-white font-bold ${scrolled ? 'text-sm' : 'text-base'}`}>P</span>
                    <div className="absolute inset-0 bg-white/20 rounded-xl"></div>
                  </div>
                </div>
                
                {/* Company name */}
                <div className={`transition-all duration-500 ${scrolled ? 'text-lg' : 'text-xl'} font-bold`}>
                  <span className="text-white group-hover:text-blue-200 transition-all duration-700">
                    ionavix
                  </span>
                </div>
                
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-blue-600 transition-all duration-300 font-semibold relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 font-semibold shadow-lg text-xs px-3 py-1"
            >
              <Globe className="h-3 w-3 mr-1" />
              {language.toUpperCase()}
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold px-4 py-1 text-xs">
              {t('getStarted')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="border-blue-200 shadow-lg p-2"
            >
              <Globe className="h-3 w-3" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="border-blue-200 shadow-lg p-2"
            >
              {isMenuOpen ? <X className="h-3 w-3" /> : <Menu className="h-3 w-3" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-slide-down bg-white/95 backdrop-blur-xl rounded-b-2xl shadow-2xl">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-blue-600 transition-colors font-semibold py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-3">
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold shadow-xl text-xs">
                  {t('getStarted')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
