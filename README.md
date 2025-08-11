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

## Deployment (GitHub Pages - User Site)
Hedef URL: https://blntunlan.github.io/

Repo yeniden adlandırma adımı:
1. GitHub'da repo Settings > Repository name: `MyWebsite` -> `blntunlan.github.io` (kaydet).
2. Lokal origin URL'ini güncelle:
```powershell
git remote set-url origin https://github.com/blntunlan/blntunlan.github.io.git
```
3. Bu repo adıyla push edilen `main` branch otomatik olarak kök kullanıcı sitesi olur.

İlk kurulum / push (yapılmadıysa):
```powershell
git add .
git commit -m "feat: user site setup" --allow-empty
git push -u origin main
```
Workflow: `.github/workflows/deploy.yml` build edip root'a yayınlar.

Doğrulama:
* Actions > Deploy Website green
* https://blntunlan.github.io/ açılıyor
* DevTools Network 404 yok

Sorun giderme:
* 404 asset: Hard refresh (Ctrl+Shift+R)
* Sayfa eski tasarım: Cache - yeni commit hash'i Actions logundan doğrula
* Hiç açılmıyor: Repo rename propagation (1–2 dk) veya workflow hatası

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
