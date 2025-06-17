
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative flex items-center space-x-2 bg-white dark:bg-gray-900 px-4 py-2 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <div className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    ionavix
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 font-medium relative group"
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
              className="border-purple-200 dark:border-purple-700 hover:border-purple-400 transition-colors"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language.toUpperCase()}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="border-purple-200 dark:border-purple-700 hover:border-purple-400 transition-colors"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              {t('getStarted')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
            >
              <Globe className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600">
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
