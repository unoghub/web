import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Instagram, Linkedin, X, Mail, Heart, Youtube, Newspaper } from 'lucide-react';

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

// Patreon SVG Icon Component
const PatreonIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M15.386.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.764 3.876 8.64 8.64 8.64 4.764 0 8.64-3.876 8.64-8.64 0-4.764-3.876-8.64-8.64-8.64zM15.386 15.386c-3.561 0-6.446-2.885-6.446-6.446s2.885-6.446 6.446-6.446 6.446 2.885 6.446 6.446-2.885 6.446-6.446 6.446z"/>
    <path d="M15.386 3.561c-2.885 0-5.22 2.335-5.22 5.22s2.335 5.22 5.22 5.22 5.22-2.335 5.22-5.22-2.335-5.22-5.22-5.22z"/>
  </svg>
);

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: 'Discord',
      icon: DiscordIcon,
      url: 'https://unog.dev/discord',
      color: 'hover:text-indigo-500'
    },
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
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/logo.png" 
              alt={t.common.logo} 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t.footer.followUs}</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800 rounded-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                  title={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            
            {/* Newsletter Link */}
            <a 
              href="https://unog.dev/bulten"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors block"
            >
              ÜNOG Geliştirici Bülteni
            </a>
          </div>

          {/* Contact and Support */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t.footer.contact}</h3>
            <a 
              href="mailto:info@unoghub.org"
              className="flex items-center text-gray-400 hover:text-white transition-colors mb-6"
            >
              <Mail className="h-5 w-5 mr-3" />
              info@unoghub.org
            </a>

            {/* Support Section */}
            <h3 className="text-xl font-bold mb-6">{t.footer.support}</h3>
            <a 
              href="https://unog.dev/patreon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <Heart className="h-5 w-5 mr-3" />
              {t.footer.supportWithPatreonText}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <div className="flex items-center justify-center text-gray-400">
            <span>{t.footer.madeWith}</span>
            <Heart className="h-4 w-4 mx-2 text-red-500" />
            <span>{t.footer.byCommunity}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
