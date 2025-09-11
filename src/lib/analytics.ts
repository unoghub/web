// Google Analytics 4 utility fonksiyonları
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// GA4 Measurement ID (çevre değişkeninden okunacak)
export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;

// GA4'ü sayfa yüklendiğinde başlat
export const initGA = () => {
  if (!GA_TRACKING_ID || typeof window === 'undefined') {
    return;
  }

  // Google Analytics script'ini dinamik olarak yükle
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  // dataLayer'ı başlat
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer!.push(arguments);
  };

  // GA4'ü yapılandır
  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Sayfa görüntüleme olayını takip et
export const trackPageView = (path: string) => {
  if (!GA_TRACKING_ID || typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('config', GA_TRACKING_ID, {
    page_path: path,
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Özel olay takibi
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (!GA_TRACKING_ID || typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Kullanıcı etkileşimlerini takip et
export const trackClick = (elementName: string, location?: string) => {
  trackEvent('click', 'engagement', `${elementName}${location ? ` - ${location}` : ''}`);
};

export const trackDownload = (fileName: string) => {
  trackEvent('download', 'file', fileName);
};

export const trackOutboundLink = (url: string) => {
  trackEvent('click', 'outbound_link', url);
}; 