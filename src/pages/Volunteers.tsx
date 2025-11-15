import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { MapPin, Users, Crown } from 'lucide-react';

// Gönüllüler listesi (takımsız, tek grid)
const volunteers = [
  // Direktörler
  { id: 1, name: 'Duhan Durmaz', role: 'director' },
  { id: 2, name: 'Obada Abido', role: 'director' },
  { id: 3, name: 'Sude Bölükbaşıoğlu', role: 'director' },

  // Gönüllüler
  { id: 101, name: 'Ayşenaz Kara', role: 'volunteer' },
  { id: 102, name: 'İclal Solhan', role: 'volunteer' },
  { id: 103, name: 'Rahmi Direnç Sezer', role: 'volunteer' },
  { id: 104, name: 'Sarp Kırman', role: 'volunteer' },
  { id: 105, name: 'Melike Sevinç', role: 'volunteer' },
  { id: 106, name: 'Batuhan Çar', role: 'volunteer' },
  { id: 107, name: 'Damla Günaydın', role: 'volunteer' },
  { id: 108, name: 'Ebru Altıner', role: 'volunteer' },
  { id: 109, name: 'Ege Esin', role: 'volunteer' },
  { id: 110, name: 'Elif Sude Cesur', role: 'volunteer' },
  { id: 111, name: 'Emre Güçlü', role: 'volunteer' },
  { id: 112, name: 'Furkan Palabıyık', role: 'volunteer' },
  { id: 113, name: 'Melih Can Aşık', role: 'volunteer' },
  { id: 114, name: 'Kaan Dalkıran', role: 'volunteer' },
  { id: 115, name: 'Kadir E. Keleş', role: 'volunteer' },
  { id: 116, name: 'Mustafa Efecan Buzluk', role: 'volunteer' },
  { id: 117, name: 'Sude Sırmalı', role: 'volunteer' },
  { id: 118, name: 'Yağmur Derhem', role: 'volunteer' },
  { id: 119, name: 'Yusuf Can Talay', role: 'volunteer' },
  { id: 120, name: 'Beyza Yıldırım', role: 'volunteer' },
  { id: 121, name: 'Asım Baykal', role: 'volunteer' },
];

// İsimden baş harfleri üret
const getInitials = (fullName: string) => {
  if (!fullName) return '';
  const parts = fullName
    .split(' ')
    .filter(Boolean)
    .map((p) => p.trim());
  const first = parts[0]?.[0] || '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
};

const Volunteers = () => {
  const { t } = useLanguage();

  // Sıralama: direktörler önce, sonra ada göre
  const sortedVolunteers = [...volunteers].sort((a: any, b: any) => {
    if (a.role === 'director' && b.role !== 'director') return -1;
    if (a.role !== 'director' && b.role === 'director') return 1;
    return a.name.localeCompare(b.name, 'tr');
  });

  const directorsCount = sortedVolunteers.filter((v) => v.role === 'director').length;
  const volunteersCount = sortedVolunteers.filter((v) => v.role !== 'director').length;

  const renderVolunteerCard = (volunteer: any) => {
    const initials = getInitials(volunteer.name);
    const hasCity = Boolean(volunteer.city);

    return (
      <Card key={volunteer.id} className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-gray-50 to-white">
        <CardContent className="p-4 text-center">
          {/* Avatar with sketch */}
          <div className="mb-3">
            <Avatar className="h-16 w-16 mx-auto mb-2">
              {volunteer.sketch ? (
                <AvatarImage 
                  src={`/uploads/${volunteer.sketch}`} 
                  alt={volunteer.name}
                  className="object-cover"
                />
              ) : null}
              <AvatarFallback className="bg-unog-gradient text-white font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Name */}
          <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-1">
            {volunteer.name}
          </h3>

          {/* Role Badge */}
          <div className="mb-2">
            <Badge 
              variant={volunteer.role === 'director' ? 'default' : 'secondary'}
              className={`${volunteer.role === 'director' 
                  ? 'bg-unog-purple text-white' 
                  : 'bg-unog-green text-white'
              } text-xs`}
            >
              {volunteer.role === 'director' ? (
                <>
                  <Crown className="h-3 w-3 mr-1" />
                  {t.volunteers.directors}
                </>
              ) : (
                <>
                  <Users className="h-3 w-3 mr-1" />
                  {t.volunteers.volunteers}
                </>
              )}
            </Badge>
          </div>

          {/* City */}
          {hasCity && (
            <div className="flex items-center justify-center text-xs text-gray-600">
              <MapPin className="h-3 w-3 mr-1" />
              <span className="line-clamp-1">{volunteer.city}</span>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="volunteers" className="pt-32 pb-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t.volunteers.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.volunteers.subtitle}
            </p>
            <div className="flex justify-center items-center gap-4 mt-6">
              <div className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-unog-purple" />
                <span className="text-sm font-medium text-gray-700">{directorsCount} {t.volunteers.directors}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-unog-green" />
                <span className="text-sm font-medium text-gray-700">{volunteersCount} {t.volunteers.volunteers}</span>
              </div>
            </div>
          </div>

          {/* Tek liste (direktörler üstte) */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{t.volunteers.title}</h3>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                {sortedVolunteers.length} {t.volunteers.member}
              </Badge>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
              {sortedVolunteers.map(renderVolunteerCard)}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-unog-green/10 via-unog-blue/10 to-unog-purple/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.volunteers.joinTitle}
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {t.volunteers.joinClosedDescription}
              </p>
              <button className="bg-unog-gradient text-white px-6 py-3 rounded-full font-semibold opacity-60 cursor-not-allowed" disabled>
                {t.volunteers.joinButton}
              </button>
            </div>
            </div>
          </div>
        </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Volunteers;


