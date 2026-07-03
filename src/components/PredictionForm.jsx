import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, Brain, Cpu, BookOpen, Sliders, Check, Terminal, AlertCircle } from 'lucide-react';

const SUBJECT_OPTIONS = [
  'Matematika', 'Fisika', 'Biologi', 'Kimia',
  'Ilmu Komputer', 'Bisnis & Ekonomi', 'Seni & Desain', 'Sastra & Bahasa'
];

const INTEREST_OPTIONS = [
  { id: 'Technology', label: 'Teknologi', desc: 'Perangkat lunak, AI, gadget, perangkat keras' },
  { id: 'Creative Arts', label: 'Seni Kreatif', desc: 'Musik, teater, lukisan digital' },
  { id: 'Business', label: 'Bisnis & Usaha', desc: 'Startup, penjualan, manajemen' },
  { id: 'Healthcare', label: 'Layanan Kesehatan & Medis', desc: 'Perawatan pasien, anatomi, biologi' },
  { id: 'Nature', label: 'Alam & Keberlanjutan', desc: 'Konservasi, ekologi, jaringan surya' },
  { id: 'Writing', label: 'Penulisan & Copy', desc: 'Jurnalisme, blogging, penyusunan kebijakan' },
  { id: 'Public Speaking', label: 'Berbicara di Depan Umum & Humas', desc: 'Debat, presentasi, komunitas' },
  { id: 'Science', label: 'Sains Murni', desc: 'Pekerjaan laboratorium, kimia, fisika, riset' },
  { id: 'Finance', label: 'Keuangan & Pasar', desc: 'Saham, perdagangan, penganggaran, ekonomi' },
  { id: 'Design', label: 'Antarmuka Pengguna / UX', desc: 'Desain aplikasi, seni vektor, kegunaan' },
];

const SKILL_SLIDERS = [
  { id: 'coding', label: 'Pemrograman & Coding', desc: 'Menulis kode, scripting, memahami sistem perangkat lunak' },
  { id: 'math', label: 'Logika Matematika', desc: 'Menyelesaikan persamaan, perhitungan, penalaran statistik' },
  { id: 'creativity', label: 'Kreativitas & Ideasi', desc: 'Menghasilkan ide-ide baru, konsep seni, gaya visual' },
  { id: 'empathy', label: 'Empati & Kepedulian', desc: 'Mendengarkan orang lain, dukungan pasien, konseling' },
  { id: 'communication', label: 'Komunikasi & Hubungan Masyarakat', desc: 'Mengartikulasikan ide-ide kompleks, menyajikan, materi pemasaran' },
  { id: 'analysis', label: 'Analisis Data', desc: 'Menafsirkan grafik, men-debug bug, membaca makalah penelitian' },
  { id: 'leadership', label: 'Kepemimpinan & Pengarahan', desc: 'Mengatur proyek kelompok, menetapkan tujuan, mempresentasikan visi' },
];

const LOADING_LOGS = [
  'Menginisialisasi mesin bobot prediktif...',
  'Menganalisis catatan akademis dan modul mata pelajaran favorit...',
  'Mengkorelasikan indeks kinerja IPK dengan standar industri...',
  'Mencocokkan matriks minat dengan database karier...',
  'Menghitung indeks kesenjangan keterampilan di 7 kompetensi...',
  'Menyintesis jalur karier akhir, kecocokan prediksi, dan peta jalan pembelajaran...',
];

// ─── komponen loading terpisah ─────────────────────────────────────────────
function LoadingScreen({ currentLogIndex, onDone }) {
  // onDone dipanggil dari parent setelah interval selesai
  const pct = Math.round(((currentLogIndex + 1) / LOADING_LOGS.length) * 100);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 shadow-xl shadow-indigo-500/25">
        <Brain className="h-12 w-12 text-white animate-pulse" />
        <div className="absolute inset-0 rounded-2xl bg-indigo-500/20 blur-xl scale-125 animate-ping opacity-30"></div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Analisis AI Sedang Berlangsung</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-400">Harap tunggu sementara algoritma pencocokan saraf memproses profil Anda.</p>

      <div className="mt-8 rounded-xl bg-white dark:bg-slate-950 p-6 border border-slate-200 dark:border-white/5 text-left font-mono text-xs text-indigo-500 dark:text-indigo-300 shadow-2xl relative overflow-hidden">
        <div className="flex items-center space-x-2 border-b border-slate-200 dark:border-white/5 pb-3 mb-4 text-slate-500">
          <Terminal className="h-4 w-4" />
          <span>EduFuture Classifier v1.4 // stdout</span>
        </div>

        <div className="space-y-2 min-h-[140px]">
          {LOADING_LOGS.slice(0, currentLogIndex + 1).map((log, index) => (
            <div key={index} className="flex items-start space-x-2">
              <span className="text-indigo-500 select-none">&gt;&gt;</span>
              <span className={index === currentLogIndex ? 'text-slate-800 dark:text-white' : 'text-slate-400 dark:text-slate-500'}>
                {log}
              </span>
              {index === currentLogIndex && pct < 100 && (
                <span className="inline-block w-1.5 h-3.5 bg-indigo-400 animate-pulse ml-0.5"></span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="flex justify-between text-2xs text-slate-500 mb-1">
            <span>KONVERGENSI MATRIKS PEMETAAN</span>
            <span>{pct}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── komponen utama ─────────────────────────────────────────────────────────
export default function PredictionForm({ onPredictSubmit }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [logIndex, setLogIndex] = useState(0);
  const [submitError, setSubmitError] = useState(null);

  const [name, setName] = useState('Alex Mercer');
  const [gpa, setGpa] = useState('3.7');
  const [selectedSubjects, setSelectedSubjects] = useState(['Matematika', 'Ilmu Komputer']);
  const [selectedInterests, setSelectedInterests] = useState(['Technology', 'Design']);
  const [skills, setSkills] = useState({
    coding: 4, math: 4, creativity: 4,
    empathy: 3, communication: 3, analysis: 4, leadership: 3,
  });
  const [errors, setErrors] = useState({});

  // Refs: simpan nilai paling mutakhir untuk dipakai di dalam setInterval
  const callbackRef = useRef(onPredictSubmit);
  useEffect(() => { callbackRef.current = onPredictSubmit; }, [onPredictSubmit]);

  const formDataRef = useRef(null);

  // ── interval loading ────────────────────────────────────────────────────
  useEffect(() => {
    if (!loading) return;

    // Snapshot form data SEKARANG (sebelum interval mulai)
    formDataRef.current = {
      name: name.trim() || 'Siswa',
      gpa,
      subjects: selectedSubjects,
      interests: selectedInterests,
      skills,
    };

    console.log('[EduFuture] Loading dimulai. Form data:', formDataRef.current);

    let idx = 0;
    setLogIndex(0);

    const id = setInterval(() => {
      idx += 1;

      if (idx < LOADING_LOGS.length) {
        // tampilkan baris log berikutnya
        setLogIndex(idx);
      } else {
        // ── selesai ────────────────────────────────────────────────────
        clearInterval(id);
        setLogIndex(LOADING_LOGS.length - 1); // pastikan baris terakhir terlihat

        // Tunggu 800 ms agar user melihat progress 100%, lalu panggil parent
        setTimeout(() => {
          console.log('[EduFuture] Memanggil onPredictSubmit dengan:', formDataRef.current);
          try {
            callbackRef.current(formDataRef.current);
          } catch (err) {
            console.error('[EduFuture] Error di onPredictSubmit:', err);
            setSubmitError('Terjadi kesalahan saat memproses prediksi. Silakan coba lagi.');
            setLoading(false);
          }
        }, 800);
      }
    }, 650);

    // cleanup jika komponen di-unmount sebelum selesai
    return () => clearInterval(id);
  }, [loading]); // ← hanya bergantung pada `loading` — TIDAK ada dep form lainnya

  // ── handlers ────────────────────────────────────────────────────────────
  const handleSubjectToggle = (subj) =>
    setSelectedSubjects(prev =>
      prev.includes(subj) ? prev.filter(s => s !== subj) : [...prev, subj]
    );

  const handleInterestToggle = (id) =>
    setSelectedInterests(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );

  const handleSkillChange = (id, val) =>
    setSkills(prev => ({ ...prev, [id]: parseInt(val, 10) }));

  const validateStep1 = () => {
    const err = {};
    if (!name.trim()) err.name = 'Harap masukkan nama Anda.';
    const n = parseFloat(gpa);
    if (isNaN(n) || n < 1.0 || n > 4.0) err.gpa = 'Harap masukkan IPK yang valid antara 1.0 dan 4.0.';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;
    setStep(s => s + 1);
  };

  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedInterests.length === 0) {
      alert('Silakan pilih setidaknya satu minat.');
      return;
    }
    setSubmitError(null);
    setLoading(true);   // ← memicu useEffect
  };

  // ── render loading ───────────────────────────────────────────────────────
  if (loading) {
    // Tampilkan error jika ada (ketika onPredictSubmit throw)
    if (submitError) {
      return (
        <div className="mx-auto max-w-2xl px-4 py-16 text-center">
          <div className="glass-panel rounded-2xl p-8 border border-rose-200 dark:border-rose-500/20">
            <AlertCircle className="h-12 w-12 text-rose-500 dark:text-rose-400 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Terjadi Kesalahan</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">{submitError}</p>
            <button
              onClick={() => { setLoading(false); setSubmitError(null); }}
              className="rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
            >
              Coba Lagi
            </button>
          </div>
        </div>
      );
    }

    return <LoadingScreen currentLogIndex={logIndex} />;
  }

  // ── render form ─────────────────────────────────────────────────────────
  return (
    <div className="relative py-8 max-w-3xl mx-auto px-4">
      <div className="glow-blur top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-indigo-500/10"></div>

      {/* Stepper Header */}
      <div className="mb-10 text-center relative z-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">AI Career Predictor</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Berikan matriks profil unik Anda untuk membuka rekomendasi karier yang disesuaikan.
        </p>

        <div className="mt-8 flex justify-center items-center space-x-4">
          {[{ n: 1, label: 'Profil' }, { n: 2, label: 'Minat' }, { n: 3, label: 'Keterampilan' }].map(({ n, label }, i, arr) => (
            <React.Fragment key={n}>
              <div className={`flex items-center space-x-2 text-xs font-semibold ${step >= n ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'}`}>
                <span className={`h-6 w-6 rounded-full flex items-center justify-center border ${step >= n ? 'border-indigo-500/30 bg-indigo-500/10' : 'border-slate-300 dark:border-slate-800'}`}>{n}</span>
                <span>{label}</span>
              </div>
              {i < arr.length - 1 && <div className="h-px w-8 bg-slate-300 dark:bg-slate-800"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-6 sm:p-8 relative z-10">

        {/* ── Step 1: Profil Akademis ──────────────────────────────────── */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="flex items-center space-x-2.5 border-b border-slate-200 dark:border-white/5 pb-4 mb-4">
              <Cpu className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Profil Akademis Siswa</h3>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Nama Siswa</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="form-input-dark w-full rounded-xl px-4 py-3 text-sm"
                  placeholder="Contoh: Alex Mercer"
                />
                {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">IPK Akademis (skala 4.0)</label>
                <input
                  type="number" min="1.0" max="4.0" step="0.01"
                  value={gpa}
                  onChange={e => setGpa(e.target.value)}
                  className="form-input-dark w-full rounded-xl px-4 py-3 text-sm"
                  placeholder="Contoh: 3.75"
                />
                {errors.gpa && <p className="mt-1 text-xs text-rose-400">{errors.gpa}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">Mata Pelajaran Favorit (Pilih beberapa)</label>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {SUBJECT_OPTIONS.map(subject => {
                  const checked = selectedSubjects.includes(subject);
                  return (
                    <button type="button" key={subject} onClick={() => handleSubjectToggle(subject)}
                      className={`flex items-center justify-between rounded-xl px-3.5 py-3 border text-xs font-medium transition-all ${checked ? 'bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-500/10 dark:border-indigo-500/35 dark:text-indigo-300' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 dark:bg-white/2 dark:border-white/5 dark:text-slate-400 dark:hover:bg-white/5'}`}>
                      <span className="truncate mr-1">{subject}</span>
                      {checked && <Check className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── Step 2: Minat ────────────────────────────────────────────── */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="flex items-center space-x-2.5 border-b border-slate-200 dark:border-white/5 pb-4 mb-4">
              <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Area Fokus & Passion</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Pilih domain yang benar-benar membuat Anda bersemangat. Ini bertindak sebagai bobot berat dalam pemodelan jalur.</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {INTEREST_OPTIONS.map(option => {
                const selected = selectedInterests.includes(option.id);
                return (
                  <button type="button" key={option.id} onClick={() => handleInterestToggle(option.id)}
                    className={`flex flex-col items-start rounded-xl p-4 border text-left transition-all ${selected ? 'bg-indigo-50 border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/40' : 'bg-slate-50 border-slate-200 hover:bg-slate-100 dark:bg-white/2 dark:border-white/5 dark:hover:bg-white/5 dark:hover:border-white/10'}`}>
                    <span className={`text-sm font-bold ${selected ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300'}`}>{option.label}</span>
                    <span className="text-2xs text-slate-500 mt-1">{option.desc}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Step 3: Keterampilan ─────────────────────────────────────── */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="flex items-center space-x-2.5 border-b border-slate-200 dark:border-white/5 pb-4 mb-4">
              <Sliders className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Inventaris Keterampilan Utama</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Nilai kemampuan Anda dari 1 (Pemula) sampai 5 (Mahir).</p>
            <div className="space-y-5">
              {SKILL_SLIDERS.map(slider => {
                const val = skills[slider.id] || 3;
                return (
                  <div key={slider.id} className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <div>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{slider.label}</span>
                        <p className="text-3xs text-slate-500">{slider.desc}</p>
                      </div>
                      <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{val}/5</span>
                    </div>
                    <input type="range" min="1" max="5" value={val}
                      onChange={e => handleSkillChange(slider.id, e.target.value)}
                      className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Navigasi ─────────────────────────────────────────────────── */}
        <div className="mt-8 flex justify-between pt-6 border-t border-slate-200 dark:border-white/5">
          {step > 1 ? (
            <button type="button" onClick={prevStep}
              className="flex items-center space-x-2 rounded-xl border border-slate-300 dark:border-white/15 bg-slate-100 dark:bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-all">
              <ChevronLeft className="h-4 w-4" />
              <span>Langkah Sebelumnya</span>
            </button>
          ) : <div />}

          {step < 3 ? (
            <button type="button" onClick={nextStep}
              className="flex items-center space-x-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:brightness-105 transition-all">
              <span>Lanjutkan</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button type="submit"
              className="flex items-center space-x-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:brightness-110 transition-all">
              <Brain className="h-4 w-4 text-white animate-pulse" />
              <span>Hasilkan Prediksi</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
