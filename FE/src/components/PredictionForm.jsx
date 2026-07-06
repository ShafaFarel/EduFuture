import React, { useState, useEffect, useRef } from 'react';
import { AlertCircle, Loader2 } from 'lucide-react';

const LOADING_LOGS = [
  'Menginisialisasi mesin XGBoost prediktif...',
  'Menganalisis nilai akademis — Math, Science, Language, Logic...',
  'Encoding gaya belajar ke feature space...',
  'Mencocokkan profil dengan 13 jurusan di database...',
  'Menghitung probabilitas top-3 skenario karir...',
  'Menyintesis estimasi gaji dari salary regressor...',
];

const SCORE_FIELDS = [
  { id: 'math_score', label: 'Matematika', hint: 'Matematika wajib/peminatan' },
  { id: 'science_score', label: 'Sains / IPA', hint: 'Fisika, Kimia, atau Biologi' },
  { id: 'language_score', label: 'Bahasa', hint: 'Bahasa Indonesia atau Inggris' },
  { id: 'logical_score', label: 'Logika / Komputer', hint: 'TIK atau Logika Matematika' },
];

const LEARNING_STYLES = [
  { id: 'Visual', label: 'Visual' },
  { id: 'Auditory', label: 'Auditory' },
  { id: 'Read/Write', label: 'Read/Write' },
  { id: 'Kinesthetic', label: 'Kinesthetic' },
];

const DRAFT_KEY = 'edufuture_form_draft';

// ── Loading Screen ─────────────────────────────────────────────────────────────
function LoadingScreen({ currentLogIndex }) {
  const pct = Math.round(((currentLogIndex + 1) / LOADING_LOGS.length) * 100);
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <div className="h-10 w-10 rounded-lg bg-ink flex items-center justify-center mx-auto mb-6">
        <Loader2 className="h-5 w-5 text-canvas animate-spin" />
      </div>

      <h2 className="text-lg font-semibold text-ink tracking-tight">
        Memproses analisis AI...
      </h2>
      <p className="mt-1 text-xs text-ink-subtle font-mono">
        Status: {pct}% konvergensi model.
      </p>

      {/* Terminal */}
      <div className="mt-8 bg-canvas border border-hairline rounded-lg p-5 text-left shadow-sm">
        <div className="flex items-center justify-between border-b border-hairline pb-3 mb-4">
          <span className="text-[10px] font-mono text-ink-muted">xgboost_model_engine</span>
          <span className="text-[10px] font-mono text-ink-subtle">stdout</span>
        </div>
        <div className="space-y-1.5 min-h-[120px]">
          {LOADING_LOGS.slice(0, currentLogIndex + 1).map((log, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-ink-subtle select-none font-mono text-xs">•</span>
              <span className={`text-xs font-mono ${
                i === currentLogIndex
                  ? 'text-ink font-semibold'
                  : 'text-ink-subtle'
              }`}>
                {log}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Form ──────────────────────────────────────────────────────────────────
export default function PredictionForm({ onPredictSubmit }) {
  const savedDraft = (() => {
    try { const r = localStorage.getItem(DRAFT_KEY); return r ? JSON.parse(r) : null; }
    catch { return null; }
  })();

  const [loading, setLoading] = useState(false);
  const [logIndex, setLogIndex] = useState(0);
  const [submitError, setSubmitError] = useState(null);
  const [name, setName] = useState(savedDraft?.name || '');
  const [scores, setScores] = useState(savedDraft?.scores || {
    math_score: '', science_score: '', language_score: '', logical_score: ''
  });
  const [learningStyle, setLearningStyle] = useState(savedDraft?.learningStyle || 'Visual');
  const [errors, setErrors] = useState({});

  const callbackRef = useRef(onPredictSubmit);
  useEffect(() => { callbackRef.current = onPredictSubmit; }, [onPredictSubmit]);
  const formDataRef = useRef(null);

  useEffect(() => {
    if (loading) return;
    try { localStorage.setItem(DRAFT_KEY, JSON.stringify({ name, scores, learningStyle })); }
    catch { /* ignore */ }
  }, [name, scores, learningStyle, loading]);

  useEffect(() => {
    if (!loading) return;
    let idx = 0;
    setLogIndex(0);
    const id = setInterval(() => {
      idx += 1;
      if (idx < LOADING_LOGS.length) {
        setLogIndex(idx);
      } else {
        clearInterval(id);
        setLogIndex(LOADING_LOGS.length - 1);
        setTimeout(() => {
          try {
            callbackRef.current(formDataRef.current);
            try { localStorage.removeItem(DRAFT_KEY); } catch { /* ignore */ }
          } catch {
            setSubmitError('Terjadi kesalahan saat memproses prediksi.');
            setLoading(false);
          }
        }, 800);
      }
    }, 650);
    return () => clearInterval(id);
  }, [loading]);

  const handleScoreChange = (id, val) => {
    setScores(prev => ({ ...prev, [id]: val }));
    setErrors(prev => ({ ...prev, [id]: null }));
  };

  const validate = () => {
    const err = {};
    if (!name.trim()) err.name = 'Nama lengkap wajib diisi.';
    SCORE_FIELDS.forEach(f => {
      const v = parseFloat(scores[f.id]);
      if (scores[f.id] === '' || isNaN(v)) err[f.id] = 'Nilai wajib diisi.';
      else if (v < 0 || v > 100) err[f.id] = 'Isi nilai antara 0–100.';
    });
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    formDataRef.current = {
      name: name.trim() || 'Siswa',
      math_score:     parseFloat(scores.math_score)     || 0,
      science_score:  parseFloat(scores.science_score)  || 0,
      language_score: parseFloat(scores.language_score) || 0,
      logical_score:  parseFloat(scores.logical_score)  || 0,
      learningStyle,
    };
    setSubmitError(null);
    setLoading(true);
  };

  const handleReset = () => {
    if (!window.confirm('Hapus isian form dan mulai dari awal?')) return;
    try { localStorage.removeItem(DRAFT_KEY); } catch { /* ignore */ }
    setName('');
    setScores({ math_score: '', science_score: '', language_score: '', logical_score: '' });
    setLearningStyle('Visual');
    setErrors({});
    setSubmitError(null);
  };

  if (loading) {
    if (submitError) {
      return (
        <div className="mx-auto max-w-lg px-4 py-16 text-center">
          <div className="bg-canvas border border-hairline rounded-lg p-8 shadow-sm">
            <AlertCircle className="h-10 w-10 text-red-500 mx-auto mb-4" />
            <h2 className="text-base font-bold text-ink mb-2">Terjadi Kesalahan</h2>
            <p className="text-xs text-ink-subtle mb-6">{submitError}</p>
            <button onClick={() => { setLoading(false); setSubmitError(null); }}
              className="bg-ink hover:bg-ink-muted text-canvas px-5 py-2 rounded text-xs transition-all">
              Coba Lagi
            </button>
          </div>
        </div>
      );
    }
    return <LoadingScreen currentLogIndex={logIndex} />;
  }

  return (
    <div className="relative py-12 max-w-3xl mx-auto px-4">
      
      {/* Page Header */}
      <div className="mb-8 text-left">
        <h1 className="text-xl font-semibold text-ink tracking-[-0.03em] leading-tight">Prediksi karir kamu dengan XGBoost.</h1>
        <p className="text-xs text-ink-muted mt-1 leading-relaxed">
          Sistem inferensi XGBoost untuk memetakan spesialisasi jurusan berdasarkan profil nilai akademis.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div className="bg-canvas border border-hairline rounded-lg overflow-hidden shadow-sm">
          {/* Section 1: Profil & Gaya Belajar */}
          <div className="p-6 space-y-4">
            <div>
              <h2 className="text-sm font-semibold text-ink">Profil siswa.</h2>
              <p className="text-xs text-ink-muted mt-0.5">Metode belajar dan identifikasi siswa.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Input: Nama Lengkap */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-ink-muted">
                  Nama lengkap
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => { setName(e.target.value); setErrors(p => ({ ...p, name: null })); }}
                  placeholder="Ketik nama lengkap..."
                  className="w-full bg-canvas border border-hairline rounded px-3 py-2 text-xs text-ink focus:outline-none focus:border-ink-muted"
                />
                {errors.name && <p className="text-[10px] text-red-500 font-mono">{errors.name}</p>}
              </div>

              {/* Input: Gaya Belajar */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-ink-muted">
                  Gaya belajar
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {LEARNING_STYLES.map(s => {
                    const isSelected = learningStyle === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setLearningStyle(s.id)}
                        className={`rounded px-2.5 py-2 text-xs border text-center transition-all ${
                          isSelected
                            ? 'bg-ink text-canvas border-ink font-semibold'
                            : 'bg-surface-2 text-ink-muted border-hairline hover:border-ink-subtle'
                        }`}
                      >
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-hairline mx-6" />

          {/* Section 2: Nilai Rapor */}
          <div className="p-6 space-y-4">
            <div>
              <h2 className="text-sm font-semibold text-ink">Nilai rapor.</h2>
              <p className="text-xs text-ink-muted mt-0.5">Masukkan skor nilai rata-rata mata pelajaran skala 0–100.</p>
            </div>

            {/* Input Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {SCORE_FIELDS.map(f => {
                const val = scores[f.id];
                const hasError = !!errors[f.id];
                return (
                  <div key={f.id} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-medium text-ink-muted">
                        {f.label}
                      </label>
                      <span className="text-[10px] text-ink-subtle font-mono">{f.hint}</span>
                    </div>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      step="1"
                      required
                      value={val}
                      onChange={e => handleScoreChange(f.id, e.target.value)}
                      placeholder="Contoh: 85"
                      className={`w-full bg-canvas border rounded px-3 py-2 text-xs font-mono focus:outline-none ${
                        hasError 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-hairline focus:border-ink-muted'
                      }`}
                    />
                    {hasError && <p className="text-[10px] text-red-500 font-mono">{errors[f.id]}</p>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Footer */}
          <div className="bg-surface-2 border-t border-hairline px-6 py-4 flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs font-medium text-ink-subtle hover:text-red-500 transition-colors"
            >
              Reset Form
            </button>
            <button
              type="submit"
              className="bg-ink hover:bg-ink-muted text-canvas font-medium text-xs rounded px-4 py-2 transition-all shadow-sm"
            >
              Jalankan analisis AI
            </button>
          </div>
        </div>

      </form>
    </div>
  );
}
