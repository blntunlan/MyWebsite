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
Varsayılan URL (mevcut repo adıyla):
https://blntunlan.github.io/MyWebsite/

Daha temiz ücretsiz alternatif: Reponun adını `blntunlan.github.io` yaparsan URL kök olur:
https://blntunlan.github.io/
Bu durumda `vite.config.ts` içinde base'i kalıcı `/` yapabilirsin (conditional gerekmez).

1. İlk push (yapılmadıysa):
```powershell
git init
git add .
git commit -m "feat: initial"
git branch -M main
git remote add origin https://github.com/blntunlan/MyWebsite.git
git push -u origin main
```
2. Pages otomatik workflow ( `.github/workflows/deploy.yml` ) ile build olur.
3. Actions > Deploy Website workflow yeşil olunca URL'yi aç.

Doğrulama:
* Styles / JS yükleniyorsa base ayarı doğru.
* 404 asset yok.

Repo adını sonradan `blntunlan.github.io` yaparsan:
* `vite.config.ts` içindeki conditional base'i kaldırıp `base: '/'` yap.
* Eski /MyWebsite/ URL'si 404 olur, yeni root URL'yi kullan.

Sorun giderme:
* 404 asset: Hard refresh (Ctrl+Shift+R)
* Boş sayfa: Wrong base; CI log'unda built path'i kontrol et.

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
