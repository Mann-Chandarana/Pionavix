
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'de';
  t: (key: string) => string;
  setLanguage: (lang: 'en' | 'de') => void;
}

const translations = {
  en: {
    // Header
    home: 'Home',
    services: 'Services',
    portfolio: 'Portfolio',
    about: 'About',
    reviews: 'Reviews',
    contact: 'Contact',
    getStarted: 'Get Started',
    
    // Hero Section
    digitalInnovationExperts: '🚀 Digital Innovation Experts',
    transformYour: 'Transform Your',
    digitalFuture: 'Digital Future',
    heroDescription: 'We craft cutting-edge digital solutions that drive growth, enhance user experience, and transform businesses across industries.',
    getStartedToday: 'Get Started Today',
    watchDemo: 'Watch Demo',
    projectsDelivered: 'Projects Delivered',
    clientSatisfaction: 'Client Satisfaction',
    yearsExperience: 'Years Experience',
    
    // Services
    ourServices: 'Our Services',
    servicesTitle: 'What We Do Best',
    servicesDescription: 'We offer comprehensive digital solutions tailored to your business needs.',
    
    // Portfolio
    ourWork: 'Our Work',
    featuredProjects: 'Featured Projects',
    portfolioDescription: 'Explore our portfolio of successful projects that showcase our expertise in creating innovative digital solutions.',
    viewDetails: 'View Details',
    
    // About
    aboutUs: 'About Us',
    
    // Reviews
    clientTestimonials: 'Client Testimonials',
    whatClientsSay: 'What Our Clients Say',
    reviewsDescription: "Don't just take our word for it. Here's what our satisfied clients have to say about working with Pionavix.",
    
    // Contact
    getInTouch: 'Get In Touch',
    contactTitle: 'Ready to Start Your Project?',
    contactDescription: 'Contact us today and let\'s discuss how we can help transform your business.',
    
    // Footer
    footerDescription: 'Transforming businesses through innovative digital solutions.',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Info',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.',
  },
  de: {
    // Header
    home: 'Startseite',
    services: 'Dienstleistungen',
    portfolio: 'Portfolio',
    about: 'Über uns',
    reviews: 'Bewertungen',
    contact: 'Kontakt',
    getStarted: 'Loslegen',
    
    // Hero Section
    digitalInnovationExperts: '🚀 Digitale Innovationsexperten',
    transformYour: 'Verwandeln Sie Ihre',
    digitalFuture: 'Digitale Zukunft',
    heroDescription: 'Wir entwickeln modernste digitale Lösungen, die Wachstum fördern, die Benutzererfahrung verbessern und Unternehmen branchenübergreifend transformieren.',
    getStartedToday: 'Heute beginnen',
    watchDemo: 'Demo ansehen',
    projectsDelivered: 'Projekte geliefert',
    clientSatisfaction: 'Kundenzufriedenheit',
    yearsExperience: 'Jahre Erfahrung',
    
    // Services
    ourServices: 'Unsere Dienstleistungen',
    servicesTitle: 'Was wir am besten können',
    servicesDescription: 'Wir bieten umfassende digitale Lösungen, die auf Ihre Geschäftsanforderungen zugeschnitten sind.',
    
    // Portfolio
    ourWork: 'Unsere Arbeit',
    featuredProjects: 'Ausgewählte Projekte',
    portfolioDescription: 'Entdecken Sie unser Portfolio erfolgreicher Projekte, die unsere Expertise bei der Entwicklung innovativer digitaler Lösungen zeigen.',
    viewDetails: 'Details anzeigen',
    
    // About
    aboutUs: 'Über uns',
    
    // Reviews
    clientTestimonials: 'Kundenstimmen',
    whatClientsSay: 'Was unsere Kunden sagen',
    reviewsDescription: 'Verlassen Sie sich nicht nur auf unser Wort. Hier ist, was unsere zufriedenen Kunden über die Zusammenarbeit mit Pionavix sagen.',
    
    // Contact
    getInTouch: 'Kontakt aufnehmen',
    contactTitle: 'Bereit, Ihr Projekt zu starten?',
    contactDescription: 'Kontaktieren Sie uns noch heute und lassen Sie uns besprechen, wie wir Ihr Unternehmen transformieren können.',
    
    // Footer
    footerDescription: 'Unternehmen durch innovative digitale Lösungen transformieren.',
    quickLinks: 'Schnelllinks',
    contactInfo: 'Kontaktinfo',
    followUs: 'Folgen Sie uns',
    allRightsReserved: 'Alle Rechte vorbehalten.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'de'>('en');

  useEffect(() => {
    // Detect user's location based on IP (simplified version)
    const detectLanguage = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.country_code === 'DE' || data.country_code === 'AT' || data.country_code === 'CH') {
          setLanguage('de');
        }
      } catch (error) {
        console.log('Language detection failed, using default');
      }
    };

    detectLanguage();
  }, []);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
