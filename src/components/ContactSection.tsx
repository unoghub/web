import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(t.contact.emailSubject);
      const body = encodeURIComponent(
        `${t.contact.name}: ${formData.name}\n${t.contact.email}: ${formData.email}\n\n${t.contact.message}:\n${formData.message}`
      );
      const mailtoLink = `mailto:info@unoghub.org?subject=${subject}&body=${body}`;
      
      window.location.href = mailtoLink;
      
      toast({
        title: t.contact.success,
        description: t.contact.emailOpens,
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center mb-8 p-6 bg-unog-gradient/10 rounded-lg">
              <Mail className="h-6 w-6 text-unog-blue mr-3" />
              <span className="text-lg font-medium text-gray-900">info@unoghub.org</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.name}
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder={t.contact.name}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.email}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder={t.contact.email}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.message}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  maxLength={1000}
                  className="w-full resize-none"
                  placeholder={t.contact.message}
                />
                <div className="flex justify-end mt-1">
                  <p className="text-xs text-gray-500">
                    {formData.message.length}/1000
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-unog-gradient hover:opacity-90 transition-opacity text-white py-3"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    {t.contact.sending}
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="h-4 w-4 mr-2" />
                    {t.contact.send}
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
