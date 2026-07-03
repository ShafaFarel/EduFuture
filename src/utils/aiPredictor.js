/**
 * EduFuture AI Career Predictor Logic Engine - Indonesian Language Edition
 */

export const CAREER_DATABASE = [
  {
    id: 'ai-architect',
    title: 'Arsitek Solusi AI & Data',
    category: 'Teknologi & Sains',
    description: 'Merancang dan menerapkan infrastruktur pembelajaran mesin, jaringan saraf tiruan, dan saluran data otomatis yang skalabel untuk sistem kecerdasan buatan generasi berikutnya.',
    interests: ['Technology', 'Science', 'Business'],
    requiredSkills: { coding: 4, math: 4, analysis: 4 },
    confidenceBase: 85,
    matchReason: 'Kemampuan analisis Anda yang luar biasa, keterampilan matematika yang kuat, serta minat Anda pada teknologi selaras secara sempurna dengan kebutuhan teknik arsitektur kecerdasan buatan tingkat tinggi.',
    recommendedSkills: [
      { name: 'Pipelines Machine Learning (PyTorch/TensorFlow)', level: 'Pemula' },
      { name: 'Infrastruktur Cloud & MLOps (AWS/GCP)', level: 'Menengah' },
      { name: 'Sistem Terdistribusi & Big Data (Spark/Hadoop)', level: 'Menengah' },
      { name: 'Desain & Tata Kelola AI yang Etis', level: 'Pemula' }
    ],
    roadmap: [
      { step: 1, title: 'Kuasai Pemrograman Dasar & Matematika AI', desc: 'Perkuat dasar Python, aljabar linier, kalkulus, dan teori probabilitas.' },
      { step: 2, title: 'Bangun Portofolio Jaringan Saraf Tiruan', desc: 'Latih model deep learning kustom dan dokumentasikan di GitHub, jelaskan metrik kinerjanya.' },
      { step: 3, title: 'Pelajari Cloud & Penerapan (MLOps)', desc: 'Dapatkan sertifikasi AWS Cloud Practitioner atau setara dan terapkan model melalui Docker dan API.' },
      { step: 4, title: 'Dapatkan Magang & Kontribusi Open Source', desc: 'Ikuti kompetisi Kaggle dan lamar posisi Junior Machine Learning Engineer.' }
    ]
  },
  {
    id: 'ux-designer',
    title: 'Desainer Produk UX/UI Spasial',
    category: 'Seni Kreatif & Desain',
    description: 'Merancang antarmuka yang imersif, perjalanan pengguna, dan lingkungan virtual interaktif untuk aplikasi web, seluler, serta headset augmented/virtual reality.',
    interests: ['Design', 'Technology', 'Creative Arts'],
    requiredSkills: { creativity: 4, empathy: 4, communication: 3 },
    confidenceBase: 88,
    matchReason: 'Bakat kreatif Anda yang dipadukan dengan rasa ingin tahu teknis dan empati yang mendalam menempatkan Anda pada posisi tepat untuk merancang antarmuka perangkat lunak yang intuitif dan responsif.',
    recommendedSkills: [
      { name: 'Sistem Desain & Prototyping Figma', level: 'Mahir' },
      { name: 'Pemodelan Spasial 3D (Blender/Spline)', level: 'Pemula' },
      { name: 'Riset Pengguna & Psikologi Kognitif', level: 'Menengah' },
      { name: 'Layout CSS Front-end (Tailwind, Flexbox)', level: 'Menengah' }
    ],
    roadmap: [
      { step: 1, title: 'Pelajari Dasar Desain & Figma', desc: 'Pelajari tata letak, tipografi, sistem grid, dan pembuatan komponen di Figma.' },
      { step: 2, title: 'Lakukan Studi Kasus Dunia Nyata', desc: 'Desain ulang tata letak aplikasi yang sudah ada berdasarkan survei umpan balik pengguna dan bangun prototipe interaktif.' },
      { step: 3, title: 'Jelajahi Desain Spasial (3D)', desc: 'Biasakan diri membuat mockup 3D interaktif untuk antarmuka komputasi spasial.' },
      { step: 4, title: 'Kembangkan Portofolio & Jaringan', desc: 'Publikasikan studi kasus di Behance/Dribbble dan cari peran desainer UX junior di tim teknologi.' }
    ]
  },
  {
    id: 'bioinformatics-scientist',
    title: 'Ilmuwan Riset Bioinformatika',
    category: 'Kesehatan & Sains',
    description: 'Menggunakan algoritma komputasi, model statistik, dan teknik big data untuk mempelajari genomik, menemukan terapi baru, dan memodelkan struktur biologis.',
    interests: ['Science', 'Health', 'Technology'],
    requiredSkills: { analysis: 4, math: 4, coding: 3 },
    confidenceBase: 82,
    matchReason: 'Menggabungkan ilmu medis dengan komputasi, Anda sangat cocok untuk memecahkan kumpulan data genomik yang kompleks, menganalisis tren biologis, dan berkontribusi pada riset obat-obatan personal.',
    recommendedSkills: [
      { name: 'Analisis Data Genomik & database (NCBI/BLAST)', level: 'Menengah' },
      { name: 'Komputasi Statistik dengan R/Python', level: 'Menengah' },
      { name: 'Inti Biologi Molekuler & Genetika', level: 'Mahir' },
      { name: 'Visualisasi Data Ilmiah', level: 'Pemula' }
    ],
    roadmap: [
      { step: 1, title: 'Perkuat Prinsip Genetika & Biologi', desc: 'Ikuti kursus lanjutan yang mencakup biologi molekuler, genetika, dan biokimia struktural.' },
      { step: 2, title: 'Pelajari Python & R untuk Pengolahan Data', desc: 'Fokus pada pustaka seperti pandas, numpy, dan Biopython untuk memproses file genomik.' },
      { step: 3, title: 'Berpartisipasi dalam Riset Laboratorium', desc: 'Daftar untuk bekerja di laboratorium universitas atau menjadi sukarelawan dalam proyek biologi komputasi.' },
      { step: 4, title: 'Lamar Peran Biotech / Studi Pascasarjana', desc: 'Cari peran Analis Junior di perusahaan bioteknologi atau ikuti Magister Bioinformatika khusus.' }
    ]
  },
  {
    id: 'renewable-energy-consultant',
    title: 'Konsultan Energi Terbarukan & Jaringan Pintar',
    category: 'Sains & Alam',
    description: 'Mengoptimalkan solusi energi bersih, memberikan saran kepada perusahaan dan pemerintah daerah mengenai penyimpanan jaringan, perencanaan tenaga surya/angin, serta program efisiensi energi.',
    interests: ['Nature', 'Science', 'Business'],
    requiredSkills: { analysis: 4, leadership: 3, communication: 4 },
    confidenceBase: 84,
    matchReason: 'Kedekatan Anda dengan pelestarian lingkungan dipadukan dengan logika teknik memungkinkan Anda memodelkan program transisi energi dan memimpin tim inisiatif hijau lintas fungsi.',
    recommendedSkills: [
      { name: 'Desain Sistem Tenaga Terbarukan', level: 'Pemula' },
      { name: 'Kerangka Kerja Bangunan Hijau LEED', level: 'Pemula' },
      { name: 'Akuntansi Karbon & Kebijakan Keberlanjutan', level: 'Menengah' },
      { name: 'Pemodelan Keuangan untuk Aset Energi', level: 'Menengah' }
    ],
    roadmap: [
      { step: 1, title: 'Pelajari Jaringan Listrik & Sains Surya', desc: 'Dapatkan pengetahuan dasar dalam termodinamika, sirkuit listrik, dan sistem konversi energi.' },
      { step: 2, title: 'Pelajari Metrik Keberlanjutan & Perangkat Lunak', desc: 'Jelajahi standar pelaporan karbon, analisis dampak lingkungan, dan alat pemodelan.' },
      { step: 3, title: 'Dapatkan Sertifikasi LEED GA', desc: 'Lulus ujian LEED Green Associate untuk memvalidasi kredensial keberlanjutan Anda.' },
      { step: 4, title: 'Bergabung dengan Konsultan Hijau', desc: 'Kirim proposal ke firma konsultan energi atau departemen keberlanjutan di pemerintah kota.' }
    ]
  },
  {
    id: 'quantitative-analyst',
    title: 'Analis Keuangan Kuantitatif',
    category: 'Keuangan & Bisnis',
    description: 'Membangun strategi perdagangan algoritmik, merancang model risiko matematis, dan melakukan analisis kuantitatif untuk mendukung keputusan investasi dan manajemen aset.',
    interests: ['Finance', 'Business', 'Technology'],
    requiredSkills: { math: 5, analysis: 4, coding: 3 },
    confidenceBase: 80,
    matchReason: 'Kemampuan matematika Anda yang luar biasa dan pemikiran logis sangat cocok dengan lingkungan perdagangan algoritmik dan pemodelan risiko yang terstruktur ketat.',
    recommendedSkills: [
      { name: 'Probabilitas, Kalkulus & Statistika', level: 'Mahir' },
      { name: 'Derivatif Keuangan & Penentuan Harga Opsi', level: 'Pemula' },
      { name: 'Coding Algoritma Frekuensi Tinggi (C++/Python)', level: 'Menengah' },
      { name: 'Model Risiko Kuantitatif (VaR/Monte Carlo)', level: 'Menengah' }
    ],
    roadmap: [
      { step: 1, title: 'Bangun Fondasi Matematika yang Kuat', desc: 'Ambil mata kuliah ketat dalam aljabar linier, kalkulus stokastik, dan statistika.' },
      { step: 2, title: 'Pelajari Pemrograman Rekayasa Keuangan', desc: 'Terapkan model kuantitatif seperti Black-Scholes dan simulasi Monte Carlo dalam Python.' },
      { step: 3, title: 'Lakukan Backtesting Strategi Perdagangan', desc: 'Unduh data keuangan historis dan jalankan uji balik untuk mengukur rasio Sharpe dan penurunan maksimum.' },
      { step: 4, title: 'Dapatkan Kredensial CFA / Bergabung dengan Perusahaan', desc: 'Persiapkan untuk CFA Level 1 atau magang keuangan kuantitatif di dana lindung nilai atau bank investasi.' }
    ]
  },
  {
    id: 'robotics-engineer',
    title: 'Insinyur Sistem Robotika & IoT',
    category: 'Teknologi & Sains',
    description: 'Merancang, memprogram, dan memelihara perangkat keras mikrokontroler, sensor pintar, dan sistem robotik otomatis yang menghubungkan ruang fisik dan digital.',
    interests: ['Technology', 'Design', 'Science'],
    requiredSkills: { coding: 4, creativity: 3, math: 4 },
    confidenceBase: 86,
    matchReason: 'Perpaduan minat teknik dan kreativitas praktis membuat Anda ideal untuk memprogram chip tertanam (embedded), merancang sirkuit, dan merekayasa sistem mobilitas otonom.',
    recommendedSkills: [
      { name: 'C/C++ Tertanam & Pengembangan Mikrokontroler', level: 'Menengah' },
      { name: 'Desain Sirkuit & Pemodelan CAD (Altium/SolidWorks)', level: 'Pemula' },
      { name: 'Kinematika Robotika & Sistem Kontrol', level: 'Menengah' },
      { name: 'Protokol Komunikasi IoT (MQTT/Bluetooth)', level: 'Menengah' }
    ],
    roadmap: [
      { step: 1, title: 'Pelajari Sistem Tertanam & Arduino', desc: 'Bekerja dengan Arduino/Raspberry Pi. Bangun sirkuit dengan breadboard, LED, dan sensor fisik.' },
      { step: 2, title: 'Kuasai C/C++ Untuk Firmware', desc: 'Latih pemrograman tingkat rendah yang efisien memori untuk berkomunikasi langsung dengan perangkat keras.' },
      { step: 3, title: 'Rancang Lengan Robot atau Kendaraan Seluler', desc: 'Integrasikan motor servo dan tulis algoritma pencarian jalur atau keseimbangan mandiri.' },
      { step: 4, title: 'Cari Magang Firmware', desc: 'Lamar pekerjaan ke perusahaan elektronik konsumen, otomotif, atau otomatisasi industri.' }
    ]
  },
  {
    id: 'growth-strategist',
    title: 'Spesialis Pemasaran Pertumbuhan & Teknologi',
    category: 'Keuangan & Bisnis',
    description: 'Memimpin kampanye akuisisi dan merek berkinerja tinggi, menggabungkan analitik data, riset pengguna, dan copywriting untuk menumbuhkan bisnis digital.',
    interests: ['Business', 'Writing', 'Public Speaking'],
    requiredSkills: { communication: 5, creativity: 4, analysis: 3 },
    confidenceBase: 90,
    matchReason: 'Keterampilan komunikasi Anda yang luar biasa, pola pikir bisnis, dan penulisan kreatif merupakan kombinasi kuat untuk menarik demografi sasaran dan merancang kampanye pertumbuhan viral.',
    recommendedSkills: [
      { name: 'SEO, SEM & Iklan Mesin Pencari', level: 'Mahir' },
      { name: 'Copywriting & Strategi Konten', level: 'Menengah' },
      { name: 'Analitik Corong Pemasaran & Pengujian A/B', level: 'Menengah' },
      { name: 'Hubungan Masyarakat & Branding', level: 'Pemula' }
    ],
    roadmap: [
      { step: 1, title: 'Pahami Perilaku Pengguna & SEO', desc: 'Selesaikan sertifikasi dalam riset kata kunci, alat analisis, dan pelacakan konversi.' },
      { step: 2, title: 'Kelola Kampanye Konten', desc: 'Buat buletin, luncurkan akun media sosial, atau rancang salinan iklan untuk merek tiruan guna mempelajari keterlibatan.' },
      { step: 3, title: 'Optimalkan Tingkat Konversi (CRO)', desc: 'Jalankan tes iklan beranggaran kecil, analisis CTR (rasio klik-tayang) dan CAC (biaya akuisisi pelanggan).' },
      { step: 4, title: 'Daftar Magang Pemasaran Pertumbuhan', desc: 'Dapatkan peran di agensi pemasaran, laboratorium startup, atau perusahaan produk SaaS digital.' }
    ]
  },
  {
    id: 'health-tech-specialist',
    title: 'Spesialis Informatika Kesehatan & Telehealth',
    category: 'Kesehatan & Sains',
    description: 'Menerapkan database rekam medis elektronik, menganalisis metrik perawatan pasien, dan mengelola platform telemedicine untuk memaksimalkan efisiensi perawatan medis.',
    interests: ['Health', 'Technology', 'Business'],
    requiredSkills: { empathy: 4, analysis: 4, communication: 4 },
    confidenceBase: 83,
    matchReason: 'Sifat empati Anda dipadukan dengan minat analisis dan teknologi memenuhi syarat untuk menjembatani kesenjangan antara praktisi medis dan sistem catatan rumah sakit yang kompleks.',
    recommendedSkills: [
      { name: 'Sistem Database EHR (Epic/Cerner)', level: 'Pemula' },
      { name: 'Keamanan Data & Kepatuhan Kesehatan (HIPAA)', level: 'Menengah' },
      { name: 'Manajemen Proyek & Integrasi', level: 'Menengah' },
      { name: 'Kosakata Medis & Dasar Anatomi', level: 'Menengah' }
    ],
    roadmap: [
      { step: 1, title: 'Pelajari Alur Kerja Klinis & Dasar Database', desc: 'Pelajari SQL, sistem manajemen database, dan alur klinis layanan kesehatan standar.' },
      { step: 2, title: 'Kuasai Pedoman Kepatuhan', desc: 'Dapatkan sertifikasi dalam HIPAA, keamanan data pasien, dan kepatuhan etika medis.' },
      { step: 3, title: 'Analisis Kumpulan Data Kesehatan', desc: 'Bekerja dengan kumpulan data kesehatan masyarakat untuk mempraktikkan identifikasi tren dalam hasil pasien.' },
      { step: 4, title: 'Lamar ke IT Rumah Sakit / Startup Kesehatan', desc: 'Cari pekerjaan tingkat awal sebagai administrator EHR atau analis klinis teknis.' }
    ]
  },
  {
    id: 'agritech-consultant',
    title: 'Konsultan Pertanian Berkelanjutan & Agri-Tech',
    category: 'Sains & Alam',
    description: 'Membimbing koperasi pertanian dalam perangkat lunak pemantauan tanah, pemetaan drone, dan pengaturan hidroponik untuk memaksimalkan hasil panen sekaligus menjaga ekosistem alam.',
    interests: ['Nature', 'Science', 'Business'],
    requiredSkills: { analysis: 4, creativity: 3, leadership: 3 },
    confidenceBase: 82,
    matchReason: 'Anda menggabungkan wawasan biologis dan kecintaan pada alam dengan evaluasi data, membuat Anda sangat cocok memberikan saran tentang pertanian vertikal, hidroponik, dan jaringan air pintar.',
    recommendedSkills: [
      { name: 'Perangkat Lunak Pertanian Presisi & Analitik Drone', level: 'Pemula' },
      { name: 'Kimia Tanah & Biologi Tumbuhan', level: 'Menengah' },
      { name: 'Sistem Hidroponik & Pertanian Dalam Ruangan', level: 'Menengah' },
      { name: 'Rantai Pasok & Ekonomi Bisnis Pertanian', level: 'Pemula' }
    ],
    roadmap: [
      { step: 1, title: 'Pelajari Ilmu Lingkungan & Kimia', desc: 'Dapatkan dasar yang kuat dalam ilmu tanaman, hidrologi, dan biokimia ekologi.' },
      { step: 2, title: 'Bangun Proyek Pertanian Dalam Ruangan Mini', desc: 'Siapkan pot tanaman otomatis menggunakan sensor kelembaban tanah dan pengontrol otomatisasi minor.' },
      { step: 3, title: 'Analisis Perangkat Lunak Pertanian Presisi', desc: 'Praktikkan penafsiran indeks citra satelit tanaman dan peta panas tanah.' },
      { step: 4, title: 'Konsultasi untuk Koperasi Pertanian', desc: 'Lamar pekerjaan dalam perencanaan pertanian berkelanjutan, startup teknologi pertanian, atau lembaga penelitian pertanian.' }
    ]
  },
  {
    id: 'bio-ethical-lawyer',
    title: 'Konsultan Hukum Bioetika & Kebijakan Teknologi',
    category: 'Kesehatan & Sains',
    description: 'Menyusun pedoman kepatuhan peraturan, menasihati perusahaan teknologi tentang batas-batas etika rekayasa genetika, penerapan AI, serta mengadvokasi undang-undang teknologi yang berpusat pada manusia.',
    interests: ['Science', 'Writing', 'Public Speaking'],
    requiredSkills: { communication: 5, analysis: 4, empathy: 4 },
    confidenceBase: 85,
    matchReason: 'Keterampilan komunikasi Anda yang kuat, analisis yang mendalam, dan rasa ingin tahu ilmiah membuat Anda ideal untuk merancang kerangka hukum, memperjuangkan hak digital, dan memecahkan teka-teki etika teknologi.',
    recommendedSkills: [
      { name: 'Penulisan Hukum & Analisis Kasus', level: 'Mahir' },
      { name: 'Kebijakan Bioetika & Hak Digital', level: 'Menengah' },
      { name: 'Hubungan Masyarakat & Advokasi', level: 'Menengah' },
      { name: 'Kerangka Kerja Kepatuhan Peraturan', level: 'Pemula' }
    ],
    roadmap: [
      { step: 1, title: 'Kembangkan Retorika & Penulisan Kebijakan', desc: 'Ikuti tim debat, kursus berbicara di depan umum, dan penulisan kebijakan.' },
      { step: 2, title: 'Pelajari Dasar Hukum Teknologi', desc: 'Baca file kasus utama terkait privasi data (GDPR), bioetika, dan rancangan peraturan AI.' },
      { step: 3, title: 'Susun Sampel Kebijakan Teknologi', desc: 'Publikasikan catatan kasus yang menganalisis masalah etika seperti tanggung jawab mengemudi otomatis atau batas pengeditan CRISPR.' },
      { step: 4, title: 'Magang di Bidang Regulasi / Think Tank', desc: 'Daftar fellowship penelitian di pusat kebijakan teknologi, LSM hak digital, atau firma hukum.' }
    ]
  }
];

/**
 * Memprediksi jalur karier pengguna berdasarkan skor dan minat yang dipilih.
 * @param {Object} input - { name, gpa, interests, skills }
 * @returns {Object} Hasil prediksi karier, faktor pencocokan, dan skor keyakinan.
 */
export function predictCareer(input) {
  const { name = 'Siswa', gpa = 3.5, interests = [], skills = {} } = input;
  
  // Normalisasi IPK menjadi pengali 0-1 (misal IPK 4.0 -> 1.0, IPK 2.0 -> 0.5)
  const numericGPA = parseFloat(gpa) || 3.0;
  const gpaMultiplier = Math.min(1.2, Math.max(0.7, numericGPA / 3.5));

  let bestMatch = null;
  let highestScore = -1;

  // Evaluasi kecocokan
  CAREER_DATABASE.forEach(career => {
    let score = 0;

    // 1. Kecocokan minat (setiap minat yang cocok menambah 20 poin)
    career.interests.forEach(interest => {
      if (interests.includes(interest)) {
        score += 20;
      }
    });

    // 2. Penyelarasan keterampilan (bandingkan keterampilan pengguna dengan keterampilan yang dibutuhkan)
    let skillMatchFactor = 0;
    let requiredCount = 0;

    Object.entries(career.requiredSkills).forEach(([skillName, reqVal]) => {
      requiredCount++;
      const userVal = skills[skillName] || 3;
      if (userVal >= reqVal) {
        skillMatchFactor += 1.0;
      } else {
        skillMatchFactor += (userVal / reqVal);
      }
    });

    if (requiredCount > 0) {
      score += (skillMatchFactor / requiredCount) * 40;
    }

    // 3. Pengaruh IPK
    score *= gpaMultiplier;

    if (score > highestScore) {
      highestScore = score;
      bestMatch = career;
    }
  });

  if (!bestMatch) {
    bestMatch = CAREER_DATABASE[0];
  }

  let confidence = Math.min(98, Math.max(65, Math.round(bestMatch.confidenceBase + (highestScore / 10))));

  // Hasilkan faktor pencocokan yang disesuaikan dalam Bahasa Indonesia
  const matchingFactors = [];
  const interestTranslation = {
    'Technology': 'Teknologi',
    'Design': 'Desain',
    'Science': 'Sains',
    'Health': 'Kesehatan',
    'Nature': 'Lingkungan/Alam',
    'Writing': 'Penulisan',
    'Public Speaking': 'Berbicara di Depan Umum',
    'Business': 'Bisnis',
    'Finance': 'Keuangan',
    'Creative Arts': 'Seni Kreatif'
  };

  const skillTranslation = {
    'coding': 'PEMROGRAMAN',
    'math': 'LOGIKA MATEMATIKA',
    'creativity': 'KREATIVITAS',
    'empathy': 'EMPATI',
    'communication': 'KOMUNIKASI',
    'analysis': 'ANALISIS DATA',
    'leadership': 'KEPEMIMPINAN'
  };

  (bestMatch.interests || []).forEach(interest => {
  if (interests.includes(interest)) {
    const trans = interestTranslation[interest] || interest;
    matchingFactors.push(`Minat Anda pada ${trans}`);
  }
});

  Object.entries(bestMatch.requiredSkills).forEach(([skillName, reqVal]) => {
    const userVal = skills[skillName] || 3;
    if (userVal >= reqVal) {
      const trans = skillTranslation[skillName] || skillName.toUpperCase();
      matchingFactors.push(`Keahlian kuat Anda dalam ${trans}`);
    }
  });

  if (numericGPA >= 3.6) {
    matchingFactors.push('IPK akademis Anda yang luar biasa');
  }

  if (matchingFactors.length === 0) {
    matchingFactors.push('Kombinasi keterampilan dan riwayat akademis Anda yang seimbang');
  }

  return {
    studentName: name,
    career: bestMatch,
    confidence,
    matchingFactors,
    gpa: numericGPA
  };
}
