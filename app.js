// PWA Installation
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('installPrompt').style.display = 'flex';
});

function installApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            }
            deferredPrompt = null;
            document.getElementById('installPrompt').style.display = 'none';
        });
    }
}

function dismissInstall() {
    document.getElementById('installPrompt').style.display = 'none';
}

// Register Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('Service Worker registered', reg))
        .catch(err => console.log('Service Worker registration failed', err));
}

// Lokasi-lokasi penting untuk umroh
const locations = {
    miqat: {
        name: 'Miqat (Taneem)',
        coords: [21.4474, 39.8017],
        icon: '🟢',
        color: '#4caf50',
        radius: 300, // meter
        type: 'ihrom'
    },
    haram: {
        name: 'Masjidil Haram',
        coords: [21.4225, 39.8262],
        icon: '🔴',
        color: '#f44336',
        radius: 500,
        type: 'tawaf'
    },
    safa: {
        name: 'Bukit Safa',
        coords: [21.4231, 39.8268],
        icon: '🟡',
        color: '#ffc107',
        radius: 200,
        type: 'sai'
    },
    marwa: {
        name: 'Bukit Marwa',
        coords: [21.4226, 39.8280],
        icon: '🟡',
        color: '#ffc107',
        radius: 200,
        type: 'sai'
    },
    tahalul: {
        name: 'Area Tahalul',
        coords: [21.4350, 39.8180],
        icon: '🔵',
        color: '#2196f3',
        radius: 500,
        type: 'tahalul'
    }
};

// Panduan untuk setiap ritual
const guides = {
    ihrom: {
        title: 'Panduan Ihrom',
        content: `
            <div class="ritual-section">
                <h3>🕋 Miqat - Tempat Berihram</h3>
                <p>Anda berada di Miqat, tempat untuk memulai niat umroh dengan berihram.</p>

                <h4>Persiapan Ihrom:</h4>
                <ol>
                    <li>Mandi besar (sunnah)</li>
                    <li>Memakai pakaian ihrom (putih, 2 lapis untuk laki-laki)</li>
                    <li>Memakai wewangian sebelum ihrom (sunnah)</li>
                    <li>Sholat sunnah ihrom 2 rakaat</li>
                </ol>

                <h4>Niat Umroh:</h4>
                <div class="arabic-text">
لَبَّيْكَ اللّٰهُمَّ عُمْرَةً
                </div>
                <div class="translation">
                    "Labbaikallahumma 'umratan"<br>
                    Artinya: "Aku penuhi panggilan-Mu ya Allah untuk melaksanakan umroh"
                </div>

                <h4>Talbiyah:</h4>
                <div class="arabic-text">
لَبَّيْكَ اللّٰهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيْكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ لاَ شَرِيْكَ لَكَ
                </div>
                <div class="translation">
                    "Labbaikallahumma labbaik, labbaika laa syariikalaka labbaik, innal hamda wan ni'mata laka wal mulk, laa syariikalak"<br>
                    Artinya: "Aku penuhi panggilan-Mu ya Allah, aku penuhi panggilan-Mu. Aku penuhi panggilan-Mu, tidak ada sekutu bagi-Mu, aku penuhi panggilan-Mu. Sesungguhnya segala puji, nikmat, dan kerajaan adalah milik-Mu. Tidak ada sekutu bagi-Mu."
                </div>

                <h4>Larangan Selama Ihrom:</h4>
                <ul>
                    <li>Tidak boleh memotong rambut atau kuku</li>
                    <li>Tidak boleh memakai wewangian</li>
                    <li>Tidak boleh berburu atau membunuh binatang</li>
                    <li>Tidak boleh melakukan hubungan suami istri</li>
                    <li>Laki-laki tidak boleh menutup kepala atau memakai pakaian berjahit</li>
                    <li>Wanita tidak boleh menutup wajah</li>
                </ul>

                <p><strong>Selanjutnya:</strong> Menuju Masjidil Haram untuk melakukan Tawaf</p>
            </div>
        `
    },
    tawaf: {
        title: 'Panduan Tawaf',
        content: `
            <div class="ritual-section">
                <h3>🕋 Tawaf di Masjidil Haram</h3>
                <p>Anda berada di Masjidil Haram. Saatnya melakukan Tawaf mengelilingi Ka'bah.</p>

                <h4>Persiapan Tawaf:</h4>
                <ol>
                    <li>Laki-laki mengidtiba' (membuka bahu kanan)</li>
                    <li>Mulai dari Hajar Aswad</li>
                    <li>Niat Tawaf</li>
                </ol>

                <h4>Niat Tawaf:</h4>
                <div class="arabic-text">
نَوَيْتُ الطَّوَافَ سَبْعَةَ أَشْوَاطٍ لِلَّهِ تَعَالَى
                </div>
                <div class="translation">
                    "Nawaitul tawafa sab'ata asywaatin lillahi ta'ala"<br>
                    Artinya: "Aku niat tawaf tujuh putaran karena Allah Ta'ala"
                </div>

                <h4>Cara Tawaf:</h4>
                <ol>
                    <li><strong>Istilam Hajar Aswad</strong> - Cium atau isyaratkan tangan sambil mengucapkan:
                        <div class="arabic-text">بِسْمِ اللهِ وَاللهُ أَكْبَرُ</div>
                        <div class="translation">"Bismillahi wallahu akbar"</div>
                    </li>
                    <li><strong>Keliling Ka'bah 7 putaran</strong> berlawanan arah jarum jam</li>
                    <li><strong>3 putaran pertama</strong>: Ramal (jalan cepat) untuk laki-laki</li>
                    <li><strong>4 putaran terakhir</strong>: Jalan biasa</li>
                    <li><strong>Setiap putaran</strong> dimulai dan diakhiri di Hajar Aswad</li>
                    <li><strong>Di Rukun Yamani</strong>, usap dengan tangan kanan (jika bisa) sambil ucapkan:
                        <div class="arabic-text">بِسْمِ اللهِ وَاللهُ أَكْبَرُ</div>
                    </li>
                </ol>

                <h4>Doa antara Rukun Yamani dan Hajar Aswad:</h4>
                <div class="arabic-text">
رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
                </div>
                <div class="translation">
                    "Rabbana aatina fid dunya hasanatan wa fil akhirati hasanatan wa qina 'adzaban naar"<br>
                    Artinya: "Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari azab neraka"
                </div>

                <h4>Setelah Tawaf:</h4>
                <ol>
                    <li>Sholat 2 rakaat di belakang Maqam Ibrahim (jika memungkinkan)</li>
                    <li>Minum air zamzam</li>
                    <li>Kembali ke Hajar Aswad untuk istilam (jika memungkinkan)</li>
                </ol>

                <p><strong>Selanjutnya:</strong> Menuju Safa dan Marwa untuk Sa'i</p>
            </div>
        `
    },
    sai: {
        title: 'Panduan Sa\'i',
        content: `
            <div class="ritual-section">
                <h3>⛰️ Sa'i antara Safa dan Marwa</h3>
                <p>Sa'i adalah berjalan/berlari kecil antara bukit Safa dan Marwa sebanyak 7 kali.</p>

                <h4>Memulai Sa'i dari Safa:</h4>
                <p>Naik ke bukit Safa, hadap ke Ka'bah, dan ucapkan:</p>
                <div class="arabic-text">
إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ
                </div>
                <div class="translation">
                    "Innash shafa wal marwata min sya'a'irillah"<br>
                    Artinya: "Sesungguhnya Safa dan Marwa adalah sebagian dari syi'ar Allah"
                </div>

                <p>Kemudian ucapkan takbir, tahmid, dan doa:</p>
                <div class="arabic-text">
اللهُ أَكْبَرُ اللهُ أَكْبَرُ اللهُ أَكْبَرُ، لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرٌ، لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الْأَحْزَابَ وَحْدَهُ
                </div>

                <h4>Cara Sa'i:</h4>
                <ol>
                    <li><strong>1 kali Sa'i</strong> = Safa ke Marwa ATAU Marwa ke Safa</li>
                    <li><strong>Mulai dari Safa (hitungan 1)</strong></li>
                    <li><strong>Jalan menuju Marwa (hitungan 2)</strong></li>
                    <li><strong>Lanjutkan 7 kali</strong>, berakhir di Marwa (hitungan 7)</li>
                    <li>Di antara <strong>lampu hijau</strong>, laki-laki disunahkan berlari kecil (harwala)</li>
                    <li>Berdoa sepanjang Sa'i dengan doa yang dikehendaki</li>
                    <li>Di Safa dan Marwa, hadap Ka'bah, angkat tangan, dan berdoa</li>
                </ol>

                <h4>Doa Saat Sa'i:</h4>
                <p>Boleh berdoa dengan bahasa sendiri atau bacaan Al-Quran. Contoh doa:</p>
                <div class="arabic-text">
رَبِّ اغْفِرْ وَارْحَمْ وَتَجَاوَزْ عَمَّا تَعْلَمُ إِنَّكَ أَنْتَ الْأَعَزُّ الْأَكْرَمُ
                </div>
                <div class="translation">
                    "Rabbighfir warham wa tajaawaz 'amma ta'lam, innaka antal a'azzul akram"<br>
                    Artinya: "Ya Tuhanku, ampunilah, rahmatilah, dan maafkanlah kesalahanku yang Engkau ketahui. Sesungguhnya Engkau Maha Mulia lagi Maha Pemurah"
                </div>

                <h4>Setelah Sa'i:</h4>
                <p>Setelah menyelesaikan putaran ke-7 di Marwa, Sa'i selesai.</p>

                <p><strong>Selanjutnya:</strong> Tahallul (potong rambut/cukur)</p>
            </div>
        `
    },
    tahalul: {
        title: 'Panduan Tahalul',
        content: `
            <div class="ritual-section">
                <h3>✂️ Tahalul - Mengakhiri Ihrom</h3>
                <p>Tahalul adalah ritual mengakhiri ihrom dengan memotong atau mencukur rambut.</p>

                <h4>Cara Tahalul:</h4>
                <ol>
                    <li><strong>Laki-laki:</strong>
                        <ul>
                            <li><strong>Halaq</strong> (mencukur seluruh kepala) - lebih utama</li>
                            <li><strong>Taqshir</strong> (memotong rambut minimal 3 cm)</li>
                        </ul>
                    </li>
                    <li><strong>Wanita:</strong>
                        <ul>
                            <li><strong>Taqshir</strong> (memotong ujung rambut sepanjang 3 cm atau satu ruas jari)</li>
                            <li>Ambil sedikit rambut dari seluruh bagian kepala</li>
                        </ul>
                    </li>
                </ol>

                <h4>Niat Tahalul:</h4>
                <div class="arabic-text">
نَوَيْتُ التَّحَلُّلَ مِنْ إِحْرَامِي لِلَّهِ تَعَالَى
                </div>
                <div class="translation">
                    "Nawaitut tahallul min ihraami lillahi ta'ala"<br>
                    Artinya: "Aku niat tahallul dari ihramku karena Allah Ta'ala"
                </div>

                <h4>Setelah Tahalul:</h4>
                <p>Alhamdulillah, umroh Anda telah sempurna! Setelah tahalul:</p>
                <ul>
                    <li>✅ Larangan ihrom sudah tidak berlaku</li>
                    <li>✅ Boleh memakai pakaian biasa</li>
                    <li>✅ Boleh memakai wewangian</li>
                    <li>✅ Boleh memotong kuku</li>
                    <li>✅ Larangan-larangan ihrom lainnya sudah tidak berlaku</li>
                </ul>

                <h4>Amalan Setelah Umroh (Sunnah):</h4>
                <ol>
                    <li>Memperbanyak tawaf sunah</li>
                    <li>Sholat di Masjidil Haram (1 sholat = 100.000 sholat)</li>
                    <li>Berdoa di Multazam (antara Hajar Aswad dan pintu Ka'bah)</li>
                    <li>Minum air zamzam</li>
                    <li>Membaca Al-Quran</li>
                    <li>Berdzikir dan berdoa</li>
                </ol>

                <h3>🎉 Taqabbalallahu minna wa minkum</h3>
                <p style="text-align: center; font-size: 1.1em; color: var(--primary-color); font-weight: bold;">
                    Semoga Allah menerima ibadah umroh kita semua
                </p>
            </div>
        `
    }
};

// Initialize Map
const map = L.map('map').setView([21.4225, 39.8262], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);

// Add location markers
const markers = {};

Object.keys(locations).forEach(key => {
    const loc = locations[key];

    // Create custom icon
    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div class="custom-marker marker-${loc.type}" style="background: ${loc.color}">${loc.icon}</div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20]
    });

    // Add marker
    const marker = L.marker(loc.coords, { icon: customIcon }).addTo(map);
    marker.bindPopup(`<h3>${loc.icon} ${loc.name}</h3><p>Klik di area ini untuk melihat panduan</p>`);

    // Add circle to show detection radius
    L.circle(loc.coords, {
        color: loc.color,
        fillColor: loc.color,
        fillOpacity: 0.1,
        radius: loc.radius
    }).addTo(map);

    markers[key] = marker;
});

// Current position marker
let currentMarker = null;

// Click handler for dummy GPS
map.on('click', function(e) {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;

    // Update or create current position marker
    if (currentMarker) {
        currentMarker.setLatLng([lat, lng]);
    } else {
        currentMarker = L.marker([lat, lng], {
            icon: L.divIcon({
                className: 'custom-marker',
                html: '<div style="width: 20px; height: 20px; background: #2196f3; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.3);"></div>',
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            })
        }).addTo(map);
        currentMarker.bindPopup('📍 Posisi Anda');
    }

    // Check which location user is in
    checkLocation(lat, lng);
});

// Calculate distance between two points (Haversine formula)
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Earth radius in meters
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return R * c; // Distance in meters
}

// Check current location and show guide
function checkLocation(lat, lng) {
    let nearestLocation = null;
    let minDistance = Infinity;

    // Find nearest location within radius
    Object.keys(locations).forEach(key => {
        const loc = locations[key];
        const distance = getDistance(lat, lng, loc.coords[0], loc.coords[1]);

        if (distance <= loc.radius && distance < minDistance) {
            minDistance = distance;
            nearestLocation = {
                key: key,
                ...loc,
                distance: distance
            };
        }
    });

    // Update UI
    const locationDisplay = document.getElementById('currentLocation');
    const infoPanel = document.getElementById('infoPanel');
    const locationTitle = document.getElementById('locationTitle');
    const infoContent = document.getElementById('infoContent');

    if (nearestLocation) {
        // Show location name
        locationDisplay.textContent = `${nearestLocation.icon} ${nearestLocation.name}`;
        locationDisplay.style.color = nearestLocation.color;

        // Show guide
        const guide = guides[nearestLocation.type];
        locationTitle.textContent = guide.title;
        infoContent.innerHTML = guide.content;

        // Open panel
        infoPanel.classList.add('active');
    } else {
        // Not in any location
        locationDisplay.textContent = 'Tidak di area ritual';
        locationDisplay.style.color = '#666';

        locationTitle.textContent = 'Pilih Lokasi';
        infoContent.innerHTML = `
            <p>Anda belum berada di area ritual umroh. Klik pada salah satu area berikut di peta:</p>
            <div class="info-legend">
                <ul>
                    <li>🟢 Miqat - untuk Ihrom</li>
                    <li>🔴 Masjidil Haram - untuk Tawaf</li>
                    <li>🟡 Safa & Marwa - untuk Sa'i</li>
                    <li>🔵 Area Tahalul - untuk mengakhiri ihrom</li>
                </ul>
            </div>
        `;

        infoPanel.classList.remove('active');
    }
}

// Toggle info panel
document.querySelector('.info-header').addEventListener('click', function() {
    document.getElementById('infoPanel').classList.toggle('active');
});

function closePanel() {
    document.getElementById('infoPanel').classList.remove('active');
}

// Initial message
document.getElementById('infoPanel').classList.add('active');

console.log('Aplikasi Pemandu Umroh GPS siap digunakan!');
