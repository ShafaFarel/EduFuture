import React from 'react';
import { LayoutDashboard, Compass, Cpu, TrendingUp, Calendar, Trash2, ShieldAlert, ChevronRight, Award } from 'lucide-react';

export default function Dashboard({ history, onSelectPrediction, onClearHistory, setActiveView, currentGpa = 3.7 }) {
  
  // Calculate analytics
  const runCount = history.length;
  const highestMatch = runCount > 0 ? Math.max(...history.map(h => h.confidence)) : 0;
  
  const hasHistory = runCount > 0;

  return (
    <div className="relative py-8 max-w-5xl mx-auto px-4">
      {/* Background Blurs */}
      <div className="glow-blur top-10 left-10 w-80 h-80 bg-indigo-500/10"></div>
      <div className="glow-blur bottom-10 right-10 w-96 h-96 bg-purple-500/10"></div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-200 dark:border-white/5 pb-6 mb-8 relative z-10 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center space-x-2.5">
            <LayoutDashboard className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
            <span>Dashboard Siswa</span>
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Pantau riwayat prediksi, metrik analitis, dan distribusi kecocokan keterampilan Anda.
          </p>
        </div>

        {hasHistory && (
          <button
            onClick={onClearHistory}
            className="flex items-center space-x-2 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 hover:border-rose-300 px-4 py-2 text-xs font-semibold text-rose-600 dark:border-rose-500/20 dark:bg-rose-500/5 dark:hover:bg-rose-500/10 dark:hover:border-rose-500/35 dark:text-rose-400 transition-all"
          >
            <Trash2 className="h-4 w-4" />
            <span>Hapus Riwayat</span>
          </button>
        )}
      </div>

      {/* Stats Summary Panel */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 relative z-10 mb-8">
        
        {/* Stat 1 */}
        <div className="glass-panel rounded-2xl p-5 relative overflow-hidden">
          <div className="absolute right-4 top-4 h-8 w-8 rounded-lg bg-indigo-50 border-indigo-200 dark:bg-indigo-500/10 flex items-center justify-center border dark:border-indigo-500/25">
            <Cpu className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
          </div>
          <span className="text-2xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider block">EVALUASI PREDIKTIF</span>
          <span className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 block">
            {runCount} Evaluasi
          </span>
          <p className="text-[10px] text-slate-600 dark:text-slate-500 mt-1">Total jalur karir dipetakan</p>
        </div>

        {/* Stat 2 */}
        <div className="glass-panel rounded-2xl p-5 relative overflow-hidden">
          <div className="absolute right-4 top-4 h-8 w-8 rounded-lg bg-purple-50 border-purple-200 dark:bg-purple-500/10 flex items-center justify-center border dark:border-purple-500/25">
            <Award className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </div>
          <span className="text-2xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider block">INDEKS KECOCOKAN MAKS</span>
          <span className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 block">
            {hasHistory ? `${highestMatch}%` : 'N/A'}
          </span>
          <p className="text-[10px] text-slate-600 dark:text-slate-500 mt-1">Korelasi karir tertinggi</p>
        </div>

        {/* Stat 3 */}
        <div className="glass-panel rounded-2xl p-5 relative overflow-hidden">
          <div className="absolute right-4 top-4 h-8 w-8 rounded-lg bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10 flex items-center justify-center border dark:border-emerald-500/25">
            <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <span className="text-2xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider block">KINERJA AKADEMIS</span>
          <span className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 block">
            {currentGpa.toFixed(2)}
          </span>
          <p className="text-[10px] text-slate-600 dark:text-slate-500 mt-1">IPK aktif terkonfigurasi</p>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* LEFT COLUMN: History List (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">Riwayat Evaluasi Jalur Karir</h3>
          
          {!hasHistory ? (
            <div className="glass-panel rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
              <div className="h-14 w-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 border border-slate-200 dark:border-white/5">
                <Compass className="h-7 w-7 text-indigo-600/60 dark:text-indigo-400/60" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Belum Ada Prediksi yang Tercatat</h4>
              <p className="text-xs text-slate-600 dark:text-slate-500 mt-1.5 max-w-sm">
                Anda belum menjalankan simulasi prediksi karir AI. Jalankan panduan prediksi untuk memetakan industri yang cocok.
              </p>
              <button
                onClick={() => setActiveView('form')}
                className="mt-6 rounded-xl bg-indigo-500/90 hover:bg-indigo-500 px-5 py-2.5 text-xs font-semibold text-white shadow-lg transition-transform hover:scale-102"
              >
                Mulai Prediktor AI
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {history.map((record, index) => {
                const dateString = record.date || new Date().toISOString().split('T')[0];
                return (
                  <div 
                    key={index}
                    onClick={() => onSelectPrediction(record)}
                    className="glass-panel glass-panel-hover rounded-xl p-5 cursor-pointer flex justify-between items-center group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider">
                          {record.career.category}
                        </span>
                        <span className="text-[9px] text-slate-500 flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{dateString}</span>
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {record.career.title}
                      </h4>
                      <p className="text-2xs text-slate-600 dark:text-slate-400">
                        Dipetakan untuk IPK: {record.gpa.toFixed(2)} // Faktor: {record.matchingFactors.length}
                      </p>
                    </div>

                    <div className="flex items-center space-x-3.5">
                      <div className="text-right">
                        <span className="text-xs text-slate-500 dark:text-slate-400 block">Kecocokan</span>
                        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{record.confidence}%</span>
                      </div>
                      <div className="h-8 w-8 rounded-lg bg-slate-100 dark:bg-white/3 flex items-center justify-center border border-slate-200 dark:border-white/5 group-hover:border-indigo-300 dark:group-hover:border-indigo-500/30 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/5 transition-all">
                        <ChevronRight className="h-4 w-4 text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>

        {/* RIGHT COLUMN: Skill Stats / Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Mock Visual Metric: Career Landscape */}
          <div className="glass-panel rounded-2xl p-6">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Peta Kompetensi</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
              Peta visual terintegrasi berdasarkan tingkat keterampilan aktif Anda.
            </p>

            {/* Custom SVG Skills Distribution Chart (renders like a star/radar map mockup) */}
            <div className="flex justify-center py-4 bg-white dark:bg-slate-950/30 rounded-2xl border border-slate-200 dark:border-white/3 relative overflow-hidden">
              <svg width="200" height="200" viewBox="0 0 200 200" className="overflow-visible z-10">
                {/* Radial Grid lines */}
                <circle cx="100" cy="100" r="30" fill="none" className="radar-grid-line" />
                <circle cx="100" cy="100" r="60" fill="none" className="radar-grid-line" />
                <circle cx="100" cy="100" r="90" fill="none" className="radar-grid-line" />
                
                {/* Diagonal Axis lines */}
                <line x1="100" y1="10" x2="100" y2="190" className="radar-grid-line" />
                <line x1="10" y1="100" x2="190" y2="100" className="radar-grid-line" />
                <line x1="36.4" y1="36.4" x2="163.6" y2="163.6" className="radar-grid-line" />
                
                {/* Label tags */}
                <text x="100" y="-3" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">TEKNOLOGI</text>
                <text x="100" y="209" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">EMPATI</text>
                <text x="207" y="103" textAnchor="start" fill="#94a3b8" fontSize="8" fontWeight="bold">LOGIKA</text>
                <text x="-7" y="103" textAnchor="end" fill="#94a3b8" fontSize="8" fontWeight="bold">KREATIF</text>

                {/* Polygonal overlay matching values */}
                <polygon 
                  points="100,28 172,100 100,154 46,100" 
                  fill="rgba(99, 102, 241, 0.18)" 
                  stroke="#6366f1" 
                  strokeWidth="2" 
                />
                
                {/* Node dots */}
                <circle cx="100" cy="28" r="4" fill="#a855f7" />
                <circle cx="172" cy="100" r="4" fill="#a855f7" />
                <circle cx="100" cy="154" r="4" fill="#6366f1" />
                <circle cx="46" cy="100" r="4" fill="#6366f1" />
              </svg>
            </div>
            
            <div className="flex justify-between text-3xs text-slate-500 mt-4 border-t border-slate-200 dark:border-white/5 pt-4">
              <span className="flex items-center space-x-1.5">
                <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                <span>Profil Aktif</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                <span>Baseline Pasar</span>
              </span>
            </div>
          </div>

          {/* Tips Card */}
          <div className="glass-panel rounded-2xl p-5 relative overflow-hidden bg-gradient-to-tr from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
            <span className="flex items-center space-x-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              <ShieldAlert className="h-4 w-4" />
              <span>Tip Belajar AI</span>
            </span>
            <p className="text-2xs text-slate-700 dark:text-slate-400 leading-relaxed">
              Profil Anda menunjukkan dasar analitis yang kuat tetapi menunjukkan peluang pengembangan di domain Seni & Desain Kreatif. Coba sesuaikan slider matriks keterampilan Anda di formulir pengisian untuk melihat bagaimana rekomendasi jalur karir Anda menyesuaikan!
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
