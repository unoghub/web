import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, GamepadIcon, Sparkles, Instagram, Linkedin, X, Youtube } from 'lucide-react';

// Discord SVG Icon Component
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
  </svg>
);

// Spotify SVG Icon Component
const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const HeroSection = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/unoghub',
      color: 'hover:text-pink-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/unoghub',
      color: 'hover:text-blue-600'
    },
    {
      name: 'X',
      icon: X,
      url: 'https://x.com/unoghub',
      color: 'hover:text-blue-400'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@unoghub',
      color: 'hover:text-red-500'
    },
    {
      name: 'Spotify',
      icon: SpotifyIcon,
      url: 'https://unog.dev/podcast',
      color: 'hover:text-green-500'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-unog-gradient opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-20 h-20 bg-unog-green/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-unog-blue/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-unog-purple/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 mt-8">
            <img 
              src="/logo.png" 
              alt={t.common.logo} 
              className="h-24 w-auto mx-auto mb-6"
            />
          </div>

          {/* Hero Text */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-unog-gradient bg-clip-text text-transparent">
              {t.hero.subtitle}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
            {t.hero.title}
          
          
            
          </p>

          {/* CTA Buttons */}
          <div className="text-center mb-12 mt-8">
            <Button 
              size="lg" 
              className="relative overflow-hidden bg-gradient-to-r from-unog-purple via-purple-600 to-indigo-600 hover:from-purple-600 hover:via-indigo-600 hover:to-unog-purple text-white px-12 py-6 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-105 border-2 border-purple-300/30 backdrop-blur-sm min-w-[280px] h-16 inline-flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-purple-300/50"
              onClick={() => window.open('https://discord.gg/unog-oyun-gelistirici-toplulugu-287963427362832386', '_blank')}
            >
              {/* Liquid background with flowing animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-unog-purple via-purple-600 to-indigo-600 group-hover:from-indigo-600 group-hover:via-purple-600 group-hover:to-unog-purple transition-all duration-500 ease-out rounded-full overflow-hidden">
                {/* Liquid particles - always floating */}
                <div className="absolute inset-0">
                  {/* Ana baloncuklar */}
                  <div className="absolute top-3 right-4 w-2 h-2 bg-white/30 rounded-full animate-liquid-float"></div>
                  <div className="absolute bottom-3 left-4 w-1.5 h-1.5 bg-purple-300/40 rounded-full animate-liquid-float" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/2 left-2 w-1 h-1 bg-indigo-300/35 rounded-full animate-liquid-float" style={{ animationDelay: '1.5s' }}></div>
                  <div className="absolute top-1/2 right-2 w-1 h-1 bg-white/25 rounded-full animate-liquid-float" style={{ animationDelay: '2s' }}></div>
                  
                  {/* Ek baloncuklar */}
                  <div className="absolute top-6 left-6 w-1.5 h-1.5 bg-white/20 rounded-full animate-liquid-float" style={{ animationDelay: '0.8s' }}></div>
                  <div className="absolute bottom-6 right-6 w-1 h-1 bg-purple-300/30 rounded-full animate-liquid-float" style={{ animationDelay: '1.2s' }}></div>
                  <div className="absolute top-1/4 left-1/4 w-1.2 h-1.2 bg-indigo-300/25 rounded-full animate-liquid-float" style={{ animationDelay: '0.3s' }}></div>
                  <div className="absolute bottom-1/4 right-1/4 w-1.8 h-1.8 bg-white/35 rounded-full animate-liquid-float" style={{ animationDelay: '1.8s' }}></div>
                  <div className="absolute top-1/3 right-1/3 w-0.8 h-0.8 bg-purple-300/20 rounded-full animate-liquid-float" style={{ animationDelay: '2.5s' }}></div>
                  <div className="absolute bottom-1/3 left-1/3 w-1.3 h-1.3 bg-indigo-300/30 rounded-full animate-liquid-float" style={{ animationDelay: '0.7s' }}></div>
                  
                  {/* Küçük baloncuklar */}
                  <div className="absolute top-4 left-1/2 w-0.6 h-0.6 bg-white/15 rounded-full animate-liquid-float" style={{ animationDelay: '1.1s' }}></div>
                  <div className="absolute bottom-4 right-1/2 w-0.7 h-0.7 bg-purple-300/25 rounded-full animate-liquid-float" style={{ animationDelay: '2.2s' }}></div>
                  <div className="absolute top-2/3 left-2/3 w-0.9 h-0.9 bg-indigo-300/20 rounded-full animate-liquid-float" style={{ animationDelay: '0.4s' }}></div>
                  <div className="absolute bottom-2/3 right-2/3 w-1.1 h-1.1 bg-white/30 rounded-full animate-liquid-float" style={{ animationDelay: '1.6s' }}></div>
                  <div className="absolute top-1/6 right-1/6 w-0.8 h-0.8 bg-purple-300/15 rounded-full animate-liquid-float" style={{ animationDelay: '2.8s' }}></div>
                  <div className="absolute bottom-1/6 left-1/6 w-1.4 h-1.4 bg-indigo-300/35 rounded-full animate-liquid-float" style={{ animationDelay: '0.9s' }}></div>
                </div>
              </div>
              
              {/* Liquid glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-unog-purple/20 to-indigo-600/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110 group-hover:scale-125"></div>
              
              {/* Liquid surface tension effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/8 via-transparent to-white/4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              {/* Content with smooth animations */}
              <div className="relative z-10 flex items-center justify-center">
                <DiscordIcon className="h-7 w-7 mr-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-2" />
                <span className="font-bold transition-all duration-300 ease-out group-hover:tracking-wide">{t.hero.joinButton}</span>
                <ArrowRight className="h-7 w-7 ml-3 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110" />
              </div>
              
              {/* Liquid click feedback */}
              <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200 ease-out opacity-0 group-active:opacity-100 animate-liquid-ripple"></div>
              
              {/* Liquid border effect */}
              <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all duration-500 group-hover:scale-105"></div>
            </Button>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-white/50 rounded-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 ${social.color}`}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-6 bg-white/50 rounded-lg backdrop-blur-sm border border-white/20">
              <Users className="h-8 w-8 mx-auto mb-3 text-unog-blue" />
              <h3 className="text-2xl font-bold text-gray-900">6000+</h3>
              <p className="text-gray-600">{t.hero.stats.activeMembers}</p>
            </div>
            <div className="text-center p-6 bg-white/50 rounded-lg backdrop-blur-sm border border-white/20">
              <GamepadIcon className="h-8 w-8 mx-auto mb-3 text-unog-green" />
              <h3 className="text-2xl font-bold text-gray-900">100+</h3>
              <p className="text-gray-600">{t.hero.stats.reviewedGames}</p>
            </div>
            <div className="text-center p-6 bg-white/50 rounded-lg backdrop-blur-sm border border-white/20">
              <Sparkles className="h-8 w-8 mx-auto mb-3 text-unog-purple" />
              <h3 className="text-2xl font-bold text-gray-900">100+</h3>
              <p className="text-gray-600">{t.hero.stats.events}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
