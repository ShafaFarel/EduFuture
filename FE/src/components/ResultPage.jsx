import React, { useState } from 'react';
import { Award, BookOpen, RefreshCw, BarChart2, CheckCircle2, Save } from 'lucide-react';

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
  const { studentName, career, confidence, matchingFactors } = prediction;
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      onSaveHistory(prediction);
      setSaving(false);
    }, 600);
  };

  return (
    <div className="relative py-12 max-w-5xl mx-auto px-4">
      {/* Subtle background orbs */}
      <div className="orb w-80 h-80 top-0 left-1/4" style={{ background: 'var(--orb-lavender)', opacity: 0.3 }} />
      <div className="orb w-80 h-80 bottom-0 right-1/4" style={{ background: 'var(--orb-sky)', opacity: 0.25 }} />

      {/* Header Banner */}
      <div className="mb-10 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-[10px] font-semibold text-green-600 dark:text-green-400">
          <CheckCircle2 className="h-3.5 w-3.5" />
          <span>Sintesis Selesai dengan Sukses</span>
        </div>
        <h2 className="mt-4 font-display font-semibold text-ink leading-tight" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', letterSpacing: '-0.03em' }}>
          Laporan keselarasan jalur pendidikan Anda.
        </h2>
        <p className="mt-2 text-sm text-ink-muted">
          Halo {studentName}, berikut adalah laporan keselarasan khusus Anda yang dipetakan oleh mesin klasifikasi kami.
        </p>
      </div>

      {/* Main Results Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* LEFT COLUMN: Career Detail Card (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Core Career Prediction Info */}
          <div className="bg-canvas border border-hairline rounded-xl p-6 sm:p-8 relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-hairline pb-5 mb-5 gap-4">
              <div>
                <span className="text-[10px] text-ink-subtle font-semibold uppercase tracking-wider block font-mono">{career.category}</span>
                <h3 className="text-xl font-semibold text-ink tracking-tight mt-1">
                  {career.title}
                </h3>
              </div>
              
              {/* Confidence Badge */}
              <div className="flex-shrink-0 flex items-center space-x-2 bg-surface-2 border border-hairline rounded-lg px-3.5 py-1.5 text-center">
                <div>
                  <span className="text-[9px] text-ink-subtle block font-semibold uppercase tracking-wide font-mono">KECOCOKAN</span>
                  <span className="text-lg font-bold text-ink font-mono">{confidence}%</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-ink-muted leading-relaxed">
              {career.description}
            </p>

            {/* Why it matches */}
            <div className="mt-6 rounded-lg border border-hairline bg-surface-1 p-4">
              <span className="flex items-center space-x-2 text-[10px] font-semibold text-ink uppercase tracking-wider mb-2 font-mono">
                <span>Diagnostik Penyelarasan Jalur</span>
              </span>
              <p className="text-xs text-ink-muted leading-relaxed italic">
                "{career.matchReason}"
              </p>
            </div>

            {/* Alignment Drivers */}
            <div className="mt-6">
              <span className="text-[10px] font-semibold text-ink-subtle uppercase tracking-wider block mb-3 font-mono">Faktor Pendorong Kecocokan Utama</span>
              <div className="flex flex-wrap gap-2">
                {matchingFactors.map((factor, idx) => (
                  <span 
                    key={idx} 
                    className="flex items-center space-x-1.5 rounded bg-surface-2 border border-hairline px-2.5 py-1 text-xs text-ink-muted font-medium"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-ink-subtle"></span>
                    <span>{factor}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Actionable Timeline Roadmap */}
          <div className="bg-canvas border border-hairline rounded-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
            <div className="flex items-center space-x-2 border-b border-hairline pb-4 mb-6">
              <BookOpen className="h-4.5 w-4.5 text-ink-muted" />
              <h4 className="text-base font-semibold text-ink">Langkah peta jalan praktis.</h4>
            </div>

            <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-hairline">
              {career.roadmap.map((step) => (
                <div key={step.step} className="flex space-x-4 relative">
                  <div className="flex-shrink-0 h-6.5 w-6.5 rounded bg-ink flex items-center justify-center text-xs font-bold text-canvas relative z-10 font-mono">
                    {step.step}
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-ink mt-0.5">{step.title}</h5>
                    <p className="text-xs text-ink-muted mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Skill Gap & Action (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Skill Gaps Meter Comparison */}
          <div className="bg-canvas border border-hairline rounded-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
            <div className="flex items-center space-x-2 border-b border-hairline pb-4 mb-5">
              <BarChart2 className="h-4.5 w-4.5 text-ink-muted" />
              <h4 className="text-base font-semibold text-ink">Analisis keterampilan.</h4>
            </div>
            
            <p className="text-xs text-ink-muted mb-5 leading-relaxed">
              Berdasarkan kemampuan inti yang dibutuhkan untuk profesi ini, berikut adalah kompatibilitas Anda:
            </p>

            <div className="space-y-4">
              {Object.entries(career.requiredSkills).map(([skillKey, requiredVal]) => {
                const skillLabel = SKILL_LABEL_MAP[skillKey] || skillKey;
                const reqPercent = (requiredVal / 5) * 100;
                
                return (
                  <div key={skillKey} className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-ink-muted">{skillLabel}</span>
                      <span className="text-ink font-semibold font-mono">Skor Target: {requiredVal}/5</span>
                    </div>
                    <div className="h-1.5 w-full bg-surface-2 rounded-full relative overflow-hidden">
                      <div 
                        className="absolute h-full bg-ink rounded-full" 
                        style={{ width: `${reqPercent}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recommended Skills to Improve */}
          <div className="bg-canvas border border-hairline rounded-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
            <div className="flex items-center space-x-2 border-b border-hairline pb-4 mb-4">
              <Award className="h-4.5 w-4.5 text-ink-muted" />
              <h4 className="text-base font-semibold text-ink">Keterampilan rekomendasi.</h4>
            </div>
            
            <div className="space-y-2">
              {career.recommendedSkills.map((skill, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between p-3 rounded-lg border border-hairline bg-surface-1 hover:bg-surface-2 transition-colors"
                >
                  <span className="text-xs font-semibold text-ink-muted">{skill.name}</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded border border-hairline bg-canvas text-ink-muted">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-3 pt-4">
            {!hasSaved ? (
              <button
                onClick={handleSave}
                disabled={saving}
                className="btn-ink flex items-center justify-center space-x-2 w-full py-3 text-sm disabled:opacity-50"
              >
                <Save className="h-4 w-4" />
                <span>{saving ? 'Menyimpan...' : 'Simpan Prediksi ke Riwayat'}</span>
              </button>
            ) : (
              <div className="flex items-center justify-center space-x-2 w-full rounded-full bg-green-500/10 border border-green-500/20 py-3 text-sm font-medium text-green-600 dark:text-green-400">
                <CheckCircle2 className="h-4 w-4" />
                <span>Laporan disimpan dalam riwayat.</span>
              </div>
            )}

            <button
              onClick={onReset}
              className="btn-ink-outline flex items-center justify-center space-x-2 w-full py-3 text-sm"
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
