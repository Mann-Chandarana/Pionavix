
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
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
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-2xl py-2' 
        : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-xl py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-20'}`}>
          <div className="flex items-center">
            <div className="relative group cursor-pointer">
              {/* Enhanced logo with better gradients */}
              <div className="absolute -inset-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-700 group-hover:blur-xl animate-pulse"></div>
              
              <div className="relative flex items-center space-x-4 bg-gradient-to-br from-white via-purple-50 to-blue-50 dark:bg-gradient-to-br dark:from-gray-800 dark:via-purple-900/20 dark:to-blue-900/20 px-8 py-4 rounded-3xl border-2 border-purple-200/50 dark:border-purple-700/50 shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-700 backdrop-blur-sm">
                {/* Enhanced icon with better design */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-500"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 shadow-xl">
                    <span className="text-white font-bold text-2xl">P</span>
                    <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
                  </div>
                </div>
                
                {/* Enhanced company name */}
                <div className={`transition-all duration-500 ${scrolled ? 'text-3xl' : 'text-4xl'} font-bold`}>
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent group-hover:from-purple-700 group-hover:via-pink-700 group-hover:to-blue-700 transition-all duration-700">
                    ionavix
                  </span>
                </div>
                
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg"></div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 font-semibold relative group text-lg"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="border-purple-200 dark:border-purple-700 hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/50 transition-all duration-300 font-semibold shadow-lg"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language.toUpperCase()}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="border-purple-200 dark:border-purple-700 hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/50 transition-all duration-300 shadow-lg"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold px-6">
              {t('getStarted')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="border-purple-200 dark:border-purple-700 shadow-lg"
            >
              <Globe className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="border-purple-200 dark:border-purple-700 shadow-lg"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="border-purple-200 dark:border-purple-700 shadow-lg"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200 dark:border-gray-700 animate-slide-down bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-b-2xl shadow-2xl">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-semibold py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 font-semibold shadow-xl">
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
