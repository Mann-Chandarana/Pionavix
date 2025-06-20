
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

interface FooterProps {
  isDark: boolean;
}

const Footer = ({ isDark }: FooterProps) => {
  return (
    <footer className={`py-12 ${isDark ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-100 border-t border-gray-200'}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Pionavix
            </div>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
              Transforming businesses through innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className={`w-5 h-5 ${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} cursor-pointer transition-colors`} />
              <Twitter className={`w-5 h-5 ${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} cursor-pointer transition-colors`} />
              <Linkedin className={`w-5 h-5 ${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} cursor-pointer transition-colors`} />
              <Github className={`w-5 h-5 ${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} cursor-pointer transition-colors`} />
            </div>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Web Development</a></li>
              <li><a href="#" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Mobile Development</a></li>
              <li><a href="#" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Digital Marketing</a></li>
              <li><a href="#" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>About</a></li>
              <li><a href="#portfolio" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Portfolio</a></li>
              <li><a href="#contact" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Contact</a></li>
              <li><a href="#" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact</h4>
            <ul className="space-y-2">
              <li className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>hello@pionavix.com</li>
              <li className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>+1 (555) 123-4567</li>
              <li className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className={`border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} mt-8 pt-8 text-center`}>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2024 Pionavix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
