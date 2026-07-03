import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import PredictionForm from './components/PredictionForm';
import ResultPage from './components/ResultPage';
import Dashboard from './components/Dashboard';
import MentorAI from './components/MentorAI';

import { predictCareer, CAREER_DATABASE } from './utils/aiPredictor';

// Riwayat simulasi bawaan agar Dashboard terisi sejak awal
const INITIAL_MOCK_HISTORY = [
  {
    studentName: 'Alex Mercer',
    gpa: 3.65,
    interests: ['Technology', 'Design'],
    skills: { coding: 4, math: 3, creativity: 5, empathy: 3, communication: 4, analysis: 4, leadership: 3 },
    career: CAREER_DATABASE.find(c => c.id === 'ux-designer') || CAREER_DATABASE[1],
    confidence: 91,
    matchingFactors: ['Minat Anda pada Desain', 'Keahlian kuat Anda dalam KREATIVITAS', 'IPK akademis Anda yang luar biasa'],
    date: '2026-06-28'
  },
  {
    studentName: 'Alex Mercer',
    gpa: 3.8,
    interests: ['Science', 'Technology', 'Healthcare'],
    skills: { coding: 3, math: 4, creativity: 3, empathy: 4, communication: 3, analysis: 5, leadership: 3 },
    career: CAREER_DATABASE.find(c => c.id === 'bioinformatics-scientist') || CAREER_DATABASE[2],
    confidence: 85,
    matchingFactors: ['Minat Anda pada Sains', 'Minat Anda pada Layanan Kesehatan', 'Keahlian kuat Anda dalam ANALISIS DATA', 'IPK akademis Anda yang luar biasa'],
    date: '2026-06-29'
  }
];

function App() {
  const [activeView, setActiveView] = useState('landing');
  const [history, setHistory] = useState(INITIAL_MOCK_HISTORY);
  const [activePrediction, setActivePrediction] = useState(null);
  const [predictionError, setPredictionError] = useState(null);

  // Tangani Pengiriman Form Prediksi
  const handlePredictSubmit = (formData) => {
    console.log('[App] handlePredictSubmit dipanggil dengan data:', formData);
    setPredictionError(null);

    try {
      // Mapping: field 'name' dari form → parameter 'name' di predictCareer
      const input = {
        name: formData.name || formData.studentName || 'Siswa',
        gpa: formData.gpa,
        interests: formData.interests || [],
        skills: formData.skills || {},
        subjects: formData.subjects || [],
      };

      console.log('[App] Memanggil predictCareer dengan input:', input);
      const result = predictCareer(input);
      console.log('[App] Hasil predictCareer:', result);

      // Validasi bahwa result memiliki struktur yang valid
      if (!result || !result.career || !result.career.id) {
        throw new Error('predictCareer mengembalikan data tidak valid: ' + JSON.stringify(result));
      }

      const prediction = {
        ...result,
        // Pastikan studentName ada (predictCareer menyetelnya, tapi kita jaga)
        studentName: result.studentName || input.name,
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0],
      };

      console.log('[App] Prediction final:', prediction);
      setActivePrediction(prediction);

      // Navigasi ke halaman hasil
      console.log('[App] Menavigasi ke halaman result...');
      setActiveView('result');

    } catch (err) {
      console.error('[App] Error di handlePredictSubmit:', err);
      setPredictionError(err.message || 'Terjadi kesalahan tidak terduga.');
      setActiveView('landing');
    }
  };


  // Simpan prediksi ke riwayat dashboard
  const handleSaveHistory = (prediction) => {
    const exists = history.some(h => h.id === prediction.id || 
      (h.career.id === prediction.career.id && h.gpa === prediction.gpa && h.studentName === prediction.studentName)
    );
    if (!exists) {
      setHistory([prediction, ...history]);
    }
  };

  // Pilih prediksi lama dari dashboard
  const handleSelectPrediction = (record) => {
    setActivePrediction(record);
    setActiveView('result');
  };

  const handleClearHistory = () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus seluruh riwayat prediksi Anda?')) {
      setHistory([]);
    }
  };

  const isCurrentPredictionSaved = activePrediction && history.some(
    h => h.id === activePrediction.id || 
    (h.career.id === activePrediction.career.id && h.gpa === activePrediction.gpa)
  );

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-slate-900 dark:text-slate-100 selection:bg-indigo-500/30 selection:text-white">
      {/* Navigasi - Navigasi tetap dalam Bahasa Inggris sesuai instruksi */}
      <Navbar activeView={activeView} setActiveView={setActiveView} />

      {/* Router Tampilan Utama */}
      <main className="flex-grow">
        {/* Error Banner — hanya muncul jika ada predictionError */}
        {predictionError && (
          <div className="mx-auto max-w-3xl px-4 pt-6">
            <div className="flex items-center justify-between rounded-xl border border-rose-500/30 bg-rose-500/10 px-5 py-4 text-sm text-rose-300">
              <span>⚠️ {predictionError}</span>
              <button
                onClick={() => setPredictionError(null)}
                className="ml-4 text-rose-400 hover:text-white transition-colors font-bold text-lg leading-none"
              >×</button>
            </div>
          </div>
        )}

        {activeView === 'landing' && (
          <LandingPage setActiveView={setActiveView} />
        )}

        {activeView === 'form' && (
          <PredictionForm onPredictSubmit={handlePredictSubmit} />
        )}

        {activeView === 'mentor-ai' && (
          <MentorAI />
        )}

        {activeView === 'result' && activePrediction && (
          <ResultPage
            prediction={activePrediction}
            onReset={() => setActiveView('form')}
            onSaveHistory={handleSaveHistory}
            hasSaved={isCurrentPredictionSaved}
          />
        )}

        {/* Fallback: jika result tapi activePrediction null (seharusnya tidak terjadi) */}
        {activeView === 'result' && !activePrediction && (
          <div className="mx-auto max-w-2xl px-4 py-20 text-center">
            <p className="text-slate-400 mb-4">Data prediksi tidak tersedia.</p>
            <button
              onClick={() => setActiveView('form')}
              className="rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
            >
              Kembali ke Formulir
            </button>
          </div>
        )}

        {activeView === 'dashboard' && (
          <Dashboard
            history={history}
            onSelectPrediction={handleSelectPrediction}
            onClearHistory={handleClearHistory}
            setActiveView={setActiveView}
            currentGpa={activePrediction ? activePrediction.gpa : 3.7}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-slate-950/20 py-8 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} EduFuture AI Inc. Dirancang untuk penyelarasan karier masa depan siswa.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Ketentuan Layanan</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Dokumentasi</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
