"use client";
import React, { useState } from 'react';
import { Send, Phone, Mail, User, MessageSquare, BookOpen, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-[#070711] text-white flex items-center justify-center p-4 sm:p-6 lg:p-8 selection:bg-violet-500/30 selection:text-violet-200">
      <div className="max-w-4xl w-full">
        
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 mb-6 text-slate-400 text-sm hover:text-violet-400 transition-colors">
          <ArrowLeft size={16} /> Back to home
        </Link>

        <div className="bg-gradient-to-br from-[#121222]/90 via-[#0a0a14]/90 to-[#070711]/90 rounded-3xl border border-white/[0.08] shadow-2xl overflow-hidden flex flex-col md:flex-row backdrop-blur-md">
          
          {/* Sidebar Info Section */}
          <div className="bg-gradient-to-br from-violet-900/40 via-indigo-950/40 to-transparent md:w-5/12 p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/[0.08]">
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] text-violet-400 uppercase mb-2">
                REACH OUT
              </p>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-3 text-white">Get in touch</h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3.5 text-slate-300 text-sm">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                    <Phone size={18} />
                  </div>
                  <span className="font-medium">+91 9515245408</span>
                </div>
                <div className="flex items-center gap-3.5 text-slate-300 text-sm">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <span className="font-medium">ankit@example.com</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] text-xs text-slate-500">
              Shakib.dev · Available for opportunities & collaborations
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="md:w-7/12 p-6 sm:p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 text-slate-500" size={16} />
                  <input 
                    required
                    type="text"
                    placeholder="Ankit Tiwari"
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-slate-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 text-slate-500" size={16} />
                  <input 
                    required
                    type="email"
                    placeholder="ankit@example.com"
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-slate-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3 text-slate-500" size={16} />
                  <input 
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-slate-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Subject</label>
                <div className="relative">
                  <BookOpen className="absolute left-3.5 top-3 text-slate-500" size={16} />
                  <input 
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-slate-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Message</label>
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-3 text-slate-500" size={16} />
                <textarea 
                  required
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-slate-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
            </div>

            <button 
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 shadow-lg shadow-violet-950/30 cursor-pointer text-sm"
            >
              {status === 'loading' ? 'Sending...' : (
                <>Send Message <Send size={16} /></>
              )}
            </button>

            {status === 'success' && (
              <p className="text-emerald-400 text-center text-xs sm:text-sm font-medium bg-emerald-500/10 border border-emerald-500/20 py-2.5 rounded-xl">
                Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="text-rose-400 text-center text-xs sm:text-sm font-medium bg-rose-500/10 border border-rose-500/20 py-2.5 rounded-xl">
                Something went wrong. Try again.
              </p>
            )}
          </form>

        </div>
      </div>
    </main>
  );
}