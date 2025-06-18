
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    { name: t('home'), href: "#home" },
    { name: t('services'), href: "#services" },
    { name: t('portfolio'), href: "#portfolio" },
    { name: t('about'), href: "#about" },
    { name: t('reviews'), href: "#reviews" },
    { name: t('contact'), href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="relative group cursor-pointer">
              {/* Enhanced logo background */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500 group-hover:blur-lg"></div>
              
              {/* Logo container */}
              <div className="relative flex items-center space-x-3 bg-white dark:bg-gray-900 px-6 py-3 rounded-2xl border border-purple-200/50 dark:border-purple-700/50 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                {/* Icon */}
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <span className="text-white font-bold text-xl">P</span>
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
                </div>
                
                {/* Company name */}
                <div className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:from-purple-700 group-hover:via-blue-700 group-hover:to-cyan-700 transition-all duration-500">
                    ionavix
                  </span>
                </div>
                
                {/* Animated dot */}
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 font-semibold relative group text-lg"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="border-purple-200 dark:border-purple-700 hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/50 transition-all duration-300 font-semibold"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language.toUpperCase()}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="border-purple-200 dark:border-purple-700 hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/50 transition-all duration-300"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold px-6">
              {t('getStarted')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="border-purple-200 dark:border-purple-700"
            >
              <Globe className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="border-purple-200 dark:border-purple-700"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="border-purple-200 dark:border-purple-700"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-200 dark:border-gray-700 animate-slide-down">
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
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 font-semibold">
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
