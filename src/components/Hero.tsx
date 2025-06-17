
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ThreeEmoji from "./ThreeEmoji";
import Typed from 'typed.js';

const Hero = () => {
  const { t } = useLanguage();
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [t('digitalFuture')],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      });

      return () => typed.destroy();
    }
  }, [t]);

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 min-h-screen flex items-center overflow-hidden">
      <ThreeEmoji />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-left">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 text-sm font-medium hover-glow animate-pulse-glow">
                {t('digitalInnovationExperts')}
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                {t('transformYour')}
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent block">
                  <span ref={typedRef}></span>
                </span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl animate-slide-up">
                {t('heroDescription')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <Button size="lg" className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover-lift animate-pulse-glow">
                {t('getStartedToday')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group border-purple-200 dark:border-purple-700 hover-lift">
                <Play className="mr-2 h-4 w-4" />
                {t('watchDemo')}
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8 animate-slide-up">
              <div className="text-center hover-scale">
                <div className="text-3xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('projectsDelivered')}</div>
              </div>
              <div className="text-center hover-scale">
                <div className="text-3xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('clientSatisfaction')}</div>
              </div>
              <div className="text-center hover-scale">
                <div className="text-3xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('yearsExperience')}</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-right">
            <div className="relative z-10 animate-float hover-lift">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Digital Innovation"
                  className="rounded-2xl transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 animate-morph"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 animate-morph delay-1000"></div>
            <div className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
