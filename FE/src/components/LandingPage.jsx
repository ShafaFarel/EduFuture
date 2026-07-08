import React from 'react';
import { BookOpen, Brain, BarChart3, MessageCircle, Cpu, Target, Activity, ArrowRight, ChevronRight, LayoutGrid, Sparkles, LogIn, ArrowUpRight } from 'lucide-react';

/* ─── Data ───────────────────────────────────────────────────────────────── */
const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Input Nilai Rapor',
    desc: 'Masukkan nilai Matematika, Sains, Bahasa, dan Logika Anda.',
    icon: BookOpen,
    tint: 'bg-surface-2 border border-hairline',
  },
  {
    step: '02',
    title: 'AI Analisis Profil',
    desc: 'XGBoost menganalisis korelasi nilai akademis dengan ribuan pola data nyata.',
    icon: Brain,
    tint: 'bg-surface-2 border border-hairline',
  },
  {
    step: '03',
    title: 'Lihat 3 Skenario',
    desc: 'Dapatkan Rekomendasi Utama, Alternatif, dan Aman secara real-time.',
    icon: BarChart3,
    tint: 'bg-surface-2 border border-hairline',
  },
  {
    step: '04',
    title: 'Diskusi Mentor AI',
    desc: 'AI Mentor membaca riwayat prediksimu untuk sesi tanya jawab personal.',
    icon: MessageCircle,
    tint: 'bg-surface-2 border border-hairline',
  },
];

const METRICS = [
  { value: '98.2%', label: 'Akurasi Klasifikasi Model XGBoost' },
  { value: '13', label: 'Spesialisasi Jurusan & Karir Terintegrasi' },
  { value: '5,000+', label: 'Sampel Data Akademis Terverifikasi' },
];

export default function LandingPage({ setActiveView }) {

  return (
    <div className="relative bg-canvas min-h-screen selection:bg-ink selection:text-canvas">
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.04]" 
           style={{
             backgroundImage: `linear-gradient(to right, var(--ink) 1px, transparent 1px), linear-gradient(to bottom, var(--ink) 1px, transparent 1px)`,
             backgroundSize: '32px 32px'
           }} 
      />

      {/* ── HERO SECTION ── */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-2 px-3.5 py-1 mb-6 text-xs text-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            <span className="font-mono text-[10px] tracking-wider uppercase font-semibold">EduFuture AI</span>
          </div>

          {/* Headline - Vercel style centered display-xl */}
          <h1 className="font-display font-semibold text-ink leading-[1.0] tracking-[-0.05em] max-w-4xl mx-auto"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Karir impianmu tersebunyi dibalik nilai rapormu.
          </h1>

          <p className="mt-6 text-base text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Sistem prediksi berbasis <span className="text-ink font-semibold">XGBoost</span>.
           Menganalisis profil akademismu secara objektif - dan menghasilkan 3 skenario jalur karir yang paling cocok untukmu. Gratis dan instan. 
           </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => setActiveView('form')}
              className="bg-ink hover:bg-ink-muted text-canvas font-medium text-xs rounded-full px-6 py-3 transition-all flex items-center gap-2 shadow-sm"
            >
              <span>Mulai Prediksi Karir</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => setActiveView('dashboard')}
              className="bg-canvas hover:bg-surface-2 border border-hairline text-ink font-medium text-xs rounded-full px-6 py-3 transition-all flex items-center gap-2"
            >
              <span>Lihat Demo Dashboard</span>
            </button>
          </div>

          {/* Workspace Mockup - Vercel / Notion style */}
          <div className="mt-28 relative mx-auto max-w-4xl">
            {/* Outline container */}
            <div className="bg-canvas border border-hairline rounded-xl shadow-[0_24px_60px_rgba(0,0,0,0.06)] overflow-hidden text-left">
              
              {/* Window Header */}
              <div className="bg-surface-2 border-b border-hairline px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
                  <div className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
                  <div className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
                  <span className="text-xs text-ink-subtle font-mono ml-2">edufuture.ai/workspace/budi-santoso</span>
                </div>
                <div className="h-2 w-16 bg-hairline rounded-full" />
              </div>

              {/* Workspace Layout */}
              <div className="grid grid-cols-1 md:grid-cols-4 min-h-[380px]">
                
                {/* Mock Sidebar */}
                <div className="md:col-span-1 border-r border-hairline bg-surface-1/40 p-4 space-y-4 hidden md:block">
                  <div className="space-y-1">
                    <p className="text-[9px] uppercase tracking-wider text-ink-subtle font-bold font-mono">Workspace</p>
                    <div className="text-xs font-bold text-ink bg-surface-2 border border-hairline px-2.5 py-1.5 rounded flex items-center gap-2">
                      <LayoutGrid className="h-3.5 w-3.5" />
                      <span>Budi Santoso</span>
                    </div>
                  </div>
                  <div className="space-y-1.5 pt-2">
                    <p className="text-[9px] uppercase tracking-wider text-ink-subtle font-bold font-mono">Laporan</p>
                    {['Ringkasan', 'Skenario Karir', 'Rekomendasi Rapor', 'AI Mentor'].map((item, idx) => (
                      <div key={item} className={`text-xs px-2.5 py-1.5 rounded cursor-pointer ${idx === 1 ? 'font-semibold text-ink bg-surface-2' : 'text-ink-muted hover:bg-surface-2'}`}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mock Main Panel */}
                <div className="md:col-span-3 p-6 space-y-6">
                  
                  {/* Panel Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-hairline gap-3">
                    <div>
                      <h3 className="text-base font-bold text-ink">Hasil Analisis Akademis</h3>
                      <p className="text-xs text-ink-subtle mt-0.5">Sintesis model XGBoost diselesaikan dalam 0.65 detik</p>
                    </div>
                    <span className="self-start sm:self-auto inline-flex items-center gap-1 rounded bg-green-500/10 border border-green-500/20 px-2 py-0.5 text-[10px] font-semibold text-green-600">
                      <span className="h-1 w-1 rounded-full bg-green-500" />
                      Akurasi 98.2%
                    </span>
                  </div>

                  {/* Notion-style database table */}
                  <div className="border border-hairline rounded-lg overflow-hidden bg-canvas">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="bg-surface-2 border-b border-hairline text-ink-muted font-mono uppercase tracking-wider text-[9px]">
                          <th className="px-4 py-2.5">Jurusan</th>
                          <th className="px-4 py-2.5">Karir Utama</th>
                          <th className="px-4 py-2.5">Estimasi Gaji</th>
                          <th className="px-4 py-2.5 text-right">Kecocokan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-hairline">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-ink">Teknik Informatika</td>
                          <td className="px-4 py-3 text-ink-muted">Software Engineer</td>
                          <td className="px-4 py-3 font-mono text-ink-muted">Rp 8–15 Jt/bln</td>
                          <td className="px-4 py-3 text-right">
                            <span className="inline-block bg-[#ECEEFF] border border-[#5E6AD2]/25 px-2 py-0.5 rounded text-[10px] font-semibold text-[#5E6AD2]">94.7%</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-ink">Sistem Informasi</td>
                          <td className="px-4 py-3 text-ink-muted">IT Consultant</td>
                          <td className="px-4 py-3 font-mono text-ink-muted">Rp 7–12 Jt/bln</td>
                          <td className="px-4 py-3 text-right">
                            <span className="inline-block bg-[#DCECFA] border border-[#0369A1]/25 px-2 py-0.5 rounded text-[10px] font-semibold text-[#0369A1]">82.1%</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-ink">Pendidikan Komputer</td>
                          <td className="px-4 py-3 text-ink-muted">Guru TIK / Instruktur</td>
                          <td className="px-4 py-3 font-mono text-ink-muted">Rp 4–7 Jt/bln</td>
                          <td className="px-4 py-3 text-right">
                            <span className="inline-block bg-[#E3F8EE] border border-[#1aae39]/25 px-2 py-0.5 rounded text-[10px] font-semibold text-[#1aae39]">75.8%</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Notion-style Callout Block */}
                  <div className="flex gap-3 bg-surface-2 border border-hairline p-4 rounded-lg">
                    <span className="text-xl"></span>
                    <div className="text-xs text-ink-muted leading-relaxed">
                      <span className="font-semibold text-ink">Rekomendasi AI Mentor:</span> Profil Matematika (88) dan Logika (92) Anda menunjukkan kecocokan sangat tinggi pada pemecahan masalah algoritmik. Direkomendasikan mengambil jalur Teknik Informatika.
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── METRICS SECTION ── */}
      <section className="border-y border-hairline bg-surface-2 py-8 relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {METRICS.map((m) => (
              <div key={m.label} className="text-center sm:text-left flex flex-col justify-center py-2">
                <span className="text-3xl font-semibold text-ink tracking-tight font-mono">{m.value}</span>
                <span className="text-[11px] text-ink-subtle mt-1 tracking-wide uppercase font-semibold font-mono">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-ink-subtle mb-3 font-mono">Metodologi</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.04em] leading-tight">
              Evaluasi potensi akademik kamu dalam empat langkah sederhana.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="bg-canvas border border-hairline rounded-xl p-5 shadow-sm hover:border-ink-subtle transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-ink-subtle font-mono">{item.step}</span>
                    <div className="h-7 w-7 rounded bg-surface-2 border border-hairline flex items-center justify-center">
                      <Icon className="h-4 w-4 text-ink-muted" />
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-ink mb-1.5 tracking-[-0.02em]">{item.title}</h3>
                  <p className="text-xs text-ink-muted leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-xl overflow-hidden bg-[#0f1117] text-white border border-[#1f2937] px-8 py-14 text-center shadow-lg">
            <div className="relative z-10 max-w-xl mx-auto">
              <span className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mb-4 block font-mono">Mulai Gratis Instan</span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-[-0.04em] leading-tight">
                Mulai petakan rencana pendidikan kamu hari ini.
              </h2>
              <p className="mt-3 text-xs text-white/50 leading-relaxed">
                Platform ini sepenuhnya bebas biaya. Lakukan kalkulasi prediksi, visualisasikan opsi skenario jalur, dan konsultasikan hasilnya dengan AI.
              </p>
              <button
                onClick={() => setActiveView('form')}
                className="mt-8 bg-white text-[#0f1117] hover:bg-white/90 font-medium rounded-full px-6 py-3 text-xs transition-all inline-flex items-center gap-1.5 shadow-sm"
              >
                <span>Mulai Sekarang</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
