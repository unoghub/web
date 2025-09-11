# ÜNOG - Türkiye'nin En Büyük Indie Oyun Geliştirici Topluluğu

## Proje Hakkında

ÜNOG, bağımsız oyun geliştiricilerini bir araya getiren, bilgi paylaşımını destekleyen ve sektörün büyümesine katkıda bulunan bir topluluktur.

## Nasıl Düzenleyebilirim?

Bu uygulamayı düzenlemek için birkaç yol var:

**Tercih ettiğiniz IDE'yi kullanın**

Projeyi yerel olarak çalıştırmak için bu repo'yu klonlayın ve değişiklikleri push edin.

Tek gereksinim Node.js & npm'in yüklü olması - [nvm ile yükleyin](https://github.com/nvm-sh/nvm#installing-and-updating)

Bu adımları takip edin:

```sh
# Adım 1: Projenin Git URL'sini kullanarak repository'yi klonlayın.
git clone <YOUR_GIT_URL>

# Adım 2: Proje dizinine gidin.
cd <YOUR_PROJECT_NAME>

# Adım 3: Gerekli bağımlılıkları yükleyin.
npm i

# Adım 4: Otomatik yeniden yükleme ve anında önizleme ile geliştirme sunucusunu başlatın.
npm run dev
```

**GitHub'da doğrudan dosya düzenleyin**

- İstenen dosyaya gidin.
- Dosya görünümünün sağ üst köşesindeki "Edit" (kalem) simgesine tıklayın.
- Değişikliklerinizi yapın ve commit edin.

**GitHub Codespaces kullanın**

- Repository'nizin ana sayfasına gidin.
- Sağ üst köşedeki "Code" (yeşil) düğmesine tıklayın.
- "Codespaces" sekmesini seçin.
- Yeni bir Codespace ortamı başlatmak için "New codespace"e tıklayın.
- Dosyaları doğrudan Codespace içinde düzenleyin ve işiniz bittiğinde değişiklikleri commit edip push edin.

## Bu proje için hangi teknolojiler kullanılıyor?

Bu proje şunlarla inşa edilmiştir:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Bu projeyi nasıl deploy edebilirim?

Projeyi deploy etmek için:

```sh
# Production build oluşturun
npm run build

# Build edilen dosyaları sunucunuza yükleyin
```

## Özellikler

- Çok dilli destek (Türkçe/İngilizce)
- Responsive tasarım
- Modern UI/UX
- Performans odaklı
