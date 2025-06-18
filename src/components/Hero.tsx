
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Typed from 'typed.js';

const Hero = () => {
  const { t } = useLanguage();
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          t('digitalFuture'),
          'Business Solutions',
          'Innovation Excellence',
          'Tech Transformation'
        ],
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        smartBackspace: true,
      });

      return () => typed.destroy();
    }
  }, [t]);

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 min-h-screen flex items-center overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(147,51,234,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.15),transparent_60%)]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-float delay-1000 blur-xl"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 dark:bg-gradient-to-r dark:from-purple-900/30 dark:via-pink-900/30 dark:to-blue-900/30 text-purple-800 dark:text-purple-300 text-sm font-semibold shadow-2xl backdrop-blur-sm border-2 border-purple-200/50 dark:border-purple-700/50 hover:shadow-purple-500/25 transition-all duration-500 group">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-4 animate-pulse shadow-lg"></div>
                <span className="group-hover:scale-105 transition-transform duration-300">{t('digitalInnovationExperts')}</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
                {t('transformYour')}
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  <span ref={typedRef}></span>
                </span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl animate-slide-up">
                {t('heroDescription')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-slide-up">
              <Button size="lg" className="group bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-500 text-lg px-10 py-6 rounded-2xl">
                {t('getStartedToday')}
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>

            <div className="flex items-center gap-12 pt-8 animate-slide-up">
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{t('projectsDelivered')}</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{t('clientSatisfaction')}</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{t('yearsExperience')}</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-right">
            <div className="relative z-10 animate-float">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-700 border-4 border-purple-200/30 dark:border-purple-700/30">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Digital Innovation"
                  className="rounded-3xl transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 via-transparent to-pink-600/20 rounded-3xl"></div>
              </div>
            </div>
            
            {/* Enhanced floating elements */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-morph blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full opacity-20 animate-morph delay-1000 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
