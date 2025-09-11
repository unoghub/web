import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Target, Eye, Heart } from 'lucide-react';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t.about.title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t.about.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-unog-blue/10 rounded-full mr-4">
                <Target className="h-8 w-8 text-unog-blue" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t.about.missionTitle}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t.about.mission}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-unog-purple/10 rounded-full mr-4">
                <Eye className="h-8 w-8 text-unog-purple" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t.about.visionTitle}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t.about.vision}
            </p>
          </div>
        </div>

        {/* Community Values */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-unog-gradient/10 px-8 py-4 rounded-full">
            <Heart className="h-6 w-6 text-unog-green mr-3" />
            <p className="text-gray-600">{t.about.communityValue}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
