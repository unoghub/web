import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en';

interface Translations {
  nav: {
    home: string;
    events: string;
    contact: string;
    merch: string;
    support: string;
    volunteers: string;
  };
  hero: {
    title: string;
    subtitle: string;
    joinButton: string;
    stats: {
      activeMembers: string;
      reviewedGames: string;
      events: string;
    };
  };
  about: {
    title: string;
    description: string;
    mission: string;
    vision: string;
    missionTitle: string;
    visionTitle: string;
    communityValue: string;
  };
  events: {
    title: string;
    subtitle: string;
    upcoming: string;
    past: string;
    upcomingLabel: string;
    pastLabel: string;
    join: string;
    attendees: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
    sending: string;
    emailSubject: string;
    emailOpens: string;
  };
  merch: {
    title: string;
    comingSoon: string;
    description: string;
    items: {
      tshirt: {
        title: string;
        description: string;
      };
      sticker: {
        title: string;
        description: string;
      };
      deck: {
        title: string;
        description: string;
      };
    };
  };
  patreon: {
    title: string;
    subtitle: string;
    description: string;
    benefits: {
      community: {
        title: string;
        description: string;
      };
      events: {
        title: string;
        description: string;
      };
      growth: {
        title: string;
        description: string;
      };
    };
    supportButton: string;
    thankYou: string;
  };
  footer: {
    followUs: string;
    contact: string;
    description: string;
    madeWith: string;
    byCommunity: string;
    newsletter: string;
    support: string;
    supportWithPatreon: string;
    supportWithPatreonText: string;
  };
  common: {
    logo: string;
  };
  volunteers: {
    title: string;
    subtitle: string;
    directors: string;
    volunteers: string;
    joinTitle: string;
    joinDescription: string;
    joinButton: string;
    teams: {
      sanat: string;
      icerik: string;
      organizasyon: string;
      yazilim: string;
    };
    teamDescriptions: {
      organizasyon: string;
      sanat: string;
      icerik: string;
      yazilim: string;
    };
    member: string;
    joinClosedDescription: string;
    newApplications: string;
    heroDescription: string;
    teamAreasTitle: string;
    motivationTitle: string;
    motivationDescription: string;
    motivationCards: {
      sector: {
        title: string;
        description: string;
      };
      network: {
        title: string;
        description: string;
      };
      experience: {
        title: string;
        description: string;
      };
      passion: {
        title: string;
        description: string;
      };
    };
    statusActive: string;
  };
}

const translations: Record<Language, Translations> = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      events: 'Etkinlikler',
      contact: 'İletişim',
      merch: 'Merch',
      support: 'Bağış',
      volunteers: 'Gönüllüler'
    },
    hero: {
      title: 'Merhaba! burada bağımsız oyun geliştiricileri bir araya geliyor.',
      subtitle: 'ÜNOG Oyun Geliştirici Topluluğuna Hoş Geldiniz',
      joinButton: 'Topluluğa Katıl',
      stats: {
        activeMembers: 'Üye',
        reviewedGames: 'İncelenen Oyun',
        events: 'Etkinlik'
      }
    },
    about: {
      title: 'ÜNOG Hakkında',
      description: "ÜNOG, 2017 yılında kurulan bağımsız ve kâr amacı gütmeyen bir oyun geliştirici topluluğudur. Türkiye'nin dört bir yanından mühendisleri, tasarımcıları, sanatçıları, ses tasarımcılarını ve oyunsever öğrencileri bir araya getirir. 6000'i aşkın üyemizle oyun geliştirme kültürünü yaymak, sektörde bilgi paylaşımını artırmak ve bağımsız oyun üretimini desteklemek için çalışıyoruz. Game Jam'lerden PlusPlus Programı'na, geliştirici buluşmalarından bülten ve podcast yayınlarına kadar oyun geliştiricilerin birlikte üretip öğrenebileceği ortamlar oluşturuyoruz.",
      mission: 'Bağımsız geliştiricileri bir araya getirmek. Üretim ve paylaşım odaklı etkinlikler düzenlemek. Umut vadeden projelere maddi ve mentorluk desteği sağlamak. Game Jam\'ler, atölyeler, buluşmalar ve yayınlarla yaratıcı iş birliklerini artırmak. Bilgiyi erişilebilir kılarak sektördeki dönüşüme katkıda bulunmak.',
      vision: 'Türkiye\'de oyun geliştirme kültürünü güçlendirmek, bilgi paylaşımını yaygınlaştırmak ve bağımsız oyun geliştiriciler için sürdürülebilir bir ekosistem inşa etmek. Oyun geliştirmenin sadece kod ve piksellerden ibaret olmadığını; bir arada üretmeyi, birlikte öğrenmeyi ve oyun aracılığıyla dünyayı anlamayı sağlayan kolektif bir yaratıcılık alanı olduğuna inanıyoruz.',
      missionTitle: 'Misyonumuz',
      visionTitle: 'Vizyonumuz',
      communityValue: 'Birlikte daha güçlüyüz'
    },
    events: {
      title: 'Etkinliklerimiz',
      subtitle: 'Topluluk olarak düzenlediğimiz etkinlikler',
      upcoming: 'Yaklaşan Etkinlikler',
      past: 'Geçmiş Etkinlikler',
      upcomingLabel: 'Yaklaşan',
      pastLabel: 'Geçmiş',
      join: 'Katıl',
      attendees: 'katılımcı'
    },
    contact: {
      title: 'İletişim',
      subtitle: 'Bizimle iletişime geçin',
      name: 'Ad Soyad',
      email: 'E-posta',
      message: 'Mesajınız',
      send: 'Gönder',
      success: 'Mesajınız başarıyla gönderildi!',
      sending: 'Gönderiliyor...',
      emailSubject: 'ÜNOG Web Sitesi İletişim',
      emailOpens: 'E-posta uygulamanız açılacak.'
    },
    merch: {
      title: 'ÜNOG Merch',
      comingSoon: 'Yakında',
      description: 'ÜNOG merch yakında sizlerle! Takipte kalın :)',
      items: {
        tshirt: {
          title: 'T-shirt',
          description: 'ÜNOG T-shirt'
        },
        sticker: {
          title: 'Sticker',
          description: 'ÜNOG Çıkartmaları'
        },
        deck: {
          title: 'Deste',
          description: 'ÜNOG Kart Destesi'
        }
      }
    },
    patreon: {
      title: 'ÜNOG\'u Destekleyin',
      subtitle: 'Topluluğumuzun büyümesine katkıda bulunun',
      description: 'ÜNOG, 2017\'den beri Türkiye\'de bağımsız oyun geliştirme kültürünü yaymak için çalışıyor. Sizin desteğinizle daha fazla etkinlik düzenleyebilir, daha fazla geliştiriciye ulaşabilir ve topluluğumuzu büyütebiliriz. Her destek, oyun geliştirme ekosistemimizin güçlenmesine katkıda bulunur.',
      benefits: {
        community: {
          title: 'Topluluk Desteği',
          description: '6000+ üyeli topluluğumuzun büyümesine katkıda bulunun'
        },
        events: {
          title: 'Etkinlik Desteği',
          description: 'Game Jam\'ler, atölyeler ve buluşmaların düzenlenmesine yardım edin'
        },
        growth: {
          title: 'Büyüme Desteği',
          description: 'Bağımsız oyun geliştirme kültürünün yayılmasına destek olun'
        }
      },
      supportButton: 'Patreon\'da Destekle',
      thankYou: 'Desteğiniz için teşekkürler! <3'
    },
    footer: {
      followUs: 'Bizi Takip Edin',
      contact: 'İletişim',
      description: 'Türkiye\'nin en büyük indie oyun geliştirici topluluğu. Birlikte büyüyor, birlikte yaratıyoruz.',
      madeWith: '© 2025 ÜNOG. Made with',
      byCommunity: 'by tugaep',
      newsletter: 'Bülten',
      support: 'Bağış',
      supportWithPatreon: 'Patreon',
      supportWithPatreonText: 'Patreon ile Destekle'
    },
    common: {
      logo: 'ÜNOG Logo'
    },
    volunteers: {
      title: 'Gönüllülerimiz',
      subtitle: 'ÜNOG\'u mümkün kılan 27 gönüllümüzle tanışın. Topluluğumuz Türkiye\'nin ve dünyanın dört bir yanından tutkulu bireyler tarafından destekleniyor.',
      directors: 'Direktör',
      volunteers: 'Gönüllü',
      joinTitle: 'Ekibimize Katılmak İster Misin?',
      joinDescription: 'ÜNOG ailesinin bir parçası olmak için hemen başvur!',
      joinButton: 'Gönüllü Ol',
      teams: {
        sanat: 'Sanat ve Tasarım',
        icerik: 'İçerik Üretim',
        organizasyon: 'Fiziksel Organizasyon',
        yazilim: 'Yazılım'
      },
      teamDescriptions: {
        organizasyon: 'ÜNOG\'un fiziksel varlığını oluştur.',
        sanat: 'ÜNOG\'un görsel kimliğini oluştur.',
        icerik: 'ÜNOG\'un sesini dış dünyaya taşı.',
        yazilim: 'ÜNOG\'un dijital varlığını güçlendir.'
      },
      member: 'gönüllü',
      joinClosedDescription: 'Sonraki başvurular 2026.1 döneminde açılacak!',
      newApplications: 'Yeni Başvurular Açık!',
      heroDescription: 'ÜNOG olarak seni de aramızda görmek istiyoruz!',
      teamAreasTitle: 'Hangi Alanda Yer Almak İstersin?',
      motivationTitle: '🎯 Neden Gönüllü Olmalısın?',
      motivationDescription: 'Eğer sen de bağımsız oyun geliştirme tutkusu taşıyor ve bu heyecan verici yolculuğa katkıda bulunmak istiyorsan, Türk oyun sektörünü birlikte şekillendirelim! 🎮',
      motivationCards: {
        sector: {
          title: 'Sektöre Katkı',
          description: 'Türk oyun sektörüne katkı sağlayarak yerli bağımsız geliştiricilerin ve bağımsız oyun geliştirme kültürünün ilerlemesine destek olabilirsin.'
        },
        network: {
          title: 'Network & Topluluk',
          description: 'Gönüllü olarak hem oyun geliştirme kültürünün bir parçası olabilir hem de sektörde önemli bağlantılar kurarak kendi networkünü genişletebilirsin.'
        },
        experience: {
          title: 'Deneyim & Gelişim',
          description: 'Etkinlik organizasyonlarından proje geliştirmeye kadar birçok alanda deneyim kazanabilir, kariyerine ve kişisel gelişimine değer katabilirsin.'
        },
        passion: {
          title: 'Tutku & Vizyon',
          description: 'Bağımsız oyun geliştirme tutkusu taşıyan ve bu heyecan verici yolculuğa katkıda bulunmak isteyen herkesi aramızda görmekten mutluluk duyuyoruz.'
        }
      },
      statusActive: 'Başvurular Aktif'
    }
  },
  en: {
    nav: {
      home: 'Home',
      events: 'Events',
      contact: 'Contact',
      merch: 'Merch',
      support: 'Support',
      volunteers: 'Volunteers'
    },
    hero: {
      title: 'Hi! here is where independent game developers come together.',
      subtitle: 'Welcome to ÜNOG Game Developer Community',
      joinButton: 'Join Community',
      stats: {
        activeMembers: 'Members',
        reviewedGames: 'Reviewed Games',
        events: 'Events'
      }
    },
    about: {
      title: 'About ÜNOG',
      description: 'ÜNOG is a independent and non-profit game devloper community founded in 2017. It brings together engineers, designers, artists, sound designers and students interested in game development from all over Turkey. With our 6000+ members, our goal is to spread the game development culture in Turkey, share knowledge, and support the independent game development production. From Game Jams to PlusPlus Program, from developer meetups to newsletter publications, we create environments where indie game developers can come together to create and learn together.',
      mission: 'Bringing indie game developers together. Organizing production and sharing focused events. Supporting projects with potential both financially and in terms of mentorship. Game Jams, workshops, meetings and publications to increase creative collaborations. Making knowledge accessible to the industry.',
      vision: 'Strengthening the indie game development culture in Turkey, spreading knowledge, and building a sustainable ecosystem for independent game developers. We believe that indie game development is not just about code and pixels; it is a collaborative creative space where we can create together, learn together, and understand the world through games.',
      missionTitle: 'Our Mission',
      visionTitle: 'Our Vision',
      communityValue: 'Together we are stronger'
    },
    events: {
      title: 'Our Events',
      subtitle: 'Events organized by our community',
      upcoming: 'Upcoming Events',
      past: 'Past Events',
      upcomingLabel: 'Upcoming',
      pastLabel: 'Past',
      join: 'Join',
      attendees: 'attendees'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch with us',
      name: 'Full Name',
      email: 'Email',
      message: 'Your Message',
      send: 'Send',
      success: 'Your message has been sent successfully!',
      sending: 'Sending...',
      emailSubject: 'ÜNOG Website Contact',
      emailOpens: 'Your email application will open.'
    },
    merch: {
      title: 'ÜNOG Merch',
      comingSoon: 'Coming Soon',
      description: 'Our ÜNOG branded products will be with you very soon! Keep an eye on our updates :)',
      items: {
        tshirt: {
          title: 'T-shirt',
          description: 'ÜNOG branded t-shirt'
        },
        sticker: {
          title: 'Sticker',
          description: 'ÜNOG branded sticker'
        },
        deck: {
          title: 'Deck',
          description: 'ÜNOG branded deck'
        }
      }
    },
    patreon: {
      title: 'Support ÜNOG',
      subtitle: 'Join our growth',

      description: 'ÜNOG has been working to spread the indie game development culture in Turkey since 2017. With your support, we can organize more events, reach more developers, and grow our community. Every support contributes to the growth of our game development ecosystem.',
      benefits: {
        community: {
          title: 'Community Support',
          description: 'Join our 6000+ member community'
        },
        events: {
          title: 'Event Support',
          description: 'Help organize Game Jams, workshops, and meetups'
        },
        growth: {
          title: 'Growth Support',
          description: 'Support the spread of the indie game development culture'
        }
      },
      supportButton: 'Support on Patreon',
      thankYou: 'Thank you! <3'
    },
    footer: {
      followUs: 'Follow Us',
      contact: 'Contact',
      description: 'Turkey\'s biggest indie game developer community. We grow together, we create together.',
      madeWith: '© 2025 ÜNOG. Made with',
      byCommunity: 'by tugaep',
      newsletter: 'Newsletter',
      support: 'Support',
      supportWithPatreon: 'Patreon',
      supportWithPatreonText: 'Support with Patreon'
    },
    common: {
      logo: 'ÜNOG Logo'
    },
    volunteers: {
      title: 'Our Volunteers',
      subtitle: 'Meet the incredible team of 27 volunteers who make ÜNOG possible. Our community is powered by passionate individuals from around Türkiye and the world.',
      directors: 'Director',
      volunteers: 'Volunteer',
      joinTitle: 'Want to Join Our Team?',
      joinDescription: 'Apply now to be part of the ÜNOG family!',
      joinButton: 'Become a Volunteer',
      teams: {
        sanat: 'Art & Design',
        icerik: 'Content Production',
        organizasyon: 'Physical Organization',
        yazilim: 'Software'
      },
      teamDescriptions: {
        organizasyon: 'Create ÜNOG\'s physical presence.',
        sanat: 'Create ÜNOG\'s visual identity.',
        icerik: 'Carry ÜNOG\'s voice to the outside world.',
        yazilim: 'Strengthen ÜNOG\'s digital presence and infrastructure.'
      },
      member: 'volunteer',
      joinClosedDescription: 'Next applications will be opened in 2026.1!',
      newApplications: 'New Applications Open!',
      heroDescription: 'We would love to see you among us at ÜNOG!',
      teamAreasTitle: 'Which Area Would You Like to Contribute?',
      motivationTitle: '🎯 Why Should You Volunteer?',
      motivationDescription: 'If you also have a passion for indie game development and want to contribute to this exciting journey, let\'s shape the Turkish game industry together! 🎮',
      motivationCards: {
        sector: {
          title: 'Industry Contribution',
          description: 'By contributing to the Turkish game industry, you can support the advancement of local indie developers and indie game development culture.'
        },
        network: {
          title: 'Network & Community',
          description: 'As a volunteer, you can both be part of the game development culture and expand your network by making important connections in the industry.'
        },
        experience: {
          title: 'Experience & Growth',
          description: 'You can gain experience in many areas from event organization to project development, adding value to your career and personal development.'
        },
        passion: {
          title: 'Passion & Vision',
          description: 'We are happy to see everyone who has a passion for indie game development and wants to contribute to this exciting journey among us.'
        }
      },
      statusActive: 'Applications Active'
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('tr');

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        t: translations[language] 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
