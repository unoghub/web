import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Heart, 
  Sparkles, 
  ArrowRight, 
  Palette, 
  FileText, 
  Calendar, 
  Code,
  Target,
  Zap,
  Globe
} from 'lucide-react';

// Takım alanları ve ikonları
const teamAreas = [
  {
    id: 'organizasyon',
    icon: Calendar,
    color: 'bg-gradient-to-r from-green-400 to-green-600',
    hoverColor: 'hover:from-green-500 hover:to-green-700',
  },
  {
    id: 'sanat',
    icon: Palette,
    color: 'bg-gradient-to-r from-pink-400 to-pink-600',
    hoverColor: 'hover:from-pink-500 hover:to-pink-700',
  },
  {
    id: 'icerik',
    icon: FileText,
    color: 'bg-gradient-to-r from-blue-400 to-blue-600',
    hoverColor: 'hover:from-blue-500 hover:to-blue-700',
  },
  {
    id: 'yazilim',
    icon: Code,
    color: 'bg-gradient-to-r from-purple-400 to-purple-600',
    hoverColor: 'hover:from-purple-500 hover:to-purple-700',
  }
];



const VolunteersSection = () => {
  const { t } = useLanguage();

  // Takım açıklamaları
  const getTeamDescription = (teamId: string): string => {
    return t.volunteers.teamDescriptions[teamId as keyof typeof t.volunteers.teamDescriptions] || t.volunteers.teamDescriptions.organizasyon;
  };

  return (
    <section id="volunteers" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Başlık */}
          <div className="text-center mb-16 relative">
            {/* Arka plan animasyonu */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-20 left-1/4 w-64 h-64 bg-unog-green/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-32 right-1/4 w-48 h-48 bg-unog-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-unog-green/20 to-unog-purple/20 px-4 py-2 rounded-full mb-6 animate-bounce">
              <Sparkles className="h-5 w-5 text-unog-purple animate-spin" />
              <span className="text-sm font-semibold text-gray-700">
                {t.volunteers.newApplications}
              </span>
              <Zap className="h-5 w-5 text-unog-green animate-pulse" />
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-unog-green via-unog-blue to-unog-purple bg-clip-text text-transparent">
                {t.volunteers.title}
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.volunteers.heroDescription}
            </p>
          </div>

          {/* Takım Alanları */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              {t.volunteers.teamAreasTitle}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <Card 
                    key={area.id} 
                    className={`group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-2 animate-fade-in-up`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-8 text-center relative overflow-hidden">
                      {/* Arka plan gradient */}
                      <div className={`absolute inset-0 ${area.color} ${area.hoverColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      
                      {/* İkon */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${area.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      {/* Başlık */}
                      <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-gray-800 transition-colors">
                        {t.volunteers.teams?.[area.id] || area.id}
                      </h4>
                      
                      {/* Açıklama */}
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                        {getTeamDescription(area.id)}
                      </p>

                      {/* Hover efekti */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Motivasyon Bölümü */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {t.volunteers.motivationTitle}
              </h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {t.volunteers.motivationDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Sektörel Katkı */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{t.volunteers.motivationCards.sector.title}</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t.volunteers.motivationCards.sector.description}
                </p>
              </div>

              {/* Network ve Topluluk */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{t.volunteers.motivationCards.network.title}</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t.volunteers.motivationCards.network.description}
                </p>
              </div>

              {/* Deneyim ve Gelişim */}
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{t.volunteers.motivationCards.experience.title}</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t.volunteers.motivationCards.experience.description}
                </p>
              </div>

              {/* Tutku ve Vizyon */}
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center mr-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{t.volunteers.motivationCards.passion.title}</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t.volunteers.motivationCards.passion.description}
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action - Ana Başvuru Bölümü */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-3xl p-16 relative">
              {/* Çok sade arka plan efekti */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent rounded-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {t.volunteers.joinTitle || "Ekibimize Katılmak İster misiniz?"}
                </h3>
                
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                  {t.volunteers.joinDescription || "ÜNOG ailesinin bir parçası olmak için hemen başvur. Birlikte harika projeler gerçekleştirelim!"}
                </p>
                
                <div className="mb-8">
                  <a 
                    href="https://unog.dev/gonulluol" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-unog-gradient text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Users className="h-5 w-5 transition-transform duration-300" />
                    <span>{t.volunteers.joinButton || "Gönüllü Ol"}</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
                
                <div className="flex items-center justify-center gap-8 text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-unog-green rounded-full"></div>
                    <span className="text-sm font-medium">{t.volunteers.statusActive}</span>
                  </div>
                  
                 
                  
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animasyonları */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        `
      }} />
    </section>
  );
};

export default VolunteersSection;

