
import { Facebook, Twitter, Linkedin, Instagram, Mail, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              <span className="text-3xl">P</span>ionavix
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming businesses through innovative digital solutions. We craft experiences that drive growth and success in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 group">
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 group">
                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 group">
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 group">
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300 group">
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Web Development</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">AI & Automation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Our Team</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Portfolio</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <span>hello@pionavix.com</span>
              </div>
              <div>
                <p>123 Innovation Street</p>
                <p>Tech City, TC 12345</p>
              </div>
              <div>
                <p className="text-white font-semibold">+1 (555) 123-4567</p>
              </div>
              <div className="pt-4">
                <div className="text-sm text-gray-500">Business Hours:</div>
                <div className="text-sm">Monday - Friday: 9AM - 6PM</div>
                <div className="text-sm">Weekend: Available for emergencies</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Pionavix. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
