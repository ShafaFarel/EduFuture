import React from 'react';
import { Compass, Sparkles, BookOpen, TrendingUp, Cpu, Award, Target, ArrowRight } from 'lucide-react';

export default function LandingPage({ setActiveView }) {
  const features = [
    {
      icon: Cpu,
      title: 'Prediksi Karier AI',
      description: 'Memanfaatkan algoritma pencocokan canggih untuk memetakan keselarasan antara minat bawaan, kemampuan teknis, dan permintaan pasar modern.',
      color: 'from-indigo-500 to-cyan-400',
    },
    {
      icon: Target,
      title: 'Profil Kesenjangan Keterampilan',
      description: 'Visualisasikan keahlian Anda di berbagai sektor industri. Dapatkan panduan transparan tentang sertifikasi dan perangkat lunak yang harus dikuasai.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BookOpen,
      title: 'Peta Jalan Praktis',
      description: 'Lebih dari sekadar prediksi. Dapatkan jalur terstruktur 4 langkah yang merinci mata kuliah, proyek portofolio, dan target yang harus dicapai.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: TrendingUp,
      title: 'Analitis Akademis',
      description: 'Mengintegrasikan metrik kinerja sekolah dan mata pelajaran favorit untuk menghitung skor kecocokan yang realistis guna memandu jalur studi Anda.',
      color: 'from-cyan-400 to-emerald-400',
    },
  ];

  return (
    <div className="relative overflow-hidden pt-8 pb-16">
      {/* Background Glow Blurs */}
      <div className="glow-blur top-20 left-10 w-72 h-72 bg-indigo-600/10"></div>
      <div className="glow-blur top-60 right-10 w-96 h-96 bg-purple-600/10"></div>

      {/* Hero Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          
          {/* Left Text Column */}
          <div className="text-center lg:col-span-7 lg:text-left">
            <div className="inline-flex items-center space-x-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 text-xs text-indigo-300">
              <Sparkles className="h-3.5 w-3.5 animate-pulse text-indigo-400" />
              <span>Mesin Analitis Siswa Generasi Berikutnya v1.4</span>
            </div>
            
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:leading-tight">
              Discover Your Future <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                With Deep AI Insight
              </span>
            </h1>
            
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg max-w-2xl mx-auto lg:mx-0">
              Hentikan spekulasi. Masukkan minat, keahlian teknis, dan kinerja akademis Anda, lalu biarkan mesin kecerdasan kami menyusun peta jalan karier optimal Anda.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                onClick={() => setActiveView('form')}
                className="group relative flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:shadow-indigo-500/35 hover:scale-102 hover:brightness-105 active:scale-98"
              >
                <span>Mulai Prediksi Gratis</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </button>
              
              <button
                onClick={() => setActiveView('dashboard')}
                className="flex items-center justify-center space-x-2 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-all hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white"
              >
                <span>Lihat Dashboard</span>
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-white/5 pt-8 max-w-md mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">98.2%</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Tingkat Akurasi</p>
              </div>
              <div className="border-l border-slate-200 dark:border-white/10 pl-4">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">45+</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Jalur Karir AI</p>
              </div>
              <div className="border-l border-slate-200 dark:border-white/10 pl-4">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">12K+</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Siswa Terbimbing</p>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="relative flex justify-center lg:col-span-5">
            <div className="animate-float relative w-full max-w-[400px]">
              
              {/* Main Card (Glassmorphism mockup) */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 relative z-10">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white border border-indigo-400/30">
                      AM
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Profil Siswa</h3>
                      <p className="text-[10px] text-indigo-600 dark:text-indigo-400 font-medium">Analisis Terverifikasi</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-100 dark:bg-emerald-500/10 px-2.5 py-0.5 text-2xs font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                    Terhitung
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Jalur yang Direkomendasikan</span>
                    <span className="text-lg font-bold bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-white dark:via-indigo-200 dark:to-purple-300 bg-clip-text text-transparent">
                      Arsitek Solusi AI
                    </span>
                  </div>

                  {/* Confidence Bar */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 dark:text-slate-400">Kecocokan Prediksi</span>
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400">94.7%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: '94.7%' }}></div>
                    </div>
                  </div>

                  {/* Interests Chips Mock */}
                  <div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">Pendorong Utama</span>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="rounded-md bg-slate-100 dark:bg-white/5 px-2 py-0.5 text-3xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5">Coding</span>
                      <span className="rounded-md bg-slate-100 dark:bg-white/5 px-2 py-0.5 text-3xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5">Sains</span>
                      <span className="rounded-md bg-slate-100 dark:bg-white/5 px-2 py-0.5 text-3xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5">Matematika</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Grid Backdrop decoration inside card */}
                <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none">
                  <Compass className="w-24 h-24 text-white" />
                </div>
              </div>

              {/* Smaller floating card decorations */}
              <div className="absolute -top-6 -right-6 glass-panel rounded-xl p-3 shadow-lg z-20 flex items-center space-x-2.5">
                <div className="h-8 w-8 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center border border-indigo-200 dark:border-indigo-500/20">
                  <Award className="h-4.5 w-4.5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Jurusan Utama</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Ilmu Komputer</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 glass-panel rounded-xl p-3 shadow-lg z-20 flex items-center space-x-2.5">
                <div className="h-8 w-8 rounded-lg bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center border border-purple-200 dark:border-purple-500/20">
                  <Sparkles className="h-4.5 w-4.5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Status Peta Jalan</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">4 Langkah Praktis</p>
                </div>
              </div>

              {/* Decorative behind glow circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Dirancang untuk Penyelarasan Karier Modern
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Temukan rangkaian fitur analitis lengkap yang dirancang untuk memetakan, mengukur, dan menggariskan jalur pendidikan Anda.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 relative overflow-hidden"
              >
                {/* Glow bar indicator on top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`}></div>
                
                <div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-slate-200 dark:border-white/10 mb-5">
                  <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
