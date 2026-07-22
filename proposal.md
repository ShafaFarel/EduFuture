# PROPOSAL
## COMPETITION OF DEVELOPER EXPERIENCE (CODE) 2026
### Kategori Software Development

---

# EduFuture AI
## Platform Rekomendasi Karir dan Jurusan Berbasis Machine Learning dan AI Counseling untuk Siswa SMA dan Mahasiswa Awal

**Diajukan oleh: TIM ASTER**

| Nama | NIM | Program Studi |
| :--- | :--- | :--- |
| [Nama 1] | [NIM 1] | [Program Studi] |
| [Nama 2] | [NIM 2] | [Program Studi] |
| [Nama 3] | [NIM 3] | [Program Studi] |

**Universitas Amikom Yogyakarta — 2026**

---

## Bagian 2 — Abstrak

Kesulitan menentukan arah karir masih menjadi salah satu tantangan terbesar bagi siswa SMA dan mahasiswa awal di Indonesia, akibat minimnya akses terhadap panduan personal yang mempertimbangkan minat, kemampuan, dan nilai akademik masing-masing individu. EduFuture AI hadir sebagai platform berbasis web yang membantu pengguna menentukan pilihan karir dan jurusan yang paling sesuai melalui sistem prediksi berbasis **Machine Learning (XGBoost Classifier)** yang mengolah data nilai akademik (Matematika, Sains, Bahasa, Logika) serta preferensi Gaya Belajar pengguna. Platform menghasilkan tiga skenario rekomendasi (*Utama, Alternatif, Aman*) disertai estimasi rentang gaji karir menggunakan **XGBoost Regressor**. Selain itu, tersedia fitur **AI Mentor Chatbot** berbasis Large Language Model **Llama 3.1 8B via Groq API** yang memahami riwayat prediksi pengguna secara kontekstual untuk melakukan konseling karir interaktif secara real-time. Dengan antarmuka modern yang responsif, EduFuture AI memberikan rekomendasi yang relevan, personal, dan dapat diakses kapan saja tanpa konsultasi tatap muka.

---

## Bagian 3 — Latar Belakang & Urgensi Masalah

### 3.1 Konteks Masalah
Setiap tahun, jutaan siswa SMA di Indonesia dihadapkan pada keputusan besar dalam menentukan jurusan kuliah maupun arah karir setelah lulus. Berdasarkan data **Indonesia Career Center Network (ICCN) 2023**, sebanyak **87% mahasiswa Indonesia merasa salah memilih jurusan**. Keputusan ini seringkali diambil tanpa panduan yang memadai — banyak siswa hanya mengandalkan saran orang tua, tren populer, atau ikut-ikutan teman, tanpa mempertimbangkan minat dan kemampuan pribadi secara objektif. Kondisi ini diperparah dengan rasio konselor/guru BK terhadap jumlah siswa yang jauh dari ideal di banyak sekolah.

### 3.2 Akar Masalah
- Minimnya akses terhadap layanan bimbingan karir yang personal dan berbasis data.
- Keterbatasan jumlah dan waktu guru BK untuk menangani seluruh siswa secara individual.
- Kurangnya kesadaran siswa mengenai potensi diri secara terukur dan objektif.
- Informasi karir yang tersedia di internet umumnya bersifat generik dan tidak dipersonalisasi sesuai konteks pendidikan Indonesia.

### 3.3 Dampak Jika Tidak Diselesaikan
Jika dibiarkan, semakin banyak siswa akan salah memilih jurusan yang berujung pada rendahnya motivasi belajar, meningkatnya angka pindah jurusan, hingga ketidaksesuaian antara lulusan dan kebutuhan dunia kerja. Dalam jangka 1–2 tahun ke depan, dampak ini dapat memperbesar kesenjangan kompetensi lulusan dan kebutuhan industri, sekaligus meningkatkan biaya sosial dan finansial akibat keputusan karir yang keliru.

### 3.4 Mengapa Sekarang?
Transformasi digital pendidikan yang semakin masif pasca-pandemi membuka peluang besar bagi solusi berbasis teknologi untuk menjangkau siswa secara luas dan terjangkau. Berkembangnya ekosistem AI dan Machine Learning yang semakin mudah diimplementasikan menjadikan momentum ini tepat untuk menghadirkan solusi seperti EduFuture AI — cepat, objektif, dan dapat diskalakan ke banyak sekolah maupun individu sekaligus.

---

## Bagian 4 — Tujuan, Manfaat, & Dampak

### 4.1 Tujuan Spesifik (SMART)
- **Specific**: Membangun platform rekomendasi karir berbasis web dengan mesin prediksi ML dan AI Mentor.
- **Measurable**: Menghasilkan akurasi prediksi jurusan di atas 90% dan waktu respons chatbot di bawah 1,5 detik.
- **Achievable**: Diimplementasikan menggunakan stack React, FastAPI, XGBoost, Supabase, dan Groq API.
- **Relevant**: Membantu pengambilan keputusan karir siswa kelas X–XII SMA dan mahasiswa awal.
- **Time-bound**: Produk fungsional 100% selesai dan dapat diakses publik dalam kurun waktu penyisihan CODE 6.0.

### 4.2 Manfaat Langsung
- **Siswa/mahasiswa**: Mendapat analisis rekomendasi jurusan secara gratis, objektif, dan dapat berkonsultasi karir 24/7 tanpa batas.
- **Guru BK/Konselor**: Alat bantu tambahan (decision support tool) untuk mempercepat proses bimbingan karir berbasis data.
- **Orang tua**: Gambaran objektif berbasis nilai akademik anak untuk mendukung keputusan pendidikan.

### 4.3 Dampak Jangka Panjang
EduFuture AI berpotensi dikembangkan dengan menambahkan integrasi data psikotes resmi, kerja sama dengan sekolah dan lembaga bimbingan konseling, serta perluasan model ML dengan dataset yang lebih representatif. Skalabilitas platform berbasis web memungkinkan perluasan pengguna tanpa batasan geografis yang signifikan.

### 4.4 Metrik Dampak
- Mempersingkat waktu konsultasi karir dari rata-rata beberapa hari (antre konselor) menjadi **kurang dari 10 menit** secara mandiri.
- Target menjangkau ratusan siswa pada tahap uji coba awal di lingkungan sekolah mitra.

---

## Bagian 5 — Nilai Inovasi & Orisinalitas

### 5.1 Diferensiasi Solusi
EduFuture AI berbeda dari layanan konsultasi karir konvensional karena tidak bergantung pada ketersediaan konselor manusia. Dibandingkan tes minat-bakat konvensional berbasis kertas atau formulir statis, platform ini menggabungkan nilai akademik multivariat dan gaya belajar ke dalam satu mesin prediksi ML terintegrasi dengan hasil yang ditampilkan secara real-time.

### 5.2 Keunggulan Teknis Orisinal
- **Klasifikasi Multivariat XGBoost**: Menilai perpaduan nilai Matematika, Sains, Bahasa, dan Logika secara simultan dengan feature engineering (avg, total, highest, lowest score) untuk menghasilkan probabilitas kecocokan per jurusan.
- **Tiga Skenario Rekomendasi**: *Rekomendasi Utama* (kecocokan tertinggi), *Pilihan Alternatif* (cadangan berpotensi tinggi), *Pilihan Aman* (keseimbangan kompetisi masuk vs. nilai dasar).
- **Estimasi Gaji Dinamis**: XGBoost Regressor memprediksi perkiraan gaji lulusan per jurusan berdasarkan profil nilai dan pasar industri Indonesia.
- **AI Mentor Kontekstual**: Prompt chatbot dibangun secara otomatis dari riwayat digital twin terbaru pengguna di Supabase — mencegah AI memberikan saran tidak relevan (halusinasi).

### 5.3 Moat (Penghalang Kompetisi)
Integrasi unik antara autentikasi pengguna berbasis token JWT (Supabase Auth), penyimpanan riwayat prediksi per-pengguna, dan memori kontekstual otomatis AI Mentor menciptakan ekosistem yang sulit direplikasi oleh platform generik. Selain itu, model ML dilatih dengan dataset yang dikurasi khusus untuk konteks jurusan dan profesi di Indonesia.

---

## Bagian 6 — Analisis Kompetitor & Business Viability

### 6.1 Tabel Kompetitor

| Aspek | EduFuture AI | Rencanamu.id | BK Sekolah Konvensional | Platform Karir Luar Negeri |
| :--- | :--- | :--- | :--- | :--- |
| Metode Penilaian | ML (XGBoost) + Nilai Rapor | Kuesioner Kepribadian | Wawancara Manual | Data Global Generik |
| Konseling | AI Mentor 24/7 (Llama 3.1) | Tidak ada / berbayar | Terbatas jam sekolah | Tidak ada |
| Estimasi Gaji | Dinamis (ML Regressor) | Statis (tabel kategori) | Tidak ada | Tidak relevan (data luar negeri) |
| Kecepatan Hasil | Real-time (< 1 detik) | ~15–30 menit | Berhari-hari | Bervariasi |
| Relevansi Indonesia | Tinggi (dataset lokal) | Sedang | Tinggi | Rendah |

### 6.2 Analisis SWOT

| | Positif | Negatif |
| :--- | :--- | :--- |
| **Internal** | **Strength**: Inferensi cepat, UI/UX premium, biaya operasional AI hemat via Groq | **Weakness**: Ketergantungan pada kelengkapan input nilai dari pengguna |
| **Eksternal** | **Opportunity**: Kemitraan sekolah, integrasi data psikotes resmi | **Threat**: Kompetitor dengan pendanaan besar yang menambahkan fitur AI serupa |

### 6.3 Model Bisnis & Sustainability
- **B2C Freemium**: Rekomendasi dan chat dasar gratis. Laporan analisis mendalam dan unduhan PDF rekomendasi berbayar satu kali (*one-time payment*).
- **B2B SaaS**: Lisensi dashboard evaluasi siswa untuk guru BK per tahun akademik.
- **Keberlanjutan**: Kerja sama dengan sekolah dan kampus sebagai mitra distribusi, serta pembaruan dataset karir secara berkala mengikuti tren dunia kerja.

---

## Bagian 7 — Teknologi yang Digunakan

### 7.1 Tabel Stack Teknologi

| Kategori | Teknologi | Versi | Alasan Pemilihan |
| :--- | :--- | :--- | :--- |
| Frontend Framework | React | 19 | Komponen reusable, HMR cepat via Vite, komunitas besar |
| Build Tool | Vite | Latest | Startup server instan, hot module replacement |
| Styling | Tailwind CSS | v4 | Utility-first, desain konsisten & responsif |
| Backend Framework | FastAPI | Latest | Asinkron, validasi Pydantic otomatis, dokumentasi Swagger |
| ML Classification | XGBoost Classifier | Latest | Akurasi tinggi (98,2%), inferensi cepat, tahan overfitting |
| ML Regression | XGBoost Regressor | Latest | Prediksi gaji kontinu berdasarkan profil nilai |
| Data Processing | Pandas & Numpy | Latest | Manipulasi DataFrame dan feature engineering |
| Database & Auth | Supabase (PostgreSQL) | Latest | Auth JWT terintegrasi, real-time DB, gratis untuk skala awal |
| AI LLM | Llama 3.1 8B via Groq | Latest | Inferensi super cepat, biaya hemat, jawaban natural B. Indonesia |
| Font | Space Grotesk, Plus Jakarta Sans | - | Keterbacaan tinggi, kesan profesional modern |

### 7.2 Arsitektur Teknologi

```
[React Frontend (Vite)]
        |
        | HTTP + Bearer Token JWT
        v
[FastAPI Backend]
        |
    ┌───┴────────────────┐
    |                    |
    v                    v
[XGBoost Models]   [Groq API - Llama 3.1]
(.pkl files)       (AI Mentor Chat)
    |
    v
[Supabase PostgreSQL]
(Auth + Data digital_twin_profiles)
```

---

## Bagian 8 — Batasan Perangkat Lunak

### 8.1 Scope yang Dicakup
- Sistem autentikasi pengguna (Registrasi, Login, Logout) menggunakan verifikasi JWT Supabase.
- Form input nilai rapor (Matematika, Sains, Bahasa, Logika) dan preferensi Gaya Belajar (Visual, Auditory, Read/Write, Kinesthetic).
- Mesin prediksi XGBoost menghasilkan tiga skenario rekomendasi jurusan beserta estimasi gaji.
- Dashboard riwayat hasil prediksi per pengguna dengan fitur hapus mandiri.
- Layanan chat konseling karir interaktif dengan AI Mentor (Llama 3.1) yang terintegrasi memori digital twin terakhir.

### 8.2 Scope yang Tidak Dicakup
- Modul pembayaran *payment gateway* — simulasi dilakukan di tahap pengembangan lanjutan.
- Pemrosesan berkas rapor dalam format gambar/PDF (OCR) — input nilai masih dilakukan secara manual.
- Konsultasi langsung dengan konselor manusia — direncanakan sebagai pengembangan lanjutan.

### 8.3 Keterbatasan Teknis
- Membutuhkan koneksi internet aktif (bergantung pada cloud API Supabase dan Groq).
- Model ML saat ini mencakup 10 rumpun jurusan utama (Informatika, Kedokteran, Psikologi, Manajemen, Hukum, Sastra, Seni, Pertanian, Fisika, Elektro).
- Aplikasi berjalan optimal pada browser modern (Chrome, Edge, Firefox versi terbaru).

---

## Bagian 9 — Metodologi Pengembangan

### 9.1 Metodologi: Agile dengan Pendekatan Kanban
Tim Aster menggunakan metodologi **Agile dengan pendekatan Kanban** — memungkinkan visualisasi progres pekerjaan secara sederhana, fleksibel terhadap perubahan prioritas, dan cocok untuk siklus pengembangan singkat seperti pada kompetisi ini.

### 9.2 Timeline Pengembangan

| Tahap | Aktivitas | Waktu |
| :--- | :--- | :--- |
| Perencanaan | Analisis kebutuhan, penentuan fitur, desain alur pengguna | Minggu 1 |
| Desain UI/UX | Wireframe, mockup Figma, sistem desain (font, warna, token) | Minggu 1–2 |
| Pengembangan Backend | Pelatihan model XGBoost, pembuatan API FastAPI, skema Supabase | Minggu 2–3 |
| Pengembangan Frontend | Komponen React, integrasi API, routing halaman | Minggu 2–3 |
| Integrasi & Testing | Penggabungan FE-BE, pengujian fungsional & UAT | Minggu 3–4 |
| Finalisasi | Perbaikan bug, dokumentasi, submission | Minggu 4 |

### 9.3 Peran Anggota Tim

| Nama | Peran |
| :--- | :--- |
| [Nama 1] | Project Lead / Backend Developer & Data Scientist |
| [Nama 2] | Frontend Developer / UI-UX Designer |
| [Nama 3] | AI Logic Developer / QA & Dataset Curator |

---

## Bagian 10 — Arsitektur Sistem & Desain

### 10.1 Skema Database (Supabase PostgreSQL)

```sql
-- Tabel menyimpan riwayat prediksi digital twin setiap pengguna
CREATE TABLE digital_twin_profiles (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at      TIMESTAMPTZ DEFAULT timezone('utc', now()) NOT NULL,
    user_id         UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    math_score      INT NOT NULL CHECK (math_score BETWEEN 0 AND 100),
    science_score   INT NOT NULL CHECK (science_score BETWEEN 0 AND 100),
    language_score  INT NOT NULL CHECK (language_score BETWEEN 0 AND 100),
    logical_score   INT NOT NULL CHECK (logical_score BETWEEN 0 AND 100),
    learning_style  VARCHAR(50) NOT NULL,
    predicted_majors JSONB NOT NULL
);
```

### 10.2 Desain Endpoint API

| Method | Endpoint | Auth | Deskripsi |
| :--- | :--- | :---: | :--- |
| POST | `/auth/register` | ✗ | Daftar akun baru via Supabase Auth |
| POST | `/auth/login` | ✗ | Login & kembalikan access token JWT |
| POST | `/auth/logout` | ✓ | Akhiri sesi pengguna |
| POST | `/predict` | ✓ | Inferensi XGBoost & simpan hasil ke DB |
| GET | `/predict/history` | ✓ | Ambil riwayat prediksi pengguna aktif |
| DELETE | `/predict/history` | ✓ | Hapus seluruh riwayat prediksi |
| POST | `/mentor/chat` | ✓ | Sesi konseling dengan AI Mentor Llama 3.1 |

### 10.3 Alur Data (Data Flow)
1. Pengguna mendaftar/login → Supabase Auth mengembalikan **JWT Bearer Token**.
2. Pengguna mengisi form nilai dan gaya belajar → dikirim ke `POST /predict`.
3. FastAPI melakukan **feature engineering** (avg, total, highest, lowest score) dan menjalankan inferensi **XGBoost Classifier** (jurusan) + **XGBoost Regressor** (estimasi gaji).
4. Hasil 3 skenario disimpan ke tabel `digital_twin_profiles` di Supabase.
5. Pengguna membuka AI Mentor → backend mengambil `predicted_majors` terbaru dari DB untuk membangun **system prompt kontekstual** → dikirim ke Groq API (Llama 3.1).

---

## Bagian 11 — Implementasi Teknis

### 11.1 Daftar Fitur

| Fitur | Status |
| :--- | :---: |
| Autentikasi (Register, Login, Logout) | ✅ Completed |
| Form input profil akademik & gaya belajar | ✅ Completed |
| Mesin prediksi XGBoost (jurusan + gaji) | ✅ Completed |
| Halaman hasil 3 skenario rekomendasi | ✅ Completed |
| Dashboard riwayat prediksi digital twin | ✅ Completed |
| AI Mentor Chatbot kontekstual | ✅ Completed |
| Hapus riwayat prediksi mandiri | ✅ Completed |
| Laporan PDF rekomendasi | 🔲 Planned |

### 11.2 Cuplikan Teknis — Feature Engineering & Inferensi ML

```python
# Feature Engineering sebelum inferensi XGBoost
scores = [student.math_score, student.science_score,
          student.language_score, student.logical_score]
avg_score    = sum(scores) / 4.0
total_score  = sum(scores)
highest_score = max(scores)
lowest_score  = min(scores)

input_data = pd.DataFrame([{
    "Math_Score": student.math_score,
    "Science_Score": student.science_score,
    "Language_Score": student.language_score,
    "Logical_Score": student.logical_score,
    "Learning_Style_Encoded": style_encoded,
    "Average_Score": avg_score,
    "Total_Score": total_score,
    "Highest_Score": highest_score,
    "Lowest_Score": lowest_score,
}])

# Klasifikasi top-3 jurusan berdasarkan probabilitas
probabilities = model.predict_proba(input_data)[0]
top_3_indices = np.argsort(probabilities)[::-1][:3]
```

### 11.3 Screenshot Antarmuka Utama
*[Sisipkan screenshot Landing Page, Form Prediksi, Halaman Hasil, Dashboard, dan AI Mentor Chat di sini dengan caption masing-masing]*

### 11.4 Catatan Progress
Aplikasi telah mencapai progress lebih dari **75%** saat submission, dengan seluruh alur inti (autentikasi → prediksi → riwayat → konseling AI) sudah berfungsi penuh secara end-to-end.

---

## Bagian 12 — Analisis UI/UX & Accessibility

### 12.1 User Research
Tim melakukan observasi dan diskusi informal dengan beberapa calon pengguna (siswa SMA kelas XI–XII) untuk memahami pain point dalam mencari informasi karir. Temuan utama: siswa menginginkan hasil yang **cepat**, **mudah dibaca**, dan **tidak membebani** dengan pertanyaan panjang.

### 12.2 User Persona
**Target Pengguna Utama**: Siswa SMA kelas X–XII dan mahasiswa tingkat awal (usia 16–20 tahun) yang terbiasa menggunakan perangkat digital, sedang mempertimbangkan pilihan jurusan atau karir, namun belum memiliki akses memadai terhadap bimbingan karir personal.

### 12.3 Prinsip Desain: *Calm Intelligence*
Antarmuka dirancang untuk menghilangkan kecemasan siswa dalam pengisian data:
- **Minimalisme Ekstrem**: Warna didominasi canvas (latar), ink (teks utama), dan hairline (border 1px tipis). Aksen primer hanya pada elemen aksi utama.
- **Tipografi Tegas**: `Space Grotesk` (heading) + `Plus Jakarta Sans` (body) — kontras tinggi, *scannability* prima.
- **Layout Notion-style**: Kartu persegi bersih tanpa gradien berlebih, mirip tampilan Vercel dan Notion.

### 12.4 Wireframe / Mockup
*[Sisipkan screenshot mockup Figma atau antarmuka aplikasi di sini]*

### 12.5 Fitur Accessibility
- **Kontras Warna**: Rasio kontras teks utama vs. latar belakang memenuhi standar **WCAG AA (≥ 4.5:1)**.
- **Keyboard Navigable**: Seluruh input form dapat dilompati menggunakan tombol `Tab` dengan indikator fokus yang jelas.
- **Responsif**: Layout adaptif untuk desktop dan mobile.

---

## Bagian 13 — Pengujian (Testing)

### 13.1 Jenis Testing

| Jenis Testing | Deskripsi | Tools |
| :--- | :--- | :--- |
| Unit Test (Model ML) | Validasi akurasi XGBoost pada 20% test set | Scikit-learn metrics |
| API Integration Test | Verifikasi respons JSON endpoint FastAPI | FastAPI TestClient |
| Manual UAT | Pengujian alur end-to-end oleh anggota tim | Chrome, Edge, Firefox |
| Usability Test | Pengujian kemudahan penggunaan oleh calon pengguna | Observasi langsung |

### 13.2 Hasil Testing
- **XGBoost Classifier**: Akurasi **98,2%** pada data validasi.
- **XGBoost Regressor**: Mean Absolute Error (MAE) dalam rentang wajar skala industri Indonesia.
- **Bug ditemukan & diperbaiki**: Format gaji negatif ditangani dengan fungsi `_format_salary()` yang memastikan nilai minimum UMR jika prediksi anomali.
- **Belum dicakup**: Pengujian performa pada skala besar (load testing) dan pengujian lintas perangkat secara menyeluruh.

---

## Bagian 14 — Dokumentasi Penggunaan

### 14.1 Cara Mengakses Aplikasi
*[Isi URL deployment aplikasi setelah di-deploy ke Vercel/Netlify]*

Untuk menjalankan secara lokal:
```bash
# Backend
cd Backend
python -m venv venv && venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload  # http://127.0.0.1:8000

# Frontend (terminal terpisah)
cd FE
npm install
npm run dev  # http://localhost:5173
```

### 14.2 Cara Login
1. Buka aplikasi dan klik **Mulai Sekarang** / **Daftar**.
2. Isi email dan password (minimal 6 karakter), klik **Daftar**.
3. Cek email untuk konfirmasi akun, lalu **Login**.

> **Akun Demo Juri**: Email: `demo@edufuture.ai` | Password: `demo123`
> *(Isi dengan kredensial akun demo yang sudah disiapkan)*

### 14.3 Alur Penggunaan Utama
1. Login ke platform EduFuture AI.
2. Navigasi ke halaman **Prediksi** dan isi nilai rapor serta gaya belajar.
3. Klik **Analisis Profil Saya** untuk melihat 3 rekomendasi jurusan dan estimasi gaji.
4. Kunjungi halaman **AI Mentor** untuk berkonsultasi lebih lanjut mengenai karir.
5. Lihat riwayat prediksi di halaman **Dashboard**.

### 14.4 Troubleshooting Umum
| Masalah | Solusi |
| :--- | :--- |
| Halaman hasil tidak muncul | Pastikan seluruh field form telah terisi dengan benar |
| AI Mentor tidak merespons | Lakukan prediksi terlebih dahulu sebelum membuka halaman Mentor |
| Tampilan tidak sesuai | Refresh halaman atau gunakan browser versi terbaru |

---

## Bagian 15 — Daftar Pustaka & Referensi

### 15.1 Paper/Jurnal
- Chen, T., & Guestrin, C. (2016). *XGBoost: A Scalable Tree Boosting System*. Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining.
- [Tambahkan jurnal/paper pendukung latar belakang masalah — data salah jurusan, transformasi digital pendidikan, dsb.]

### 15.2 Library & Framework Open Source
- React — MIT License — https://react.dev
- Vite — MIT License — https://vitejs.dev
- Tailwind CSS — MIT License — https://tailwindcss.com
- FastAPI — MIT License — https://fastapi.tiangolo.com
- XGBoost — Apache 2.0 License — https://xgboost.readthedocs.io
- Supabase — Apache 2.0 License — https://supabase.com
- Groq SDK (Python) — MIT License — https://groq.com

### 15.3 Sumber Data Statistik
- Indonesia Career Center Network (ICCN). (2023). *Laporan Survei Nasional Fenomena Salah Jurusan Mahasiswa Indonesia*. Jakarta.
- [Tambahkan sumber data Kemendikbud, BPS, atau publikasi lain yang mendukung Bagian 3]

### 15.4 Website Referensi
- Supabase Documentation — https://supabase.com/docs
- Groq Documentation — https://console.groq.com/docs
- [Tambahkan referensi lain yang digunakan selama pengembangan]
