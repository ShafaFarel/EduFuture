import React, { useState } from 'react';
import { Sparkles, Menu, X, LayoutDashboard, Compass, Home, Award, Bot, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar({ activeView, setActiveView }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { id: 'landing', label: 'Home', icon: Home },
    { id: 'form', label: 'AI Predictor', icon: Compass },
    { id: 'mentor-ai', label: 'AI Mentor', icon: Bot },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  ];
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-brand-bg/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div 
            className="flex cursor-pointer items-center group"
            onClick={() => { setActiveView('landing'); setMobileMenuOpen(false); }}
          >
            <span className="bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-xl font-bold tracking-tight text-transparent">
              EduFuture <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">AI</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id || (item.id === 'form' && activeView === 'result');
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
                  className={`flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600 border-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-400 border dark:border-indigo-500/20'
                      : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white border border-transparent'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* User Profile Mockup */}
          <div className="hidden md:flex items-center space-x-3 border-l border-slate-200 dark:border-white/10 pl-6">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/5 transition-colors mr-2"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <div className="text-right">
              <p className="text-xs font-semibold text-slate-900 dark:text-white">Alex Mercer</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">Premium Student</p>
            </div>
            <div className="relative h-9 w-9 cursor-pointer rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-slate-100 dark:bg-slate-800 p-0.5 transition-transform hover:scale-105" onClick={() => setActiveView('dashboard')}>
              <div className="h-full w-full rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
                AM
              </div>
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white dark:border-brand-bg bg-emerald-500"></span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/5 focus:outline-none"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-white/5 bg-white/95 dark:bg-brand-bg/95 backdrop-blur-lg px-2 pt-2 pb-4 space-y-1 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id || (item.id === 'form' && activeView === 'result');
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveView(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex w-full items-center space-x-3 rounded-lg px-4 py-3 text-base font-medium transition-all ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600 border-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-400 border dark:border-indigo-500/10'
                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
          
          <div className="border-t border-slate-200 dark:border-white/5 mt-4 pt-4 px-4 flex items-center space-x-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
              AM
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Alex Mercer</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Alex.m@edufuture.ai</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
