# 🕋 Pemandu Umroh GPS

Aplikasi Progressive Web App (PWA) untuk memandu jamaah umroh dengan menggunakan GPS. Aplikasi ini memberikan panduan lengkap untuk setiap tahapan ritual umroh berdasarkan lokasi pengguna.

## ✨ Fitur

- 📍 **GPS Dummy**: Klik pada peta untuk simulasi lokasi
- 🗺️ **Peta Interaktif**: Menggunakan Leaflet.js dengan OpenStreetMap
- 📱 **Progressive Web App**: Dapat diinstall dan bekerja offline
- 🕌 **Panduan Lengkap**:
  - Ihrom di Miqat
  - Tawaf di Masjidil Haram
  - Sa'i antara Safa dan Marwa
  - Tahalul (mengakhiri ihrom)
- 🎯 **Deteksi Lokasi Otomatis**: Panduan muncul otomatis saat berada di area ritual
- 📖 **Doa dan Niat**: Lengkap dengan teks Arab, transliterasi, dan terjemahan
- 🌐 **Offline Support**: Dapat digunakan tanpa koneksi internet

## 🚀 Cara Menggunakan

### Menjalankan Aplikasi

1. **Clone atau download repository ini**
   ```bash
   git clone https://github.com/nabilrei/umroh-gps.git
   cd umroh-gps
   ```

2. **Jalankan dengan web server**

   Gunakan salah satu cara berikut:

   **Dengan Python:**
   ```bash
   # Python 3
   python -m http.server 8000

   # Atau Python 2
   python -m SimpleHTTPServer 8000
   ```

   **Dengan Node.js:**
   ```bash
   npx http-server
   ```

   **Dengan PHP:**
   ```bash
   php -S localhost:8000
   ```

3. **Buka browser**
   ```
   http://localhost:8000
   ```

### Menggunakan Aplikasi

1. **Klik pada peta** untuk mensimulasikan posisi GPS Anda
2. **Perhatikan marker warna**:
   - 🟢 **Hijau** = Miqat (Ihrom)
   - 🔴 **Merah** = Masjidil Haram (Tawaf)
   - 🟡 **Kuning** = Safa & Marwa (Sa'i)
   - 🔵 **Biru** = Area Tahalul

3. **Ketika Anda klik di dalam area** (lingkaran radius), panduan akan muncul otomatis
4. **Baca panduan** dengan lengkap untuk setiap ritual
5. **Swipe panel ke atas** untuk membaca panduan lengkap

### Install sebagai PWA

1. Buka aplikasi di browser (Chrome/Safari/Edge)
2. Klik tombol **"Install"** yang muncul
3. Atau gunakan menu **"Add to Home Screen"** di browser
4. Aplikasi akan muncul di home screen seperti aplikasi native

## 📍 Lokasi Ritual

Aplikasi ini mencakup lokasi-lokasi penting untuk umroh:

| Lokasi | Koordinat | Radius | Ritual |
|--------|-----------|--------|--------|
| Miqat Taneem | 21.4474, 39.8017 | 300m | Ihrom |
| Masjidil Haram | 21.4225, 39.8262 | 500m | Tawaf |
| Bukit Safa | 21.4231, 39.8268 | 200m | Sa'i |
| Bukit Marwa | 21.4226, 39.8280 | 200m | Sa'i |
| Area Tahalul | 21.4350, 39.8180 | 500m | Tahalul |

## 📖 Panduan Lengkap

### 1. Ihrom di Miqat
- Persiapan ihrom
- Niat umroh
- Talbiyah
- Larangan selama ihrom

### 2. Tawaf di Masjidil Haram
- Niat tawaf
- Cara tawaf 7 putaran
- Doa-doa tawaf
- Sholat di Maqam Ibrahim

### 3. Sa'i antara Safa dan Marwa
- Cara sa'i 7 kali
- Doa-doa sa'i
- Adab sa'i

### 4. Tahalul
- Cara tahalul (halaq/taqshir)
- Perbedaan untuk laki-laki dan wanita
- Amalan setelah umroh

## 🛠️ Teknologi

- **HTML5**: Struktur aplikasi
- **CSS3**: Styling dengan CSS Variables
- **JavaScript**: Logic dan interaksi
- **Leaflet.js**: Library peta interaktif
- **OpenStreetMap**: Sumber peta
- **Service Worker**: Offline support
- **Web App Manifest**: PWA configuration

## 📱 Kompatibilitas

- ✅ Chrome (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Safari (Desktop & Mobile)
- ✅ Edge (Desktop & Mobile)
- ✅ Opera (Desktop & Mobile)

## 🔮 Pengembangan Selanjutnya

Fitur yang bisa dikembangkan:

- [ ] GPS asli (Geolocation API)
- [ ] Notifikasi push saat mendekati lokasi
- [ ] Audio panduan
- [ ] Multi bahasa (Arab, English, Indonesia)
- [ ] Kompas arah kiblat
- [ ] Jadwal sholat
- [ ] Doa harian
- [ ] Offline map tiles
- [ ] Tracking rute perjalanan
- [ ] Foto dan journal umroh

## 📄 Lisensi

MIT License - Bebas digunakan untuk keperluan pribadi dan komersial

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📞 Kontak

Jika ada pertanyaan atau saran, silakan buat issue di repository ini.

---

**Taqabbalallahu minna wa minkum**
Semoga Allah menerima ibadah kita semua 🤲