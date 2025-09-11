import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ShoppingBag, Clock } from 'lucide-react';

const MerchSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="merch" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            {t.merch.title}
          </h2>

          <div className="bg-gradient-to-br from-unog-green/10 via-unog-blue/10 to-unog-purple/10 rounded-3xl p-12 border border-gray-200">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="p-6 bg-unog-gradient rounded-full">
                  <ShoppingBag className="h-16 w-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 p-2 bg-yellow-400 rounded-full">
                  <Clock className="h-6 w-6 text-gray-800" />
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t.merch.comingSoon}
            </h3>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.merch.description}
            </p>

            {/* Preview Items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/50 rounded-lg p-6 backdrop-blur-sm">
                <div className="w-16 h-16 bg-unog-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">T</span>
                </div>
                <h4 className="font-semibold text-gray-900">{t.merch.items.tshirt.title}</h4>
                <p className="text-sm text-gray-600">{t.merch.items.tshirt.description}</p>
              </div>
              
              <div className="bg-white/50 rounded-lg p-6 backdrop-blur-sm">
                <div className="w-16 h-16 bg-unog-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <h4 className="font-semibold text-gray-900">{t.merch.items.sticker.title}</h4>
                <p className="text-sm text-gray-600">{t.merch.items.sticker.description}</p>
              </div>
              
              <div className="bg-white/50 rounded-lg p-6 backdrop-blur-sm">
                <div className="w-16 h-16 bg-unog-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">D</span>
                </div>
                <h4 className="font-semibold text-gray-900">{t.merch.items.deck.title}</h4>
                <p className="text-sm text-gray-600">{t.merch.items.deck.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchSection;
