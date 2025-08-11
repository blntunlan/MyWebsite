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

## Deployment (GitHub Pages)
1. İlk push:
```powershell
git init
git add .
git commit -m "feat: initial"
git branch -M main
git remote add origin https://github.com/blntunlan/MyWebsite.git
git push -u origin main
```
2. GitHub > Settings > Pages: Source = GitHub Actions (hazır workflow: `.github/workflows/deploy.yml`).
3. Main'e her push sonra otomatik build & publish. URL Actions çıktısında.

NOT: Proje repository adı (MyWebsite) olduğu için ilk deploy URL'si:
https://blntunlan.github.io/MyWebsite/
`vite.config.ts` içinde CI ortamında base otomatik `/MyWebsite/` olarak ayarlanır. Özel domain (CNAME) eklediğinizde base'i `/` yapabilirsiniz.

Doğrulama:
* Actions sekmesinde "Deploy Website" workflow yeşil olmalı.
* "deploy" job çıktısında Page URL görünür.
* Tarayıcıda açıldığında stiller/yazı tipleri yüklenmiyorsa base ayarı veya cache'i temizleyin (Ctrl+Shift+R).

Özel domain: `dist` içine `CNAME` (örn: `bulentunalan.dev`) ekleyip DNS ayarla.

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
