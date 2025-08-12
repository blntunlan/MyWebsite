# Unreal Engine Developer Portfolio

Apple benzeri sade, tipografi odaklı bir Unreal Engine oyun geliştirici portfolyo sitesi.

## Özellik Hedefleri
* Hero + Showreel
* Proje kartları (JSON içerik)
* Teknoloji & araç listesi
* Deneyim timeline
* İletişim + sosyal linkler
* Dark / light tema (localStorage)
* Statik build (GitHub Pages uyumlu)

## Ortam
Node.js 20 LTS önerilir. `.nvmrc` dosyası proje kökünde mevcut.
Windows için nvm (https://github.com/coreybutler/nvm-windows) kurduktan sonra:
```powershell
nvm install 20
nvm use 20
```
Alternatif: https://nodejs.org üzerinden LTS installer.

## Kurulum
```powershell
npm install
npm run dev
```

Tarayıcı: http://localhost:5173

## Build
```powershell
npm run build
```
`dist/` klasörü GitHub Pages için deploy edilebilir.

## Deployment (GitHub Pages - Project Site)
URL: https://blntunlan.github.io/MyWebsite/

CI sırasında `vite.config.ts` base otomatik `/MyWebsite/` olur; lokalde `/` kalır.

İlk push (yapılmadıysa):
```powershell
git init
git add .
git commit -m "feat: initial"
git branch -M main
git remote add origin https://github.com/blntunlan/MyWebsite.git
git push -u origin main
```
Her main push sonrası Actions workflow (`Deploy Website`) build & publish.

Doğrulama:
* Actions workflow yeşil
* URL açılıyor (CSS/JS 404 yok)

Sorun giderme:
* 404 asset: base yanlış -> CI log build output path kontrol et
* Değişiklik görünmüyor: Hard refresh (Ctrl+Shift+R) veya farklı tarayıcı
* Workflow kırmızı: Log içinde hata satırını incele

## İçerik Düzenleme
`content/` altındaki JSON dosyalarını güncelleyin. Gerekirse tip güvenliği için interface ekleyebilirsiniz.

## Yol Haritası
* Blog / Yazılar (MDX)
* Çoklu dil (i18n) – (en varsayılan, tr opsiyon)
* Projeler için detay sayfaları
* Lighthouse optimizasyonu
* Otomatik video poster (FFmpeg script)

## Lisans
Kişisel kullanım.
