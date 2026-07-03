import React, { useState } from 'react';
import { Award, Compass, Sparkles, BookOpen, ChevronRight, RefreshCw, BarChart2, CheckCircle2, Bookmark, Save } from 'lucide-react';

const SKILL_LABEL_MAP = {
  coding: 'Pemrograman & Coding',
  math: 'Logika Matematika',
  creativity: 'Kreativitas & Ideasi',
  empathy: 'Empati & Kepedulian',
  communication: 'Komunikasi & Humas',
  analysis: 'Analisis Data',
  leadership: 'Kepemimpinan'
};

export default function ResultPage({ prediction, onReset, onSaveHistory, hasSaved }) {
  const { studentName, career, confidence, matchingFactors, gpa } = prediction;
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      onSaveHistory(prediction);
      setSaving(false);
    }, 600);
  };

  return (
    <div className="relative py-8 max-w-5xl mx-auto px-4">
      {/* Background Blurs */}
      <div className="glow-blur top-10 left-10 w-80 h-80 bg-indigo-500/10"></div>
      <div className="glow-blur bottom-10 right-10 w-96 h-96 bg-purple-500/10"></div>

      {/* Header Banner */}
      <div className="mb-8 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs text-emerald-300">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          <span>Sintesis Selesai dengan Sukses</span>
        </div>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Jalur Pendidikan Anda
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Halo {studentName}, berikut adalah laporan keselarasan khusus Anda yang dipetakan oleh mesin klasifikasi kami.
        </p>
      </div>

      {/* Main Results Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* LEFT COLUMN: Career Detail Card (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Core Career Prediction Info */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-40 w-40 bg-indigo-500/5 rounded-full blur-2xl -z-10"></div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 dark:border-white/5 pb-5 mb-5 gap-4">
              <div>
                <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider block">{career.category}</span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1 bg-gradient-to-r from-indigo-900 via-indigo-700 to-purple-800 dark:from-white dark:via-indigo-100 dark:to-purple-200 bg-clip-text text-transparent">
                  {career.title}
                </h3>
              </div>
              
              {/* Confidence Badge */}
              <div className="flex-shrink-0 flex items-center space-x-2.5 bg-indigo-50 border-indigo-200 dark:bg-indigo-500/10 border dark:border-indigo-500/30 rounded-xl px-4 py-2 text-center">
                <div>
                  <span className="text-2xs text-slate-500 dark:text-slate-400 block font-semibold uppercase tracking-wide">KECOCOKAN</span>
                  <span className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">{confidence}%</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {career.description}
            </p>

            {/* Why it matches */}
            <div className="mt-6 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950/40 p-4">
              <span className="flex items-center space-x-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                <Sparkles className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                <span>Diagnostik Penyelarasan Jalur</span>
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">
                "{career.matchReason}"
              </p>
            </div>

            {/* Alignment Drivers */}
            <div className="mt-6">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-3">Faktor Pendorong Kecocokan Utama</span>
              <div className="flex flex-wrap gap-2">
                {matchingFactors.map((factor, idx) => (
                  <span 
                    key={idx} 
                    className="flex items-center space-x-1.5 rounded-lg bg-indigo-50 border-indigo-200 dark:bg-indigo-500/5 border dark:border-indigo-500/10 px-3 py-1.5 text-xs text-indigo-700 dark:text-indigo-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
                    <span>{factor}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Actionable Timeline Roadmap */}
          <div className="glass-panel rounded-2xl p-6">
            <div className="flex items-center space-x-2.5 border-b border-slate-200 dark:border-white/5 pb-4 mb-6">
              <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">4 Langkah Peta Jalan Praktis</h4>
            </div>

            <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-slate-200 dark:before:bg-white/5">
              {career.roadmap.map((step) => (
                <div key={step.step} className="flex space-x-4 relative">
                  <div className="flex-shrink-0 h-8.5 w-8.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-500/20 flex items-center justify-center text-xs font-bold text-indigo-600 dark:text-indigo-400 relative z-10 shadow-inner">
                    {step.step}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white mt-1">{step.title}</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Skill Gap & Action (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Skill Gaps Meter Comparison */}
          <div className="glass-panel rounded-2xl p-6">
            <div className="flex items-center space-x-2.5 border-b border-slate-200 dark:border-white/5 pb-4 mb-5">
              <BarChart2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Analisis Keterampilan yang Dibutuhkan</h4>
            </div>
            
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
              Berdasarkan kemampuan inti yang dibutuhkan untuk profesi ini, berikut adalah matriks kompatibilitas Anda:
            </p>

            <div className="space-y-4.5">
              {Object.entries(career.requiredSkills).map(([skillKey, requiredVal]) => {
                const skillLabel = SKILL_LABEL_MAP[skillKey] || skillKey;
                const reqPercent = (requiredVal / 5) * 100;
                
                return (
                  <div key={skillKey} className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-700 dark:text-slate-300">{skillLabel}</span>
                      <span className="text-indigo-600 dark:text-indigo-400">Skor Target: {requiredVal}/5</span>
                    </div>
                    {/* Comparative indicator scale */}
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-800/80 rounded-full relative overflow-hidden">
                      {/* Target threshold indicator */}
                      <div 
                        className="absolute h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" 
                        style={{ width: `${reqPercent}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recommended Skills to Improve */}
          <div className="glass-panel rounded-2xl p-6">
            <div className="flex items-center space-x-2.5 border-b border-slate-200 dark:border-white/5 pb-4 mb-4">
              <Award className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Keterampilan untuk Diperoleh / Dikuasai</h4>
            </div>
            
            <div className="space-y-3">
              {career.recommendedSkills.map((skill, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 dark:border-white/3 dark:bg-white/2 dark:hover:bg-white/4 transition-colors"
                >
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                  <span className={`text-3xs font-semibold px-2 py-0.5 rounded-md border ${
                    skill.level === 'Mahir' 
                      ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                      : skill.level === 'Menengah'
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                      : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                  }`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-3.5 pt-4">
            {!hasSaved ? (
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center justify-center space-x-2.5 w-full rounded-xl bg-indigo-600/90 hover:bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/10 transition-all hover:scale-102 active:scale-98 disabled:opacity-50"
              >
                <Save className="h-4 w-4" />
                <span>{saving ? 'Menyimpan...' : 'Simpan Prediksi ke Riwayat'}</span>
              </button>
            ) : (
              <div className="flex items-center justify-center space-x-2.5 w-full rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-5 py-3 text-sm font-semibold text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                <span>Laporan Disimpan dalam Riwayat</span>
              </div>
            )}

            <button
              onClick={onReset}
              className="flex items-center justify-center space-x-2.5 w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 px-5 py-3 text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-all active:scale-98"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Prediksi Karier Lain</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
