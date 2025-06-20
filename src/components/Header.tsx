
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

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
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl py-2' 
        : 'bg-gray-900/98 backdrop-blur-xl border-b border-gray-700/50 shadow-xl py-3'
    }`}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-10' : 'h-12'}`}>
          <div className="flex items-center">
            <div className="relative group cursor-pointer">
              {/* New modern logo */}
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-700"></div>
              
              <div className="relative flex items-center space-x-3 bg-gradient-to-br from-gray-800 via-gray-900 to-black px-4 py-2 rounded-3xl border border-blue-500/30 shadow-2xl group-hover:shadow-blue-500/40 transition-all duration-700 backdrop-blur-sm">
                {/* Logo icon */}
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-purple-400/30 rounded-2xl blur opacity-80 group-hover:opacity-100 transition duration-500"></div>
                  <div className={`relative ${scrolled ? 'w-8 h-8' : 'w-10 h-10'} bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 shadow-2xl border border-blue-400/50`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                    <span className={`relative text-white font-bold ${scrolled ? 'text-sm' : 'text-lg'} tracking-wider`}>P</span>
                    <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full shadow-lg"></div>
                  </div>
                </div>
                
                {/* Company name */}
                <div className={`transition-all duration-500 ${scrolled ? 'text-lg' : 'text-xl'} font-bold`}>
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-indigo-300 group-hover:to-purple-300 transition-all duration-700 tracking-wide">
                    ionavix
                  </span>
                </div>
                
                <div className="w-1 h-1 bg-gradient-to-r from-blue-400/60 to-indigo-400/60 rounded-full shadow-lg animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-semibold relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-yellow-400" />
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                className="data-[state=checked]:bg-blue-600"
              />
              <Moon className="h-4 w-4 text-blue-400" />
            </div>
            
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold px-4 py-1 text-xs text-white border border-blue-500/30">
              {t('getStarted')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="border-gray-600 bg-gray-800/50 shadow-lg p-2 text-gray-300 hover:text-blue-400 hover:border-blue-500/50"
            >
              {isMenuOpen ? <X className="h-3 w-3" /> : <Menu className="h-3 w-3" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700 animate-slide-down bg-gray-900/95 backdrop-blur-xl rounded-b-2xl shadow-2xl">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors font-semibold py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Theme Toggle */}
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-300 font-semibold">Theme</span>
                <div className="flex items-center space-x-2">
                  <Sun className="h-4 w-4 text-yellow-400" />
                  <Switch
                    checked={theme === 'dark'}
                    onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                    className="data-[state=checked]:bg-blue-600"
                  />
                  <Moon className="h-4 w-4 text-blue-400" />
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 pt-3">
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold shadow-xl text-xs text-white">
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
