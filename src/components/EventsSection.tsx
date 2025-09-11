import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, Users, Clock, Pizza, Instagram, X, FileText, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { atcb_action } from 'add-to-calendar-button';

const EventsSection = () => {
  const { t, language } = useLanguage();
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to determine if an event is upcoming or past
  const getEventType = (event: any) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of day for accurate comparison
    
    const eventDate = new Date(event.calendarData.startDate);
    return eventDate >= today ? 'upcoming' : 'past';
  };

  const events = [
    // id'yi 1 arttır knk
    {
      id: 11,
      title: language === 'tr' ? 'İstanbul Geliştirici Buluşması' : 'İstanbul Developer Meetup',
      date: language === 'tr' ? '25 Temmuz 2025' : 'July 25, 2025',
      time: '19:00',
      location: language === 'tr' ? 'e2vc Levent, Beşiktaş/İstanbul' : 'e2vc Levent, Beşiktaş/İstanbul',
      attendees: 80,
      instagramUrl: 'https://www.instagram.com/p/DMVoGAVo4RU/',
      description: language === 'tr'
        ? 'Biraz sohbet muhabbet, biraz da pizza ve bira. Perşembe akşamınıza talibiz.'
        : 'A little chat, a little pizza and beer. See you Thursday evening.',
      hasForm: false,
      hasPizza: true,
      formUrl: null,
      calendarData: {
        name: language === 'tr' ? 'İstanbul Geliştirici Buluşması' : 'İstanbul Developer Meetup',
        description: language === 'tr' ? 'Biraz sohbet muhabbet, biraz da pizza ve bira. Perşembe akşamınıza talibiz.' : 'A little chat, a little pizza and beer. See you Thursday evening.',
        startDate: '2025-07-25',
        startTime: '19:00',
        endTime: '23:30',
        location: 'e2vc Levent, Beşiktaş/İstanbul',
        options: ['Google', 'Apple', 'Outlook.com']
      }
    },
  
    {
      id: 10,
      title: language === 'tr' ? 'Ankara Geliştirici Pikniği' : 'Ankara Developer Picnic',
      date: language === 'tr' ? '19 Temmuz 2025' : 'July 19, 2025',
      time: '16:00',
      location: language === 'tr' ? 'Seğmenler Parkı, Çankaya/Ankara' : 'Seğmenler Park, Çankaya/Ankara',
      attendees: 60,
      instagramUrl: 'https://www.instagram.com/p/DMJTH6yoqul/',
      description: language === 'tr'
        ? 'Ankara geliştirici pikniği'
        : 'Ankara developer picnic',
      hasForm: false,
      formUrl: null,
      calendarData: {
        name: language === 'tr' ? 'Ankara Geliştirici Pikniği' : 'Ankara Developer Picnic',
        description: language === 'tr' ? 'Ankara geliştirici pikniği' : 'Ankara developer picnic',
        startDate: '2025-07-19',
        startTime: '16:00',
        endTime: '22:00',
        location: 'Seğmenler Parkı, Çankaya/Ankara',
        options: ['Google', 'Apple', 'Outlook.com']
      }
    },
    {
      id: 2,
      title: language === 'tr' ? 'Ankara Portfolyo İnceleme Gecesi' : 'Ankara Portfolio Review Night',
      date: language === 'tr' ? '4 Temmuz 2025' : 'July 4, 2025',
      time: '19:00',
      location: language === 'tr' ? 'Route Selanik, Çankaya/Ankara' : 'Route Selanik, Çankaya/Ankara',
      attendees: 50,
      instagramUrl: 'https://www.instagram.com/p/DLeqTCOI9bk/?img_index=1',
      description: language === 'tr'
        ? 'Portfolyo gecesi etkinliği'
        : 'Portfolio night event',
      hasForm: false,
      formUrl: null,
      calendarData: {
        name: language === 'tr' ? 'Ankara Portfolyo İnceleme Gecesi' : 'Ankara Portfolio Review Night',
        description: language === 'tr' ? 'Portfolyo gecesi etkinliği' : 'Portfolio night event',
        startDate: '2025-07-04',
        startTime: '19:00',
        endTime: '22:00',
        location: 'Route Selanik, Çankaya/Ankara',
        options: ['Google', 'Apple', 'Outlook.com', 'Yahoo']
      }
    },
    {
      id: 1,
      title: language === 'tr' ? 'Kutu Oyunları Günü' : 'Board Games Day',
      date: language === 'tr' ? '12 Temmuz 2025' : 'July 12, 2025',
      time: '12:00',
      location: language === 'tr' ? 'İstanbul Akademi Beyoğlu Gençlik Merkezi' : 'İstanbul Akademi Beyoğlu Youth Center',
      attendees: 55,
      instagramUrl: 'https://www.instagram.com/p/DLPuFIRoTQ9/',
      description: language === 'tr'
        ? 'Kutu oyunları günü etkinliği'
        : 'Board games day event',
      hasForm: false,
      formUrl: null,
      calendarData: {
        name: language === 'tr' ? 'Kutu Oyunları Günü' : 'Board Games Day',
        description: language === 'tr' ? 'Kutu oyunları günü etkinliği' : 'Board games day event',
        startDate: '2025-07-12',
        startTime: '12:00',
        endTime: '18:00',
        location: 'İstanbul Akademi Beyoğlu Gençlik Merkezi',
        options: ['Google', 'Apple', 'Outlook.com']
      }
    },
    {
      id: 3,
      title: language === 'tr' ? 'ÜNOG İstanbul Geliştirici Pikniği' : 'ÜNOG İstanbul Developer Picnic',
      date: language === 'tr' ? '13 Temmuz 2025' : 'July 13, 2025',
      time: '15:00',
      location: language === 'tr' ? 'Göztepe Özgürlük Parkı, İstanbul' : 'Göztepe Özgürlük Parkı, Istanbul',
      attendees: 80,
      instagramUrl: 'https://www.instagram.com/p/DLgH8GdoP0x/?img_index=1',
      description: language === 'tr'
        ? 'Geliştirici pikniği etkinliği'
        : 'Developer picnic event',
      hasForm: false,
      formUrl: '',
      calendarData: {
        name: language === 'tr' ? 'ÜNOG Geliştirici Pikniği' : 'ÜNOG Developer Picnic',
        description: language === 'tr' ? 'Geliştirici pikniği etkinliği' : 'Developer picnic event',
        startDate: '2025-07-13',
        startTime: '15:00',
        endTime: '20:00',
        location: 'Göztepe Özgürlük Parkı, İstanbul',
        options: ['Google', 'Apple', 'Outlook.com', 'Yahoo']
      }
    },
    {
      id: 4,
      title: language === 'tr' ? 'Discord Etkinliği: Homo Ludens ve Oyun Felsefesi' : 'Discord Event: Homo Ludens and Game Philosophy',
      date: language === 'tr' ? '29 Haziran 2025' : 'June 29, 2025',
      time: '15:00',
      location: language === 'tr' ? 'Discord' : 'Discord',
      attendees: 45,
      instagramUrl: 'https://www.instagram.com/p/DLSJdw6o88z/',
      description: language === 'tr'
        ? 'Özgür Özol ile Homo Ludens ve oyun felsefesi üzerine söyleşi'
        : 'Discussion with Özgür Özol about Homo Ludens and game philosophy',
      hasForm: false,
      formUrl: null,
      calendarData: {
        name: language === 'tr' ? 'Discord Etkinliği: Homo Ludens ve Oyun Felsefesi' : 'Discord Event: Homo Ludens and Game Philosophy',
        description: language === 'tr' ? 'Özgür Özol ile Homo Ludens ve oyun felsefesi üzerine söyleşi' : 'Discussion with Özgür Özol about Homo Ludens and game philosophy',
        startDate: '2025-06-29',
        startTime: '15:00',
        endTime: '17:00',
        location: 'Discord',
        options: ['Google', 'Apple', 'Outlook.com', 'Yahoo']
      }
    },
    {
      id: 5,
      title: language === 'tr' ? 'İzmir Game Developer Meetup' : 'İzmir Game Developer Meetup',
      date: language === 'tr' ? '26 Haziran 2025' : 'June 26, 2025',
      time: '19:30',
      location: language === 'tr' ? 'Che (Alsancak), Konak/İzmir' : 'Che (Alsancak), Konak/İzmir',
      attendees: 35,
      instagramUrl: 'https://www.instagram.com/p/DLSDGp7oEbm/',
      description: language === 'tr'
        ? 'İzmir oyun geliştirici buluşması'
        : 'İzmir game developer meetup',
      hasForm: false,
      formUrl: null,
      calendarData: {
        name: language === 'tr' ? 'İzmir Game Developer Meetup' : 'İzmir Game Developer Meetup',
        description: language === 'tr' ? 'İzmir oyun geliştirici buluşması' : 'İzmir game developer meetup',
        startDate: '2025-06-26',
        startTime: '19:30',
        endTime: '22:00',
        location: 'Che (Alsancak), Konak/İzmir',
        options: ['Google', 'Apple', 'Outlook.com', 'Yahoo']
      }
    },
    {
      id: 6,
      title: language === 'tr' ? 'Ankara Geliştirici Pikniği' : 'Ankara Developer Picnic',
      date: language === 'tr' ? '22 Haziran 2025' : 'June 22, 2025',
      time: '15:00',
      location: language === 'tr' ? 'Seğmenler Parkı, Çankaya/Ankara' : 'Seğmenler Parkı, Çankaya/Ankara',
      attendees: 60,
      hasPizza: true,
      instagramUrl: 'https://www.instagram.com/p/DJ-Foe3CFq0/?img_index=1',
      description: language === 'tr'
        ? 'Ankara geliştirici pikniği'
        : 'Ankara developer picnic',
      hasForm: false,
      formUrl: null,
      calendarData: {
        name: language === 'tr' ? 'Ankara Geliştirici Pikniği' : 'Ankara Developer Picnic',
        description: language === 'tr' ? 'Ankara geliştirici pikniği' : 'Ankara developer picnic',
        startDate: '2025-06-22',
        startTime: '15:00',
        endTime: '20:00',
        location: 'Seğmenler Parkı, Çankaya/Ankara',
        options: ['Google', 'Apple', 'Outlook.com', 'Yahoo']
      }
    },
    {
      id: 7,
      title: language === 'tr' ? 'Sanat Gecesi' : 'Art Night',
      date: language === 'tr' ? '13 Mayıs 2024' : 'May 13, 2024',
      time: '19:00',
      location: language === 'tr' ? 'IF Tepe Prime, Ankara' : 'IF Tepe Prime, Ankara',
      attendees: 40,
      instagramUrl: 'https://www.instagram.com/p/DI9rNMtC2YB/?img_index=1',
      description: language === 'tr'
        ? 'Sanat gecesi etkinliği'
        : 'Art night event',
      hasForm: false,
      formUrl: null,
      calendarData: {
        name: language === 'tr' ? 'Sanat Gecesi' : 'Art Night',
        description: language === 'tr' ? 'Sanat gecesi etkinliği' : 'Art night event',
        startDate: '2024-05-13',
        startTime: '19:00',
        endTime: '22:00',
        location: 'IF Tepe Prime, Ankara',
        options: ['Google', 'Apple', 'Outlook.com', 'Yahoo']
      }
    },
    {
      id: 8,
      title: language === 'tr' ? 'ÜNOG İstanbul Geliştirici Pikniği' : 'ÜNOG İstanbul Developer Picnic',
      date: language === 'tr' ? '3 Mayıs 2024' : 'May 3, 2024',
      time: '15:00',
      location: language === 'tr' ? 'Göztepe Özgürlük Parkı, İstanbul' : 'Göztepe Özgürlük Parkı, Istanbul',
      attendees: 75,
      hasPizza: true,
      instagramUrl: 'https://www.instagram.com/p/DJCyKM4iDqj/?img_index=1',
      description: language === 'tr'
        ? 'İstanbul geliştirici pikniği'
        : 'İstanbul developer picnic',
      hasForm: false,
      formUrl: null,
      calendarData: {
        name: language === 'tr' ? 'ÜNOG İstanbul Geliştirici Pikniği' : 'ÜNOG İstanbul Developer Picnic',
        description: language === 'tr' ? 'İstanbul geliştirici pikniği' : 'İstanbul developer picnic',
        startDate: '2024-05-03',
        startTime: '15:00',
        endTime: '20:00',
        location: 'Göztepe Özgürlük Parkı, Istanbul',
        options: ['Google', 'Apple', 'Outlook.com', 'Yahoo']
      }
    },
    {
      id: 9,
      title: language === 'tr' ? 'Global Game Jam 2025' : 'Global Game Jam 2025',
      date: language === 'tr' ? '24-26 Ocak 2025' : 'January 24-26, 2025',
      time: language === 'tr' ? '48 Saat' : '48 Hours',
      location: language === 'tr' ? 'BUG Galata' : 'BUG Galata',
      attendees: 120,
      instagramUrl: 'https://www.instagram.com/p/DEroRWgKFI2/',
      description: language === 'tr'
        ? 'Küresel oyun geliştirme maratonu'
        : 'Global game development marathon',
      hasForm: false,
      formUrl: null,
      calendarData: {
        name: language === 'tr' ? 'Global Game Jam 2025' : 'Global Game Jam 2025',
        description: language === 'tr' ? 'Küresel oyun geliştirme maratonu' : 'Global game development marathon',
        startDate: '2025-01-24',
        startTime: '18:00',
        endTime: '18:00',
        endDate: '2025-01-26',
        location: 'BUG Galata',
        options: ['Google', 'Apple', 'Outlook.com', 'Yahoo']
      }
    }
  ];

  // Filter events based on dynamically determined type
  const upcomingEvents = events.filter(event => getEventType(event) === 'upcoming');
  const pastEvents = events.filter(event => getEventType(event) === 'past');

  const openModal = (event: any) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleAddToCalendar = (event: any) => {
    atcb_action({
      ...event.calendarData,
      timeZone: 'Europe/Istanbul'
    });
  };

  const handleShare = async (event: any) => {
    const shareData = {
      title: event.title,
      text: `${event.title} - ${event.date} ${event.time}`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      const textToCopy = `${event.title}\n${event.date} ${event.time}\n${event.location}\n\n${window.location.href}`;
      await navigator.clipboard.writeText(textToCopy);
      alert(language === 'tr' ? 'Etkinlik bilgileri panoya kopyalandı!' : 'Event information copied to clipboard!');
    }
  };

  const EventCard = ({ event }: { event: any }) => {
    const eventType = getEventType(event);
    
    return (
      <div 
        className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-96 cursor-pointer relative overflow-hidden border border-gray-100 hover:border-unog-purple/20"
        onClick={() => openModal(event)}
      >
        {/* Hover overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-unog-purple/5 via-transparent to-unog-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Click indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <div className="w-2 h-2 bg-unog-purple rounded-full animate-pulse"></div>
        </div>

        {/* Hover border effect */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-unog-purple/30 transition-all duration-300"></div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-unog-purple transition-colors duration-300">{event.title}</h3>
            <div className="flex items-center gap-2">
              {event.hasPizza && (
                <Pizza className="h-5 w-5 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
              )}
              <span className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                eventType === 'upcoming' 
                  ? 'bg-unog-green/10 text-unog-green group-hover:bg-unog-green/20' 
                  : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
              }`}>
                {eventType === 'upcoming' ? t.events.upcomingLabel : t.events.pastLabel}
              </span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4 flex-grow group-hover:text-gray-700 transition-colors duration-300">{event.description}</p>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              <Calendar className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm">{event.date}</span>
            </div>
            <div className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              <Clock className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm">{event.time}</span>
            </div>
            <div className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              <MapPin className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm">{event.location}</span>
            </div>
            <div className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              <Users className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm">{event.attendees} {t.events.attendees}</span>
            </div>
          </div>
          
          {/* Interactive CTA button */}
          <div className="mt-auto">
            <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-gray-100 to-gray-200 group-hover:from-unog-purple/10 group-hover:to-unog-blue/10 transition-all duration-300">
              <div className="px-4 py-3 text-center">
                <div className="flex items-center justify-center gap-2 text-gray-700 group-hover:text-unog-purple transition-colors duration-300">
                  <span className="font-medium text-sm">
                    {language === 'tr' ? 'Detayları Gör' : 'View Details'}
                  </span>
                  <div className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Ripple effect on click */}
        <div className="absolute inset-0 rounded-xl bg-unog-purple/10 scale-0 group-active:scale-100 transition-transform duration-200 opacity-0 group-active:opacity-100"></div>
      </div>
    );
  };

  const EventModal = () => {
    if (!selectedEvent) return null;
    
    const eventType = getEventType(selectedEvent);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900">{selectedEvent.title}</h2>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  className="bg-unog-gradient hover:opacity-90 transition-opacity text-white rounded-full px-4 py-2"
                  onClick={() => window.open(selectedEvent.instagramUrl, '_blank')}
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  {language === 'tr' ? 'Duyuru' : 'Announcement'}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeModal}
                  className="rounded-full"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-3" />
                <span>{selectedEvent.date}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-3" />
                <span>{selectedEvent.time}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-3" />
                <span>{selectedEvent.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="h-5 w-5 mr-3" />
                <span>{selectedEvent.attendees} {t.events.attendees}</span>
              </div>
              {selectedEvent.hasPizza && (
                <div className="flex items-center text-orange-600">
                  <Pizza className="h-5 w-5 mr-3" />
                  <span>{language === 'tr' ? 'Pizza dahil!' : 'Pizza included!'}</span>
                </div>
              )}
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">{selectedEvent.description}</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                className={`flex-1 rounded-full relative overflow-hidden group ${
                  selectedEvent.hasForm 
                    ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-105 border-2 border-green-300/30' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
                onClick={selectedEvent.hasForm ? () => window.open(selectedEvent.formUrl, '_blank') : undefined}
                disabled={!selectedEvent.hasForm}
              >
                {/* Liquid background for active buttons */}
                {selectedEvent.hasForm && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-500 to-green-700 group-hover:from-green-500 group-hover:via-green-600 group-hover:to-green-700 transition-all duration-500 ease-out rounded-full overflow-hidden">
                      {/* Liquid particles */}
                      <div className="absolute inset-0">
                        <div className="absolute top-2 right-3 w-1 h-1 bg-white/30 rounded-full animate-liquid-float"></div>
                        <div className="absolute bottom-2 left-3 w-0.8 h-0.8 bg-green-300/40 rounded-full animate-liquid-float" style={{ animationDelay: '0.5s' }}></div>
                        <div className="absolute top-1/2 left-1 w-0.6 h-0.6 bg-white/25 rounded-full animate-liquid-float" style={{ animationDelay: '1.5s' }}></div>
                        <div className="absolute top-1/2 right-1 w-0.6 h-0.6 bg-green-300/35 rounded-full animate-liquid-float" style={{ animationDelay: '2s' }}></div>
                      </div>
                    </div>
                    
                    {/* Liquid glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-600/20 to-green-700/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110 group-hover:scale-125"></div>
                    
                    {/* Liquid surface tension effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/8 via-transparent to-white/4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    
                    {/* Liquid click feedback */}
                    <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200 ease-out opacity-0 group-active:opacity-100 animate-liquid-ripple"></div>
                    
                    {/* Liquid border effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all duration-500 group-hover:scale-105"></div>
                  </>
                )}

                <div className="relative z-10 flex items-center justify-center">
                  <FileText className={`h-4 w-4 mr-2 transition-all duration-300 ease-out ${
                    selectedEvent.hasForm ? 'group-hover:scale-110 group-hover:rotate-2' : ''
                  }`} />
                  {selectedEvent.hasForm ? (
                    <span className="font-medium transition-all duration-300 ease-out group-hover:tracking-wide">
                      {language === 'tr' ? 'Başvuru Formu' : 'Application Form'}
                    </span>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span>{language === 'tr' ? 'Başvuru Formu' : 'Application Form'}</span>
                      <X className="h-3 w-3" />
                    </div>
                  )}
                </div>
              </Button>

              <Button 
                className={`flex-1 rounded-full relative overflow-hidden group ${
                  eventType === 'upcoming'
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-105 border-2 border-blue-300/30' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
                onClick={eventType === 'upcoming' ? () => handleAddToCalendar(selectedEvent) : undefined}
                disabled={eventType === 'past'}
              >
                {/* Liquid background for active buttons */}
                {eventType === 'upcoming' && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 group-hover:from-blue-500 group-hover:via-blue-600 group-hover:to-blue-700 transition-all duration-500 ease-out rounded-full overflow-hidden">
                      {/* Liquid particles */}
                      <div className="absolute inset-0">
                        <div className="absolute top-2 right-3 w-1 h-1 bg-white/30 rounded-full animate-liquid-float"></div>
                        <div className="absolute bottom-2 left-3 w-0.8 h-0.8 bg-blue-300/40 rounded-full animate-liquid-float" style={{ animationDelay: '0.5s' }}></div>
                        <div className="absolute top-1/2 left-1 w-0.6 h-0.6 bg-white/25 rounded-full animate-liquid-float" style={{ animationDelay: '1.5s' }}></div>
                        <div className="absolute top-1/2 right-1 w-0.6 h-0.6 bg-blue-300/35 rounded-full animate-liquid-float" style={{ animationDelay: '2s' }}></div>
                      </div>
                    </div>
                    
                    {/* Liquid glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-700/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110 group-hover:scale-125"></div>
                    
                    {/* Liquid surface tension effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/8 via-transparent to-white/4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    
                    {/* Liquid click feedback */}
                    <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200 ease-out opacity-0 group-active:opacity-100 animate-liquid-ripple"></div>
                    
                    {/* Liquid border effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all duration-500 group-hover:scale-105"></div>
                  </>
                )}

                <div className="relative z-10 flex items-center justify-center">
                  <Calendar className={`h-4 w-4 mr-2 transition-all duration-300 ease-out ${
                    eventType === 'upcoming' ? 'group-hover:scale-110 group-hover:rotate-2' : ''
                  }`} />
                  {eventType === 'upcoming' ? (
                    <span className="font-medium transition-all duration-300 ease-out group-hover:tracking-wide">
                      {language === 'tr' ? 'Takvime Ekle' : 'Add to Calendar'}
                    </span>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span>{language === 'tr' ? 'Takvime Ekle' : 'Add to Calendar'}</span>
                      <X className="h-3 w-3" />
                    </div>
                  )}
                </div>
              </Button>

              <Button 
                className="flex-1 rounded-full relative overflow-hidden group bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-105 border-2 border-purple-300/30"
                onClick={() => handleShare(selectedEvent)}
              >
                {/* Liquid background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 group-hover:from-purple-500 group-hover:via-purple-600 group-hover:to-purple-700 transition-all duration-500 ease-out rounded-full overflow-hidden">
                  {/* Liquid particles */}
                  <div className="absolute inset-0">
                    <div className="absolute top-2 right-3 w-1 h-1 bg-white/30 rounded-full animate-liquid-float"></div>
                    <div className="absolute bottom-2 left-3 w-0.8 h-0.8 bg-purple-300/40 rounded-full animate-liquid-float" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-1/2 left-1 w-0.6 h-0.6 bg-white/25 rounded-full animate-liquid-float" style={{ animationDelay: '1.5s' }}></div>
                    <div className="absolute top-1/2 right-1 w-0.6 h-0.6 bg-purple-300/35 rounded-full animate-liquid-float" style={{ animationDelay: '2s' }}></div>
                  </div>
                </div>
                
                {/* Liquid glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-purple-700/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110 group-hover:scale-125"></div>
                
                {/* Liquid surface tension effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/8 via-transparent to-white/4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                
                {/* Liquid click feedback */}
                <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200 ease-out opacity-0 group-active:opacity-100 animate-liquid-ripple"></div>
                
                {/* Liquid border effect */}
                <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all duration-500 group-hover:scale-105"></div>

                <div className="relative z-10 flex items-center justify-center">
                  <Share2 className="h-4 w-4 mr-2 transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-2" />
                  <span className="font-medium transition-all duration-300 ease-out group-hover:tracking-wide">
                    {language === 'tr' ? 'Paylaş' : 'Share'}
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.events.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.events.subtitle}
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <div className="w-4 h-4 bg-unog-green rounded-full mr-3"></div>
            {t.events.upcoming}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <div className="w-4 h-4 bg-gray-400 rounded-full mr-3"></div>
            {t.events.past}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <EventModal />}
    </section>
  );
};

export default EventsSection;
