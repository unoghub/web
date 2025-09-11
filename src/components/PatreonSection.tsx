import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Heart, Users, Coffee, ArrowRight } from 'lucide-react';

const PatreonSection = () => {
  const { t } = useLanguage();

  return (
    <section id="patreon" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t.patreon.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.patreon.subtitle}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 mb-8">
            {/* Heart Icon with Animation */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="p-6 bg-unog-gradient rounded-full animate-pulse">
                  <Heart className="h-16 w-16 text-white fill-current" />
                </div>
              </div>
            </div>

            
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t.patreon.description}
            </p>

            

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-unog-gradient hover:opacity-90 transition-opacity text-white px-8 py-4 rounded-full text-lg font-semibold"
              onClick={() => window.open('https://unog.dev/patreon', '_blank')}
            >
              {t.patreon.supportButton}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <p className="text-sm text-gray-500 mt-4">
              {t.patreon.thankYou}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatreonSection;
