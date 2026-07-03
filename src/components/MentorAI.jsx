import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';

export default function MentorAI() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Halo! Aku AI Mentor EduFuture. Ada pelajaran yang bikin kamu bingung atau pengen diskusi soal karir hari ini?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Auto scroll saat ada pesan baru atau loading
  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e) => {
    if (e) e.preventDefault();
    
    const text = input.trim();
    if (!text) return;

    // Tambahkan pesan user ke state
    const userMessage = { role: 'user', content: text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Dummy API simulation (seolah-olah POST ke /api/chat)
      // Dalam implementasi nyata, ganti dengan:
      // const res = await fetch('/api/chat', { method: 'POST', body: JSON.stringify({ message: text }) });
      // const data = await res.json();
      
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          // Logika balasan dummy sederhana berdasarkan kata kunci
          const lowerText = text.toLowerCase();
          let reply = "Menarik banget! Ceritain lebih lanjut dong biar aku bisa kasih saran yang lebih pas.";
          
          if (lowerText.includes("susah") || lowerText.includes("pusing") || lowerText.includes("gak ngerti")) {
            reply = "Wajar kok kalau ngerasa susah, banyak juga yang ngalamin hal yang sama. Coba pelan-pelan dipahami konsep dasarnya dulu. Bagian mana nih yang paling bikin bingung?";
          } else if (lowerText.includes("karir") || lowerText.includes("kuliah") || lowerText.includes("jurusan")) {
            reply = "Wah, mikirin masa depan itu langkah yang bagus! Menurut profil kamu, bidang teknologi atau desain UI/UX kelihatan menjanjikan. Kamu sendiri lebih suka ngoding atau bikin desain?";
          }
          
          resolve({ reply });
        }, 1500);
      });

      setMessages(prev => [...prev, { role: 'assistant', content: response.reply }]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Terjadi kesalahan, coba lagi ya.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="relative py-8 max-w-4xl mx-auto px-4 flex flex-col h-[calc(100vh-64px)]">
      {/* Header */}
      <div className="mb-6 text-center relative z-10 shrink-0">
        <div className="inline-flex items-center space-x-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs text-indigo-300 mb-3">
          <Bot className="h-4 w-4 text-indigo-400" />
          <span>EduFuture AI Mentor</span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Tanya Mentor AI
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
          Ruang diskusi nyaman tanpa judgement. Tanyain soal pelajaran atau masa depan karirmu.
        </p>
      </div>

      {/* Chat Area */}
      <div className="flex-1 glass-panel rounded-2xl border border-slate-200 dark:border-white/5 shadow-2xl relative z-10 flex flex-col overflow-hidden bg-white/50 dark:bg-brand-bg/50">
        
        {/* Messages Box */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {messages.map((msg, index) => {
            const isUser = msg.role === 'user';
            return (
              <div key={index} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-end space-x-2 max-w-[85%] sm:max-w-[75%] ${isUser ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                  
                  {/* Avatar */}
                  <div className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center shadow-lg ${isUser ? 'bg-slate-300 dark:bg-slate-700' : 'bg-gradient-to-br from-indigo-500 to-purple-600'}`}>
                    {isUser ? <User className="h-4 w-4 text-slate-700 dark:text-white" /> : <Bot className="h-4 w-4 text-white" />}
                  </div>

                  {/* Bubble */}
                  <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    isUser 
                      ? 'bg-[#F62440] text-white rounded-br-none' // User bubble matching the requested primary color
                      : 'bg-white border border-slate-200 text-slate-800 dark:bg-slate-800 dark:border-white/5 dark:text-slate-200 rounded-bl-none' // AI bubble matching card color
                  }`}>
                    {msg.content}
                  </div>

                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-end space-x-2 max-w-[85%] sm:max-w-[75%]">
                <div className="shrink-0 h-8 w-8 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="px-5 py-4 rounded-2xl bg-white border border-slate-200 dark:bg-slate-800 dark:border-white/5 rounded-bl-none flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 ml-2 font-medium">AI sedang mengetik...</span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-white/5 shrink-0">
          <form onSubmit={handleSend} className="relative flex items-end gap-2 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ketik pesan kamu di sini... (Enter untuk kirim)"
                className="w-full bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 dark:bg-slate-950 dark:border-white/10 dark:text-slate-200 dark:placeholder:text-slate-500 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none max-h-32 min-h-[44px]"
                rows={1}
                style={{ 
                  height: 'auto',
                }}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="shrink-0 h-[44px] w-[44px] flex items-center justify-center rounded-xl bg-[#F62440] text-white hover:bg-[#F62440]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5 ml-1" />}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
