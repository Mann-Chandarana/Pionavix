
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header = ({ isDark, toggleTheme }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? `${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-xl border-b ${isDark ? 'border-gray-800' : 'border-gray-200'} shadow-lg` 
        : `${isDark ? 'bg-transparent' : 'bg-transparent'}`
    }`}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-16 py-2' : 'h-20 py-4'}`}>
          <div className="flex items-center">
            <div className={`flex items-center space-x-4 transition-all duration-500 ${isScrolled ? 'scale-90' : 'scale-100'} group cursor-pointer`}>
              {/* Enhanced Pionavix Logo with hover effects */}
              <div className="relative">
                <div className={`${isScrolled ? 'w-10 h-10' : 'w-12 h-12'} rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center shadow-xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl`}>
                  <div className="relative">
                    <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                      <div className="w-3 h-3 bg-gradient-to-br from-blue-600 to-purple-700 rounded-md transition-all duration-300 group-hover:scale-125"></div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse group-hover:scale-150 transition-all duration-300"></div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 opacity-20 blur-lg group-hover:opacity-60 group-hover:blur-xl transition-all duration-500"></div>
              </div>
              
              <div className={`transition-all duration-500 ${isScrolled ? 'text-xl' : 'text-2xl'} font-bold tracking-tight relative h-12 flex flex-col justify-center`}>
                {/* Main Text - enhanced hover effects */}
                <div className="transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-95">
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'} transition-all duration-300 group-hover:text-blue-500`}>Piona</span>
                  <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:via-pink-500 group-hover:to-blue-500 transition-all duration-500">
                    vix
                  </span>
                </div>
                
                {/* Tagline - enhanced animation */}
                <div className="absolute top-8 left-0 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-2">
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'} font-medium whitespace-nowrap group-hover:text-purple-500 transition-all duration-300`}>
                    Innovation • Excellence
                  </div>
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
                className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-all duration-300 font-medium relative group py-2`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400'
              }`}
            >
              <div className="relative z-10">
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </div>
            </Button>
            
            <Button 
              size="sm" 
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className={`${isDark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'} transition-all duration-300`}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isDark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'} transition-all duration-300`}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} backdrop-blur-xl`}>
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors font-medium py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Get Started
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
