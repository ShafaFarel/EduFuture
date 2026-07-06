import React, { useState, useEffect } from 'react';
import { X, Mail, Lock, Loader2, AlertCircle, CheckCircle2, Eye, EyeOff, GraduationCap } from 'lucide-react';
import { api } from '../utils/api';

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setError(null);
      setSuccess(null);
    }
  }, [isOpen, isRegister]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      if (isRegister) {
        await api.register(email, password);
        setSuccess('Akun berhasil dibuat! Silakan masuk.');
        setIsRegister(false);
        setPassword('');
      } else {
        const data = await api.login(email, password);
        onLoginSuccess(data.email);
        onClose();
      }
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  const switchMode = (toRegister) => {
    setIsRegister(toRegister);
    setError(null);
    setSuccess(null);
    setPassword('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0c0a09]/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-[400px] animate-fade-up">

        <div className="bg-canvas border border-hairline relative rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)]">

          <div className="p-7">
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-1.5 rounded-full text-ink-subtle hover:text-ink hover:bg-surface-2 transition-all"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Icon + Header */}
            <div className="text-center mb-7">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface-2 border border-hairline mb-4">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-ink" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="18" r="1.5" fill="currentColor" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                  <circle cx="6" cy="6" r="0.75" className="opacity-40" fill="currentColor" />
                  <circle cx="18" cy="18" r="0.75" className="opacity-40" fill="currentColor" />
                  <path d="M6 18l12-12" />
                  <path d="M12 6h6v6" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-ink tracking-[-0.03em]">
                {isRegister ? 'Daftar sekarang' : 'Selamat datang'}
              </h3>
              <p className="text-xs text-ink-muted mt-1.5 leading-relaxed">
                {isRegister
                  ? 'Buat akun gratis dan mulai prediksi karir berbasis AI.'
                  : 'Masuk untuk mengakses AI Predictor & AI Mentor.'}
              </p>
            </div>

            {/* Alert: Error */}
            {error && (
              <div className="flex items-start gap-2.5 rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3 mb-5 animate-fade-in">
                <AlertCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <p className="text-xs text-red-600 leading-relaxed">{error}</p>
              </div>
            )}

            {/* Alert: Success */}
            {success && (
              <div className="flex items-start gap-2.5 rounded-lg border border-green-500/20 bg-green-500/5 px-4 py-3 mb-5 animate-fade-in">
                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                <p className="text-xs text-green-600 leading-relaxed">{success}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-ink-muted">
                  Alamat email.
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-ink-subtle" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className="w-full bg-canvas border border-hairline rounded px-3 py-2 pl-9 text-xs text-ink focus:outline-none focus:border-ink-muted"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-ink-muted">
                  Kata sandi.
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-ink-subtle" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={6}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Minimal 6 karakter"
                    className="w-full bg-canvas border border-hairline rounded py-2 pl-9 pr-10 text-xs text-ink focus:outline-none focus:border-ink-muted"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-subtle hover:text-ink transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="bg-ink hover:bg-ink-muted text-canvas font-medium text-xs rounded-full w-full flex items-center justify-center gap-2 py-3 mt-4 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    <span>{isRegister ? 'Mendaftarkan...' : 'Masuk...'}</span>
                  </>
                ) : (
                  <span>{isRegister ? 'Buat akun gratis' : 'Masuk ke EduFuture'}</span>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="h-px flex-1 bg-hairline" />
              <span className="text-[10px] text-ink-subtle font-mono uppercase">atau</span>
              <div className="h-px flex-1 bg-hairline" />
            </div>

            {/* Mode switch */}
            <div className="text-center">
              {isRegister ? (
                <p className="text-xs text-ink-muted">
                  Sudah punya akun?{' '}
                  <button
                    type="button"
                    onClick={() => switchMode(false)}
                    className="font-semibold text-ink hover:underline"
                  >
                    Masuk di sini
                  </button>
                </p>
              ) : (
                <p className="text-xs text-ink-muted">
                  Belum punya akun?{' '}
                  <button
                    type="button"
                    onClick={() => switchMode(true)}
                    className="font-semibold text-ink hover:underline"
                  >
                    Daftar gratis
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
